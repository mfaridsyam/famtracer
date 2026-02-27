const LS_KEY = 'familytrace_profile';
const COLORS = ['#0F3775','#289DF2','#10b981','#f59e0b','#e8394a','#8b5cf6','#ec4899','#14b8a6'];
const OFFLINE_THRESHOLD = 60000;

const state = {
  name:          '',
  role:          '',
  room:          '',
  myId:          '',
  myLat:         null,
  myLng:         null,
  myBattery:     null,
  myAccuracy:    null,
  myLocationName: null,
  members:       {},
  myMarker:      null,
  memberMarkers: {},
  memberLocationNames: {},
  map:           null,
  watchId:       null,
  shareActive:   true,
  fbReady:       false,
  wakeLock:      null,
  deferredPrompt: null
};

function hashStr(s) {
  let h = 0;
  for (let i = 0; i < s.length; i++) h = (Math.imul(31, h) + s.charCodeAt(i)) | 0;
  return h;
}

const getColor = id => COLORS[Math.abs(hashStr(id)) % COLORS.length];

function timeAgo(ts) {
  if (!ts) return 'Tidak diketahui';
  const diff = Date.now() - ts;
  const mins = Math.floor(diff / 60000);
  const hrs  = Math.floor(diff / 3600000);
  if (diff < 60000)    return 'Baru saja';
  if (diff < 3600000)  return `${mins} menit lalu`;
  if (diff < 86400000) return `${hrs} jam lalu`;
  return `${Math.floor(diff / 86400000)} hari lalu`;
}

function isOnline(ts) {
  return ts && (Date.now() - ts) < OFFLINE_THRESHOLD;
}

function saveProfile() {
  localStorage.setItem(LS_KEY, JSON.stringify({
    name: state.name,
    role: state.role,
    room: state.room,
    myId: state.myId
  }));
}

function loadProfile() {
  try {
    const raw = localStorage.getItem(LS_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch { return null; }
}

function clearProfile() {
  localStorage.removeItem(LS_KEY);
}

async function reverseGeocode(lat, lng) {
  try {
    const res = await fetch(
      `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lng}&format=json&addressdetails=1`,
      { headers: { 'Accept-Language': 'id' } }
    );
    if (!res.ok) return null;
    const data = await res.json();
    if (!data || !data.address) return null;
    const a = data.address;
    const name =
      a.village || a.suburb || a.quarter || a.neighbourhood ||
      a.hamlet || a.residential || a.road ||
      a.county || a.city || a.town || null;
    return name || null;
  } catch {
    return null;
  }
}

async function requestWakeLock() {
  if ('wakeLock' in navigator) {
    try {
      state.wakeLock = await navigator.wakeLock.request('screen');
      state.wakeLock.addEventListener('release', () => {
        if (state.shareActive) requestWakeLock();
      });
    } catch (e) {}
  }
}

document.addEventListener('visibilitychange', () => {
  if (document.visibilityState === 'visible' && state.shareActive) {
    requestWakeLock();
    if (state.fbReady && state.myLat) pushMyLocation();
  }
});

window.addEventListener('beforeinstallprompt', e => {
  e.preventDefault();
  state.deferredPrompt = e;
});

window.addEventListener('appinstalled', () => {
  state.deferredPrompt = null;
  toast('FamilyTrace berhasil diinstall! 🎉', 'success');
});

window.addEventListener('firebaseReady', () => {
  state.fbReady = true;
});

window.addEventListener('load', () => {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js').catch(() => {});
  }

  const urlRoom = new URLSearchParams(location.search).get('room');

  setTimeout(() => {
    document.getElementById('splash').classList.add('hide');
    setTimeout(() => {
      document.getElementById('splash').style.display = 'none';
      const saved = loadProfile();
      if (saved) {
        state.name = saved.name;
        state.role = saved.role;
        state.room = saved.room;
        state.myId = saved.myId;
        resumeApp();
      } else {
        if (urlRoom) {
          const inp = document.getElementById('inputRoom');
          if (inp) inp.value = urlRoom.toUpperCase();
        }
        document.getElementById('permission-screen').classList.add('show');
      }
    }, 600);
  }, 2200);
});

function resumeApp() {
  if (!navigator.geolocation) {
    toast('Browser tidak mendukung geolocation', 'error');
    clearProfile();
    document.getElementById('permission-screen').classList.add('show');
    return;
  }
  navigator.geolocation.getCurrentPosition(
    pos => {
      state.myLat      = pos.coords.latitude;
      state.myLng      = pos.coords.longitude;
      state.myAccuracy = Math.round(pos.coords.accuracy);
      launchApp();
    },
    () => {
      clearProfile();
      document.getElementById('permission-screen').classList.add('show');
    },
    { enableHighAccuracy: true, timeout: 10000 }
  );
}

function requestLocation() {
  if (!navigator.geolocation) {
    toast('Browser tidak mendukung geolocation', 'error');
    return;
  }
  navigator.geolocation.getCurrentPosition(
    pos => {
      state.myLat      = pos.coords.latitude;
      state.myLng      = pos.coords.longitude;
      state.myAccuracy = Math.round(pos.coords.accuracy);
      document.getElementById('permission-screen').classList.remove('show');

      const urlRoom = new URLSearchParams(location.search).get('room');
      if (urlRoom) {
        document.getElementById('inputRoom').value = urlRoom.toUpperCase();
      } else {
        generateRoom();
      }

      document.getElementById('setup-screen').classList.add('show');
    },
    () => showDenied(),
    { enableHighAccuracy: true, timeout: 10000 }
  );
}

function showDenied() {
  document.getElementById('permission-screen').classList.remove('show');
  document.getElementById('denied-screen').classList.add('show');
}

function retryPermission() {
  document.getElementById('denied-screen').classList.remove('show');
  document.getElementById('permission-screen').classList.add('show');
}

function generateRoom() {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  let code = '';
  for (let i = 0; i < 6; i++) code += chars[Math.floor(Math.random() * chars.length)];
  document.getElementById('inputRoom').value = code;
}

document.getElementById('inputRoom').addEventListener('input', function () {
  this.value = this.value.toUpperCase().replace(/[^A-Z0-9]/g, '');
});

async function startApp() {
  const name = document.getElementById('inputName').value.trim();
  const role = document.getElementById('inputRole').value;
  const room = document.getElementById('inputRoom').value.trim();

  if (!name) { toast('Masukkan nama kamu dulu!', 'error'); return; }
  if (room.length < 4) { toast('Kode room minimal 4 karakter', 'error'); return; }

  state.name = name;
  state.role = role;
  state.room = room;
  state.myId = name.toLowerCase().replace(/\s+/g, '_') + '_' + Date.now().toString(36);

  saveProfile();
  document.getElementById('setup-screen').classList.remove('show');
  launchApp();
}

function launchApp() {
  document.getElementById('app').classList.add('show');
  initMap();
  initMyCard();
  startTracking();
  getBattery();
  requestWakeLock();

  document.getElementById('topbarRoomCode').textContent = state.room;
  document.getElementById('modalRoomCode').textContent  = state.room;

  toast(`Selamat datang, ${state.name}!`, 'success');

  if (state.fbReady) initFirebaseSync();
  else window.addEventListener('firebaseReady', initFirebaseSync, { once: true });

  setInterval(renderMembers, 30000);
  setInterval(() => {
    if (state.shareActive && state.fbReady && state.myLat) pushMyLocation();
  }, 30000);
}

function changeProfile() {
  document.getElementById('confirmLeaveModal').classList.add('show');
}

function closeConfirmLeave() {
  document.getElementById('confirmLeaveModal').classList.remove('show');
}

document.getElementById('confirmLeaveModal')?.addEventListener('click', function(e) {
  if (e.target === this) closeConfirmLeave();
});

function doLeaveRoom() {
  closeConfirmLeave();

  if (state.fbReady) {
    const { db, ref, remove } = window._FB;
    remove(ref(db, `rooms/${state.room}/members/${state.myId}`));
  }

  if (state.watchId !== null) {
    navigator.geolocation.clearWatch(state.watchId);
    state.watchId = null;
  }

  if (state.wakeLock) {
    state.wakeLock.release().catch(() => {});
    state.wakeLock = null;
  }

  clearProfile();
  location.reload();
}

function initFirebaseSync() {
  const { db, ref, onValue } = window._FB;

  pushMyLocation();

  onValue(ref(db, `rooms/${state.room}/members`), snapshot => {
    const data = snapshot.val() || {};

    Object.keys(state.memberMarkers).forEach(id => {
      if (id !== state.myId && !data[id]) {
        state.map.removeLayer(state.memberMarkers[id]);
        delete state.memberMarkers[id];
        delete state.members[id];
        delete state.memberLocationNames[id];
      }
    });

    Object.entries(data).forEach(([id, m]) => {
      if (id === state.myId) return;
      state.members[id] = m;
      placeMemberMarker(id, m);
      const cached = state.memberLocationNames[id];
      if (!cached || cached.lat !== m.lat || cached.lng !== m.lng) {
        if (m.lat && m.lng) {
          reverseGeocode(m.lat, m.lng).then(locName => {
            state.memberLocationNames[id] = { lat: m.lat, lng: m.lng, name: locName };
            if (state.memberMarkers[id]) {
              const mem = state.members[id];
              const online = isOnline(mem.ts);
              state.memberMarkers[id].getPopup()?.setContent(
                buildPopup(mem.name, mem.role, mem.lat, mem.lng, mem.battery, mem.accuracy, false, online, mem.ts, locName)
              );
            }
            renderMembers();
          });
        }
      }
    });

    renderMembers();
  });
}

function pushMyLocation() {
  if (!state.fbReady || !state.shareActive) return;
  const { db, ref, set } = window._FB;
  set(ref(db, `rooms/${state.room}/members/${state.myId}`), {
    name:     state.name,
    role:     state.role,
    lat:      state.myLat,
    lng:      state.myLng,
    battery:  state.myBattery,
    accuracy: state.myAccuracy,
    online:   true,
    ts:       Date.now()
  });
}

function initMap() {
  state.map = L.map('map', { zoomControl: false, attributionControl: true });

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap', maxZoom: 19
  }).addTo(state.map);

  if (state.myLat && state.myLng) {
    state.map.setView([state.myLat, state.myLng], 16);
    placeMyMarker(state.myLat, state.myLng);
  }
}

function createMarkerIcon(initial, color, offline) {
  const opacity = offline ? '0.45' : '1';
  const badge   = offline
    ? `<div class="marker-offline-badge"><i class="fas fa-moon"></i></div>`
    : `<div class="marker-pulse" style="background:${color}"></div>`;
  return L.divIcon({
    className: '',
    html: `<div class="custom-marker" style="opacity:${opacity}">
      <div class="marker-pin" style="background:${color}"><span>${initial}</span></div>
      ${badge}
    </div>`,
    iconSize: [40, 52], iconAnchor: [20, 50], popupAnchor: [0, -52]
  });
}

function placeMyMarker(lat, lng) {
  const color   = getColor(state.myId || 'me');
  const initial = (state.name || '?')[0].toUpperCase();
  const icon    = createMarkerIcon(initial, color, false);
  const locName = state.myLocationName;

  if (state.myMarker) {
    state.myMarker.setLatLng([lat, lng]);
  } else {
    state.myMarker = L.marker([lat, lng], { icon })
      .addTo(state.map)
      .bindPopup(buildPopup(state.name, state.role, lat, lng, state.myBattery, state.myAccuracy, true, true, null, locName));
  }
  state.myMarker.getPopup()?.setContent(
    buildPopup(state.name, state.role, lat, lng, state.myBattery, state.myAccuracy, true, true, null, locName)
  );
}

function buildPopup(name, role, lat, lng, battery, accuracy, isMe, online, ts, locationName) {
  const locStr  = locationName ? `<div class="popup-location"><i class="fas fa-map-marker-alt"></i> ${locationName}</div>` : '';
  const accStr  = accuracy !== null && accuracy !== undefined ? `${accuracy}m` : '—';
  const accColor = accuracy !== null && accuracy !== undefined
    ? (accuracy <= 20 ? '#10b981' : accuracy <= 100 ? '#f59e0b' : '#e8394a')
    : '#6b7fa3';
  const statusLine = !isMe
    ? `<div style="font-size:.75rem;margin-top:.4rem;color:${online ? '#10b981' : '#6b7fa3'}">
        ${online ? '🟢 Online' : `🔴 Terakhir terlihat: ${timeAgo(ts)}`}
       </div>`
    : '';
  return `<div>
    <div class="popup-name">${isMe ? '📍 ' : ''}${name}${isMe ? ' (Saya)' : ''}</div>
    <div class="popup-coords">${lat.toFixed(5)}, ${lng.toFixed(5)}</div>
    ${locStr}
    <div style="font-size:.8rem;color:${accColor};margin-top:.3rem;display:flex;align-items:center;gap:.3rem">
      <i class="fas fa-satellite-dish" style="font-size:.7rem"></i> Akurasi: ${accStr}
    </div>
    ${role ? `<div style="font-size:.75rem;color:#6b7fa3;margin-top:.3rem">${role}</div>` : ''}
    ${statusLine}
  </div>`;
}

function placeMemberMarker(id, member) {
  if (!member.lat) return;
  const color   = getColor(id);
  const initial = (member.name || '?')[0].toUpperCase();
  const online  = isOnline(member.ts);
  const icon    = createMarkerIcon(initial, color, !online);
  const locName = state.memberLocationNames[id]?.name || null;

  if (state.memberMarkers[id]) {
    state.memberMarkers[id].setLatLng([member.lat, member.lng]);
    state.memberMarkers[id].setIcon(icon);
    state.memberMarkers[id].getPopup()?.setContent(
      buildPopup(member.name, member.role, member.lat, member.lng, member.battery, member.accuracy, false, online, member.ts, locName)
    );
  } else {
    state.memberMarkers[id] = L.marker([member.lat, member.lng], { icon })
      .addTo(state.map)
      .bindPopup(buildPopup(member.name, member.role, member.lat, member.lng, member.battery, member.accuracy, false, online, member.ts, locName));
  }
}

function centerMyLocation() {
  if (state.myLat && state.myLng)
    state.map.flyTo([state.myLat, state.myLng], 17, { duration: 1 });
}

function fitAll() {
  const pts = [];
  if (state.myLat) pts.push([state.myLat, state.myLng]);
  Object.values(state.members).forEach(m => { if (m.lat) pts.push([m.lat, m.lng]); });
  if (pts.length > 0)
    state.map.flyToBounds(L.latLngBounds(pts).pad(0.2), { duration: 1 });
}

function startTracking() {
  state.watchId = navigator.geolocation.watchPosition(
    pos => {
      const newLat = pos.coords.latitude;
      const newLng = pos.coords.longitude;
      const prevLat = state.myLat;
      const prevLng = state.myLng;

      state.myLat      = newLat;
      state.myLng      = newLng;
      state.myAccuracy = Math.round(pos.coords.accuracy);

      const moved = !prevLat || Math.abs(newLat - prevLat) > 0.0005 || Math.abs(newLng - prevLng) > 0.0005;
      if (moved || !state.myLocationName) {
        reverseGeocode(newLat, newLng).then(locName => {
          state.myLocationName = locName;
          updateMyCard();
          placeMyMarker(state.myLat, state.myLng);
        });
      }

      updateMyCard();
      placeMyMarker(state.myLat, state.myLng);
      updateLastUpdate();
      pushMyLocation();
    },
    null,
    { enableHighAccuracy: true, maximumAge: 5000, timeout: 15000 }
  );
}

async function getBattery() {
  try {
    if ('getBattery' in navigator) {
      const bat = await navigator.getBattery();
      state.myBattery = Math.round(bat.level * 100);
      updateMyCard();
      pushMyLocation();
      bat.addEventListener('levelchange', () => {
        state.myBattery = Math.round(bat.level * 100);
        updateMyCard();
        pushMyLocation();
      });
      bat.addEventListener('chargingchange', () => {
        state.myBattery = Math.round(bat.level * 100);
        updateMyCard();
        pushMyLocation();
      });
    } else {
      state.myBattery = null;
      updateMyCard();
    }
  } catch (e) {
    state.myBattery = null;
    updateMyCard();
  }
}

function stopSharing() {
  if (state.watchId !== null) {
    navigator.geolocation.clearWatch(state.watchId);
    state.watchId = null;
  }
  state.shareActive = false;

  if (state.wakeLock) {
    state.wakeLock.release().catch(() => {});
    state.wakeLock = null;
  }

  if (state.fbReady) {
    const { db, ref, update } = window._FB;
    update(ref(db, `rooms/${state.room}/members/${state.myId}`), { online: false });
  }

  if (state.myMarker) {
    state.map.removeLayer(state.myMarker);
    state.myMarker = null;
  }

  toast('Kamu berhenti berbagi lokasi', 'info');
  const btn = document.getElementById('stopBtn');
  btn.innerHTML = '<i class="fas fa-check"></i> Berbagi Dihentikan';
  btn.disabled  = true;
}

function initMyCard() {
  document.getElementById('myCardName').textContent = state.name;
  document.getElementById('myCardRole').textContent = state.role;
  document.getElementById('myAvatar').textContent   = state.name[0].toUpperCase();
}

function updateMyCard() {
  if (state.myLat) {
    document.getElementById('myCoords').innerHTML =
      `<i class="fas fa-location-dot"></i> ${state.myLat.toFixed(5)}, ${state.myLng.toFixed(5)}`;
  }

  const locEl = document.getElementById('myLocationName');
  if (locEl) {
    if (state.myLocationName) {
      locEl.innerHTML = `<i class="fas fa-map-marker-alt"></i> ${state.myLocationName}`;
      locEl.style.display = 'flex';
    } else {
      locEl.style.display = 'none';
    }
  }

  if (state.myAccuracy !== null)
    document.getElementById('myAccuracy').textContent = state.myAccuracy + 'm';

  document.getElementById('myUpdate').textContent =
    new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' });
}

function updateLastUpdate() {
  document.getElementById('lastUpdate').textContent =
    new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
}

function renderMembers() {
  const list    = document.getElementById('membersList');
  const noMem   = document.getElementById('noMembers');
  const entries = Object.entries(state.members);

  list.querySelectorAll('.member-item').forEach(el => el.remove());

  if (entries.length === 0) {
    noMem.style.display = 'block';
    document.getElementById('onlineCount').textContent = '1';
    return;
  }

  noMem.style.display = 'none';

  const onlineMembers  = entries.filter(([, m]) => isOnline(m.ts));
  const offlineMembers = entries.filter(([, m]) => !isOnline(m.ts));

  document.getElementById('onlineCount').textContent = onlineMembers.length + 1;

  [...onlineMembers, ...offlineMembers].forEach(([id, m]) => {
    const color    = getColor(id);
    const initial  = (m.name || '?')[0].toUpperCase();
    const online   = isOnline(m.ts);
    const acc      = m.accuracy;
    const locName  = state.memberLocationNames[id]?.name || null;
    const accClass = (acc !== null && acc !== undefined) ? (acc <= 20 ? 'acc-good' : acc <= 100 ? 'acc-mid' : 'acc-low') : 'acc-mid';
    const accText  = (acc !== null && acc !== undefined) ? acc + 'm' : '—';

    const div = document.createElement('div');
    div.className = `member-item${online ? '' : ' member-offline'}`;
    div.setAttribute('data-id', id);
    div.innerHTML = `
      <div class="member-avatar" style="background:${color}1a;color:${color};border:2px solid ${color}40;${online ? '' : 'opacity:.45'}">
        ${initial}
        <div class="member-online-dot${online ? '' : ' offline'}"></div>
      </div>
      <div class="member-info">
        <div class="member-name" style="${online ? '' : 'color:var(--muted)'}">
          ${m.name}${online ? '' : ' <span class="offline-tag">Offline</span>'}
        </div>
        <div class="member-sub">
          ${online
            ? `${m.role} · ${m.lat ? m.lat.toFixed(4) + ', ' + m.lng.toFixed(4) : 'Memuat...'}`
            : `<i class="fas fa-clock" style="font-size:.7rem"></i> Terakhir: ${timeAgo(m.ts)}`}
        </div>
        ${online && locName ? `<div class="member-location-name"><i class="fas fa-map-marker-alt"></i> ${locName}</div>` : ''}
        ${online ? `<div class="member-accuracy ${accClass}">
          <i class="fas fa-satellite-dish"></i> Akurasi ${accText}
        </div>` : ''}
      </div>
      <div class="member-meta">
        <button class="locate-btn" onclick="locateMember('${id}')">
          <i class="fas fa-location-dot"></i>
        </button>
      </div>`;
    list.appendChild(div);
  });
}

function locateMember(id) {
  const m = state.members[id];
  if (m && m.lat) {
    state.map.flyTo([m.lat, m.lng], 16, { duration: 1 });
    state.memberMarkers[id]?.openPopup();
    if (window.innerWidth < 768) closeSidebar();
  }
}

function openModal()  { document.getElementById('shareModal').classList.add('show'); }
function closeModal() { document.getElementById('shareModal').classList.remove('show'); }

function openInstallModal() {
  if (state.deferredPrompt) {
    state.deferredPrompt.prompt();
    state.deferredPrompt.userChoice.then(result => {
      if (result.outcome === 'accepted') {
        toast('Menginstall FamilyTrace...', 'info');
      }
      state.deferredPrompt = null;
    });
    return;
  }
  document.getElementById('installModal').classList.add('show');
}

function closeInstallModal() {
  document.getElementById('installModal').classList.remove('show');
}

document.getElementById('shareModal').addEventListener('click', function (e) {
  if (e.target === this) closeModal();
});

document.getElementById('installModal').addEventListener('click', function (e) {
  if (e.target === this) closeInstallModal();
});

function copyCode() {
  navigator.clipboard.writeText(state.room)
    .then(() => toast('Kode room disalin! 📋', 'success'));
}

function copyLink() {
  const link = `${location.origin}${location.pathname}?room=${state.room}`;
  navigator.clipboard.writeText(link).then(() => toast('Link disalin! 🔗', 'success'));
}

function shareWA() {
  const msg = encodeURIComponent(
    `Hei! Bergabunglah ke FamilyTrace untuk saling melihat lokasi kita.\n\nKode Room: *${state.room}*\n\nBuka: ${location.origin}${location.pathname}?room=${state.room}`
  );
  window.open(`https://wa.me/?text=${msg}`, '_blank');
}

function shareTelegram() {
  const url = encodeURIComponent(`${location.origin}${location.pathname}?room=${state.room}`);
  const msg = encodeURIComponent(`Bergabung ke FamilyTrace - Kode Room: ${state.room}`);
  window.open(`https://t.me/share/url?url=${url}&text=${msg}`, '_blank');
}

function toast(msg, type = '') {
  const c  = document.getElementById('toastContainer');
  const el = document.createElement('div');
  el.className = `toast ${type}`;
  const icons = { success: 'fas fa-check-circle', error: 'fas fa-circle-xmark', info: 'fas fa-circle-info' };
  el.innerHTML = `<i class="${icons[type] || 'fas fa-circle-info'}"></i> ${msg}`;
  c.appendChild(el);
  setTimeout(() => {
    el.classList.add('hide');
    setTimeout(() => el.remove(), 300);
  }, 3200);
}

function toggleSidebar() {
  document.getElementById('sidebar').classList.toggle('mob-open');
}

function closeSidebar() {
  document.getElementById('sidebar').classList.remove('mob-open');
}

document.addEventListener('click', e => {
  if (window.innerWidth < 768) {
    const sb = document.getElementById('sidebar');
    const tg = document.getElementById('mobToggle');
    if (sb && sb.classList.contains('mob-open') &&
        !sb.contains(e.target) && !tg.contains(e.target)) {
      sb.classList.remove('mob-open');
    }
  }
});