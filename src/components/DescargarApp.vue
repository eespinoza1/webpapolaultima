<template>
  <section class="download" id="descargar">
    <div class="wrap">
      <div class="shots">
        <img src="../assets/imagenes papola/app.png" alt="iOS" class="shot large" />
        <img src="../assets/imagenes papola/app1.png" alt="Android" class="shot" />
      </div>
      <h3>Muy pronto Pa'pola en todas las plataformas móviles</h3>
      <div class="stores">
        <a href="#" class="store"><img src="../assets/imagenes papola/iOS.jpeg" alt="App Store"/></a>
        <a href="#" class="store"><img src="../assets/imagenes papola/playGoogle.jpeg" alt="Google Play"/></a>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style scoped>
:root{ --brand:#1f2ade; }
.download{ background: radial-gradient(1200px 400px at 50% -20%, rgba(31,42,222,.12), transparent), #ffffff; padding: 56px 16px; text-align:center; }
.wrap{ max-width: 1100px; margin:0 auto; }
.shots{ display:flex; justify-content:center; align-items:flex-end; gap:18px; flex-wrap:wrap; margin-bottom: 10px; }
.shot{ width: 260px; height:auto; border-radius: 16px; box-shadow: 0 24px 60px rgba(11,16,32,.16); }
.shot.large{ width: 320px; }

h3{ color:#0b1020; font-weight:900; margin: 12px 0 10px; }
.stores{ display:flex; gap:12px; justify-content:center; flex-wrap:wrap; margin-top: 10px; }
.store{ display:inline-flex; border-radius:12px; overflow:hidden; box-shadow:0 8px 20px rgba(11,16,32,.12); transition: transform .2s ease; }
.store:hover{ transform: translateY(-2px); }
.store img{ width:180px; height:auto; display:block; }
@media (max-width: 560px){ .shot{ width: 200px; } .shot.large{ width: 240px; } .store img{ width:140px; } }
</style>