<template>
  <v-container fill-height fluid>
    <v-row>
      <v-col md="6" class="mt-16">
        <router-link :to="{ name: 'Home' }">
          <v-img
            :src="require('../../assets/gophilogodark.png')"
            contain
            height="150"
            class="mt-16"
          />
        </router-link>
        <div class="text-center mt-2">
          <span style="font-size: x-large"
            >A subtitling platform for globalizing knowledge</span
          >
        </div>
      </v-col>
      <v-col md="6">
        <v-card height="540" class="mr-16 rounded-xl" flat color="#F1F1F1">
          <v-card-title
            class="justify-center default-color"
            style="font-size: xx-large; font-weight: bolder"
          >
            <span class="my-5">Welcome to our Community</span>
          </v-card-title>
          <!--Email-->
          <v-card-text
            class="ml-6"
            style="font-size: large; font-weight: bolder; color: #535353"
          >
            Email</v-card-text
          >
          <v-row class="mx-6">
            <v-col>
              <v-text-field
                v-model="email"
                label="customer@example.com"
                persistent-hint
                required
                clearable
                outlined
                dense
                single-line
                solo
              ></v-text-field>
            </v-col>
          </v-row>
          <!--Password-->
          <v-card-text
            class="ml-6"
            style="font-size: large; font-weight: bolder; color: #535353"
          >
            Password
          </v-card-text>
          <v-row class="mx-6">
            <v-col>
              <v-text-field
                v-model="password"
                label="••••••••"
                required
                clearable
                outlined
                dense
                single-line
                solo
                type="password"
              ></v-text-field>
            </v-col>
          </v-row>
          <!--Customer / Translator-->
          <v-row class="mx-6" no-gutters>
            <v-col>
              <v-divider class="mt-3" />
            </v-col>
            <v-col md="2">
              <div class="text-center">
                <span>I am a</span>
              </div>
            </v-col>
            <v-col>
              <v-divider class="mt-3" />
            </v-col>
          </v-row>
          <v-row class="justify-space-around">
            <v-radio-group row v-model="customer">
              <v-btn
                class="mx-10"
                outlined
                color="#13B8A4"
                rounded
                @click="toggleValues(false)"
              >
                <v-radio value="customer" color="#13B8A4">
                  <span slot="label" class="default-color">Customer</span>
                </v-radio>
              </v-btn>
              <v-btn
                class="mx-10"
                outlined
                color="#13B8A4"
                rounded
                @click="toggleValues(true)"
              >
                <v-radio value="translator" color="#13B8A4">
                  <span slot="label" class="default-color">Translator</span>
                </v-radio>
              </v-btn>
            </v-radio-group>
          </v-row>
          <v-row>
            <v-col class="mx-10 mb=5" justify="space-around">
              <v-btn block color="#13B8A4" dark @click="logIn">Log In</v-btn>
            </v-col>
          </v-row>
          <v-card-text
            class="text-center"
            style="color: #1bb7a4"
            @click="createAcc"
          >
            Create an Account
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Login",

  data: () => ({
    translator: false,
    email: "",
    password: "",
    customer: "customer",
  }),

  methods: {
    toggleValues(is_translator) {
      this.translator = is_translator;
    },

    async logIn() {
      let status = {
        isLoggedIn: true,
        isTranslator: this.translator,
      };
      await this.$store.dispatch("setUserLogin", status);
      console.warn(this.$store.state.isLoggedIn);
      if (this.translator) {
        await this.$router.push({ name: "TranslatorOrder" });
      } else {
        await this.$router.push({ name: "CustomerOrder" });
      }
    },

    async createAcc() {
      if (this.translator) {
        await this.$router.push({ name: "TranslatorSignup" });
      } else {
        await this.$router.push({ name: "CustomerSignup" });
      }
    },
  },
};
</script>

<style src="../../css/index.css" />
