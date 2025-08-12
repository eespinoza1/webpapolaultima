<template>
  <header :class="['appbar', { scrolled: isScrolled, open: isOpen }]">
    <div class="bar">
      <a href="#" class="brand">
        <img :src="isScrolled ? logoDark : logoLight" alt="Pa'pola" class="logo" />
        <span class="brand-name"></span>
      </a>

      <!-- Desktop -->
      <nav class="nav">
        <a href="#como-funciona" class="nav-link">Cómo funciona</a>
        <a href="#beneficios" class="nav-link">Beneficios</a>
        <a href="#descargar" class="nav-link">Descargar</a>
      </nav>

      <div class="actions">
        <a
          href="mailto:administracion@papolaapp.com?subject=Quiero%20vender%20mis%20saldos"
          class="btn primary"
        >
          Vender saldos
        </a>
        <button
          class="menu-toggle"
          :aria-expanded="isOpen ? 'true' : 'false'"
          aria-label="Abrir menú"
          @click="isOpen = !isOpen"
        >
          <span></span><span></span><span></span>
        </button>
      </div>
    </div>

    <!-- Mobile -->
    <transition name="drop">
      <nav v-if="isOpen" class="mobile">
        <a href="#como-funciona" @click="close">Cómo funciona</a>
        <a href="#beneficios" @click="close">Beneficios</a>
        <a href="#descargar" @click="close">Descargar</a>
        <a
          href="mailto:administracion@papolaapp.com?subject=Quiero%20vender%20mis%20saldos"
          class="sell"
          @click="close"
        >Vender saldos</a>
      </nav>
    </transition>
    <div v-if="isOpen" class="backdrop" @click="close" />
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import logoDark from '../assets/Pa´Pola-Logo-Transparente.png'
import logoLight from '../assets/Pa´Pola-Logo-Transparente-BLANCO.png'

defineProps({ isScrolled: { type: Boolean, default: false } })
const isOpen = ref(false)
const close = () => (isOpen.value = false)

const onResize = () => { if (window.innerWidth >= 992) isOpen.value = false }
onMounted(() => window.addEventListener('resize', onResize))
onUnmounted(() => window.removeEventListener('resize', onResize))
</script>

<style scoped>
/* Alto del AppBar más grande */
.appbar{
  position: fixed; top: 0; left: 0; right: 0; width: 100%;
  height: 104px; /* <- MÁS ALTO */
  background: linear-gradient(135deg, rgba(16,23,168,.75), rgba(31,42,222,.75));
  backdrop-filter: saturate(160%) blur(12px);
  color: #fff; z-index: 1100; transition: background .25s ease, box-shadow .25s ease, color .25s ease;
  border-bottom: 0; /* sin línea blanca */
}
.appbar.scrolled{
  background: #fff; color:#0b1020;
  box-shadow: 0 8px 24px rgba(11,16,32,.08);
  border-bottom: 1px solid rgba(11,16,32,.06);
}

.bar{
  height: 104px;            /* síncrono con el header */
  max-width: 1200px; margin:0 auto; padding: 0 20px;
  display:flex; align-items:center; justify-content:space-between; gap:12px;
}

.brand{ display:flex; gap:12px; align-items:center; text-decoration:none; color:inherit; }
.logo{ height: 54px; width:auto; }
.brand-name{ font-weight:800; letter-spacing:.2px; font-size:18px; }

.nav{ display:flex; gap:22px; align-items:center; }
.nav-link{ color: currentColor; text-decoration:none; opacity:.9; font-weight:700; }
.nav-link:hover{ opacity:1; transform: translateY(-1px); }

.actions{ display:flex; gap:12px; align-items:center; }
.btn{
  display:inline-flex; align-items:center; justify-content:center; height:44px;
  padding:0 18px; border-radius:12px; font-weight:900; text-decoration:none; transition: all .2s ease;
}
.btn.primary{ background:#1f2ade; color:#fff; box-shadow: 0 8px 20px rgba(31,42,222,.25); }
.btn.primary:hover{ transform: translateY(-1px); box-shadow: 0 10px 24px rgba(31,42,222,.32); }

/* Burger */
.menu-toggle{
  display:none; width:46px; height:44px; border-radius:12px; border:1px solid currentColor;
  background: transparent; cursor: pointer; align-items:center; justify-content:center; gap:5px;
}
.menu-toggle span{ display:block; width:20px; height:2px; background: currentColor; }

/* Mobile menu */
.mobile{
  position: fixed; top: 104px; left:0; right:0;
  background:#fff; color:#0b1020; border-bottom:1px solid rgba(11,16,32,.06);
  box-shadow: 0 16px 36px rgba(11,16,32,.12);
  display:flex; flex-direction:column; padding:10px 16px; z-index:1099;
}
.mobile a{ padding:12px 6px; text-decoration:none; color:inherit; font-weight:700; border-radius:10px; }
.mobile a:hover{ background: rgba(11,16,32,.04); }
.mobile .sell{ margin-top:4px; background:#1f2ade; color:#fff; text-align:center; }

.backdrop{ position: fixed; inset: 104px 0 0 0; background: rgba(0,0,0,.2); z-index:1098; }

.drop-enter-from{ opacity:0; transform: translateY(-8px); }
.drop-enter-active{ transition: all .18s ease; }
.drop-leave-to{ opacity:0; transform: translateY(-8px); }
.drop-leave-active{ transition: all .12s ease; }

/* Responsive */
@media (max-width: 992px){
  .nav{ display:none; }
  .menu-toggle{ display:inline-flex; }
}

/* Alto un poco menor en pantallas chicas para ganar contenido */
@media (max-width: 768px){
  .appbar{ height: 92px; }
  .bar{ height: 92px; }
  .mobile{ top: 92px; }
  .backdrop{ inset: 92px 0 0 0; }
  .logo{ height: 48px; }
}
</style>
