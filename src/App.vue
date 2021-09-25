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
        :to="{ name: 'Home' }"
      >
        <v-img
          :src="require('./assets/gophilogodark.png')"
          contain
          class="mx-0"
          max-height="40"
        />
      </v-btn>
      <v-btn
        text
        plain
        class="ml-5"
        color="#d4f8f4"
        max-height="48"
        :to="{ name: 'TranslatorOrder' }"
      >
        Orders
      </v-btn>
      <v-btn
        text
        plain
        class="ml-5"
        color="#d4f8f4"
        max-height="48"
        :to="{ name: 'CustomerMakeOrder' }"
      >
        Make Order
      </v-btn>
      <v-btn
        text
        plain
        class="ml-5"
        color="#d4f8f4"
        max-height="48"
        :to="{ name: 'TranslatorCurrentOrders' }"
      >
        My Workspace
      </v-btn>

      <v-spacer />

      <v-menu bottom min-width="200px" open-on-hover offset-y right offset-x>
        <template v-slot:activator="{ on }">
          <v-btn
            text
            plain
            class="ml-5"
            color="#d4f8f4"
            max-height="48"
            v-on="on"
            :to="{ name: 'Login' }"
          >
            Profile
          </v-btn>
        </template>
        <v-card class="mx-auto" max-width="275" min-width="260" outlined>
          <v-list-item three-line>
            <v-list-item-content>
              <div class="text-h5 mb-1">gophi team</div>
            </v-list-item-content>

            <v-list-item-avatar size="60" color="#d4f8f4">
              <v-img
                :src="require('./assets/gophilogodark.png')"
                contain
              ></v-img>
            </v-list-item-avatar>
          </v-list-item>

          <v-card-actions justify="space-around">
            <v-btn text color="#1bb7a4" :to="{ name: 'Login' }"> Logout </v-btn>
          </v-card-actions>
        </v-card>
      </v-menu>
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
  created() {
    document.title = "gophi";
  },
};
</script>

<style src="./css/index.css" />
