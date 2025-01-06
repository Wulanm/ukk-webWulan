export default defineNuxtConfig({
  compatibilityDate: '2024-12-11',
  devtools: { enabled: false },
  css: ["bootstrap/dist/css/bootstrap.min.css", "bootstrap-icons/font/bootstrap-icons.css"],
  
  app: {
    head: {
      script: [
        { src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.2/dist/js/bootstrap.bundle.min.js'}
      ]
    }
  },
});
