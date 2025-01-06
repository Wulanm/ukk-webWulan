<template>
  <div>
    <!-- Footer -->
    <footer class="bg-green-600 text-white py-10 mt-10">
      <div class="container mx-auto px-4">
        <div class="flex flex-wrap justify-between items-start">
          <!-- Alamat Section -->
          <div class="w-full md:w-1/4 mb-6 md:mb-0 text-left">
            <h2 class="font-bold mb-2">Alamat</h2>
            <p>Jl.Depok<br>Kel.Sukamenak<br>Kec.Purbaratu<br>Kota Tasikmalaya 46196</p>
          </div>

          <!-- Kontak Section -->
          <div class="w-full md:w-1/4 mb-6 md:mb-0 text-left">
            <h2 class="font-bold mb-2">Kontak</h2>
            <p>+62265312059<br>info@smkn4-tsm.sch.id</p>
          </div>

          <!-- Ikuti Kami Section -->
          <div class="w-full md:w-1/4 mb-6 md:mb-0 text-left">
            <h2 class="font-bold mb-2">Ikuti Kami</h2>
            <p><a href="https://www.facebook.com/pages/Smkn%204%20Tasikmalaya/446668765512684/" class="social-link">Facebook</a></p>
            <p><a href="https://x.com/i/flow/login?redirect_after_login=%2F4_smkn" class="social-link">Twitter</a></p>
            <p><a href="https://www.instagram.com/p/DDEmekEJrh4/?img_index=1" class="social-link">Instagram</a></p>
            <p><a href="https://x.com/i/flow/login?redirect_after_login=%2F4_smkn" class="social-link">YouTube</a></p>
          </div>

          <!-- Tautan Section -->
          <div class="w-full md:w-1/4 mb-6 md:mb-0 text-left">
            <h2 class="font-bold mb-2">Tautan</h2>
            <p><a href="https://www.kemdikbud.go.id/" class="external-link">Kemdikbud</a></p>
            <p><a href="https://disdik.jabarprov.go.id/" class="external-link">Disdik Jabar</a></p>
            <p><a href="https://disdik.tasikmalayakota.go.id/" class="external-link">Disdik Kota Tasikmalaya</a></p>
            <p><a href="https://belajar.id/" class="external-link">Belajar.id</a></p>
          </div>
        </div>

        <!-- Footer Bottom Section -->
        <div class="border-t border-white mt-6 pt-4 text-center">
          <p>©SMKN 4 Tasikmalaya. All rights reserved.</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'WelcomePage'
};
</script>

<style scoped>
/* Styling untuk footer */
.bg-green-600 {
  background-color: #338ba6e2;
}

.text-white {
  color: #ffffff;
}

.container {
  max-width: 1280px;
}

.flex {
  display: flex;
  flex-wrap: wrap;
}

.justify-between {
  justify-content: space-between;
}

.items-start {
  align-items: flex-start; /* Untuk menjaga elemen sejajar di atas */
}

.text-left {
  text-align: left; /* Menjaga teks rata kiri */
}

.font-bold {
  font-weight: 700;
}

.mb-2 {
  margin-bottom: 0.5rem;
}

.mb-6 {
  margin-bottom: 1.5rem;
}

.pt-4 {
  padding-top: 1rem;
}

.border-t {
  border-top-width: 1px;
}

.border-white {
  border-color: #ffffff;
}

/* Styling untuk tautan */
.social-link, .external-link {
  text-decoration: none;
  color: inherit;
}

.social-link:hover, .external-link:hover {
  text-decoration: underline;
  color: #fff;
}
</style>
