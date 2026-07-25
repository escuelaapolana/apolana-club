/* =========================================================
   nav.js — Club Apolana · Navegación compartida
   Inyecta el CSS y HTML del nav en todas las páginas.
   Uso: <script src="nav.js"></script> justo antes de </head>
   ========================================================= */

(function () {
  // ── 1. CSS del nav ──────────────────────────────────────
  const style = document.createElement('style');
  style.textContent = `
    nav {
      position: sticky; top: 0; z-index: 100;
      background: var(--azul);
      display: flex; align-items: center; justify-content: space-between;
      padding: 0 2rem; height: 60px;
    }
    .nav-logo {
      display: flex; align-items: center; gap: 10px; text-decoration: none;
    }
    .nav-logo img {
      width: 34px; height: 34px; border-radius: 50%;
      object-fit: contain; background: white; padding: 2px;
    }
    .nav-logo span { color: white; font-weight: 600; font-size: 0.95rem; }

    .nav-links { display: flex; align-items: center; gap: 2px; }

    .nav-link {
      color: rgba(255,255,255,0.8); text-decoration: none;
      padding: 6px 11px; border-radius: 6px; font-size: 0.85rem;
      transition: all 0.12s; background: none; border: none; cursor: pointer;
      display: flex; align-items: center; gap: 5px; font-family: inherit;
    }
    .nav-link:hover, .nav-link.activo {
      background: rgba(255,255,255,0.12); color: white;
    }
    .nav-ig { padding: 6px 8px; }
    .nav-btn {
      background: white; color: var(--azul);
      padding: 6px 16px; border-radius: 6px;
      font-size: 0.85rem; font-weight: 600; text-decoration: none; margin-left: 4px;
    }
    .nav-btn:hover { background: var(--azul-bg); }

    /* Dropdowns */
    .nav-dropdown { position: relative; }
    .nav-dropdown-menu {
      display: none; position: absolute; top: calc(100% + 8px); left: 0;
      background: white; border-radius: 12px;
      border: 1px solid #dde2e8;
      box-shadow: 0 8px 24px rgba(0,0,0,0.12);
      min-width: 220px; overflow: hidden; z-index: 200;
    }
    .nav-dropdown-menu.visible { display: block; }
    .nav-dropdown-item {
      display: flex; align-items: center; gap: 10px;
      padding: 10px 16px; color: var(--texto);
      text-decoration: none; font-size: 0.85rem; transition: background 0.1s;
    }
    .nav-dropdown-item:hover { background: var(--azul-bg); color: var(--azul); }

    /* Hamburger */
    .nav-hamburger {
      display: none; background: none; border: none;
      color: white; cursor: pointer; padding: 4px;
    }

    @media (max-width: 768px) {
      nav { padding: 0 1rem; }
      .nav-hamburger { display: flex; }
      .nav-links {
        display: none; position: absolute; top: 60px; left: 0; right: 0;
        background: var(--azul-oscuro); flex-direction: column;
        align-items: stretch; padding: 0.5rem 0; gap: 0; z-index: 99;
      }
      .nav-links.open { display: flex; }
      .nav-link { border-radius: 0; padding: 10px 1.5rem; }
      .nav-btn { margin: 0.5rem 1rem; text-align: center; padding: 10px; }
      .nav-dropdown { width: 100%; }
      .nav-dropdown-menu {
        position: static; box-shadow: none; border: none;
        border-radius: 0; background: rgba(0,0,0,0.2); display: none;
      }
      .nav-dropdown-menu.visible { display: block; }
      .nav-dropdown-item { color: rgba(255,255,255,0.8); padding: 9px 2.5rem; }
      .nav-ig { display: none; }
    }
  `;
  document.head.appendChild(style);

  // ── 2. HTML del nav ─────────────────────────────────────
  const navHTML = `
  <nav id="nav-principal">
    <a href="index.html" class="nav-logo">
      <img
        src="https://icaxokjsvhlreuwpyxeb.supabase.co/storage/v1/object/public/imagenes-club/logo.png"
        alt="Club Apolana"
        onerror="this.style.display='none'"
      >
      <span>Club Apolana</span>
    </a>
    <div class="nav-links" id="nav-links">
      <div class="nav-dropdown">
        <button class="nav-link nav-dropdown-btn" onclick="navToggleDropdown('dd-secciones')">
          Secciones
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
            <polyline points="6 9 12 15 18 9"/>
          </svg>
        </button>
        <div class="nav-dropdown-menu" id="dd-secciones">
          <a href="secciones.html" class="nav-dropdown-item" style="font-weight:600;border-bottom:1px solid #eee;">Ver todas las secciones</a>
          <a href="competicion.html" class="nav-dropdown-item">Atletismo pista</a>
          <a href="running.html" class="nav-dropdown-item">Running</a>
          <a href="triatlon.html" class="nav-dropdown-item">Triatlón</a>
          <a href="natacion.html" class="nav-dropdown-item">Natación</a>
          <a href="montana.html" class="nav-dropdown-item">Montaña</a>
          <a href="instalaciones.html" class="nav-dropdown-item">Instalaciones</a>
        </div>
      </div>
      <div class="nav-dropdown">
        <button class="nav-link nav-dropdown-btn" onclick="navToggleDropdown('dd-escuelas')">
          Escuelas
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
            <polyline points="6 9 12 15 18 9"/>
          </svg>
        </button>
        <div class="nav-dropdown-menu" id="dd-escuelas">
          <a href="escuela.html" class="nav-dropdown-item">Escuela atletismo</a>
          <a href="escuela-natacion.html" class="nav-dropdown-item">Escuela natación</a>
          <a href="escuela-municipal-atletismo.html" class="nav-dropdown-item">Atletismo municipal</a>
          <a href="escuela-municipal-triatlon.html" class="nav-dropdown-item">Triatlón municipal</a>
          <a href="escuela-deporte-adaptado.html" class="nav-dropdown-item">Deporte adaptado</a>
        </div>
      </div>
      <a href="calendario.html" class="nav-link" data-nav-page="calendario">Calendario</a>
      <a href="noticias.html" class="nav-link" data-nav-page="noticias">Noticias</a>
      <a href="socio.html" class="nav-link" data-nav-page="socio">Hazte socio</a>
      <a href="normativa.html" class="nav-link" data-nav-page="normativa">Normativa</a>
      <a href="contacto.html" class="nav-link" data-nav-page="contacto">Contacto</a>
      <a href="https://instagram.com/apolana.alicante" target="_blank" class="nav-link nav-ig">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <rect x="2" y="2" width="20" height="20" rx="5"/>
          <circle cx="12" cy="12" r="5"/>
          <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
        </svg>
      </a>
      <a href="login.html" class="nav-link" id="nav-mi-perfil">Mi perfil</a>
      <a href="inscripcion.html" class="nav-btn">Inscribirse</a>
    </div>
    <button class="nav-hamburger" onclick="navToggleMenu()" aria-label="Menú">
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <line x1="3" y1="6" x2="21" y2="6"/>
        <line x1="3" y1="12" x2="21" y2="12"/>
        <line x1="3" y1="18" x2="21" y2="18"/>
      </svg>
    </button>
  </nav>
  `;

  // Insertar el nav al inicio del body en cuanto el DOM esté listo
  function insertNav() {
    if (document.body) {
      document.body.insertAdjacentHTML('afterbegin', navHTML);
      markActivePage();
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', insertNav);
  } else {
    insertNav();
  }

  // ── 3. Marcar página activa ──────────────────────────────
  function markActivePage() {
    const page = window.location.pathname.split('/').pop().replace('.html', '');
    const link = document.querySelector(`[data-nav-page="${page}"]`);
    if (link) link.classList.add('activo');
  }

  // ── 4. Funciones de interacción (globales) ───────────────
  window.navToggleDropdown = function (id) {
    document.querySelectorAll('.nav-dropdown-menu').forEach(m => {
      if (m.id !== id) m.classList.remove('visible');
    });
    const el = document.getElementById(id);
    if (el) el.classList.toggle('visible');
  };

  window.navToggleMenu = function () {
    const l = document.getElementById('nav-links');
    if (l) l.classList.toggle('open');
  };

  document.addEventListener('click', function (e) {
    if (!e.target.closest('.nav-dropdown')) {
      document.querySelectorAll('.nav-dropdown-menu').forEach(m => m.classList.remove('visible'));
    }
  });

  // ── 5. Compatibilidad: aliases para el código antiguo ────
  window.toggleDropdown = window.navToggleDropdown;
  window.toggleMenu = window.navToggleMenu;

  // ── 6. Sesión: actualizar "Mi perfil" con nombre y destino correcto ──
  const DESTINOS = {
    admin: 'admin.html', coordinador: 'admin.html',
    entrenador: 'entrenador.html', atleta: 'atleta.html', padre: 'padre.html'
  };

  function initSesionNav() {
    // Supabase debe estar cargado por la página host
    if (typeof supabase === 'undefined') return;
    const SB_URL = 'https://icaxokjsvhlreuwpyxeb.supabase.co';
    const SB_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImljYXhva2pzdmhscmV1d3B5eGViIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODEwNzE2NTgsImV4cCI6MjA5NjY0NzY1OH0.xn1ZY-otHY0-l7g64uutSVjiU8DbkHxxZmTvu77IaHA';
    const db = supabase.createClient(SB_URL, SB_KEY);

    db.auth.getSession().then(({ data }) => {
      if (!data.session) return;
      db.from('perfiles').select('rol,nombre').eq('id', data.session.user.id).single()
        .then(({ data: p }) => {
          if (!p) return;
          const btn = document.getElementById('nav-mi-perfil');
          if (btn) {
            btn.textContent = p.nombre?.split(' ')[0] || 'Mi perfil';
            btn.href = DESTINOS[p.rol] || '#';
          }
        });
    });
  }

  // Esperar a que Supabase esté disponible (lo carga la página host)
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initSesionNav);
  } else {
    setTimeout(initSesionNav, 100);
  }

  // ── 7. Animaciones fade-in globales ─────────────────────
  const animCSS = document.createElement('style');
  animCSS.textContent = `
    .fade-in {
      opacity: 0;
      transform: translateY(22px);
      transition: opacity 0.55s ease, transform 0.55s ease;
    }
    .fade-in.visible {
      opacity: 1;
      transform: translateY(0);
    }
  `;
  document.head.appendChild(animCSS);

  function initAnimaciones() {
    const observer = new IntersectionObserver(entries => {
      entries.forEach((e, i) => {
        if (e.isIntersecting) {
          // Pequeño escalonado para grupos de elementos
          setTimeout(() => e.target.classList.add('visible'), i * 60);
          observer.unobserve(e.target);
        }
      });
    }, { threshold: 0.08 });
    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAnimaciones);
  } else {
    initAnimaciones();
  }


  // ── 8. Botón flotante de WhatsApp ────────────────────────
  const waCSS = document.createElement('style');
  waCSS.textContent = `
    .wa-float {
      position: fixed; bottom: 20px; right: 20px; z-index: 90;
      display: flex; align-items: center; gap: 0;
      background: #25d366; color: white; border-radius: 50px;
      padding: 14px; text-decoration: none;
      box-shadow: 0 4px 16px rgba(37,211,102,0.4);
      transition: all 0.25s cubic-bezier(0.4,0,0.2,1);
      overflow: hidden; max-width: 52px;
    }
    .wa-float:hover { max-width: 260px; padding-right: 20px; box-shadow: 0 6px 24px rgba(37,211,102,0.5); }
    .wa-float svg { flex-shrink: 0; }
    .wa-float span {
      font-size: 0.85rem; font-weight: 600; white-space: nowrap;
      opacity: 0; margin-left: 0; transition: all 0.25s;
    }
    .wa-float:hover span { opacity: 1; margin-left: 10px; }
    @media (max-width: 768px) {
      .wa-float { bottom: 16px; right: 16px; padding: 13px; }
      .wa-float:hover { max-width: 52px; padding-right: 13px; }
      .wa-float:hover span { opacity: 0; margin-left: 0; }
    }
    @media print { .wa-float { display: none; } }
  `;
  document.head.appendChild(waCSS);

  function crearBotonWA() {
    if (document.querySelector('.wa-float')) return;
    // No mostrar en paneles privados
    const priv = ['admin.html','entrenador.html','atleta.html','padre.html','login.html'];
    if (priv.some(p => location.pathname.includes(p))) return;

    const a = document.createElement('a');
    a.className = 'wa-float';
    a.href = 'https://wa.me/34636061700?text=Hola!%20Me%20gustar%C3%ADa%20informarme%20sobre%20el%20Club%20Apolana';
    a.target = '_blank';
    a.rel = 'noopener';
    a.setAttribute('aria-label', 'Contactar por WhatsApp');
    a.innerHTML = `
      <svg width="24" height="24" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a4.8 4.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.126.554 4.122 1.523 5.854L.057 23.03a.75.75 0 0 0 .915.917l5.228-1.473A11.955 11.955 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.9 0-3.68-.523-5.2-1.43l-.374-.22-3.856 1.086 1.104-3.74-.245-.387A9.96 9.96 0 0 1 2 12c0-5.514 4.486-10 10-10s10 4.486 10 10-4.486 10-10 10z"/></svg>
      <span>Escríbenos por WhatsApp</span>`;
    document.body.appendChild(a);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', crearBotonWA);
  } else { crearBotonWA(); }

})();