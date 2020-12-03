const path = require('path')

export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)



  dev: process.env.NODE_ENV !== 'production',
  env: {
    baseURL: {
      development: "http://203.195.144.87:3100/",
      production: "http://203.195.144.87:3100/"
    },
  },
  head: {
    title: 'my-blog',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    '@/plugins/api',
    '@/plugins/interceptor',
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/style-resources'
  ],

  styleResources: {
    less: [
      './styles/*.less', // 自己项目中的样式文件的路径
    ]
  },

  router: {
    extendRoutes(routes, resolve) {
    }
  },

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {
    // proxy: true
  },

  proxy: {
    // '/api': "http://10.255.209.23:3030"
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {

  },
  alias: {
    '@c': path.resolve(__dirname, './components'),
    '@imgs': path.resolve(__dirname, './assets/imgs')
  },

  server: {
    port: 5000, // default: 3000
    host: '0.0.0.0' // default: localhost
  }
}
