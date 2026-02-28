// ============================================================
// TRANSLATIONS
// ============================================================
const TRANSLATIONS = {
  id: {
    splashSub: 'Berbagi lokasi bersama siapa saja',
    permTitle: 'Izinkan Akses Lokasi',
    permDesc: 'TraceLink perlu mengakses lokasi perangkat kamu agar anggota grup bisa melihat posisimu secara real-time.',
    permNoticeLabel: 'Keamanan & Privasi',
    permNoticeBody: 'Lokasi hanya dibagikan kepada anggota yang bergabung di room yang sama. Kamu dapat berhenti berbagi kapan saja.',
    btnAllow: 'Izinkan Lokasi',
    btnDeny: 'Tidak Sekarang',
    deniedTitle: 'Lokasi Diperlukan',
    deniedDesc: 'Tanpa izin lokasi, TraceLink tidak dapat bekerja. Izin lokasi dibutuhkan agar anggota grupmu bisa melihat posisimu secara real-time.',
    btnRetry: 'Coba Lagi',
    stepBadge: 'LANGKAH TERAKHIR',
    setupTitle: 'Siapkan Profilmu',
    setupDesc: 'Isi informasi di bawah, lalu bergabung atau buat room baru.',
    labelName: 'Nama Kamu',
    placeholderName: 'contoh: Budi, Andi, Sarah...',
    labelRole: 'Peranmu dalam Grup',
    labelRoom: 'Kode Room',
    placeholderRoom: 'Ketik atau klik Acak...',
    roomHint: 'Bagikan kode ini ke anggota lain agar bisa bergabung.',
    btnRandom: 'Acak',
    btnStart: 'Mulai Berbagi Lokasi',
    confirmLeaveTitle: 'Keluar dari Room?',
    confirmLeaveDesc: 'Data lokasimu akan <strong>dihapus</strong> dari room ini dan anggota lain tidak akan bisa melihat posisimu lagi.',
    btnCancel: 'Batal',
    btnLeave: 'Ya, Keluar',
    shareTitle: 'Undang Anggota',
    shareDesc: 'Bagikan kode room ini agar orang lain bisa bergabung dan saling melihat lokasi.',
    btnCopyLink: 'Salin Link',
    btnClose: 'Tutup',
    installTitle: 'Install Aplikasi',
    installDesc: 'Install TraceLink ke layar utama HP kamu agar bisa dibuka seperti aplikasi biasa.',
    androidSteps: [
      'Buka website ini di <strong>Chrome</strong>',
      'Tap menu <strong>⋮</strong> (titik tiga) di kanan atas',
      'Pilih <strong>"Tambahkan ke layar utama"</strong>',
      'Tap <strong>"Tambahkan"</strong> untuk konfirmasi'
    ],
    iosSteps: [
      'Buka website ini di <strong>Safari</strong>',
      'Tap tombol <strong>Share</strong> ↑ di bawah layar',
      'Pilih <strong>"Add to Home Screen"</strong>',
      'Tap <strong>"Add"</strong> di pojok kanan atas'
    ],
    sidebarTitle: 'Anggota',
    onlineLabel: 'online',
    badgeMe: 'Saya',
    labelCoords: 'Koordinat',
    labelLocation: 'Lokasi',
    labelAccuracy: 'Akurasi',
    labelUpdate: 'Update',
    loading: 'Memuat...',
    otherMembers: 'ANGGOTA LAIN',
    noMembersText: 'Belum ada anggota lain.\nUndang orang dengan kode room!',
    btnInvite: 'Undang Anggota',
    btnStop: 'Stop Berbagi Lokasi',
    mapStatus: 'Lokasi diperbarui otomatis',
    layerTitle: 'Tampilan Peta',
    layerStreet: 'Street',
    layerSatellite: 'Satelit',
    ppOnline: 'Online',
    ppMe: 'Saya',
    ppCoords: 'Koordinat',
    ppLocation: 'Lokasi',
    ppAccuracy: 'Akurasi',
    ppAccGood: 'Sangat Baik',
    ppAccMid: 'Baik',
    ppAccLow: 'Rendah',
    mcOnline: 'Online',
    mcOffline: 'Offline',
    mcCoords: 'Koordinat',
    mcLocation: 'Lokasi',
    mcAccuracy: 'Akurasi',
    mcLast: 'Terakhir',
    stopDone: 'Berbagi Dihentikan',
    toastWelcome: (name) => `Selamat datang, ${name}!`,
    toastInstalling: 'Menginstall TraceLink...',
    toastInstalled: 'TraceLink berhasil diinstall! 🎉',
    toastCopied: 'Link disalin! 🔗',
    toastStopped: 'Kamu berhenti berbagi lokasi',
    errName: 'Masukkan nama kamu dulu!',
    errNameChar: 'Nama hanya boleh menggunakan huruf!',
    errRoom6: 'Kode room harus tepat 6 karakter!',
    errRoomChar: 'Kode room hanya boleh huruf dan angka!',
    errNoGeo: 'Browser tidak mendukung geolocation',
    timeUnknown: 'Tidak diketahui',
    timeJustNow: 'Baru saja',
    timeMinAgo: (m) => `${m} menit lalu`,
    timeHourAgo: (h) => `${h} jam lalu`,
    timeDayAgo: (d) => `${d} hari lalu`,
    waMsg: (room, url) => `Hei! Bergabunglah ke TraceLink untuk saling melihat lokasi kita.\n\nKode Room: *${room}*\n\nBuka: ${url}`,
    teleMsg: (room) => `Bergabung ke TraceLink - Kode Room: ${room}`,
    roles: [
      { value: 'Anggota',      label: '👤 Anggota' },
      { value: 'Teman',        label: '🤝 Teman' },
      { value: 'Pasangan',     label: '💑 Pasangan' },
      { value: 'Keluarga',     label: '👨‍👩‍👧 Keluarga' },
      { value: 'Rekan Kerja',  label: '💼 Rekan Kerja' },
    ]
  },
  en: {
    splashSub: 'Share your location with anyone',
    permTitle: 'Allow Location Access',
    permDesc: 'TraceLink needs to access your device location so group members can see your position in real-time.',
    permNoticeLabel: 'Security & Privacy',
    permNoticeBody: 'Location is only shared with members who join the same room. You can stop sharing at any time.',
    btnAllow: 'Allow Location',
    btnDeny: 'Not Now',
    deniedTitle: 'Location Required',
    deniedDesc: 'Without location permission, TraceLink cannot work. Location access is needed so group members can see your position in real-time.',
    btnRetry: 'Try Again',
    stepBadge: 'LAST STEP',
    setupTitle: 'Set Up Your Profile',
    setupDesc: 'Fill in the info below, then join or create a new room.',
    labelName: 'Your Name',
    placeholderName: 'e.g. Alex, Jamie, Sam...',
    labelRole: 'Your Role in the Group',
    labelRoom: 'Room Code',
    placeholderRoom: 'Type or click Random...',
    roomHint: 'Share this code with others so they can join.',
    btnRandom: 'Random',
    btnStart: 'Start Sharing Location',
    confirmLeaveTitle: 'Leave Room?',
    confirmLeaveDesc: 'Your location data will be <strong>deleted</strong> from this room and other members will no longer be able to see your position.',
    btnCancel: 'Cancel',
    btnLeave: 'Yes, Leave',
    shareTitle: 'Invite Members',
    shareDesc: 'Share this room code so others can join and see each other\'s location.',
    btnCopyLink: 'Copy Link',
    btnClose: 'Close',
    installTitle: 'Install App',
    installDesc: 'Install TraceLink to your home screen so it opens like a regular app.',
    androidSteps: [
      'Open this website in <strong>Chrome</strong>',
      'Tap the <strong>⋮</strong> menu (three dots) at top right',
      'Select <strong>"Add to Home Screen"</strong>',
      'Tap <strong>"Add"</strong> to confirm'
    ],
    iosSteps: [
      'Open this website in <strong>Safari</strong>',
      'Tap the <strong>Share</strong> ↑ button at the bottom',
      'Scroll down and select <strong>"Add to Home Screen"</strong>',
      'Tap <strong>"Add"</strong> at the top right'
    ],
    sidebarTitle: 'Members',
    onlineLabel: 'online',
    badgeMe: 'Me',
    labelCoords: 'Coords',
    labelLocation: 'Location',
    labelAccuracy: 'Accuracy',
    labelUpdate: 'Updated',
    loading: 'Loading...',
    otherMembers: 'OTHER MEMBERS',
    noMembersText: 'No other members yet.\nInvite people with the room code!',
    btnInvite: 'Invite Members',
    btnStop: 'Stop Sharing Location',
    mapStatus: 'Location auto-updated',
    layerTitle: 'Map View',
    layerStreet: 'Street',
    layerSatellite: 'Satellite',
    ppOnline: 'Online',
    ppMe: 'Me',
    ppCoords: 'Coords',
    ppLocation: 'Location',
    ppAccuracy: 'Accuracy',
    ppAccGood: 'Excellent',
    ppAccMid: 'Good',
    ppAccLow: 'Low',
    mcOnline: 'Online',
    mcOffline: 'Offline',
    mcCoords: 'Coords',
    mcLocation: 'Location',
    mcAccuracy: 'Accuracy',
    mcLast: 'Last seen',
    stopDone: 'Sharing Stopped',
    toastWelcome: (name) => `Welcome, ${name}!`,
    toastInstalling: 'Installing TraceLink...',
    toastInstalled: 'TraceLink installed! 🎉',
    toastCopied: 'Link copied! 🔗',
    toastStopped: 'You stopped sharing location',
    errName: 'Please enter your name!',
    errNameChar: 'Name can only contain letters!',
    errRoom6: 'Room code must be exactly 6 characters!',
    errRoomChar: 'Room code can only contain letters and numbers!',
    errNoGeo: 'Browser does not support geolocation',
    timeUnknown: 'Unknown',
    timeJustNow: 'Just now',
    timeMinAgo: (m) => `${m} min ago`,
    timeHourAgo: (h) => `${h} hr ago`,
    timeDayAgo: (d) => `${d} days ago`,
    waMsg: (room, url) => `Hey! Join TraceLink to see each other's location.\n\nRoom Code: *${room}*\n\nOpen: ${url}`,
    teleMsg: (room) => `Join TraceLink - Room Code: ${room}`,
    roles: [
      { value: 'Member',      label: '👤 Member' },
      { value: 'Friend',      label: '🤝 Friend' },
      { value: 'Partner',     label: '💑 Partner' },
      { value: 'Family',      label: '👨‍👩‍👧 Family' },
      { value: 'Colleague',   label: '💼 Colleague' },
    ]
  }
};

// ============================================================
// STATE
// ============================================================
const LS_KEY       = 'tracelink_profile';
const LS_LANG      = 'tracelink_lang';
const LS_THEME     = 'tracelink_theme';

const COLORS = [
  '#289DF2','#10b981','#f59e0b','#e8394a','#8b5cf6',
  '#ec4899','#14b8a6','#f97316','#06b6d4','#84cc16',
  '#a855f7','#ef4444','#22d3ee','#fb923c','#4ade80'
];
const assignedColors = {};
let colorIndex = 0;

function getAssignedColor(id) {
  if (id === state.myId) return '#0F3775';
  if (!assignedColors[id]) {
    assignedColors[id] = COLORS[colorIndex % COLORS.length];
    colorIndex++;
  }
  return assignedColors[id];
}

const OFFLINE_THRESHOLD = 60000;

const state = {
  name: '', role: '', room: '', myId: '',
  myLat: null, myLng: null,
  myBattery: null, myAccuracy: null, myLocationName: null,
  members: {}, myMarker: null,
  memberMarkers: {}, memberLocationNames: {},
  map: null, watchId: null,
  shareActive: true, fbReady: false,
  wakeLock: null, deferredPrompt: null,
  lang: localStorage.getItem(LS_LANG) || 'id',
  theme: localStorage.getItem(LS_THEME) || 'light'
};

// ============================================================
// I18N
// ============================================================
function t(key, ...args) {
  const val = TRANSLATIONS[state.lang][key];
  if (typeof val === 'function') return val(...args);
  return val ?? key;
}

// Elements whose content is managed by live data — never override them with i18n
const LIVE_DATA_IDS = new Set(['myCoordsVal', 'myLocationName', 'myAccuracy', 'myUpdate', 'lastUpdate', 'onlineCount', 'topbarRoomCode', 'modalRoomCode']);

function applyTranslations() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    // Skip elements that display live GPS/location data
    if (el.id && LIVE_DATA_IDS.has(el.id)) return;
    const key = el.getAttribute('data-i18n');
    const val = TRANSLATIONS[state.lang][key];
    if (val !== undefined) el.innerHTML = val;
  });

  // Placeholders
  const inputName = document.getElementById('inputName');
  if (inputName) inputName.placeholder = t('placeholderName');
  const inputRoom = document.getElementById('inputRoom');
  if (inputRoom) inputRoom.placeholder = t('placeholderRoom');

  // Role select
  const sel = document.getElementById('inputRole');
  if (sel) {
    const curVal = sel.value;
    sel.innerHTML = '';
    t('roles').forEach(r => {
      const opt = document.createElement('option');
      opt.value = r.value;
      opt.textContent = r.label;
      sel.appendChild(opt);
    });
    sel.value = curVal;
  }

  // Install steps
  const androidEl = document.getElementById('androidSteps');
  if (androidEl) {
    androidEl.innerHTML = t('androidSteps').map(s => `<li>${s}</li>`).join('');
  }
  const iosEl = document.getElementById('iosSteps');
  if (iosEl) {
    iosEl.innerHTML = t('iosSteps').map(s => `<li>${s}</li>`).join('');
  }

  // Lang labels
  const label = state.lang === 'id' ? 'ID' : 'EN';
  ['langLabelPerm','langLabelApp','langLabelMob'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.textContent = label;
  });
}

function toggleLang() {
  state.lang = state.lang === 'id' ? 'en' : 'id';
  localStorage.setItem(LS_LANG, state.lang);
  applyTranslations();
  // Re-render dynamic content that uses translated strings
  if (state.myLat) updateMyCard();
  renderMembers();
  // Update stop button if already in stopped state
  const stopBtn = document.getElementById('stopBtn');
  if (stopBtn && stopBtn.disabled) {
    stopBtn.innerHTML = '<i class="fas fa-check"></i> ' + t('stopDone');
  }
}

// ============================================================
// THEME
// ============================================================
function applyTheme() {
  document.body.setAttribute('data-theme', state.theme);
  const isDark = state.theme === 'dark';
  const iconClass = isDark ? 'fas fa-sun' : 'fas fa-moon';
  ['themeIconPerm','themeIconApp','themeIconMob'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.className = iconClass;
  });
}

function toggleTheme() {
  state.theme = state.theme === 'light' ? 'dark' : 'light';
  localStorage.setItem(LS_THEME, state.theme);
  applyTheme();
}

// ============================================================
// HELPERS
// ============================================================
function timeAgo(ts) {
  if (!ts) return t('timeUnknown');
  const diff = Date.now() - ts;
  const mins = Math.floor(diff / 60000);
  const hrs  = Math.floor(diff / 3600000);
  if (diff < 60000)    return t('timeJustNow');
  if (diff < 3600000)  return t('timeMinAgo', mins);
  if (diff < 86400000) return t('timeHourAgo', hrs);
  return t('timeDayAgo', Math.floor(diff / 86400000));
}

function isOnline(ts) {
  return ts && (Date.now() - ts) < OFFLINE_THRESHOLD;
}

function saveProfile() {
  localStorage.setItem(LS_KEY, JSON.stringify({
    name: state.name, role: state.role,
    room: state.room, myId: state.myId
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
      { headers: { 'Accept-Language': state.lang === 'id' ? 'id' : 'en' } }
    );
    if (!res.ok) return null;
    const data = await res.json();
    if (!data || !data.address) return null;
    const a = data.address;
    return a.village || a.suburb || a.quarter || a.neighbourhood ||
           a.hamlet || a.residential || a.road ||
           a.county || a.city || a.town || null;
  } catch { return null; }
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
  toast(t('toastInstalled'), 'success');
});

window.addEventListener('firebaseReady', () => { state.fbReady = true; });

// ============================================================
// INIT
// ============================================================
window.addEventListener('load', () => {
  // Apply theme + lang immediately
  applyTheme();
  applyTranslations();

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
    toast(t('errNoGeo'), 'error');
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
    toast(t('errNoGeo'), 'error');
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
        const code = urlRoom.toUpperCase().replace(/[^A-Z0-9]/g, '').slice(0, 6);
        const inp  = document.getElementById('inputRoom');
        const btn  = document.querySelector('.btn-generate');
        inp.value = code; inp.readOnly = true;
        inp.style.cursor = 'default'; inp.style.opacity = '0.85';
        if (btn) { btn.disabled = true; btn.style.opacity = '0.4'; btn.style.cursor = 'not-allowed'; }
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

function makeRoomCode() {
  const letters = 'ABCDEFGHJKLMNPQRSTUVWXYZ';
  const digits  = '23456789';
  let parts = [];
  for (let i = 0; i < 4; i++) parts.push(letters[Math.floor(Math.random() * letters.length)]);
  for (let i = 0; i < 2; i++) parts.push(digits[Math.floor(Math.random() * digits.length)]);
  for (let i = parts.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [parts[i], parts[j]] = [parts[j], parts[i]];
  }
  return parts.join('');
}

async function generateRoom() {
  const btn = document.querySelector('.btn-generate');
  if (btn) { btn.disabled = true; btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i>'; }
  let code = makeRoomCode();
  if (state.fbReady) {
    const { db, ref, onValue } = window._FB;
    let attempts = 0;
    while (attempts < 10) {
      const exists = await new Promise(resolve => {
        const r = ref(db, `rooms/${code}/members`);
        onValue(r, snap => resolve(snap.exists()), { onlyOnce: true });
      });
      if (!exists) break;
      code = makeRoomCode();
      attempts++;
    }
  }
  document.getElementById('inputRoom').value = code;
  if (btn) { btn.disabled = false; btn.innerHTML = `<i class="fas fa-dice"></i> ${t('btnRandom')}`; }
}

document.getElementById('inputRoom').addEventListener('input', function () {
  this.value = this.value.toUpperCase().replace(/[^A-Z0-9]/g, '').slice(0, 6);
  this.style.borderColor = this.value.length === 6 ? 'var(--navy)' : '';
});

async function startApp() {
  const name = document.getElementById('inputName').value.trim();
  const role = document.getElementById('inputRole').value;
  const room = document.getElementById('inputRoom').value.trim();

  if (!name) { toast(t('errName'), 'error'); return; }
  if (!/^[a-zA-Z ]+$/.test(name)) { toast(t('errNameChar'), 'error'); return; }
  const nameFormatted = name.split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()).join(' ');
  if (room.length !== 6) { toast(t('errRoom6'), 'error'); return; }
  if (!/^[A-Z0-9]+$/.test(room)) { toast(t('errRoomChar'), 'error'); return; }

  state.name = nameFormatted;
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

  toast(t('toastWelcome', state.name), 'success');

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
  if (state.watchId !== null) { navigator.geolocation.clearWatch(state.watchId); state.watchId = null; }
  if (state.wakeLock) { state.wakeLock.release().catch(() => {}); state.wakeLock = null; }
  clearProfile();
  window.location.href = window.location.origin + window.location.pathname;
}

// ============================================================
// FIREBASE
// ============================================================
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
    name: state.name, role: state.role,
    lat: state.myLat, lng: state.myLng,
    battery: state.myBattery, accuracy: state.myAccuracy,
    online: true, ts: Date.now()
  });
}

// ============================================================
// MAP
// ============================================================
function initMap() {
  state.map = L.map('map', { zoomControl: false, attributionControl: true });
  state.layers = {
    street: L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap', maxZoom: 19
    }),
    satellite: L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
      attribution: '© Esri', maxZoom: 19
    })
  };
  state.activeLayer = 'street';
  state.layers.street.addTo(state.map);
  if (state.myLat && state.myLng) {
    state.map.setView([state.myLat, state.myLng], 16);
    placeMyMarker(state.myLat, state.myLng);
  }
}

function openLayerPanel() {
  document.getElementById('layerPanel').classList.toggle('show');
}

function setLayer(type) {
  if (state.activeLayer === type) { document.getElementById('layerPanel').classList.remove('show'); return; }
  state.map.removeLayer(state.layers[state.activeLayer]);
  state.layers[type].addTo(state.map);
  state.activeLayer = type;
  document.querySelectorAll('.layer-option').forEach(el => el.classList.remove('active'));
  document.getElementById(type === 'street' ? 'layerStreet' : 'layerSatellite').classList.add('active');
  document.getElementById('layerPanel').classList.remove('show');
}

document.addEventListener('click', e => {
  const panel = document.getElementById('layerPanel');
  const btn   = document.getElementById('layerToggleBtn');
  if (panel && !panel.contains(e.target) && btn && !btn.contains(e.target)) {
    panel.classList.remove('show');
  }
});

function createMarkerIcon(initial, color, offline) {
  const opacity = offline ? '0.45' : '1';
  const badge = offline
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
  const color = '#0F3775';
  const initial = (state.name || '?')[0].toUpperCase();
  const icon = createMarkerIcon(initial, color, false);
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
  const accStr   = accuracy != null ? `${accuracy}m` : '—';
  const accColor = accuracy != null
    ? (accuracy <= 20 ? '#10b981' : accuracy <= 100 ? '#f59e0b' : '#e8394a')
    : '#6b7fa3';
  const accLabel = accuracy != null
    ? (accuracy <= 20 ? t('ppAccGood') : accuracy <= 100 ? t('ppAccMid') : t('ppAccLow'))
    : '—';

  const statusHtml = !isMe
    ? online
      ? `<div class="pp-status online"><span class="pp-status-dot"></span>${t('ppOnline')}</div>`
      : `<div class="pp-status offline"><i class="fas fa-clock"></i>${timeAgo(ts)}</div>`
    : `<div class="pp-status online"><span class="pp-status-dot"></span>${t('ppMe')}</div>`;

  const roleHtml = role ? `<div class="pp-role">${role}</div>` : '';

  return `<div class="pp-wrap">
    <div class="pp-header">
      <div class="pp-avatar">${name[0].toUpperCase()}</div>
      <div class="pp-header-info">
        <div class="pp-name">${name}</div>${roleHtml}
      </div>
      ${statusHtml}
    </div>
    <div class="pp-divider"></div>
    <div class="pp-body">
      <div class="pp-row">
        <i class="fas fa-crosshairs pp-row-icon"></i>
        <span class="pp-row-label">${t('ppCoords')}</span>
        <span class="pp-row-val mono">${lat.toFixed(5)}, ${lng.toFixed(5)}</span>
      </div>
      ${locationName ? `<div class="pp-row">
        <i class="fas fa-map-marker-alt pp-row-icon" style="color:#289DF2"></i>
        <span class="pp-row-label">${t('ppLocation')}</span>
        <span class="pp-row-val">${locationName}</span>
      </div>` : ''}
      <div class="pp-row">
        <i class="fas fa-satellite-dish pp-row-icon" style="color:${accColor}"></i>
        <span class="pp-row-label">${t('ppAccuracy')}</span>
        <span class="pp-row-val" style="color:${accColor}">${accStr} <span style="opacity:.7;font-size:.7rem">(${accLabel})</span></span>
      </div>
    </div>
  </div>`;
}

function placeMemberMarker(id, member) {
  if (!member.lat) return;
  const color   = getAssignedColor(id);
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

// ============================================================
// TRACKING
// ============================================================
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
      updateMyCard(); pushMyLocation();
      bat.addEventListener('levelchange', () => { state.myBattery = Math.round(bat.level * 100); updateMyCard(); pushMyLocation(); });
      bat.addEventListener('chargingchange', () => { state.myBattery = Math.round(bat.level * 100); updateMyCard(); pushMyLocation(); });
    } else { state.myBattery = null; updateMyCard(); }
  } catch { state.myBattery = null; updateMyCard(); }
}

function stopSharing() {
  if (state.watchId !== null) { navigator.geolocation.clearWatch(state.watchId); state.watchId = null; }
  state.shareActive = false;
  if (state.wakeLock) { state.wakeLock.release().catch(() => {}); state.wakeLock = null; }
  if (state.fbReady) {
    const { db, ref, update } = window._FB;
    update(ref(db, `rooms/${state.room}/members/${state.myId}`), { online: false });
  }
  if (state.myMarker) { state.map.removeLayer(state.myMarker); state.myMarker = null; }
  toast(t('toastStopped'), 'info');
  const btn = document.getElementById('stopBtn');
  btn.innerHTML = `<i class="fas fa-check"></i> ${t('stopDone')}`;
  btn.disabled = true;
}

// ============================================================
// MY CARD
// ============================================================
function initMyCard() {
  document.getElementById('myCardName').textContent = state.name;
  document.getElementById('myCardRole').textContent = state.role;
  document.getElementById('myAvatar').textContent   = state.name[0].toUpperCase();
}

function updateMyCard() {
  if (state.myLat) {
    const coordVal = document.getElementById('myCoordsVal');
    if (coordVal) coordVal.textContent = `${state.myLat.toFixed(5)},  ${state.myLng.toFixed(5)}`;
  }
  const locRow = document.getElementById('myLocationNameRow');
  const locEl  = document.getElementById('myLocationName');
  if (locRow && locEl) {
    if (state.myLocationName) {
      locEl.textContent    = state.myLocationName;
      locRow.style.display = 'flex';
    } else {
      locRow.style.display = 'none';
    }
  }
  const accEl = document.getElementById('myAccuracy');
  if (accEl && state.myAccuracy !== null) {
    const acc = state.myAccuracy;
    accEl.textContent = acc + 'm';
    accEl.style.color = acc <= 20 ? '#93c5fd' : acc <= 100 ? '#fcd34d' : '#fca5a5';
  }
  document.getElementById('myUpdate').textContent =
    new Date().toLocaleTimeString(state.lang === 'id' ? 'id-ID' : 'en-US', { hour: '2-digit', minute: '2-digit' });
}

function updateLastUpdate() {
  document.getElementById('lastUpdate').textContent =
    new Date().toLocaleTimeString(state.lang === 'id' ? 'id-ID' : 'en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
}

// ============================================================
// RENDER MEMBERS
// ============================================================
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
    const color   = getAssignedColor(id);
    const initial = (m.name || '?')[0].toUpperCase();
    const online  = isOnline(m.ts);
    const acc     = m.accuracy;
    const locName = state.memberLocationNames[id]?.name || null;
    const accText = acc != null ? acc + 'm' : '—';

    const div = document.createElement('div');
    div.className = `member-item${online ? '' : ' member-offline'}`;
    div.setAttribute('data-id', id);
    div.innerHTML = `
      <div class="mc-accent" style="background:${color}"></div>
      <div class="mc-body">
        <div class="mc-header">
          <div class="mc-avatar" style="background:${color}">${initial}</div>
          <div class="mc-header-info">
            <div class="mc-name">${m.name}</div>
            <div class="mc-role">${m.role || ''}</div>
          </div>
          <div class="mc-header-right">
            <div class="mc-status-pill ${online ? 'online' : 'offline'}">
              ${online
                ? `<span class="mc-status-dot"></span>${t('mcOnline')}`
                : `<i class="fas fa-moon" style="font-size:.55rem"></i>${t('mcOffline')}`}
            </div>
            <button class="mc-locate-btn" onclick="locateMember('${id}')">
              <i class="fas fa-location-dot"></i>
            </button>
          </div>
        </div>
        <div class="mc-divider"></div>
        <div class="mc-rows">
          ${online && m.lat ? `<div class="mc-row">
            <i class="fas fa-crosshairs mc-row-icon"></i>
            <span class="mc-row-label">${t('mcCoords')}</span>
            <span class="mc-row-val mono">${m.lat.toFixed(5)},  ${m.lng.toFixed(5)}</span>
          </div>` : ''}
          ${locName ? `<div class="mc-row">
            <i class="fas fa-map-marker-alt mc-row-icon" style="color:#289DF2"></i>
            <span class="mc-row-label">${t('mcLocation')}</span>
            <span class="mc-row-val">${locName}</span>
          </div>` : ''}
          <div class="mc-row">
            <i class="fas fa-${online ? 'satellite-dish' : 'clock'} mc-row-icon"
               style="color:${online ? (acc != null ? (acc <= 20 ? '#10b981' : acc <= 100 ? '#f59e0b' : '#e8394a') : 'var(--muted)') : 'var(--muted)'}"></i>
            <span class="mc-row-label">${online ? t('mcAccuracy') : t('mcLast')}</span>
            <span class="mc-row-val" style="color:${online ? (acc != null ? (acc <= 20 ? '#10b981' : acc <= 100 ? '#f59e0b' : '#e8394a') : 'var(--muted)') : 'var(--muted)'}">
              ${online ? accText : timeAgo(m.ts)}
            </span>
          </div>
        </div>
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

// ============================================================
// MODALS
// ============================================================
function openModal()  { document.getElementById('shareModal').classList.add('show'); }
function closeModal() { document.getElementById('shareModal').classList.remove('show'); }

function openInstallModal() {
  if (state.deferredPrompt) {
    state.deferredPrompt.prompt();
    state.deferredPrompt.userChoice.then(result => {
      if (result.outcome === 'accepted') toast(t('toastInstalling'), 'info');
      state.deferredPrompt = null;
    });
    return;
  }
  document.getElementById('installModal').classList.add('show');
}

function closeInstallModal() {
  document.getElementById('installModal').classList.remove('show');
}

document.getElementById('shareModal').addEventListener('click', function(e) { if (e.target === this) closeModal(); });
document.getElementById('installModal').addEventListener('click', function(e) { if (e.target === this) closeInstallModal(); });

function copyLink() {
  const link = `${location.origin}${location.pathname}?room=${state.room}`;
  navigator.clipboard.writeText(link).then(() => toast(t('toastCopied'), 'success'));
}

function shareWA() {
  const url = `${location.origin}${location.pathname}?room=${state.room}`;
  window.open(`https://wa.me/?text=${encodeURIComponent(t('waMsg', state.room, url))}`, '_blank');
}

function shareTelegram() {
  const url = encodeURIComponent(`${location.origin}${location.pathname}?room=${state.room}`);
  const msg = encodeURIComponent(t('teleMsg', state.room));
  window.open(`https://t.me/share/url?url=${url}&text=${msg}`, '_blank');
}

// ============================================================
// TOAST
// ============================================================
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

// ============================================================
// SIDEBAR
// ============================================================
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
        !sb.contains(e.target) && tg && !tg.contains(e.target)) {
      sb.classList.remove('mob-open');
    }
  }
});