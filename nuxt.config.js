import { resolve } from "path";
import colors from "vuetify/es5/util/colors";

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: "%s - short-vue2",
    title: "short-vue2",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
  },
  alias: {
    "@": resolve(__dirname, "./"),
    "@assets": resolve(__dirname, "./assets/"),
    "@images": resolve(__dirname, "./assets/images"),
    "@scss": resolve(__dirname, "./assets/scss"),
    "@components": resolve(__dirname, "./components"),
    "@data": resolve(__dirname, "./data"),
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "normalize.css/normalize.css",
    "material-symbols/index.css",
    "@egjs/vue-flicking/dist/flicking.css",
    "material-design-icons-iconfont/dist/material-design-icons.css",
    "video.js/dist/video-js.css",
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    "@nuxtjs/vuetify",
  ],
  base: "/short-vue/",
  router: {
    base: "/short-vue/",
  },
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ["nuxt-mobile"],

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ["~/assets/variables.scss"],
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
        },
      },
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
};
