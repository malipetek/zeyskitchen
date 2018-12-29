// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import { store } from "~/store/index.js";
// import firebase from 'firebase/app'

import Vuetify, {
  VApp,
  VNavigationDrawer,
  VFooter,
  VList,
  VBtn,
  VIcon,
  VGrid,
  VToolbar,
  VAvatar,
  VDivider,
  VCard,
  transitions
} from "vuetify/lib";
import { Ripple } from "vuetify/lib/directives";

Vue.use(Vuetify, {
  components: {
    VApp,
    VNavigationDrawer,
    VFooter,
    VList,
    VBtn,
    VIcon,
    VGrid,
    VToolbar,
    VAvatar,
    VDivider,
    VCard,
    transitions
  },
  theme: {
    primary: "#E53935",
    secondary: "#EF5350",
    accent: "#EF5350",
    error: "#D50000",
    warning: "#FFB300",
    info: "#2196f3",
    success: "#4caf50"
  }
});
/* eslint-disable no-new */
