<template>
  <section class="legal-page container">
    <h1>TÉRMINOS Y CONDICIONES DE USO DE PA’POLA APP</h1>
    <article class="paper">
      <!-- Contenido existente de Términos y Condiciones -->
      <slot />
    </article>
    <router-link to="/" class="back">Volver</router-link>
  </section>
</template>

<script setup></script>

<style scoped>
:root{ --brand:#1f2ade; --ink:#0b1020; }
.container{ padding: 72px 16px; }
.paper{ background:#fff; border:1px solid rgba(11,16,32,.08); border-radius: 16px; padding: 24px; box-shadow: 0 16px 40px rgba(11,16,32,.06); }
.back{ display:inline-block; margin-top: 16px; padding: 10px 16px; border-radius: 10px; background: var(--brand); color:#fff; text-decoration:none; }
</style>