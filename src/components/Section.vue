<template>
  <section class="how-it-works" id="como-funciona">
    <h2>¿Cómo funciona Pa'pola?</h2>
    <p class="lead">Así de simple: las tiendas publican sus <strong>saldos</strong> y tú aprovechas los <strong>remates</strong> cerca de ti.</p>

    <div class="grid">
      <article class="card">
        <span class="step">1</span>
        <img src="../assets/imagenes papola/Onboarding1.png" alt="Descarga" />
        <h3>Descarga y crea tu cuenta</h3>
        <p>Disponible en App Store y Google Play. Te geolocalizamos para mostrarte ofertas reales en tu zona.</p>
      </article>

      <article class="card">
        <span class="step">2</span>
        <img src="../assets/imagenes papola/Onboarding2.png" alt="Explora" />
        <h3>Explora saldos rematados</h3>
        <p>Últimas unidades, excedentes o cambio de temporada. Mismo producto, precio <strong>muy</strong> bajo.</p>
      </article>

      <article class="card">
        <span class="step">3</span>
        <img src="../assets/imagenes papola/3.png" alt="Compra" />
        <h3>Compra al instante</h3>
        <p>Reserva en la app y paga en tienda o como indique el comercio. Ofertas por tiempo y stock limitado.</p>
      </article>

      <article class="card">
        <span class="step">4</span>
        <img src="../assets/imagenes papola/descargar.png" alt="Disfruta" />
        <h3>Disfruta y ahorra</h3>
        <p>Ahorra hasta <strong>30–70%</strong> y apoya la economía circular reduciendo desperdicio.</p>
      </article>
    </div>
  </section>
</template>

<script setup></script>

<style scoped>
:root{ --brand:#1f2ade; --ink:#0b1020; }
.how-it-works{ padding: 72px 16px; text-align:center; background: linear-gradient(180deg, #f7f9ff, #ffffff); }
h2{ font-size: clamp(24px,3.6vw,36px); font-weight:900; color:var(--ink); margin-bottom: 8px; }
.lead{ max-width: 820px; margin: 0 auto 26px; color:#3a4056; }

.grid{ display:grid; grid-template-columns: repeat(4,1fr); gap:22px; max-width: 1200px; margin: 0 auto; }
.card{ background:#fff; border:1px solid rgba(11,16,32,.06); border-radius:16px; padding:18px; box-shadow:0 8px 24px rgba(11,16,32,.06); transition: transform .2s ease, box-shadow .2s ease; position:relative; overflow:hidden; }
.card:hover{ transform: translateY(-4px); box-shadow:0 16px 40px rgba(11,16,32,.12); }
.step{ position:absolute; top:12px; left:12px; width:36px; height:36px; display:grid; place-items:center; border-radius:10px; background: rgba(31,42,222,.1); color: var(--brand); font-weight:900; }
.card img{ width: 88px; height:auto; margin: 12px auto; display:block; }
.card h3{ font-size:18px; margin:8px 0 6px; font-weight:800; color:var(--ink); }
.card p{ font-size:14px; color:#445; }

@media (max-width: 1024px){ .grid{ grid-template-columns: repeat(2,1fr);} }
@media (max-width: 560px){ .grid{ grid-template-columns: 1fr;} }
</style>