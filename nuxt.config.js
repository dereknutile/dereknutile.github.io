import pkg from './package'

const { CI_PAGES_URL } = process.env
const base = CI_PAGES_URL && new URL(CI_PAGES_URL).pathname

export default {
  // Disable server-side rendering (https://go.nuxtjs.dev/ssr-mode)
  ssr: false,

  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'dereknutile.github.io',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }
    ]
  },

  /*
  ** Customize the generated output folder
  */
  generate: {
    dir: 'public'
  },
  
  /*
  ** Customize the base url
  */
  router: {
  base: ''
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    'vue-slick-carousel/dist/vue-slick-carousel.css',
  ],
  
  plugins: [
    { src: './plugins/vue-slick-carousel.js' },
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // Simple usage
    '@nuxtjs/component-cache',
  ],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  }
}
