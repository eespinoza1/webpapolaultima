<template>
  <footer class="footer w-100 d-flex justify-content-center pt-5">
    <div class="footer-container d-flex justify-content-between w-100">
      <div class="footer-content text-left">
        <p>
          <i class="fas fa-envelope"></i> Correo:
          <a href="mailto:administracion@papolaapp.com"
            >administracion@papolaapp.com</a
          >
        </p>
        <p>
          <i class="fab fa-linkedin"></i> LinkedIn:
          <a href="https://www.linkedin.com/company/papola" target="_blank"
            >Pa'pola LinkedIn</a
          >
        </p>
        <p>
          <i class="fab fa-tiktok"></i> TikTok:
          <a href="https://www.tiktok.com/@papola.vzla" target="_blank"
            >@papola.vzla</a
          >
        </p>
        <p>
          <i class="fab fa-instagram"></i> Instagram:
          <a href="https://www.instagram.com/papola.vzla" target="_blank"
            >@papola.vzla</a
          >
        </p>
        <p>© 2024 Pa'pola. Todos los derechos reservados.</p>
        <p>
          <router-link to="/terminos">Ir a Términos y Condiciones</router-link>
        </p>
        <p>
          <router-link to="/politica">Politica y Privacidad</router-link>
        </p>
      </div>
      <div class="footer-images">
        <img
          src="../assets/Pa´Pola-Logo-Transparente-BLANCO.png"
          alt="Client Logo"
          class="footer-logo"
        />
        <hr style="width: 100%; color: #ffff" />
        <img
          src="../assets/imagenes papola/panas.png"
          alt="Store Logo"
          class="footer-logo"
        />
      </div>
    </div>
  </footer>
</template>

<script setup></script>

<style scoped>
.footer {
  background-color: #303133;
  color: #fff;
  padding: 10px 0;
}

.footer-container {
  max-width: 85%;
  display: flex;
  justify-content: space-between;
  width: 100%;
  flex-wrap: wrap;
}

.footer-content {
  text-align: left;
  margin-top: 50px;
  flex: 1;
  min-width: 250px;
}

.footer-content p {
  margin: 10px 0;
}

.footer-content a {
  color: #fff;
  text-decoration: underline;
}

.footer-content a:hover {
  text-decoration: none;
}

.footer-images {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  min-width: 150px;
}

.footer-logo {
  max-width: 150px;
  margin-bottom: 10px;
}

@media screen and (max-width: 768px) {
  .footer-container {
    flex-direction: column;
    align-items: center;
  }

  .footer-content {
    text-align: center;
    margin-bottom: 20px;
    margin-top: 0px;
  }

  .footer-images {
    align-items: center;
  }
}
</style>
