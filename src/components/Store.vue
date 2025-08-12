<template>
  <section class="benefits" id="beneficios">
    <h2>¡Beneficios para todos!</h2>
    <div class="wrapper">
      <article class="benefit">
        <img src="../assets/imagenes papola/store.jpeg" alt="Tienda feliz" />
        <h3>Para tiendas y restaurantes</h3>
        <ul>
          <li><strong>Liquidez rápida:</strong> convierte tus <em>saldos</em> en ventas hoy.</li>
          <li><strong>Reduce pérdidas:</strong> mueve excedentes y últimas unidades.</li>
          <li><strong>Sin complicarte:</strong> publica desde el móvil en minutos.</li>
          <li><strong>Clientes nuevos:</strong> visibilidad local en la app.</li>
        </ul>
      </article>

      <article class="benefit">
        <img src="../assets/imagenes papola/client.jpeg" alt="Cliente feliz" />
        <h3>Para compradores</h3>
        <ul>
          <li><strong>Descuentos reales:</strong> 30–70% menos por ser <em>saldos</em>.</li>
          <li><strong>Todo cerca de ti:</strong> ofertas de comercios locales.</li>
          <li><strong>Compra segura:</strong> información clara de stock y vigencia.</li>
          <li><strong>Impacto positivo:</strong> menos desperdicio, más ahorro.</li>
        </ul>
      </article>
    </div>
  </section>
</template>

<script setup></script>

<style scoped>
:root{ --brand:#1f2ade; --ink:#0b1020; }
.benefits{ padding:72px 16px; background:#fff; text-align:center; }
.benefits h2{ font-size: clamp(24px,3.6vw,36px); font-weight:900; color:var(--ink); margin-bottom: 10px; }
.wrapper{ display:grid; grid-template-columns: repeat(2,1fr); gap:24px; max-width:1200px; margin:0 auto; align-items:stretch; }
.benefit{ border:1px solid rgba(11,16,32,.06); border-radius:18px; padding:24px; box-shadow:0 8px 24px rgba(11,16,32,.06); text-align:left; }
.benefit img{ width:100%; height:220px; object-fit:cover; border-radius:12px; margin-bottom:14px; }
.benefit h3{ font-size:20px; font-weight:800; color:var(--ink); margin-bottom:8px; }
.benefit ul{ padding-left:18px; color:#3a4056; }
.benefit li{ margin: 10px 0; }
@media (max-width: 900px){ .wrapper{ grid-template-columns:1fr; } }
</style>