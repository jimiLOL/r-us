const webpack = require('webpack')
const path = require("path");

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  srcDir: "src/",

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Ритуальные услуги',
    htmlAttrs: {
      lang: 'ru'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'robots', content: 'noindex' } // только для разработки !
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      // {
      //   rel: "stylesheet",
      //   href:
      //     "https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"
      // }
    ],
    script: [ {
      src: "https://cdnjs.cloudflare.com/ajax/libs/snap.svg/0.5.1/snap.svg-min.js",
      type: "text/javascript",
      defer: true
    }]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~assets/scss/themes.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    {
      src: "~/plugins/inject-ww.js",
      ssr: false
    },
    {
      src: "~/plugins/global-components.js",
      ssr: false
    },
    { src: "~/plugins/notifications.ts", ssr: false },
  ],
  tailwindcss: {
    viewer: false,
  },

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/device',
    '@nuxtjs/composition-api/module',
    '@nuxt/typescript-build',
    '@nuxtjs/fontawesome'
  ],

  fontawesome: {
    icons:{
      solid: ['faHome', 'faTruckFast', 'faBox', 'faEye', 'faClock', 'faArrowRight', 'faCircleDot'],
      // regular: ['faAdjust']
    }
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    ['nuxt-gmaps', { key: 'AIzaSyBRBa5vySluLKd3LwQvusS9w8nVV4UrmeQ' }],
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    plugins: [
      new webpack.ProvidePlugin({
        cash: "cash-dom",
      }),
    ],
    postcss: {
      // Add plugin names as key and arguments as value
      // Install them before as dependencies with npm or yarn
      plugins: {
        // Disable a plugin by passing false as value
        'postcss-custom-properties': false,
        tailwindcss: './tailwind.config.js',
        'postcss-import': {},
        autoprefixer: {},
        // "focus-within-pseudo-class": false,
        // "postcss-custom-properties": false

      },
      preset: {
        // Change the postcss-preset-env settings
        autoprefixer: {
          grid: true
        }
      }
    },
    extend: (config) => {
      const svgRule = config.module.rules.find(rule => rule.test.test('.svg'));

      svgRule.test = /\.(png|jpe?g|gif|webp)$/;


      config.module.rules.push({test: /\.(glsl|vs|fs|vert|frag)$/, use: ['raw-loader','glslify-loader']})
      // config.module.rules.push({
      //   test: require.resolve('snapsvg/dist/snap.svg.js'),
      //   use: 'imports-loader?this=>window,fix=>module.exports=0',
      // });
      // config.resolve.alias['snapsvg'] = 'snapsvg/dist/snap.svg.js';

      config.module.rules.push({
        test: /\.svg$/,
        use: ['babel-loader', 'vue-svg-loader'],
      });
      
    },
  },
  server: {
    port: process.env.PORT, // default: 3000
  },
  ssr: false
}
