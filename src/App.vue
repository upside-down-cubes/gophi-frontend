<template>
  <v-app>
    <v-app-bar app color="#1bb7a4" dark dense flat class="test">
      <v-btn
        fab
        tile
        x-large
        color="#d4f8f4"
        elevation="0"
        max-height="48"
        width="90"
        contain
        fixed
        left
      >
        <v-img
          :src="require('./assets/gophilogodark.png')"
          contain
          class="mx-0"
          max-height="40"
        />
      </v-btn>

      <v-spacer />

      <v-btn
        fab
        tile
        text
        x-large
        color="#d4f8f4"
        elevation="0"
        max-height="48"
        contain
      >
        test
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: "App",
  data: () => ({
    //
  }),
};
</script>

<style src="./css/index.css" />
