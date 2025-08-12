<template>
  <section class="hero" id="hero">
    <div class="overlay" />
    <div class="inner">
      <div class="eyebrow">¿Qué es Pa'pola?</div>
      <h1>Remates de <span>saldos</span> en tiendas cercanas</h1>
      <p class="sub">
        Conectamos <strong>salidas de inventario</strong> (excedentes, últimas unidades y productos con cambio de temporada)
        de comercios locales con compradores que quieren <strong>ahorrar hasta -70%</strong>. ¡Compra bien, ahorra más y ayuda a reducir desperdicio!
      </p>
      <div class="cta">
        <a href="#descargar" class="btn primary">Ver ofertas y descargar</a>
        <a href="mailto:administracion@papolaapp.com?subject=Quiero%20liquidar%20mis%20saldos" class="btn light">Soy tienda: liquidar saldos</a>
      </div>
      <div class="trust">
        <span class="pill">Saldos verificados</span>
        <span class="pill">Comercios locales y a domicilio</span>
        <span class="pill">Ofertas por tiempo limitado</span>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style scoped>
/* Compensa exactamente la altura del AppBar */
.hero{
  margin-top: 104px;                     /* = altura AppBar desktop */
  min-height: calc(92vh - 104px);
  display:grid; place-items:center; position:relative;
  background: url('../assets/web1.jpg') center/cover no-repeat; color:#fff;
  text-align:center; padding: 120px 16px 64px;
}
.overlay{ position:absolute; inset:0; background: linear-gradient(180deg, rgba(11,16,32,.45), rgba(11,16,32,.75)); }
.inner{ position:relative; z-index:1; max-width: 960px; }
.eyebrow{ display:inline-block; padding:6px 12px; margin-bottom:12px; border-radius:999px; background:rgba(255,255,255,.16); backdrop-filter: blur(6px); font-weight:700; letter-spacing:.2px; }
h1{ font-size: clamp(28px, 5vw, 56px); line-height: 1.05; font-weight: 900; margin: 8px 0 14px; }
h1 span{ color: #ffd647; text-shadow: 0 8px 24px rgba(0,0,0,.25); }
.sub{ font-size: clamp(16px, 2.4vw, 20px); opacity: .95; }

.cta{ display:flex; gap:12px; justify-content:center; margin: 22px 0 14px; flex-wrap: wrap; }
.btn{ display:inline-flex; align-items:center; justify-content:center; height:48px; padding:0 20px; border-radius:12px; font-weight:900; text-decoration:none; transition: all .2s ease; }
.btn.primary{ background:#fff; color:#0b1020 !important; border:1px solid rgba(11,16,32,.08); }
.btn.primary:hover{ transform: translateY(-2px); box-shadow: 0 10px 22px rgba(0,0,0,.18); }
.btn.light{ background: rgba(255,255,255,.16); color:#fff !important; border:1px solid rgba(255,255,255,.3); }
.btn.light:hover{ background: rgba(255,255,255,.22); transform: translateY(-2px); }

.trust{ display:flex; gap:8px; justify-content:center; flex-wrap:wrap; margin-top: 14px; }
.pill{ font-size:14px; padding:8px 12px; border-radius:999px; background: rgba(255,255,255,.12); backdrop-filter: blur(6px); border:1px solid rgba(255,255,255,.18); }

@media (max-width: 768px){
  .hero{
    margin-top: 92px;                    /* = altura AppBar mobile */
    min-height: calc(92vh - 92px);
    padding-top: 110px;
  }
}
</style>
