<template>
  <section class="onboarding">
    <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div v-for="(item, index) in carouselItems" :key="index" :class="{ 'carousel-item': true, active: index === 0 }">
          <div class="row slide" :style="{ backgroundColor: item.backgroundColor }">
            <div class="col-md-6 visual">
              <img :src="item.src" :alt="item.alt" class="art" />
            </div>
            <div class="col-md-6 copy">
              <h3>{{ item.title }}</h3>
              <p>{{ item.description }}</p>
            </div>
          </div>
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Anterior</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Siguiente</span>
      </button>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import one from '../assets/onBoardinOne.svg'
import two from '../assets/onBoardingTwo.svg'
import three from '../assets/onBoardingThree.svg'

const carouselItems = ref([
  {
    src: one,
    alt: 'Saldos → Remates',
    title: 'Saldos que quedaron en tiendas → precios de remate',
    description: 'Publicamos excedentes y últimas unidades para que ahorres fuerte sin sacrificar calidad.',
    backgroundColor: '#f6f8ff',
  },
  {
    src: two,
    alt: 'Cerca de ti',
    title: 'Todo cerca de ti',
    description: 'Descubre ofertas reales en tu zona y recoge en la tienda. Stock y tiempo limitados.',
    backgroundColor: '#eef6ff',
  },
  {
    src: three,
    alt: 'Economía circular',
    title: 'Ahorra y cuida el planeta',
    description: 'Al comprar saldos evitas desperdicio. Economía circular con descuentos de 30–70%.',
    backgroundColor: '#f7fff6',
  },
])
</script>

<style scoped>
.onboarding{ padding: 36px 0 16px; background: linear-gradient(180deg,#ffffff,#f7f9ff); }
.slide{ align-items:center; min-height: 420px; padding: 30px; border-radius: 18px; margin: 0 10px; }
.visual{ display:grid; place-items:center; }
.art{ width: 64%; max-width: 360px; height:auto; }
.copy{ display:flex; flex-direction:column; justify-content:center; padding: 18px 12px; }
.copy h3{ font-size: clamp(20px,3vw,28px); font-weight:900; margin-bottom:6px; color:#0b1020; }
.copy p{ font-size:16px; color:#3a4056; }

@media (max-width: 768px){ .art{ width:72%; } .slide{ min-height: 360px; } }
</style>