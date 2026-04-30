/**
 * AI Powered Dahlia™ — Shared Navigation & Footer
 * Edit THIS file once to update both dashboard.html and competitors.html.
 *
 * Brand colors sourced from aipowereddahlia.com:
 *   bg:       #0A0A0A   surface:  #161616
 *   accent:   #8c52ff   cyan:     #5ce1e6
 *   gradient: linear-gradient(135deg, #5ce1e6, #8c52ff)
 */
document.addEventListener('DOMContentLoaded', function () {
  const GITHUB_ACTIONS = "https://github.com/Mia8989/dahlia-ai-brain/actions/workflows/fl-keyword-dashboard.yml";
  const LOGO_SRC       = "logo-apd.png";
  const APD_SITE       = "https://aipowereddahlia.com";
  const CURRENT        = window.location.pathname.split("/").pop() || "index.html";

  function isActive(page) {
    if (page === "index.html" && (CURRENT === "" || CURRENT === "index.html")) return true;
    return CURRENT === page;
  }

  function navLink(href, label) {
    const active = isActive(href) ? "nav-active" : "";
    return `<a href="${href}" class="nav-link ${active}">${label}</a>`;
  }

  const header = `
<header class="apd-header">
  <a href="index.html" class="apd-logo-link">
    <img src="${LOGO_SRC}" alt="AI Powered Dahlia" class="apd-logo"
         onerror="this.style.display='none';this.nextSibling.style.display='inline'">
    <span class="apd-logo-text" style="display:none">AI Powered Dahlia™</span>
  </a>

  <nav class="apd-nav">
    ${navLink("index.html", "📊 Keywords")}
    ${navLink("competitors.html", "🔍 Competitors")}
    <a href="${APD_SITE}/services" target="_blank" class="apd-promo-link">
      Built by AI Powered Dahlia →
    </a>
    <a href="${GITHUB_ACTIONS}" target="_blank" class="apd-refresh-btn">↻ Refresh</a>
    <button class="apd-logout-btn" onclick="(async()=>{if(window.__supabase){await window.__supabase.auth.signOut();window.location.href='login.html';}})()">Sign Out</button>
  </nav>
</header>`;

  const footer = `
<footer class="apd-footer">
  <div class="apd-footer-inner">
    <div class="footer-brand">
      <img src="${LOGO_SRC}" alt="AI Powered Dahlia" height="30"
           onerror="this.style.display='none'">
      <p class="footer-tagline">AI strategy and systems for growth-stage companies.</p>
    </div>

    <div class="footer-links">
      <div class="footer-col">
        <div class="footer-col-title">This Tool</div>
        <a href="index.html">Keywords Dashboard</a>
        <a href="competitors.html">Competitor Intelligence</a>
        <a href="${GITHUB_ACTIONS}" target="_blank">Refresh Data</a>
      </div>
      <div class="footer-col">
        <div class="footer-col-title">AI Powered Dahlia</div>
        <a href="${APD_SITE}/services" target="_blank">Our Services</a>
        <a href="${APD_SITE}/about" target="_blank">About Dahlia</a>
        <a href="${APD_SITE}/contact" target="_blank">Book a Strategy Call</a>
      </div>
    </div>
  </div>

  <div class="footer-bottom">
    <span>© ${new Date().getFullYear()} AI Powered Dahlia™. All rights reserved.
    This tool and its outputs are proprietary to AI Powered Dahlia™.
    Unauthorized reproduction or distribution is prohibited.</span>
    <span class="footer-data-note">
      Data: YouTube Data API v3 · Cache: 24h · Score = Volume (40) + Competition (40) + Recency (20)
    </span>
  </div>
</footer>`;

  const styles = `
<style id="apd-nav-styles">
/* ── Fonts ─────────────────────────────────────────────── */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

/* ── Brand tokens (match aipowereddahlia.com) ───────────── */
:root {
  --apd-bg:        #0A0A0A;
  --apd-surface:   #111111;
  --apd-border:    rgba(255,255,255,0.08);
  --apd-text:      #F5F5F5;
  --apd-muted:     rgba(245,245,245,0.5);
  --apd-accent:    #8c52ff;
  --apd-cyan:      #5ce1e6;
  --apd-gradient:  linear-gradient(135deg, #5ce1e6, #8c52ff);
  --apd-lavender:  #e9dfff;
}

/* ── Header ─────────────────────────────────────────────── */
.apd-header {
  background: rgba(10,10,10,0.92);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(140,82,255,0.15);
  padding: 12px 32px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  top: 0;
  z-index: 100;
}
.apd-logo-link { display: flex; align-items: center; text-decoration: none; }
.apd-logo { height: 34px; }
.apd-logo-text {
  font-size: 17px; font-weight: 700; color: var(--apd-text);
}

/* ── Nav links ──────────────────────────────────────────── */
.apd-nav { display: flex; align-items: center; gap: 6px; }

.nav-link {
  color: var(--apd-muted);
  text-decoration: none;
  font-size: 13px;
  font-weight: 500;
  padding: 7px 13px;
  border-radius: 7px;
  transition: background .15s, color .15s;
}
.nav-link:hover { background: rgba(255,255,255,.06); color: var(--apd-text); }
.nav-link.nav-active {
  background: rgba(140,82,255,.15);
  color: var(--apd-lavender);
  font-weight: 600;
}

/* ── Promo link ─────────────────────────────────────────── */
.apd-promo-link {
  font-size: 12px;
  font-weight: 600;
  text-decoration: none;
  padding: 6px 14px;
  border-radius: 7px;
  border: 1px solid rgba(140,82,255,.35);
  background: rgba(140,82,255,.1);
  background-clip: padding-box;
  color: var(--apd-lavender);
  transition: border-color .2s, background .2s;
  white-space: nowrap;
}
.apd-promo-link:hover {
  border-color: rgba(140,82,255,.7);
  background: rgba(140,82,255,.2);
  color: #fff;
  text-decoration: none;
}

/* ── Refresh button ─────────────────────────────────────── */
.apd-refresh-btn {
  background: var(--apd-gradient);
  color: #fff;
  padding: 7px 15px;
  border-radius: 7px;
  font-weight: 700;
  font-size: 12px;
  text-decoration: none;
  margin-left: 4px;
  white-space: nowrap;
  transition: opacity .2s;
}
.apd-refresh-btn:hover { opacity: .85; text-decoration: none; }

/* ── Footer ─────────────────────────────────────────────── */
.apd-footer {
  background: var(--apd-surface);
  border-top: 1px solid var(--apd-border);
  margin-top: 60px;
  font-size: 13px;
}
.apd-footer-inner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 32px 24px;
  display: flex;
  gap: 48px;
  align-items: flex-start;
}
.footer-brand { flex: 1; }
.footer-tagline {
  color: var(--apd-muted);
  font-size: 13px;
  margin-top: 10px;
  line-height: 1.6;
}
.footer-links {
  display: flex;
  gap: 48px;
}
.footer-col {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.footer-col-title {
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: .08em;
  color: var(--apd-muted);
  margin-bottom: 4px;
}
.footer-col a {
  color: rgba(245,245,245,.65);
  text-decoration: none;
  font-size: 13px;
  transition: color .15s;
}
.footer-col a:hover { color: var(--apd-lavender); }

.footer-bottom {
  max-width: 1200px;
  margin: 0 auto;
  padding: 16px 32px 28px;
  display: flex;
  flex-direction: column;
  gap: 6px;
  border-top: 1px solid var(--apd-border);
  color: var(--apd-muted);
  font-size: 11px;
}
.footer-data-note { color: rgba(245,245,245,.3); }

/* ── Sign Out button ────────────────────────────────────── */
.apd-logout-btn {
  background: transparent;
  border: 1px solid rgba(255,255,255,0.12);
  color: rgba(245,245,245,0.45);
  padding: 7px 13px;
  border-radius: 7px;
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
  font-family: inherit;
  margin-left: 4px;
  white-space: nowrap;
  transition: border-color .15s, color .15s;
}
.apd-logout-btn:hover {
  border-color: rgba(255,255,255,0.3);
  color: var(--apd-text);
}

/* ── Responsive ─────────────────────────────────────────── */
@media (max-width: 768px) {
  .apd-header { padding: 12px 16px; }
  .apd-promo-link { display: none; }
  .apd-footer-inner { flex-direction: column; gap: 28px; padding: 28px 16px 16px; }
  .footer-links { flex-direction: column; gap: 24px; }
  .footer-bottom { padding: 14px 16px 24px; }
}
</style>`;

  document.head.insertAdjacentHTML("beforeend", styles);
  document.body.insertAdjacentHTML("afterbegin", header);
  document.body.insertAdjacentHTML("beforeend", footer);
});
