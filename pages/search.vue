import 'vuetify';
<template>
  <div class="container">
    <div>
      <h1>Tarif Ara</h1>
      <label for="search"></label>
      <v-text-field id="search" type="text"> </v-text-field>
      <p><nuxt-link to="/" class="button--grey">Back home</nuxt-link></p>
    </div>
  </div>
</template>

<script>
export default {
  asyncData() {
    return {
      name: process.server ? "server" : "client"
    };
  }
};
</script>

<style scoped>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
h1 {
  font-weight: 400;
}
.name {
  color: #3b8070;
}
p {
  margin-top: 20px;
}
</style>
