/**
 * AI Powered Dahlia™ — Shared Navigation & Footer
 * Edit THIS file once to update both dashboard.html and competitors.html.
 */
document.addEventListener('DOMContentLoaded', function () {
  const GITHUB_ACTIONS = "https://github.com/Mia8989/dahlia-ai-brain/actions/workflows/fl-keyword-dashboard.yml";
  const LOGO_SRC       = "logo-apd.png";
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
    <img src="${LOGO_SRC}" alt="AI Powered Dahlia" class="apd-logo" onerror="this.style.display='none';this.nextSibling.style.display='block'">
    <span class="apd-logo-text" style="display:none">AI Powered Dahlia™</span>
  </a>
  <nav class="apd-nav">
    ${navLink("index.html", "📊 Keywords")}
    ${navLink("competitors.html", "🔍 Competitors")}
    <a href="${GITHUB_ACTIONS}" target="_blank" class="apd-refresh-btn">↻ Refresh Data</a>
  </nav>
</header>`;

  const footer = `
<footer class="apd-footer">
  <div class="footer-inner">
    <img src="${LOGO_SRC}" alt="AI Powered Dahlia" height="28" style="opacity:.7"
         onerror="this.style.display='none'">
    <div class="footer-copy">
      <strong>AI Powered Dahlia™</strong><br>
      © ${new Date().getFullYear()} AI Powered Dahlia. All rights reserved.
      This tool and its outputs are proprietary to AI Powered Dahlia™.
      Unauthorized reproduction or distribution is prohibited.
    </div>
    <div class="footer-meta">
      Data: YouTube Data API v3 &middot; Cache: 24h &middot;
      Score = Volume (40pts) + Competition (40pts) + Recency (20pts)
    </div>
  </div>
</footer>`;

  const styles = `
<style id="apd-nav-styles">
.apd-header {
  background: #6B21A8;
  padding: 14px 32px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  top: 0;
  z-index: 100;
  box-shadow: 0 2px 12px rgba(107,33,168,.4);
}
.apd-logo-link { display:flex; align-items:center; text-decoration:none; }
.apd-logo { height: 36px; }
.apd-logo-text { color:#fff; font-weight:700; font-size:18px; }
.apd-nav { display:flex; align-items:center; gap:8px; }
.nav-link {
  color: #C4B5FD;
  text-decoration: none;
  font-size: 14px;
  font-weight: 500;
  padding: 6px 14px;
  border-radius: 6px;
  transition: background .15s, color .15s;
}
.nav-link:hover { background: rgba(255,255,255,.12); color: #fff; }
.nav-link.nav-active { background: rgba(255,255,255,.18); color: #fff; font-weight: 700; }
.apd-refresh-btn {
  background: #F59E0B;
  color: #1E293B;
  padding: 7px 16px;
  border-radius: 6px;
  font-weight: 700;
  font-size: 13px;
  text-decoration: none;
  margin-left: 8px;
  transition: background .15s;
}
.apd-refresh-btn:hover { background: #FBBF24; }
.apd-footer {
  background: #1E293B;
  color: #C4B5FD;
  margin-top: 40px;
}
.footer-inner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 28px 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  text-align: center;
}
.footer-copy { font-size: 13px; line-height: 1.6; }
.footer-copy strong { color: #fff; }
.footer-meta { font-size: 11px; color: #64748b; }
</style>`;

  // Inject styles into <head>
  document.head.insertAdjacentHTML("beforeend", styles);

  // Inject header at top of body
  document.body.insertAdjacentHTML("afterbegin", header);

  // Inject footer at bottom of body
  document.body.insertAdjacentHTML("beforeend", footer);
});
