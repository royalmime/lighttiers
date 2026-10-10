(function () {
  const GAMEMODES = [
    { key: 'overall', label: 'Overall', icon: '🏆' },
    { key: 'Crystal', label: 'Crystal', icon: '💠' },
    { key: 'Sword', label: 'Sword', icon: '⚔️' },
    { key: 'Axe', label: 'Axe', icon: '🪓' },
    { key: 'Pot', label: 'Pot', icon: '🧪' },
    { key: 'NetherPot', label: 'NetherPot', icon: '🔥' },
    { key: 'UHC', label: 'UHC', icon: '🛡️' },
    { key: 'SMP', label: 'SMP', icon: '🌱' },
    { key: 'Mace', label: 'Mace', icon: '🪓' },
    { key: 'SpearMace', label: 'SpearMace', icon: '🗡️' },
    { key: 'Cart', label: 'Cart', icon: '🛒' },
    { key: 'Bed', label: 'Bed', icon: '🛏️' },
    { key: 'Speed', label: 'Speed', icon: '⚡' },
    { key: 'DiaSMP', label: 'DiaSMP', icon: '💎' }
  ];

  const DEFAULT_THEME = {
    Black: {
      bg: '#060b12',
      'bg-2': '#0d1624',
      'bg-3': '#121f2d',
      panel: 'rgba(17,24,39,0.85)',
      'panel-strong': 'rgba(9,12,20,0.94)',
      'panel-soft': 'rgba(24,34,48,0.9)',
      text: '#edf2ff',
      muted: '#a9b5c9',
      accent: '#67d5ff',
      'accent-2': '#8d7dff',
      border: 'rgba(255,255,255,0.08)',
      shadow: '0 24px 60px rgba(0,0,0,0.36)',
      gold: '#f7d66d',
      silver: '#dfe6f3',
      bronze: '#d9a16a',
      success: '#4be0b0',
      danger: '#ff6a7a',
      warning: '#ffc76a',
      radius: '18px',
      'font-body': 'Inter, sans-serif',
      'font-heading': 'Orbitron, sans-serif',
      'page-bg': 'none'
    },
    Light: {
      bg: '#eef4fb',
      'bg-2': '#f9fbff',
      'bg-3': '#edf3ff',
      panel: 'rgba(255,255,255,0.9)',
      'panel-strong': 'rgba(249,251,255,0.96)',
      'panel-soft': 'rgba(242,246,255,0.9)',
      text: '#172033',
      muted: '#4e5e7f',
      accent: '#1687ff',
      'accent-2': '#7a5cff',
      border: 'rgba(31,41,55,0.1)',
      shadow: '0 24px 60px rgba(15, 25, 40, 0.12)',
      gold: '#d1a53d',
      silver: '#8c97a7',
      bronze: '#b66a36',
      success: '#1ca06d',
      danger: '#d84d65',
      warning: '#f6a71d',
      radius: '18px',
      'font-body': 'Inter, sans-serif',
      'font-heading': 'Poppins, sans-serif',
      'page-bg': 'none'
    },
    Midnight: {
      bg: '#050914',
      'bg-2': '#0a1325',
      'bg-3': '#101d36',
      panel: 'rgba(18,25,38,0.86)',
      'panel-strong': 'rgba(8,12,20,0.96)',
      'panel-soft': 'rgba(14,22,36,0.9)',
      text: '#eaf2ff',
      muted: '#9dadc5',
      accent: '#7ec8ff',
      'accent-2': '#8e6bff',
      border: 'rgba(143,166,210,0.16)',
      shadow: '0 24px 60px rgba(0, 0, 0, 0.42)',
      gold: '#f3d35c',
      silver: '#cfdef7',
      bronze: '#d79c65',
      success: '#63f0c7',
      danger: '#ff7c95',
      warning: '#ffc96b',
      radius: '18px',
      'font-body': 'Space Grotesk, sans-serif',
      'font-heading': 'Rajdhani, sans-serif',
      'page-bg': 'linear-gradient(180deg, rgba(6,10,20,0.8), rgba(16,27,44,0.8))'
    },
    Purple: {
      bg: '#130d1d',
      'bg-2': '#1a1229',
      'bg-3': '#2a1c40',
      panel: 'rgba(28,20,41,0.88)',
      'panel-strong': 'rgba(18,10,28,0.96)',
      'panel-soft': 'rgba(36,26,50,0.9)',
      text: '#f4eaff',
      muted: '#d6caef',
      accent: '#b680ff',
      'accent-2': '#6fe0ff',
      border: 'rgba(200,170,255,0.15)',
      shadow: '0 24px 60px rgba(105, 53, 173, 0.2)',
      gold: '#f7d66d',
      silver: '#dfe6f3',
      bronze: '#d9a16a',
      success: '#53e0b0',
      danger: '#ff7892',
      warning: '#ffbf64',
      radius: '18px',
      'font-body': 'Inter, sans-serif',
      'font-heading': 'Poppins, sans-serif',
      'page-bg': 'radial-gradient(circle at top, rgba(182,128,255,0.18), transparent 38%)'
    },
    Forest: {
      bg: '#07170f',
      'bg-2': '#0c2515',
      'bg-3': '#103120',
      panel: 'rgba(16,29,22,0.84)',
      'panel-strong': 'rgba(8,16,12,0.96)',
      'panel-soft': 'rgba(18,31,26,0.9)',
      text: '#edf7ee',
      muted: '#b3d7bc',
      accent: '#69e3a3',
      'accent-2': '#7ad7ff',
      border: 'rgba(145,204,165,0.14)',
      shadow: '0 24px 60px rgba(12, 48, 32, 0.2)',
      gold: '#f3d78a',
      silver: '#dfe6f3',
      bronze: '#d9a16a',
      success: '#7fe2a0',
      danger: '#ff7c7c',
      warning: '#ffc76a',
      radius: '18px',
      'font-body': 'Open Sans, sans-serif',
      'font-heading': 'Montserrat, sans-serif',
      'page-bg': 'radial-gradient(circle at top, rgba(105,227,163,0.12), transparent 36%)'
    },
    Crimson: {
      bg: '#15070d',
      'bg-2': '#240a16',
      'bg-3': '#36111d',
      panel: 'rgba(35,14,20,0.86)',
      'panel-strong': 'rgba(18,5,10,0.96)',
      'panel-soft': 'rgba(42,16,25,0.88)',
      text: '#fff0f4',
      muted: '#e8b0be',
      accent: '#ff7c93',
      'accent-2': '#ffbd70',
      border: 'rgba(255,161,181,0.16)',
      shadow: '0 24px 60px rgba(151, 15, 37, 0.22)',
      gold: '#f7d66d',
      silver: '#dfe6f3',
      bronze: '#d9a16a',
      success: '#7ee0bb',
      danger: '#ff7a7a',
      warning: '#ffca75',
      radius: '18px',
      'font-body': 'Segoe UI, sans-serif',
      'font-heading': 'Orbitron, sans-serif',
      'page-bg': 'radial-gradient(circle at top, rgba(255,124,147,0.12), transparent 40%)'
    },
    Sunset: {
      bg: '#120d09',
      'bg-2': '#211612',
      'bg-3': '#352218',
      panel: 'rgba(40,27,18,0.86)',
      'panel-strong': 'rgba(20,12,8,0.96)',
      'panel-soft': 'rgba(52,33,23,0.88)',
      text: '#fff0e3',
      muted: '#f2c9a3',
      accent: '#ff9b62',
      'accent-2': '#ff5d8f',
      border: 'rgba(255,176,120,0.14)',
      shadow: '0 24px 60px rgba(154, 84, 30, 0.18)',
      gold: '#f7d66d',
      silver: '#dfe6f3',
      bronze: '#d9a16a',
      success: '#7fe2a0',
      danger: '#ff7b7b',
      warning: '#ffc76a',
      radius: '18px',
      'font-body': 'Inter, sans-serif',
      'font-heading': 'Montserrat, sans-serif',
      'page-bg': 'radial-gradient(circle at top, rgba(255,155,98,0.12), transparent 38%)'
    }
  };

  const EUROPE_COUNTRIES = {
    AD: 'Andorra', AE: 'United Arab Emirates', AL: 'Albania', AM: 'Armenia', AT: 'Austria', AZ: 'Azerbaijan',
    BA: 'Bosnia and Herzegovina', BE: 'Belgium', BG: 'Bulgaria', BY: 'Belarus', CH: 'Switzerland', CY: 'Cyprus',
    CZ: 'Czechia', DE: 'Germany', DK: 'Denmark', EE: 'Estonia', ES: 'Spain', FI: 'Finland', FR: 'France', GB: 'United Kingdom',
    GE: 'Georgia', GR: 'Greece', HR: 'Croatia', HU: 'Hungary', IE: 'Ireland', IS: 'Iceland', IT: 'Italy', LI: 'Liechtenstein',
    LT: 'Lithuania', LU: 'Luxembourg', LV: 'Latvia', MC: 'Monaco', MD: 'Moldova', ME: 'Montenegro', MK: 'North Macedonia',
    MT: 'Malta', NL: 'Netherlands', NO: 'Norway', PL: 'Poland', PT: 'Portugal', RO: 'Romania', RS: 'Serbia', SE: 'Sweden',
    SI: 'Slovenia', SK: 'Slovakia', SM: 'San Marino', TR: 'Turkey', UA: 'Ukraine', VA: 'Vatican City'
  };

  const DEFAULT_SETTINGS = {
    siteName: 'LightTiers',
    headline: 'LightTiers PvP Tierlist',
    subtitle: 'Tracking the strongest players across the most competitive Minecraft PvP modes.',
    discordLink: 'https://discord.gg/y7EmtESUE',
    theme: 'Black',
    colors: {
      background: '#060b12',
      panels: '#111827',
      text: '#edf2ff',
      accent: '#67d5ff'
    },
    bodyFont: 'Inter',
    headingFont: 'Orbitron',
    cornerRoundness: 18,
    logo: '',
    banner: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=1600&q=80',
    pageBackground: '',
    tierPoints: {
      HT1: 60, LT1: 45, HT2: 30, LT2: 20, HT3: 10, LT3: 6, HT4: 4, LT4: 3, HT5: 2, LT5: 1
    },
    titlePoints: {
      CombatGrandmaster: 690,
      CombatMaster: 600,
      CombatAce: 360,
      CombatSpecialist: 180,
      CombatCadet: 0
    }
  };

  const STORAGE_KEY = 'lighttiers-state-v1';
  const THEME_KEY = 'lighttiers-theme-v1';

  const state = {
    settings: null,
    players: [],
    selectedGamemode: 'overall',
    search: '',
    region: 'All',
    modalPlayerId: null,
    comparePlayerId: null,
    adminVisible: window.location.hash === '#admin'
  };

  function deepClone(value) {
    return JSON.parse(JSON.stringify(value));
  }

  function generateInitialState() {
    return {
      settings: deepClone(DEFAULT_SETTINGS),
      players: []
    };
  }

  function getStoredState() {
    const fallback = generateInitialState();
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return fallback;
      const parsed = JSON.parse(raw);
      return {
        settings: { ...deepClone(DEFAULT_SETTINGS), ...(parsed.settings || {}) },
        players: Array.isArray(parsed.players) ? parsed.players : []
      };
    } catch (error) {
      return fallback;
    }
  }

  function saveState() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({
      settings: state.settings,
      players: state.players
    }));
  }

  function readTheme() {
    const picked = localStorage.getItem(THEME_KEY) || 'Black';
    return DEFAULT_THEME[picked] ? picked : 'Black';
  }

  function escapeHtml(str) {
    return String(str || '')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  function sanitizeName(value) {
    return normalizeName(String(value || '').trim());
  }

  function normalizeName(value) {
    return value.replace(/\s+/g, ' ').trim();
  }

  function resolveCountryCode(raw) {
    const value = String(raw || '').trim().toUpperCase();
    return value.length === 2 && Object.prototype.hasOwnProperty.call(EUROPE_COUNTRIES, value) ? value : 'FR';
  }

  function parseNameMcLink(input) {
    const value = String(input || '').trim();
    if (!value) return '';

    try {
      const url = new URL(value);
      const host = url.hostname.toLowerCase();
      if (host.includes('namemc.com')) {
        const names = [
          url.pathname.split('/').filter(Boolean)[0],
          url.searchParams.get('q'),
          url.searchParams.get('name')
        ].filter(Boolean);
        if (names[0]) return names[0];
      }
    } catch (error) {
      // ignore
    }

    const patterns = [
      /namemc\.com\/profile\/(?:(?:\w+\/)?)?([^/?#]+)/i,
      /namemc\.com\/(?:(?:\w+\/)?)?([^/?#]+)$/i,
      /(?:^|\s)name:\s*([^\s]+)/i
    ];
    for (const pattern of patterns) {
      const match = value.match(pattern);
      if (match && match[1]) return match[1];
    }

    return value;
  }

  function getModeByKey(key) {
    return GAMEMODES.find((mode) => mode.key === key) || GAMEMODES[0];
  }

  function getTierPoints(settings, tier) {
    if (!tier || tier === '—') return 0;
    return Number(settings.tierPoints?.[tier] || 0);
  }

  function getTierLabelFromScore(settings, score) {
    if (score === null || typeof score === 'undefined' || Number(score) <= 0) return '—';
    const order = ['HT1', 'LT1', 'HT2', 'LT2', 'HT3', 'LT3', 'HT4', 'LT4', 'HT5', 'LT5'];
    let best = '—';
    for (const tier of order) {
      const points = Number(settings.tierPoints?.[tier] || 0);
      if (score >= points) {
        best = tier;
        break;
      }
    }
    return best;
  }

  function buildTierBadge(tier) {
    if (!tier || tier === '—') {
      return '<span class="tier-badge lt">—</span>';
    }
    const isHT = tier.startsWith('HT');
    return `<span class="tier-badge ${isHT ? 'ht' : 'lt'}">${escapeHtml(tier)}</span>`;
  }

  function getGamemodeTier(player, key) {
    if (!player) return null;
    const raw = player.tiers?.[key];
    return raw && raw !== 'None' && raw !== '—' ? raw : null;
  }

  function getOverallPoints(player, settings) {
    let total = 0;
    for (const mode of GAMEMODES) {
      if (mode.key === 'overall') continue;
      const tier = getGamemodeTier(player, mode.key);
      total += getTierPoints(settings, tier);
    }
    return total;
  }

  function getRankTitle(points) {
    if (points >= 690) return 'Combat Grandmaster';
    if (points >= 600) return 'Combat Master';
    if (points >= 360) return 'Combat Ace';
    if (points >= 180) return 'Combat Specialist';
    return 'Combat Cadet';
  }

  function getPlayerSort(player, settings) {
    const total = getOverallPoints(player, settings);
    return total;
  }

  function getPlayersByMode(modeKey) {
    const list = state.players
      .map((player) => ({
        player,
        total: modeKey === 'overall' ? getOverallPoints(player, state.settings) : getTierPoints(state.settings, getGamemodeTier(player, modeKey))
      }))
      .filter(({ total }) => total > 0 || modeKey === 'overall');

    list.sort((a, b) => {
      if (modeKey === 'overall') return b.total - a.total;
      return b.total - a.total;
    });
    return list;
  }

  function applyTheme(themeName) {
    const theme = DEFAULT_THEME[themeName] || DEFAULT_THEME.Black;
    Object.entries(theme).forEach(([key, value]) => {
      document.documentElement.style.setProperty(`--${key}`, value);
    });
    document.documentElement.style.setProperty('--page-bg', theme['page-bg'] || 'none');
    document.documentElement.style.setProperty('--radius', `${state.settings.cornerRoundness}px`);
    const select = document.getElementById('themeSelect');
    if (select) select.value = themeName;
    localStorage.setItem(THEME_KEY, themeName);
  }

  function getCountryName(countryCode) {
    return EUROPE_COUNTRIES[resolveCountryCode(countryCode)] || 'France';
  }

  function getAvatarUrl(playerName, overrideUrl) {
    if (overrideUrl && overrideUrl.trim()) return overrideUrl;
    const safeName = sanitizeName(playerName || 'Steve');
    const base = `https://minotar.net/helm/${encodeURIComponent(safeName)}/100.png`;
    return base;
  }

  function makeFallbackAvatar(name) {
    const seed = (name || 'LT').split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
    const hue = seed % 360;
    const svg = `
      <svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120">
        <defs>
          <linearGradient id="g" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stop-color="hsl(${hue}, 70%, 60%)"/>
            <stop offset="100%" stop-color="hsl(${(hue + 55) % 360}, 70%, 45%)"/>
          </linearGradient>
        </defs>
        <rect width="120" height="120" rx="24" fill="url(#g)"/>
        <circle cx="60" cy="45" r="18" fill="rgba(255,255,255,0.7)"/>
        <path d="M26 94c8-20 28-30 34-30s26 10 34 30" fill="rgba(255,255,255,0.42)"/>
        <text x="60" y="108" text-anchor="middle" font-family="Arial" font-size="44" font-weight="700" fill="white">${escapeHtml((name || 'LT').charAt(0).toUpperCase())}</text>
      </svg>`;
    return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
  }

  function getPlayerAvatar(player) {
    if (player?.customImage) return player.customImage;
    const name = sanitizeName(player?.name || 'Steve');
    return `https://minotar.net/helm/${encodeURIComponent(name)}/100.png`;
  }

  function formatCountryTag(code) {
    const clean = resolveCountryCode(code);
    return `<span class="country-chip" title="${escapeHtml(getCountryName(clean))}">${escapeHtml(clean)}</span>`;
  }

  function setDefaultState() {
    const fresh = generateInitialState();
    state.settings = fresh.settings;
    state.players = fresh.players;
    state.selectedGamemode = 'overall';
    state.search = '';
    state.region = 'All';
    state.modalPlayerId = null;
    state.comparePlayerId = null;
    saveState();
    render();
  }

  function buildGamemodeIconSprite(label, emoji) {
    const text = (label || 'L').slice(0, 1).toUpperCase();
    const svg = `
      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48">
        <defs>
          <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#67d5ff"/>
            <stop offset="100%" stop-color="#8d7dff"/>
          </linearGradient>
        </defs>
        <rect width="48" height="48" rx="12" fill="url(#grad)"/>
        <text x="50%" y="57%" text-anchor="middle" font-family="sans-serif" font-size="18" font-weight="700" fill="white">${text}</text>
      </svg>
    `;
    return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
  }

  function getModeIcon(modeKey) {
    const mode = getModeByKey(modeKey);
    if (!mode) return buildGamemodeIconSprite('L', '🏆');
    return buildGamemodeIconSprite(mode.label, mode.icon || '🏆');
  }

  function getFilteredPlayers() {
    let players = [...state.players];

    if (state.search.trim()) {
      const value = state.search.trim().toLowerCase();
      players = players.filter((player) => player.name.toLowerCase().includes(value));
    }

    if (state.region !== 'All') {
      players = players.filter((player) => player.country === state.region);
    }

    players.sort((a, b) => getPlayerSort(b, state.settings) - getPlayerSort(a, state.settings));
    return players;
  }

  function renderTopBar() {
    document.getElementById('siteName').textContent = state.settings.siteName || 'LightTiers';
    document.getElementById('discordBtn').addEventListener('click', () => {
      window.open(state.settings.discordLink || 'https://discord.gg/y7EmtESUE', '_blank', 'noopener,noreferrer');
    });

    const logo = document.getElementById('logoImage');
    if (state.settings.logo) {
      logo.src = state.settings.logo;
      logo.style.display = 'block';
    } else {
      logo.src = getModeIcon('overall');
      logo.style.display = 'block';
    }

    const heroBanner = document.getElementById('heroBanner');
    if (state.settings.banner) {
      heroBanner.style.backgroundImage = `url('${state.settings.banner}')`;
    } else {
      heroBanner.style.backgroundImage = 'none';
      heroBanner.style.background = 'linear-gradient(135deg, rgba(103,213,255,0.12), rgba(141,125,255,0.14))';
    }

    const themeSelect = document.getElementById('themeSelect');
    themeSelect.value = state.settings.theme || readTheme();
    themeSelect.onchange = (event) => {
      state.settings.theme = event.target.value;
      applyTheme(event.target.value);
      saveState();
    };

    const headline = document.getElementById('headlineText');
    const subtitle = document.getElementById('subtitleText');
    headline.textContent = state.settings.headline || 'LightTiers PvP Tierlist';
    subtitle.textContent = state.settings.subtitle || 'Tracking the strongest players...';

    document.title = `${state.settings.headline || 'LightTiers'} PvP Tierlist`;

    if (state.settings.pageBackground) {
      document.body.style.setProperty('--page-bg', `url('${state.settings.pageBackground}')`);
    } else {
      document.body.style.setProperty('--page-bg', 'none');
    }
  }

  function renderPodium() {
    const container = document.getElementById('podium');
    const players = [...state.players]
      .sort((a, b) => getPlayerSort(b, state.settings) - getPlayerSort(a, state.settings))
      .slice(0, 3);

    if (!players.length) {
      container.innerHTML = '<div class="empty-state" style="grid-column: 1 / -1;">No players added yet. Open with #admin in the URL and add the first player.</div>';
      return;
    }

    container.innerHTML = players.map((player, index) => {
      const rank = index + 1;
      const total = getOverallPoints(player, state.settings);
      return `
        <article class="podium-card rank-${rank}">
          <div class="podium-rank">#${rank}</div>
          <div class="podium-profile">
            <img class="avatar" src="${escapeHtml(getPlayerAvatar(player))}" alt="${escapeHtml(player.name)}" onerror="this.src='${makeFallbackAvatar(player.name)}';" />
            <div>
              <div class="podium-name">${escapeHtml(player.name)}</div>
              <div class="podium-points">${total} pts</div>
            </div>
          </div>
          <div class="podium-meta">
            <span>${escapeHtml(getRankTitle(total))}</span>
            <span>${escapeHtml(getCountryName(player.country))}</span>
          </div>
        </article>
      `;
    }).join('');
  }

  function renderGamemodeTabs() {
    const container = document.getElementById('gamemodeTabs');
    container.innerHTML = GAMEMODES.map((mode) => {
      const active = state.selectedGamemode === mode.key ? 'active' : '';
      const icon = mode.key === 'overall' ? '🏆' : mode.icon || '◈';
      return `
        <button class="mode-tab ${active}" type="button" data-mode="${escapeHtml(mode.key)}">
          <span class="mode-icon">${icon}</span>
          <span>${escapeHtml(mode.label)}</span>
        </button>
      `;
    }).join('');

    container.querySelectorAll('.mode-tab').forEach((button) => {
      button.addEventListener('click', () => {
        state.selectedGamemode = button.dataset.mode;
        render();
      });
    });
  }

  function renderRegionFilter() {
    const select = document.getElementById('regionFilter');
    const unique = ['All', ...[...new Set(state.players.map((p) => p.country).filter(Boolean))].sort()];
    select.innerHTML = unique.map((country) => `<option value="${escapeHtml(country)}">${country === 'All' ? 'All Regions' : `${escapeHtml(country)} • ${escapeHtml(getCountryName(country))}`}</option>`).join('');
    select.value = state.region;
    select.onchange = (event) => {
      state.region = event.target.value;
      render();
    };
  }

  function renderRankingList() {
    const container = document.getElementById('rankingList');
    const filtered = getFilteredPlayers();

    if (!filtered.length) {
      container.innerHTML = '<div class="empty-state">No players match this search or region.</div>';
      return;
    }

    const display = filtered.slice(0, 100);
    const modeKey = state.selectedGamemode;

    container.innerHTML = display.map((player, index) => {
      const overall = getOverallPoints(player, state.settings);
      const rowRank = index + 1;
      const targetModeTier = modeKey === 'overall' ? null : getGamemodeTier(player, modeKey);
      const tier = modeKey === 'overall' ? getRankTitle(overall) : (targetModeTier || '—');
      const points = modeKey === 'overall' ? overall : getTierPoints(state.settings, targetModeTier);
      return `
        <article class="tier-row rank-${rowRank <= 3 ? rowRank : 0}" data-player-id="${escapeHtml(player.id)}" tabindex="0">
          <div class="rank-num">#${rowRank}</div>
          <div class="player-info">
            <img class="avatar" src="${escapeHtml(getPlayerAvatar(player))}" alt="${escapeHtml(player.name)}" onerror="this.src='${makeFallbackAvatar(player.name)}';" />
            <div class="player-name-wrap">
              <div class="player-name">${escapeHtml(player.name)}</div>
            </div>
          </div>
          <div class="tier-badge-cell">${modeKey === 'overall' ? `<span class="player-title">${escapeHtml(getRankTitle(overall))}</span>` : buildTierBadge(targetModeTier)}</div>
          <div class="points-cell"><strong>${points}</strong></div>
          <div class="country-cell">${formatCountryTag(player.country)}</div>
          <div class="title-pill">${escapeHtml(getRankTitle(overall))}</div>
        </article>
      `;
    }).join('');

    container.querySelectorAll('.tier-row').forEach((row) => {
      row.addEventListener('click', () => {
        const id = row.dataset.playerId;
        openPlayerModal(id);
      });
      row.addEventListener('keydown', (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          const id = row.dataset.playerId;
          openPlayerModal(id);
        }
      });
    });
  }

  function renderAdminBar() {
    const bar = document.getElementById('adminBar');
    if (!state.adminVisible) {
      bar.innerHTML = '';
      bar.classList.remove('visible');
      return;
    }

    bar.classList.add('visible');
    bar.innerHTML = `
      <button class="admin-btn" type="button" id="adminAddPlayer">+ Add player</button>
      <button class="admin-btn admin-ghost" type="button" id="adminSettings">Site settings</button>
      <button class="admin-btn admin-ghost" type="button" id="adminDownload">Download data.js</button>
      <button class="admin-btn admin-ghost danger-btn" type="button" id="adminDiscard">Discard changes</button>
    `;

    document.getElementById('adminAddPlayer').addEventListener('click', openPlayerEditor);
    document.getElementById('adminSettings').addEventListener('click', openSiteSettings);
    document.getElementById('adminDownload').addEventListener('click', downloadDataFile);
    document.getElementById('adminDiscard').addEventListener('click', () => {
      localStorage.removeItem(STORAGE_KEY);
      state.settings = generateInitialState().settings;
      state.players = [];
      render();
    });
  }

  function openPlayerEditor(playerId = null) {
    const player = state.players.find((item) => item.id === playerId) || null;
    const modal = document.getElementById('playerModal');

    const formMarkup = `
      <div class="modal-header">
        <h3>${player ? 'Edit Player' : 'Add Player'}</h3>
        <button class="close-btn" type="button" data-close="player-modal">×</button>
      </div>
      <div class="modal-content">
        <form id="playerForm">
          <div class="form-grid">
            <div>
              <label for="playerName">Minecraft name or NameMC link</label>
              <div class="input-inline">
                <input id="playerName" type="text" value="${escapeHtml(player?.name || '')}" required />
                <button class="ghost-btn" type="button" id="findOnNamemc">Find on NameMC</button>
              </div>
            </div>
            <div>
              <label for="playerCountry">Country</label>
              <select id="playerCountry">
                ${Object.entries(EUROPE_COUNTRIES).map(([code, country]) => `<option value="${code}" ${player && player.country === code ? 'selected' : ''}>${country}</option>`).join('')}
              </select>
            </div>
          </div>

          <div class="tier-grid">
            ${GAMEMODES.filter((mode) => mode.key !== 'overall').map((mode) => `
              <div>
                <label for="tier-${escapeHtml(mode.key)}">${escapeHtml(mode.label)}</label>
                <select id="tier-${escapeHtml(mode.key)}">
                  <option value="">Not tested</option>
                  ${['HT1','LT1','HT2','LT2','HT3','LT3','HT4','LT4','HT5','LT5'].map((tier) => `
                    <option value="${tier}" ${player && player.tiers?.[mode.key] === tier ? 'selected' : ''}>${tier}</option>
                  `).join('')}
                </select>
              </div>
            `).join('')}
          </div>

          <div class="form-grid" style="margin-top: 16px;">
            <div>
              <label for="playerImage">Optional skin / custom picture</label>
              <input id="playerImage" type="file" accept="image/*" />
            </div>
          </div>

          <div class="submit-actions">
            <button class="btn" type="submit">Save player</button>
            ${player ? '<button class="btn danger-btn" type="button" id="deletePlayer">Delete player</button>' : ''}
            <button class="ghost-btn" type="button" data-close="player-modal">Cancel</button>
          </div>
        </form>
      </div>
    `;

    modal.innerHTML = formMarkup;
    modal.classList.add('open');
    document.getElementById('modalBackdrop').classList.add('open');

    document.getElementById('findOnNamemc').addEventListener('click', () => {
      const name = parseNameMcLink(document.getElementById('playerName').value || '');
      const q = name || document.getElementById('playerName').value || 'minecraft player';
      window.open(`https://namemc.com/search?q=${encodeURIComponent(q)}`, '_blank', 'noopener,noreferrer');
    });

    document.getElementById('playerForm').addEventListener('submit', (event) => {
      event.preventDefault();
      const nameInput = document.getElementById('playerName');
      const parsedName = sanitizeName(parseNameMcLink(nameInput.value));
      const name = sanitizeName(parsedName || nameInput.value);
      const country = document.getElementById('playerCountry').value;
      const tiers = {};

      GAMEMODES.forEach((mode) => {
        if (mode.key === 'overall') return;
        const tierValue = document.getElementById(`tier-${mode.key}`)?.value || '';
        if (tierValue) {
          tiers[mode.key] = tierValue;
        }
      });

      let customImage = player?.customImage || '';
      const imageFile = document.getElementById('playerImage').files[0];
      if (imageFile) {
        const reader = new FileReader();
        reader.onload = (e) => {
          customImage = e.target.result;
          savePlayer({ name, country, tiers, customImage, id: player?.id || `player-${Date.now()}` });
          closeModal();
          render();
        };
        reader.readAsDataURL(imageFile);
        return;
      }

      savePlayer({ name, country, tiers, customImage, id: player?.id || `player-${Date.now()}` });
      closeModal();
      render();
    });

    const deleteButton = document.getElementById('deletePlayer');
    if (deleteButton) {
      deleteButton.addEventListener('click', () => {
        if (!player) return;
        state.players = state.players.filter((item) => item.id !== player.id);
        saveState();
        closeModal();
        render();
      });
    }

    document.querySelectorAll('[data-close="player-modal"]').forEach((el) => {
      el.addEventListener('click', closeModal);
    });
  }

  function savePlayer(data) {
    const name = sanitizeName(data.name);
    if (!name) return;
    const cleanData = {
      id: data.id || `player-${Date.now()}`,
      name,
      country: resolveCountryCode(data.country),
      tiers: data.tiers || {},
      customImage: data.customImage || ''
    };

    const index = state.players.findIndex((player) => player.id === cleanData.id);
    if (index >= 0) {
      state.players[index] = cleanData;
    } else {
      state.players.push(cleanData);
    }

    saveState();
  }

  function closeModal() {
    document.getElementById('playerModal').classList.remove('open');
    document.getElementById('modalBackdrop').classList.remove('open');
    state.modalPlayerId = null;
    state.comparePlayerId = null;
    document.getElementById('playerModal').innerHTML = '';
  }

  function openPlayerModal(playerId) {
    const player = state.players.find((item) => item.id === playerId);
    if (!player) return;

    const list = state.players.filter((item) => item.id !== player.id);
    const compareOptions = list.map((item) => `<option value="${escapeHtml(item.id)}">${escapeHtml(item.name)}</option>`).join('');
    const total = getOverallPoints(player, state.settings);
    const modal = document.getElementById('playerModal');

    modal.innerHTML = `
      <div class="modal-header">
        <h3>${escapeHtml(player.name)}</h3>
        <button class="close-btn" type="button" data-close="player-modal">×</button>
      </div>
      <div class="modal-content">
        <div class="modal-top">
          <img class="avatar modal-avatar" src="${escapeHtml(getPlayerAvatar(player))}" alt="${escapeHtml(player.name)}" onerror="this.src='${makeFallbackAvatar(player.name)}';" />
          <div>
            <div class="meta-chip">${escapeHtml(getRankTitle(total))}</div>
            <div class="modal-meta" style="margin-top: 12px;">
              <div class="meta-chip">Country: ${escapeHtml(getCountryName(player.country))} ${formatCountryTag(player.country).replace(/<[^>]+>/g, '')}</div>
              <div class="meta-chip">Overall rank: #${state.players.filter((other) => getPlayerSort(other, state.settings) > getPlayerSort(player, state.settings)).length + 1}</div>
              <div class="meta-chip">Overall points: ${total}</div>
            </div>
          </div>
        </div>

        <div class="modal-gamemode-bars">
          ${GAMEMODES.filter((mode) => mode.key !== 'overall').map((mode) => {
            const tier = getGamemodeTier(player, mode.key) || '—';
            const points = getTierPoints(state.settings, tier);
            const percent = tier === '—' ? 0 : Math.min((points / 60) * 100, 100);
            return `
              <div class="bar-row">
                <div class="bar-label">${escapeHtml(mode.label)}</div>
                <div class="bar-track"><div class="bar-fill" style="width: ${percent}%"></div></div>
                <div class="bar-score">${escapeHtml(tier)}</div>
              </div>
            `;
          }).join('')}
        </div>

        <div class="compare-panel">
          <div class="compare-controls">
            <select id="compareSelect" class="compare-select">
              <option value="">Compare with ...</option>
              ${compareOptions}
            </select>
          </div>
          <div id="compareTableWrap"></div>
        </div>
      </div>
    `;

    modal.classList.add('open');
    document.getElementById('modalBackdrop').classList.add('open');

    document.querySelectorAll('[data-close="player-modal"]').forEach((el) => {
      el.addEventListener('click', closeModal);
    });

    const select = document.getElementById('compareSelect');
    select.addEventListener('change', (event) => {
      const otherId = event.target.value;
      if (!otherId) {
        document.getElementById('compareTableWrap').innerHTML = '';
        return;
      }
      renderCompareTable(player, otherId);
    });
  }

  function renderCompareTable(player, otherId) {
    const other = state.players.find((item) => item.id === otherId);
    if (!other) return;

    const rows = GAMEMODES.filter((mode) => mode.key !== 'overall').map((mode) => {
      const leftTier = getGamemodeTier(player, mode.key) || '—';
      const rightTier = getGamemodeTier(other, mode.key) || '—';
      const leftScore = getTierPoints(state.settings, leftTier);
      const rightScore = getTierPoints(state.settings, rightTier);
      const winner = leftScore === rightScore ? 'Tie' : leftScore > rightScore ? player.name : other.name;
      return `
        <tr>
          <td>${escapeHtml(mode.label)}</td>
          <td class="${leftScore >= rightScore ? 'winner-cell' : ''}">${buildTierBadge(leftTier)}</td>
          <td class="${rightScore >= leftScore ? 'winner-cell' : ''}">${buildTierBadge(rightTier)}</td>
          <td class="${winner !== 'Tie' ? 'compare-row-win' : ''}">${escapeHtml(winner)}</td>
        </tr>
      `;
    });

    const totalLeft = getOverallPoints(player, state.settings);
    const totalRight = getOverallPoints(other, state.settings);
    const totalWinner = totalLeft === totalRight ? 'Tie' : totalLeft > totalRight ? player.name : other.name;

    document.getElementById('compareTableWrap').innerHTML = `
      <table>
        <thead>
          <tr>
            <th>Gamemode</th>
            <th>${escapeHtml(player.name)}</th>
            <th>${escapeHtml(other.name)}</th>
            <th>Winner</th>
          </tr>
        </thead>
        <tbody>
          ${rows.join('')}
          <tr>
            <td><strong>Total</strong></td>
            <td class="${totalLeft >= totalRight ? 'winner-cell' : ''}"><strong>${totalLeft}</strong></td>
            <td class="${totalRight >= totalLeft ? 'winner-cell' : ''}"><strong>${totalRight}</strong></td>
            <td class="${totalWinner !== 'Tie' ? 'compare-row-win' : ''}"><strong>${escapeHtml(totalWinner)}</strong></td>
          </tr>
        </tbody>
      </table>
    `;
  }

  function openSiteSettings() {
    const modal = document.getElementById('playerModal');
    const themeOptions = Object.keys(DEFAULT_THEME).map((name) => `<option value="${name}" ${state.settings.theme === name ? 'selected' : ''}>${name}</option>`).join('');
    const fontOptions = ['Inter', 'Orbitron', 'Poppins', 'Rajdhani', 'Space Grotesk', 'Roboto', 'Montserrat', 'Open Sans', 'Raleway', 'Nunito', 'Lora', 'Merriweather', 'Playfair Display', 'Oswald', 'Josefin Sans', 'Source Sans 3', 'Lexend'];

    modal.innerHTML = `
      <div class="modal-header">
        <h3>Site settings</h3>
        <button class="close-btn" type="button" data-close="player-modal">×</button>
      </div>
      <div class="modal-content">
        <div class="settings-grid">
          <div>
            <label>Site name</label>
            <input id="settingSiteName" type="text" value="${escapeHtml(state.settings.siteName || 'LightTiers')}" />
          </div>
          <div>
            <label>Headline</label>
            <input id="settingHeadline" type="text" value="${escapeHtml(state.settings.headline || 'LightTiers PvP Tierlist')}" />
          </div>
          <div>
            <label>Subtitle</label>
            <input id="settingSubtitle" type="text" value="${escapeHtml(state.settings.subtitle || '')}" />
          </div>
          <div>
            <label>Discord link</label>
            <input id="settingDiscord" type="url" value="${escapeHtml(state.settings.discordLink || 'https://discord.gg/y7EmtESUE')}" />
          </div>
          <div>
            <label>Theme</label>
            <select id="settingTheme">${themeOptions}</select>
          </div>
          <div>
            <label>Corner roundness</label>
            <input id="settingRadius" type="number" min="0" max="30" value="${Number(state.settings.cornerRoundness || 18)}" />
          </div>
          <div>
            <label>Body font</label>
            <select id="settingBodyFont">${fontOptions.map((font) => `<option value="${font}" ${state.settings.bodyFont === font ? 'selected' : ''}>${font}</option>`).join('')}</select>
          </div>
          <div>
            <label>Heading font</label>
            <select id="settingHeadingFont">${fontOptions.map((font) => `<option value="${font}" ${state.settings.headingFont === font ? 'selected' : ''}>${font}</option>`).join('')}</select>
          </div>
          <div>
            <label>Background color</label>
            <input id="settingBackgroundColor" type="color" value="${(state.settings.colors && state.settings.colors.background) || '#060b12'}" />
          </div>
          <div>
            <label>Panel color</label>
            <input id="settingPanelsColor" type="color" value="${(state.settings.colors && state.settings.colors.panels) || '#111827'}" />
          </div>
          <div>
            <label>Text color</label>
            <input id="settingTextColor" type="color" value="${(state.settings.colors && state.settings.colors.text) || '#edf2ff'}" />
          </div>
          <div>
            <label>Accent color</label>
            <input id="settingAccentColor" type="color" value="${(state.settings.colors && state.settings.colors.accent) || '#67d5ff'}" />
          </div>
          <div>
            <label>Logo image URL</label>
            <input id="settingLogo" type="url" value="${escapeHtml(state.settings.logo || '')}" />
          </div>
          <div>
            <label>Banner image URL</label>
            <input id="settingBanner" type="url" value="${escapeHtml(state.settings.banner || '')}" />
          </div>
          <div>
            <label>Page background image URL</label>
            <input id="settingPageBackground" type="url" value="${escapeHtml(state.settings.pageBackground || '')}" />
          </div>
        </div>

        <div style="margin-top: 24px;">
          <h4 style="margin: 0 0 12px;">Tier points</h4>
          <div class="settings-grid">
            ${['HT1','LT1','HT2','LT2','HT3','LT3','HT4','LT4','HT5','LT5'].map((tier) => `
              <div>
                <label>${tier}</label>
                <input type="number" id="tier-${tier}" value="${Number(state.settings.tierPoints?.[tier] || 0)}" />
              </div>
            `).join('')}
          </div>
        </div>

        <div style="margin-top: 24px;">
          <h4 style="margin: 0 0 12px;">Title thresholds</h4>
          <div class="settings-grid">
            ${['CombatGrandmaster','CombatMaster','CombatAce','CombatSpecialist','CombatCadet'].map((key) => `
              <div>
                <label>${key.replace(/([A-Z])/g, ' $1').trim()}</label>
                <input type="number" id="title-${key}" value="${Number(state.settings.titlePoints?.[key] || 0)}" />
              </div>
            `).join('')}
          </div>
        </div>

        <div class="settings-actions">
          <button class="btn" type="button" id="saveSettings">Save settings</button>
          <button class="ghost-btn" type="button" id="resetSettings">Reset to default</button>
          <button class="ghost-btn" type="button" data-close="player-modal">Close</button>
        </div>
      </div>
    `;

    modal.classList.add('open');
    document.getElementById('modalBackdrop').classList.add('open');

    document.getElementById('saveSettings').addEventListener('click', () => {
      const nextSettings = deepClone(state.settings);
      nextSettings.siteName = document.getElementById('settingSiteName').value || 'LightTiers';
      nextSettings.headline = document.getElementById('settingHeadline').value || 'LightTiers PvP Tierlist';
      nextSettings.subtitle = document.getElementById('settingSubtitle').value || '';
      nextSettings.discordLink = document.getElementById('settingDiscord').value || 'https://discord.gg/y7EmtESUE';
      nextSettings.theme = document.getElementById('settingTheme').value || 'Black';
      nextSettings.cornerRoundness = Math.min(30, Math.max(0, Number(document.getElementById('settingRadius').value || 18)));
      nextSettings.bodyFont = document.getElementById('settingBodyFont').value || 'Inter';
      nextSettings.headingFont = document.getElementById('settingHeadingFont').value || 'Orbitron';
      nextSettings.logo = document.getElementById('settingLogo').value || '';
      nextSettings.banner = document.getElementById('settingBanner').value || '';
      nextSettings.pageBackground = document.getElementById('settingPageBackground').value || '';
      nextSettings.colors = {
        background: document.getElementById('settingBackgroundColor').value || '#060b12',
        panels: document.getElementById('settingPanelsColor').value || '#111827',
        text: document.getElementById('settingTextColor').value || '#edf2ff',
        accent: document.getElementById('settingAccentColor').value || '#67d5ff'
      };

      nextSettings.tierPoints = {};
      ['HT1','LT1','HT2','LT2','HT3','LT3','HT4','LT4','HT5','LT5'].forEach((tier) => {
        nextSettings.tierPoints[tier] = Number(document.getElementById(`tier-${tier}`).value || 0);
      });

      nextSettings.titlePoints = {};
      ['CombatGrandmaster','CombatMaster','CombatAce','CombatSpecialist','CombatCadet'].forEach((key) => {
        nextSettings.titlePoints[key] = Number(document.getElementById(`title-${key}`).value || 0);
      });

      state.settings = nextSettings;
      saveState();
      applyTheme(nextSettings.theme || 'Black');
      render();
      closeModal();
    });

    document.getElementById('resetSettings').addEventListener('click', () => {
      const fresh = generateInitialState().settings;
      state.settings = fresh;
      saveState();
      applyTheme('Black');
      render();
      closeModal();
    });

    document.querySelectorAll('[data-close="player-modal"]').forEach((el) => {
      el.addEventListener('click', closeModal);
    });
  }

  function downloadDataFile() {
    const payload = `window.LIGHTTIERS_DATA = ${JSON.stringify({ settings: state.settings, players: state.players }, null, 2)};`;
    const blob = new Blob([payload], { type: 'application/javascript' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'data.js';
    link.click();
    URL.revokeObjectURL(url);
  }

  function bindSearch() {
    const input = document.getElementById('searchInput');
    input.value = state.search;
    input.addEventListener('input', (event) => {
      state.search = event.target.value;
      render();
    });
  }

  function render() {
    if (!state.settings) {
      const stored = getStoredState();
      state.settings = stored.settings;
      state.players = stored.players;
    }

    const storedTheme = readTheme();
    if (state.settings.theme) {
      applyTheme(state.settings.theme);
    } else {
      state.settings.theme = storedTheme;
      applyTheme(storedTheme);
    }

    document.documentElement.style.setProperty('--font-body', state.settings.bodyFont ? `${state.settings.bodyFont}, sans-serif` : 'Inter, sans-serif');
    document.documentElement.style.setProperty('--font-heading', state.settings.headingFont ? `${state.settings.headingFont}, sans-serif` : 'Orbitron, sans-serif');
    document.documentElement.style.setProperty('--radius', `${Number(state.settings.cornerRoundness || 18)}px`);

    document.documentElement.style.setProperty('--bg', state.settings.colors?.background || '#060b12');
    document.documentElement.style.setProperty('--bg-2', state.settings.colors?.background || '#0d1624');
    document.documentElement.style.setProperty('--panel', state.settings.colors?.panels || '#111827');
    document.documentElement.style.setProperty('--text', state.settings.colors?.text || '#edf2ff');
    document.documentElement.style.setProperty('--accent', state.settings.colors?.accent || '#67d5ff');

    renderTopBar();
    renderAdminBar();
    renderPodium();
    renderGamemodeTabs();
    bindSearch();
    renderRegionFilter();
    renderRankingList();
  }

  function boot() {
    const initial = getStoredState();
    state.settings = initial.settings;
    state.players = initial.players || [];
    state.settings.theme = state.settings.theme || readTheme();
    state.adminVisible = window.location.hash === '#admin';
    applyTheme(state.settings.theme);
    render();
  }

  window.addEventListener('hashchange', () => {
    state.adminVisible = window.location.hash === '#admin';
    render();
  });

  window.LightTiersApp = {
    state,
    getOverallPoints,
    getRankTitle,
    getTierPoints,
    saveState,
    openPlayerEditor,
    downloadDataFile,
    setDefaultState,
    render
  };

  boot();
})();
