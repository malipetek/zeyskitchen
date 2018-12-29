import Vue from "vue";
import Vuex from "vuex";
import fetch from "isomorphic-fetch";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import VueFire from "vuefire";

Vue.use(Vuex);

const fb_config = {
  apiKey: "AIzaSyCdBRtNu73Kqh1es7zbeF1JZrZUg_C9_qE",
  authDomain: "yemek-tarifleri-kitabi.firebaseapp.com",
  databaseURL: "https://yemek-tarifleri-kitabi.firebaseio.com",
  projectId: "yemek-tarifleri-kitabi",
  storageBucket: "yemek-tarifleri-kitabi.appspot.com",
  messagingSenderId: "522693250446"
};
!firebase.apps.length && firebase.initializeApp(fb_config);

var auth = firebase.auth();

Vue.use(VueFire);

var db = firebase.firestore();

db.settings({
  timestampsInSnapshots: true
});

export const store = new Vuex.Store({
  state: {
    son10tarif: null
  },
  mutations: {
    set_son10tarif(state, payload) {
      state.son10tarif = payload;
    },
    set_user(state, payload) {
      state.user = payload;
    }
  },
  actions: {
    load_son10tarif({ commit }, payload) {
      db.collection("tarifler")
        .limit(10)
        .get()
        .then(tarifler => {
          var ar = [];
          tarifler.forEach(tarif => {
            var id = tarif.id;
            tarif = tarif.data();
            ar.push({
              id,
              baslik: tarif["başlık"],
              aciklama: tarif["açıklama"],
              coverImage: tarif["kapakresmi"]
            });
          });
          commit("set_son10tarif", ar);
        });
    },
    get_user({ commit }, payload) {
      commit("set_user", auth.currentUser);
    }
  },
  getters: {
    son10tarif(state) {
      return state.son10tarif;
    },
    user(state) {
      return state.user;
    }
  }
});
