<template>
  <v-container fill-height fluid>
    <v-row>
      <v-col md="6" class="mt-16">
        <v-img
          :src="require('../../assets/gophilogodark.png')"
          contain
          height="150"
          class="mt-16"
        />
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
            <span class="mt-5">Welcome to gophi</span>
          </v-card-title>
          <v-row align="center" justify="center" class="mx-3">
            <v-col align="center" class="completed-signup">
              <span>Personal Information</span>
            </v-col>
            <v-col
              align="center"
              v-if="this.is_translator"
              :class="this.step > 1 ? 'completed-signup' : 'incomplete-signup'"
              ><span>Expertise</span></v-col
            >
            <v-col
              align="center"
              v-if="this.is_translator"
              :class="this.step > 2 ? 'completed-signup' : 'incomplete-signup'"
              ><span>Test</span></v-col
            >
          </v-row>

          <!--Different steps for signing up-->
          <v-window v-model="step">
            <v-window-item :value="1"> </v-window-item>
          </v-window>
          <v-row class="mx-6" no-gutters>
            <v-col>
              <v-divider class="mt-3" />
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Signup",
  props: ["translator", "customer"],

  data: () => ({
    is_translator: false,
    step: 1,
  }),

  beforeMount() {
    window.addEventListener("beforeunload", this.preventNav);
  },

  beforeDestroy() {
    window.removeEventListener("beforeunload", this.preventNav);
  },

  mounted() {
    console.log("Translator: " + this.translator);
    console.log("Customer: " + this.customer);
    if (this.translator === undefined && this.customer === undefined) {
      this.$router.push("/login");
    }
    this.is_translator = this.translator;
  },

  methods: {
    preventNav(event) {
      event.preventDefault();
      event.returnValue = "";
    },
  },
};
</script>

<style src="../../css/index.css" />
