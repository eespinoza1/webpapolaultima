<template>
  <div>
    <AppBar :isScrolled="isScrolled" />
    <div class="header"><Header /></div>
    <Section :class="fadeIn" />
    <Store :class="fadeIn" />
    <Content :class="fadeIn" />
    <Descargar id="descargar" />
    <Footer :class="fadeIn" />
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'
import AppBar from '../components/AppBar.vue'
import Content from '../components/Content.vue'
import Descargar from '../components/DescargarApp.vue'
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import Section from '../components/Section.vue'
import Store from '../components/Store.vue'

const isScrolled = ref(false)
const handleScroll = () => { isScrolled.value = window.scrollY > 0 }

onMounted(() => { window.addEventListener('scroll', handleScroll) })
onUnmounted(() => { window.removeEventListener('scroll', handleScroll) })

const fadeIn = computed(() => isScrolled.value ? 'fade-in' : '')
</script>

<style scoped>
/* Sin margen extra debajo del AppBar */
.header{ margin-top: 0; }

.fade-in{ animation: fade .6s ease both; }
@keyframes fade{
  from{ opacity:0; transform: translateY(6px);}
  to{ opacity:1; transform: translateY(0);}
}

/* Ya no necesitamos el ajuste en mobile */
@media (max-width:768px){
  .header{ margin-top: 0; }
}
</style>