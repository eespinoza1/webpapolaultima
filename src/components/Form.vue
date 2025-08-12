<template>
  <section class="merchant">
    <div class="container">
      <div class="art">
        <img src="../assets/panas.png" alt="Registrar tienda" />
      </div>
      <form @submit.prevent="submitForm" class="card">
        <h3>Registra tu comercio y liquida tus <em>saldos</em></h3>
        <div class="row">
          <label>Nombre de la Tienda
            <input v-model="formData.nombreTienda" type="text" required placeholder="Ej: Arepas La 9na"/>
          </label>
          <label>Categoría
            <select v-model="formData.categoria" required>
              <option disabled value="">Seleccione una categoría</option>
              <option>Comida</option>
              <option>Bebidas</option>
              <option>Panadería</option>
              <option>Supermercado</option>
              <option>Ropa/Accesorios</option>
              <option>Electrodomésticos</option>
            </select>
          </label>
        </div>
        <div class="row">
          <label>Teléfono
            <input v-model="formData.telefono" type="tel" required placeholder="Ej: +58 414 000 0000"/>
          </label>
          <label>Dirección
            <input v-model="formData.direccion" type="text" required placeholder="Calle, ciudad"/>
          </label>
        </div>
        <div class="row">
          <label>Correo
            <input v-model="formData.correo" type="email" required placeholder="ventas@tu-tienda.com"/>
          </label>
          <label>¿Qué saldos deseas rematar?
            <input v-model="formData.productos" type="text" placeholder="Ej: combos del día, últimas unidades, etc."/>
          </label>
        </div>
        <div class="actions">
          <button type="submit" class="btn">Registrar</button>
        </div>
      </form>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const formData = ref({ nombreTienda:'', categoria:'', telefono:'', direccion:'', correo:'', productos:'' })

const submitForm = () => {
  alert('¡Gracias! Te contactaremos para activar tus ofertas de saldos.');
}
</script>

<style scoped>
:root{ --brand:#1f2ade; --ink:#0b1020; }
.merchant{ background: linear-gradient(180deg, #f7f9ff, #ffffff); padding: 56px 16px; }
.container{ max-width: 1100px; margin:0 auto; display:grid; grid-template-columns: 1fr 1fr; gap:24px; align-items:stretch; }
.art{ display:grid; place-items:center; }
.art img{ max-width: 92%; border-radius: 16px; box-shadow: 0 16px 48px rgba(11,16,32,.12); }
.card{ background:#fff; border:1px solid rgba(11,16,32,.08); border-radius: 18px; padding: 20px; box-shadow:0 12px 36px rgba(11,16,32,.08); }
.card h3{ margin:6px 0 12px; font-weight:900; color:var(--ink); }
.row{ display:grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-bottom:10px; }
label{ display:flex; flex-direction:column; gap:6px; font-weight:700; color:#2b3045; }
input, select{ height:44px; border-radius:12px; border:1px solid rgba(11,16,32,.12); padding: 0 12px; font-size:14px; }
input:focus, select:focus{ outline:none; border-color: var(--brand); box-shadow: 0 0 0 3px rgba(31,42,222,.12); }
.actions{ display:flex; justify-content:center; margin-top: 8px; }
.btn{ background: var(--brand); color:#fff; border:none; height:44px; padding:0 18px; border-radius:12px; font-weight:900; cursor:pointer; box-shadow: 0 12px 24px rgba(31,42,222,.25); }
.btn:hover{ transform: translateY(-1px); }

@media (max-width: 900px){ .container{ grid-template-columns:1fr; } .row{ grid-template-columns:1fr; } .art{ order:2 } }
</style>