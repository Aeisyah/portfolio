/* ============================================================================
   APP.JS — Menjana menu & teks daripada content.js, mengendalikan navigasi
            dan penukaran bahasa (MAL / ENG).
   Biasanya anda TIDAK perlu edit fail ini. Edit content.js sahaja.
   ========================================================================== */
(function () {
  'use strict';

  var P  = CONTENT.profile;
  var S  = CONTENT.systems;
  var UI = CONTENT.ui;

  /* ---------- bahasa semasa ---------- */
  var lang = CONTENT.defaultLang || 'ms';
  try {
    var saved = localStorage.getItem('portfolioLang');
    if (saved === 'ms' || saved === 'en') lang = saved;
  } catch (e) { /* localStorage disekat — guna default */ }

  /* t() = ambil teks mengikut bahasa semasa.
     Terima { ms:'…', en:'…' } atau string biasa. */
  function t(v) {
    if (v && typeof v === 'object' && !Array.isArray(v)) return v[lang] || v.ms || v.en || '';
    return v == null ? '' : String(v);
  }

  /* ---------- pembantu kecil ---------- */
  function el(id) { return document.getElementById(id); }
  function set(id, val) { var n = el(id); if (n) n.textContent = val; }
  function initials(name) {
    return name.trim().split(/\s+/).slice(0, 2).map(function (w) { return w[0]; }).join('').toUpperCase();
  }
  function esc(s) {
    return String(s).replace(/[&<>"]/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c];
    });
  }

  /* ---------- ikon SVG untuk kad hubungan ---------- */
  var ICONS = {
    mail:     '<svg viewBox="0 0 24 24"><path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"/></svg>',
    phone:    '<svg viewBox="0 0 24 24"><path d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25 11.4 11.4 0 0 0 3.6.58 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1 11.4 11.4 0 0 0 .58 3.6 1 1 0 0 1-.25 1z"/></svg>',
    linkedin: '<svg viewBox="0 0 24 24"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14zM8.34 18.34v-8.2H5.76v8.2h2.58zM7.05 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm11.29 9.34v-4.7c0-2.45-1.31-3.59-3.05-3.59a2.63 2.63 0 0 0-2.38 1.31v-1.12h-2.58c.03.73 0 8.1 0 8.1h2.58v-4.58c0-.23.02-.46.09-.62.18-.46.6-.93 1.31-.93.92 0 1.29.7 1.29 1.73v4.4h2.74z"/></svg>',
    github:   '<svg viewBox="0 0 24 24"><path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02a9.5 9.5 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2z"/></svg>',
    pin:      '<svg viewBox="0 0 24 24"><path d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z"/></svg>',
  };

  /* ---------- senarai halaman (menu) ---------- */
  var PAGES = [{ id: 'intro', accent: '#7C3AED', accentSoft: 'rgba(124,58,237,.12)' }]
    .concat(S.map(function (s) {
      return { id: s.id, accent: s.accent, accentSoft: s.accentSoft };
    }));

  var currentPage = 'intro';

  /* Projek yang sedang dibuka dalam Sistem 05 */
  var withProjects  = S.filter(function (s) { return s.projects && s.projects.length; })[0];
  var currentProject = withProjects ? withProjects.projects[0].id : null;

  /* ---------- penjana HTML yang dikongsi ---------- */
  function featHtml(features) {
    return (features || []).map(function (f) {
      return '<div class="feat"><span class="feat__dot"></span><div>' +
             '<div class="feat__t">' + esc(t(f.title)) + '</div>' +
             '<div class="feat__d">' + esc(t(f.desc)) + '</div></div></div>';
    }).join('');
  }

  /* Pastikan pautan luar ada protokol. Tanpa https://, browser akan anggap
     'www.linkedin.com/...' sebagai laluan RELATIF dan pautan itu rosak. */
  function url(u) {
    var s = String(u || '').trim();
    if (!s) return '';
    if (/^(https?:\/\/|mailto:|tel:|#|\/)/i.test(s)) return s;   // sudah elok
    if (/^(apk|guides)\//i.test(s)) return s;                    // fail tempatan
    return 'https://' + s;
  }

  /* Baris pautan: panduan / Google Play / muat turun APK */
  function linksHtml(o) {
    var parts = [];

    if (o.link) {
      parts.push('<a class="store-link" href="' + esc(url(o.link)) + '" target="_blank" rel="noopener">' +
        esc(t(o.linkText || UI.openStore)) + ' <span>' + esc(o.linkLabel || '') + '</span></a>');
    }

    if (o.apk && CONTENT.showApk !== false) {
      /* apkBase kosong = fail tempatan dalam folder apk/.
         apkBase berisi URL = ambil dari hosting luar (cth. GitHub Releases). */
      var base = CONTENT.apkBase || '';
      var href = base
        ? base.replace(/\/+$/, '') + '/' + o.apk.replace(/^apk\//, '')
        : o.apk;

      parts.push('<a class="store-link apk-link" href="' + esc(href) + '" download>' +
        esc(t(UI.downloadApk)) + ' <span>' + esc(o.apkSize || '') + '</span></a>');
    }

    return parts.length ? '<div class="doc-links">' + parts.join('') + '</div>' : '';
  }

  /* Isi kapsyen di bawah setiap mockup telefon */
  function fillCaps(selector, obj) {
    var caps = document.querySelectorAll(selector + ' .shot__cap');
    (obj.captions || []).forEach(function (c, i) {
      if (!caps[i]) return;
      var sub = (obj.captionSubs && obj.captionSubs[i]) ? t(obj.captionSubs[i]) : '';
      caps[i].innerHTML = '<b>' + esc(t(c)) + '</b>' + esc(sub);
    });
  }


  /* ======================================================================
     RENDER — dipanggil semula setiap kali bahasa ditukar
     ====================================================================== */
  function render() {
    document.documentElement.lang = (lang === 'en') ? 'en' : 'ms';

    /* ---------- 1. maklumat diri ---------- */
    set('brandMark', initials(P.name));
    set('brandName', P.name);
    set('brandRole', t(P.roleShort || P.role));
    set('introName', P.name);
    set('introRole', t(P.role));
    set('introText', t(P.intro));
    set('introGreet', t(UI.greeting));
    set('introEyebrow', t(UI.introNav));
    set('navLabel', t(UI.menu));
    set('footText', t(CONTENT.footer));

    set('h2Contact',  t(UI.hContact));
    set('h2Strength', t(UI.hStrength));
    set('h2Skills',   t(UI.hSkills));
    set('h2Systems',  t(UI.hSystems));

    var fl = el('footLink');
    if (fl) fl.href = url(P.linkedin);

    document.title = 'Portfolio · ' + P.name;

    /* ---------- 2. pemilih bahasa ---------- */
    var langHtml =
      '<button class="lang__btn' + (lang === 'en' ? ' is-active' : '') + '" data-lang="en">ENG</button>' +
      '<button class="lang__btn' + (lang === 'ms' ? ' is-active' : '') + '" data-lang="ms">MAL</button>';
    ['langSide', 'langHero'].forEach(function (id) {
      var n = el(id); if (n) n.innerHTML = langHtml;
    });

    /* ---------- 3. statistik ---------- */
    el('introStats').innerHTML = P.stats.map(function (s) {
      return '<div><div class="stat__v">' + esc(s.value) + '</div>' +
             '<div class="stat__l">' + esc(t(s.label)) + '</div></div>';
    }).join('');

    /* ---------- 4. kad hubungan ---------- */
    var contacts = [
      { k: t(UI.kLinkedin), v: P.linkedinLabel || P.linkedin, href: P.linkedin, ico: ICONS.linkedin },
      { k: t(UI.kEmail),    v: P.email,     href: 'mailto:' + P.email, ico: ICONS.mail },
      { k: t(UI.kPhone),    v: P.phone,     href: 'tel:' + String(P.phone).replace(/\s|-/g, ''), ico: ICONS.phone },
      { k: t(UI.kLocation), v: t(P.location), href: '', ico: ICONS.pin },
    ];
    if (P.github) {
      contacts.splice(1, 0, { k: t(UI.kGithub), v: P.githubLabel || P.github, href: P.github, ico: ICONS.github });
    }

    el('contactBox').innerHTML = contacts.filter(function (c) { return c.v; }).map(function (c) {
      var tag  = c.href ? 'a' : 'div';
      var attr = c.href ? ' href="' + esc(url(c.href)) + '" target="_blank" rel="noopener"' : '';
      return '<' + tag + ' class="contact__item"' + attr + '>' +
               '<div class="contact__ico">' + c.ico + '</div>' +
               '<div><div class="contact__k">' + esc(c.k) + '</div>' +
               '<div class="contact__v">' + esc(c.v) + '</div></div>' +
             '</' + tag + '>';
    }).join('');

    /* ---------- 5. kekuatan & kemahiran ---------- */
    el('strengthBox').innerHTML = P.strengths.map(function (s) {
      return '<div class="card"><span class="card__ico">' + s.icon + '</span>' +
             '<div class="card__t">' + esc(t(s.title)) + '</div>' +
             '<div class="card__d">' + esc(t(s.desc)) + '</div></div>';
    }).join('');

    el('skillBox').innerHTML = P.skills.map(function (s) {
      return '<span class="chip">' + esc(t(s)) + '</span>';
    }).join('');

    /* ---------- 6. butang menu ---------- */
    var navItems = [{
      id: 'intro', name: t(UI.introNav), sub: t(UI.introNavSub), emoji: '👋',
    }].concat(S.map(function (s) {
      return { id: s.id, name: t(s.name), sub: t(UI.systemWord) + ' ' + s.no, emoji: s.emoji };
    }));

    el('nav').innerHTML = navItems.map(function (p) {
      return '<button class="nav__btn' + (p.id === currentPage ? ' is-active' : '') + '" data-page="' + p.id + '">' +
               '<span class="nav__ico">' + p.emoji + '</span>' +
               '<span class="nav__txt"><span>' + esc(p.name) + '</span>' +
               '<span class="nav__sub">' + esc(p.sub) + '</span></span>' +
             '</button>';
    }).join('');

    /* ---------- 7. kad ringkas 4 sistem ---------- */
    el('sysGrid').innerHTML = S.map(function (s) {
      return '<button class="sys-card" data-page="' + s.id + '" style="--c:' + s.accent + ';--c-soft:' + s.accentSoft + '">' +
               '<div class="sys-card__no">' + esc(t(UI.systemWord).toUpperCase()) + ' ' + esc(s.no) + '</div>' +
               '<div class="sys-card__n">' + s.emoji + ' ' + esc(t(s.name)) + '</div>' +
               '<div class="sys-card__t">' + esc(t(s.tagline)) + '</div>' +
               '<div class="sys-card__go">' + esc(t(UI.viewUi)) + '</div>' +
             '</button>';
    }).join('');

    /* ---------- 8. kepala, ciri & kapsyen setiap sistem ---------- */
    S.forEach(function (s) {
      var head = document.querySelector('[data-head="' + s.id + '"]');
      if (head) {
        head.innerHTML =
          '<div class="eyebrow">' + esc(t(UI.systemWord)) + ' ' + esc(s.no) + '</div>' +
          '<h1><span class="sys-head__emoji">' + s.emoji + '</span>' + esc(t(s.name)) + '</h1>' +
          '<div class="sys-head__tag">' + esc(t(s.tagline)) + '</div>' +
          '<p class="sys-head__sum">' + esc(t(s.summary)) + '</p>' +
          linksHtml(s) +
          '<div class="chips" style="margin-top:22px">' +
            s.tech.map(function (x) { return '<span class="chip chip--accent">' + esc(t(x)) + '</span>'; }).join('') +
          '</div>';
      }

      var fg = document.querySelector('[data-feat="' + s.id + '"]');
      if (fg) fg.innerHTML = featHtml(s.features);

      fillCaps('#ui-' + s.id, s);
    });

    /* ---------- 8b. MENU PROJEK (Sistem 05 — projek syarikat) ---------- */
    if (withProjects) {
      set('projnavLabel', t(UI.projectsLabel));

      var pnav = el('projectNav');
      if (pnav) {
        pnav.innerHTML = withProjects.projects.map(function (pr) {
          return '<button class="projcard' + (pr.id === currentProject ? ' is-active' : '') + '"' +
                 ' data-proj="' + pr.id + '" style="--c:' + pr.accent + ';--c-soft:' + pr.accentSoft + '">' +
                   '<span class="projcard__ico">' + pr.emoji + '</span>' +
                   '<span><span class="projcard__n">' + esc(t(pr.name)) + '</span>' +
                   '<span class="projcard__t">' + esc(t(pr.tagline)) + '</span></span>' +
                 '</button>';
        }).join('');
      }

      withProjects.projects.forEach(function (pr) {
        var ph = document.querySelector('[data-projhead="' + pr.id + '"]');
        if (ph) {
          ph.innerHTML =
            '<h2>' + pr.emoji + ' ' + esc(t(pr.name)) + '</h2>' +
            '<div class="proj-head__tag">' + esc(t(pr.tagline)) + '</div>' +
            '<p class="proj-head__sum">' + esc(t(pr.summary)) + '</p>' +
            (pr.role
              ? '<div class="proj-role"><div><b>' + esc(t(UI.roleWord)) + '</b>' + esc(t(pr.role)) + '</div></div>'
              : '') +
            linksHtml(pr) +
            '<div class="chips" style="margin-top:18px">' +
              (pr.tech || []).map(function (x) { return '<span class="chip chip--accent">' + esc(t(x)) + '</span>'; }).join('') +
            '</div>';
        }

        var pf = document.querySelector('[data-projfeat="' + pr.id + '"]');
        if (pf) pf.innerHTML = featHtml(pr.features);

        fillCaps('#ui-' + pr.id, pr);
      });
    }

    /* ---------- 9. label tab dalam halaman sistem ---------- */
    document.querySelectorAll('[data-i18n]').forEach(function (n) {
      var key = n.getAttribute('data-i18n');
      if (UI[key]) n.textContent = t(UI[key]);
    });
  }


  /* ======================================================================
     NAVIGASI
     ====================================================================== */
  function show(id) {
    var p = PAGES.filter(function (x) { return x.id === id; })[0];
    if (!p) return;
    currentPage = id;

    document.querySelectorAll('.page').forEach(function (n) {
      n.classList.toggle('is-active', n.id === 'page-' + id);
    });
    document.querySelectorAll('.nav__btn').forEach(function (b) {
      b.classList.toggle('is-active', b.dataset.page === id);
    });

    /* warna aksen mengikut sistem yang dibuka */
    document.documentElement.style.setProperty('--accent', p.accent);
    document.documentElement.style.setProperty('--accent-soft', p.accentSoft);

    /* Sistem 05 — warna ikut projek yang sedang dipilih */
    if (withProjects && id === withProjects.id) showProject(currentProject);

    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (history.replaceState) history.replaceState(null, '', '#' + id);
  }

  /* Tukar projek dalam Sistem 05 */
  function showProject(pid) {
    if (!withProjects) return;
    var pr = withProjects.projects.filter(function (x) { return x.id === pid; })[0];
    if (!pr) return;
    currentProject = pid;

    document.querySelectorAll('.projpanel').forEach(function (n) {
      n.classList.toggle('is-active', n.id === 'proj-' + pid);
    });
    document.querySelectorAll('.projcard').forEach(function (b) {
      b.classList.toggle('is-active', b.dataset.proj === pid);
    });

    document.documentElement.style.setProperty('--accent', pr.accent);
    document.documentElement.style.setProperty('--accent-soft', pr.accentSoft);
  }

  function setLang(next) {
    if (next === lang) return;
    lang = next;
    try { localStorage.setItem('portfolioLang', lang); } catch (e) { /* abaikan */ }
    render();
  }

  document.addEventListener('click', function (e) {
    /* tukar bahasa */
    var l = e.target.closest('[data-lang]');
    if (l) { setLang(l.dataset.lang); return; }

    /* tukar projek dalam Sistem 05 */
    var pj = e.target.closest('[data-proj]');
    if (pj) { showProject(pj.dataset.proj); return; }

    /* tukar halaman */
    var t2 = e.target.closest('[data-page]');
    if (t2) { show(t2.dataset.page); return; }

    /* tab: Antara Muka / Ciri — dihadkan kepada projek semasa jika ada */
    var b = e.target.closest('.subnav__btn');
    if (b) {
      b.parentElement.querySelectorAll('.subnav__btn').forEach(function (x) {
        x.classList.remove('is-active');
      });
      b.classList.add('is-active');
      var scope = b.closest('.projpanel') || b.closest('.page');
      scope.querySelectorAll('.panel').forEach(function (pn) {
        pn.classList.toggle('is-active', pn.id === b.dataset.panel);
      });
    }
  });

  /* ---------- mula ---------- */
  render();

  var hash = location.hash.replace('#', '');
  show(hash || 'intro');
})();
