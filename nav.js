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
      <a href="campus.html" class="nav-link" data-nav-page="campus">Campus</a>
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

})();
