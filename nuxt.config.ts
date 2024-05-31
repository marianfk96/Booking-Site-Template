// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      title: 'Static Booking Site',
      meta: [
        {name: 'description', content: 'Segment of a static booking site created with Nuxt3'}
      ],
      link: [
        {rel: 'stylesheet', href:'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css', integrity:
          'sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A==',
          crossorigin: 'anonymous', referrerpolicy: 'no-referrer'
         }
      ]
    }
  },
  css: ["@/assets/scss/styles.scss"],
})
