<template>
  <div>
    <section class="prestasi-container py-10 bg-gray-100">
      <div class="container mx-auto px-4 jarak">
        <h1 class="text-center text-3xl font-bold mb-8">Prestasi Kami</h1>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-3">
          <!-- Prestasi 1 -->
          <div class="prestasi-item bg-white rounded-lg shadow-md overflow-hidden">
            <img src="/assets/img/expocreannnova.jpg" alt="Prestasi" class="w-full h-56 object-cover">
            <div class="p-4">
              <h3 class="text-xl font-semibold mb-2">Juara 1 Lomba Sains</h3>
              <p class="text-gray-700">SMKN 4 Tasikmalaya meraih Juara 1 dalam Lomba Sains tingkat Provinsi Jawa Barat.</p>
            </div>
          </div>

          <!-- Prestasi 2 -->
          <div class="prestasi-item bg-white rounded-lg shadow-md overflow-hidden">
            <img src="/assets/img/ujiansekolah.jpg" alt="Prestasi" class="w-full h-56 object-cover">
            <div class="p-4">
              <h3 class="text-xl font-semibold mb-2">Juara 2 Lomba Desain Grafis</h3>
              <p class="text-gray-700">Siswa kami berhasil meraih Juara 2 dalam lomba desain grafis tingkat Nasional.</p>
            </div>
          </div>

          <!-- Prestasi 3 -->
          <div class="prestasi-item bg-white rounded-lg shadow-md overflow-hidden">
            <img src="/assets/img/honda.jpeg" alt="Prestasi" class="w-full h-56 object-cover">
            <div class="p-4">
              <h3 class="text-xl font-semibold mb-2">Juara 3 Lomba Robotik</h3>
              <p class="text-gray-700">Tim Robotik kami meraih Juara 3 dalam kompetisi robotik internasional.</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
/* Styling untuk halaman prestasi */
.prestasi-container {
  background-color: #f9fafb;
}

.jarak {
  margin-top: 90px;
}

.prestasi-item {
  transition: transform 0.3s ease;
}

.prestasi-item:hover {
  transform: translateY(-10px);
}

.prestasi-item img {
  object-fit: cover;
}

h1 {
  color: #333;
}

h3 {
  color: #2d3748;
}
</style>
