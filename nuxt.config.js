import pkg from "./package.json";

import VuetifyLoaderPlugin from "vuetify-loader/lib/plugin";

export default {
  mode: "universal",

  /*
   ** Headers of the page
   */
  head: {
    title: pkg.name,
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: pkg.description }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
    link: [{ rel: "stylesheet", type: "text/css", href: "https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900|Material+Icons" }]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#3b8070" },

  /*
   ** Global CSS
   */
  css: ["assets/style/app.styl"],

  /*
   ** Plugins to load before mounting the App
   */

  plugins: ["plugins/vuetify.js"],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    "@nuxtjs/axios"
  ],
  /*
   ** Axios module configuration
   */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    plugins: [new VuetifyLoaderPlugin()],
    transpile: [/^vuetify/],
    extend(config, ctx) {
      if (process.server) {
        config.externals = [
          nodeExternals({
            whitelist: [/^vuetify/]
          })
        ];
      }
    }
  }
};
