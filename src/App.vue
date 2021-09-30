<template>
  <v-app>
    <v-app-bar
      v-if="this.$store.state.isLoggedIn"
      app
      color="#1bb7a4"
      dark
      dense
      flat
      class="test"
    >
      <v-btn
        fab
        tile
        x-large
        plain
        elevation="0"
        max-height="48"
        width="90"
        contain
        :to="{ name: 'Home' }"
      >
        <v-img
          :src="require('./assets/gophilogolight.png')"
          contain
          class="mx-0"
          max-height="40"
        />
      </v-btn>
      <v-btn
        v-if="this.$store.state.isTranslator"
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
        v-else
        text
        plain
        class="ml-5"
        color="#d4f8f4"
        max-height="48"
        :to="{ name: 'CustomerOrder' }"
      >
        Orders
      </v-btn>
      <v-btn
        v-if="!this.$store.state.isTranslator"
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
        v-else
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

      <v-btn
        v-if="this.$route.name === 'Home'"
        text
        plain
        class="ml-5"
        color="#d4f8f4"
        max-height="48"
        @click="$vuetify.goTo(pageHeight)"
      >
        Contact Us
      </v-btn>
      <v-menu bottom min-width="200px" open-on-hover offset-y right offset-x>
        <template v-slot:activator="{ on }">
          <v-btn
            text
            plain
            class="ml-5"
            color="#d4f8f4"
            max-height="48"
            v-on="on"
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
            <v-btn text color="#1bb7a4" @click="logout"> Logout </v-btn>
          </v-card-actions>
        </v-card>
      </v-menu>
    </v-app-bar>
    <v-app-bar
      v-else-if="this.$route.name === 'Home'"
      app
      color="#1bb7a4"
      dark
      dense
      flat
      class="test"
    >
      <v-btn
        fab
        tile
        x-large
        plain
        elevation="0"
        max-height="48"
        width="90"
        contain
        :to="{ name: 'Home' }"
      >
        <v-img
          :src="require('./assets/gophilogolight.png')"
          contain
          class="mx-0"
          max-height="40"
        />
      </v-btn>

      <v-spacer />

      <v-btn
        text
        plain
        class="ml-5"
        color="#d4f8f4"
        max-height="48"
        :to="{ name: 'Login' }"
      >
        Log In
      </v-btn>
      <v-btn
        text
        plain
        class="ml-5"
        color="#d4f8f4"
        max-height="48"
        @click="$vuetify.goTo(pageHeight)"
      >
        About Us
      </v-btn>
      <v-btn
        text
        plain
        class="ml-5"
        color="#d4f8f4"
        max-height="48"
        @click="$vuetify.goTo(pageHeight)"
      >
        Contact Us
      </v-btn>
    </v-app-bar>
    <!--    <v-app-bar-->
    <!--      v-else-->
    <!--      app-->
    <!--      color="#1bb7a4"-->
    <!--      dark-->
    <!--      dense-->
    <!--      flat-->
    <!--      class="test"-->
    <!--    >-->
    <!--      <v-btn-->
    <!--        fab-->
    <!--        tile-->
    <!--        x-large-->
    <!--        plain-->
    <!--        elevation="0"-->
    <!--        max-height="48"-->
    <!--        width="90"-->
    <!--        contain-->
    <!--        :to="{ name: 'Home' }"-->
    <!--      >-->
    <!--        <v-img-->
    <!--          :src="require('./assets/gophilogolight.png')"-->
    <!--          contain-->
    <!--          class="mx-0"-->
    <!--          max-height="40"-->
    <!--        />-->
    <!--      </v-btn>-->
    <!--    </v-app-bar>-->

    <v-main>
      <router-view />
    </v-main>

    <v-btn
      v-if="this.$route.name === 'Home'"
      v-scroll="onScroll"
      v-show="scrolled"
      fab
      dark
      fixed
      bottom
      right
      elevation="0"
      color="#1bb7a4"
      class="ma-2"
      @click="$vuetify.goTo(0)"
    >
      <v-icon large>mdi-chevron-up</v-icon>
    </v-btn>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data: () => ({
    scrolled: false,
  }),

  created() {
    document.title = "gophi";
  },

  computed: {
    pageHeight() {
      return document.body.scrollHeight;
    },
  },

  methods: {
    onScroll(e) {
      if (typeof window === "undefined") return;
      const top = window.pageYOffset || e.target.scrollTop || 0;
      this.scrolled = top > 20;
    },
    async logout() {
      let status = {
        isLoggedIn: false,
        isTranslator: false,
      };
      await this.$store.dispatch("setUserLogin", status);
      await this.$router.push({ name: "Login" });
    },
  },
};
</script>

<style src="./css/index.css" />
