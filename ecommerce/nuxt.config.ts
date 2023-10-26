// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss"],

  tailwindcss: {
    cssPath: "~/assets/css/tailwind.css",
    configPath: "~/tailwind.config.ts",
  },
  
  app: {
    head: {
      link: [
        { 
          rel: "stylesheet", href: "https://cdn.jsdelivr.net/npm/remixicon@3.5.0/fonts/remixicon.css" 
        }
      ],
    }
  },
})
