<template>
  <v-container fluid>
    <v-slide-y-transition mode="out-in">
      <v-layout column align-center class="mb-5">
        <img
          src="@/assets/logo.png"
          alt="Vuetify.js"
          class="mb-1"
          style="width: 150px"
        />
        <h1>Anasayfa</h1>
        <v-btn color="orange lighten-1">
          <v-icon>library_books</v-icon>
          &nbsp;&nbsp;Tarif Defterim
        </v-btn>
        <v-btn color="blue lighten-1">
          <v-icon> search </v-icon>
          &nbsp;&nbsp;Tarif Ara
        </v-btn>
      </v-layout>
    </v-slide-y-transition>
    <v-layout>
      <v-flex row sm12 xs12 md12 lg6 offset-lg3>
        <h2>Son Tarifler</h2>
        <v-card class="mb-2" v-for="(tarif, i) in son10tarif" :key="i">
          <v-card-media
            height="100"
            :src="
              tarif.coverImage ||
                '/static/img/defaults/def-tarif-card-image.gif'
            "
          ></v-card-media>
          <v-card-title primary-title>
            <h3 style="text-transform: capitalize;">{{ tarif.baslik }}</h3>
          </v-card-title>
          <v-card-text>
            <div>{{ tarif.aciklama }}</div>
          </v-card-text>
          <v-card-actions>
            <v-btn :to="'/tarif/' + tarif.baslik"> Görüntüle </v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
    <footer><small> </small></footer>
  </v-container>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
<script>
import { store } from "../store/index.js";

store.dispatch("load_son10tarif");
export default {
  computed: {
    son10tarif() {
      return this.$store.getters.son10tarif;
    }
  }
};
</script>
