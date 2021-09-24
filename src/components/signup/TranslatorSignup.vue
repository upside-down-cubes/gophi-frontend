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
        <v-card height="580" class="mr-9 rounded-xl" flat color="#F1F1F1">
          <v-card-title
            class="justify-center default-color"
            style="font-size: xx-large; font-weight: bolder"
          >
            <span class="mt-5">Welcome to gophi</span>
          </v-card-title>
          <v-row align="center" justify="center" class="mx-7">
            <v-col align="center" class="completed-signup">
              <span>Personal Information</span>
            </v-col>
            <v-col
              align="center"
              v-if="this.is_translator"
              :class="this.step > 2 ? 'completed-signup' : 'incomplete-signup'"
              ><span>Expertise</span></v-col
            >
            <v-col
              align="center"
              v-if="this.is_translator"
              :class="this.step > 3 ? 'completed-signup' : 'incomplete-signup'"
              ><span>Test</span></v-col
            >
          </v-row>

          <!--Different steps for signing up-->
          <v-window v-model="step">
            <v-window-item :value="1">
              <PersonalInformation></PersonalInformation>
            </v-window-item>

            <v-window-item :value="2">
              <PersonalTwo></PersonalTwo>
            </v-window-item>

            <v-window-item :value="3">
              <Expertise></Expertise>
            </v-window-item>

            <v-window-item :value="4" class="take-test">
              <v-container>
                <v-spacer></v-spacer>
                <v-row
                  class="justify-space-around mt-16"
                  align="center"
                  justify="center"
                >
                  <v-btn color="#13B8A4" dark x-large class="py-7 mt-16">
                    Take test now
                  </v-btn>
                </v-row>
                <v-spacer></v-spacer>
              </v-container>
            </v-window-item>
          </v-window>

          <v-spacer></v-spacer>
          <v-row> </v-row>
          <v-card-actions class="back-button">
            <v-btn
              color="#13B8A4"
              dark
              rounded
              small
              @click="goBack"
              class="px-6"
            >
              Back
            </v-btn>
          </v-card-actions>
          <v-card-actions class="next-button"
            ><v-btn
              v-if="(step < 4 && this.is_translator) || step < 2"
              align="right"
              color="#13B8A4"
              rounded
              small
              dark
              @click="step++"
              class="px-6"
            >
              Next
            </v-btn>
            <v-btn
              v-else
              color="#13B8A4"
              rounded
              small
              dark
              align="right"
              @click="submitSignup"
              class="px-4"
            >
              Submit
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import PersonalInformation from "./PersonalInformation";
import PersonalTwo from "./PersonalTwo";
import Expertise from "./Expertise";

export default {
  name: "TranslatorSignup",
  components: { PersonalInformation, PersonalTwo, Expertise },

  data: () => ({
    is_translator: true,
    step: 1,
  }),

  // beforeMount() {
  //   window.addEventListener("beforeunload", this.preventNav);
  // },
  //
  // beforeDestroy() {
  //   window.removeEventListener("beforeunload", this.preventNav);
  // },

  // mounted() {
  //   if (this.translator === undefined) {
  //     this.$router.push("/login");
  //   }
  //   this.is_translator = this.translator;
  // },

  methods: {
    preventNav(event) {
      event.preventDefault();
      event.returnValue = "";
    },

    goBack() {
      if (this.step > 1) {
        this.step--;
      } else {
        this.$router.push("/login");
      }
    },
    submitSignup() {
      if (this.is_translator) {
        this.$router.push("/torder");
      } else {
        this.$router.push("/");
      }
    },
  },
};
</script>

<style src="../../css/index.css" />
