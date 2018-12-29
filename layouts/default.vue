<template>
  <v-app dark>
    <v-navigation-drawer
      persistent
      :clipped="clipped"
      v-model="drawer"
      enable-resize-watcher
      fixed
      app
    >
      <v-list>
        <v-list-tile
          v-for="(item, i) in items"
          :to="'/tarif/' + (item.handle || 'default-tarif')"
          :key="i"
          :color="item.color"
        >
          <v-list-tile-action>
            <v-icon :color="item.color">{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-title
            :color="item.color"
            :class="'text--' + item.color.replace(' ', '-')"
          >
            <div class="subheading">{{ item.title }}</div>
          </v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar
      app
      :clipped-left="clipped"
      color="primary"
      class="white--text"
      dark
    >
      <v-toolbar-side-icon
        @click.stop="drawer = !drawer;"
      ></v-toolbar-side-icon>
      <!--
        <v-btn icon class="white--text" @click.stop="miniVariant = !miniVariant">
          <v-icon v-html="miniVariant ? 'chevron_right' : 'chevron_left'"></v-icon>
        </v-btn>
      -->
      <!--
        <v-btn class="white--text" icon @click.stop="clipped = !clipped">
          <v-icon>web</v-icon>
        </v-btn>
      -->
      <!--
        <v-btn class="white--text" icon @click.stop="fixed = !fixed">
          <v-icon>remove</v-icon>
        </v-btn>
      -->
      <v-btn color="white" flat to="/"> {{ title }} </v-btn>
      <v-spacer></v-spacer>
      <v-avatar
        :size="45"
        color="blue lighten-1"
        @click.stop="rightDrawer = !rightDrawer;"
      >
        <img src="@/assets/def-avatar.png" alt="avatar" />
      </v-avatar>
    </v-toolbar>
    <v-content> <nuxt /> </v-content>
    <v-navigation-drawer temporary right v-model="rightDrawer" fixed app>
      <v-list>
        <v-list-tile>
          <v-list-tile-action>
            <v-avatar
              :size="40"
              color="blue lighten-1"
              @click.stop="rightDrawer = !rightDrawer;"
            >
              <img src="@/assets/def-avatar.png" alt="avatar" />
            </v-avatar>
          </v-list-tile-action>
          <v-list-tile-title class="px-2"> <h3>Hesabım</h3> </v-list-tile-title>
        </v-list-tile>
        <v-divider></v-divider>
      </v-list>

      <v-list>
        <v-list-tile to="/hesap/" v-if="user">
          <v-list-tile-action> <v-icon> settings </v-icon> </v-list-tile-action>
          <v-list-tile-title class=""> Hesabım </v-list-tile-title>
        </v-list-tile>
        <v-list-tile to="/hesap/sign-in">
          <v-list-tile-action> <v-icon> person </v-icon> </v-list-tile-action>
          <v-list-tile-title class=""> Giriş Yap </v-list-tile-title>
        </v-list-tile>
        <v-list-tile to="/hesap/sign-up">
          <v-list-tile-action>
            <v-icon> person_add </v-icon>
          </v-list-tile-action>
          <v-list-tile-title class=""> Kayıt Ol </v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-footer :fixed="true" app> <span>&copy; 2018</span> </v-footer>
  </v-app>
</template>

<script>
export default {
  computed: {
    son10tarif() {
      return this.$store.getters.son_10_tarif;
    }
  },
  data() {
    return {
      user: null,
      clipped: true,
      drawer: false,
      rightDrawer: false,
      items: [
        {
          icon: "search",
          title: "Tarif Ara",
          color: "blue lighten-1"
        },
        {
          icon: "library_books",
          title: "Tarif Defterim",
          color: "orange lighten-1"
        }
      ],
      title: "Yemek Tarifleri"
    };
  },
  name: "App"
};
</script>
