<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <div class="d-flex align-items-center">
          <img src="/assets/img/logo.png" alt="" width="70" height="70" class="me-2" />
          <h6 class="logo-text">SMK NEGRI 4 TASIKMALAYA</h6>
        </div>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <nuxt-link to="/" class="nav-link" href="#">Beranda</nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link to="/1/profil" class="nav-link" href="#">Profil</nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link to="/ekstra/eskul" class="nav-link">Ekstrakulikuler</nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link to="/galery/foto" class="nav-link">Galeri</nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link to="/pres/prestasi/" class="nav-link">Prestasi</nuxt-link>
            </li>
      
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1030; /* Agar navbar tetap di atas elemen lain */
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1); /* Opsional untuk memberi bayangan */
}
body {
  padding-top: 80px; /* Sesuaikan dengan tinggi navbar */
}
</style>
