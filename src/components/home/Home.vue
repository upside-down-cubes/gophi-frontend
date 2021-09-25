<template>
  <div>
    <v-container style="background-color: #f1f1f1">
      <v-row class="mt-16 mb-16">
        <v-col md="6" class="mt-16">
          <v-img
            :src="require('../../assets/gophilogodark.png')"
            class="mt-16 mb-3"
            contain
            height="200"
          />
          <div class="text-center mt-2">
            <span style="font-size: x-large"
              >A subtitling platform for globalizing knowledge</span
            >
          </div>
        </v-col>
        <v-col class="mb-4 mt-16">
          <v-window>
            <v-window-item align="center" v-html="video"></v-window-item>
          </v-window>
        </v-col>
      </v-row>
    </v-container>
    <v-container style="background-color: white">
      <div class="my-16 text-center">
        <h1 style="font-size: xxx-large">
          <span style="color: #13b8a4">GOPHI</span> SUBTITLING SOLUTION
        </h1>
        <span style="font-size: x-large"
          >Customers and translators meet to produce high-quality
          content-specific subtitles</span
        >
        <v-row class="my-16">
          <v-col></v-col>
          <v-col md="3">
            <!-- https://vuetifyjs.com/en/components/avatars/#advanced-usage -->
            <v-avatar color="grey" size="150">
              <span class="white--text text-h5">Affordable</span>
            </v-avatar>
          </v-col>
          <v-col md="3">
            <v-avatar color="grey" size="150">
              <span class="white--text text-h5">Quick</span>
            </v-avatar>
          </v-col>
          <v-col md="3">
            <v-avatar color="grey" size="150">
              <span class="white--text text-h5">Accurate</span>
            </v-avatar>
          </v-col>
          <v-col></v-col>
        </v-row>
      </div>
    </v-container>
    <v-container style="background-color: #d4f8f4">
      <div class="text-center">
        <v-row class="my-10">
          <v-col>
            <h1 style="font-size: xxx-large; color: #1bb7a4">
              Join our community
            </h1>
            <p style="font-size: xx-large; color: #1bb7a4">as a</p>
          </v-col>
          <v-col>
            <v-btn
              class="mx-10 mb-5"
              dark
              color="#13B8A4"
              height="50"
              width="200"
              flat
              @click="createCustomer"
            >
              <span style="font-size: x-large">Customer</span>
            </v-btn>
            <ul class="check-list text-left" style="margin-left: 125px">
              <li>Order subtitles</li>
              <li>Subtitle your own video</li>
            </ul>
          </v-col>
          <v-col>
            <v-btn
              class="mx-10 mb-5"
              dark
              color="#13B8A4"
              height="50"
              width="200"
              flat
              @click="createTranslator"
            >
              <span style="font-size: x-large">Translator</span>
            </v-btn>
            <ul class="check-list text-left" style="padding-left: 90px">
              <li>Find & Work on freelance subtitle orders</li>
            </ul>
          </v-col>
        </v-row>
      </div>
    </v-container>
    <v-container style="background-color: #ffffff">
      <v-row class="my-10">
        <v-col md="5" class="mx-16">
          <h1 style="color: #1bb7a4">Customers</h1>
          <v-divider class="mb-3" style="border-color: #1bb7a4" />
          <p style="font-size: 24px">
            Order translations with automatically-matched translators according
            to your content context and category
          </p>
          <p style="font-size: 24px">
            Subtitle your videos with our machine-assisted subtitling service to
            streamline your subtitling process
          </p>
        </v-col>
        <v-col md="5" class="mx-16">
          <h1 style="color: #1bb7a4">Translators</h1>
          <v-divider class="mb-3" style="border-color: #1bb7a4" />
          <p style="font-size: 24px">
            Find automatically-matched subtitle orders and work on them with our
            machine-assisted subtitling service to streamline your subtitling
            process
          </p>
        </v-col>
      </v-row>
    </v-container>
    <v-container style="background-color: #f1f1f1">
      <div class="text-center">
        <v-row class="mb-16">
          <v-col md="5" class="mx-16">
            <h1>Pay as you go</h1>
          </v-col>
          <v-col md="5" class="mx-16">
            <h1>Subscribe</h1>
          </v-col>
        </v-row>
      </div>
    </v-container>
    <v-container style="background-color: #ffffff">
      <div class="mx-16">
        <h1>Content examples:</h1>
        <p style="font-size: x-large">About us</p>
      </div>
    </v-container>
    <v-container style="background-color: #1bb7a4">
      <div class="mx-16 my-7">
        <v-row>
          <v-col>
            <h2 style="color: #ffffff">
              Contact us
            </h2>
          </v-col>
          <v-col></v-col>
          <v-col></v-col>
        </v-row>
      </div>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Home",
  data: () => ({
    video:
      '<iframe width="740" height="365" src="https://www.youtube.com/embed/wLN1vVYqOXM" allow="autoplay; encrypted-media" allowfullscreen></iframe>',
  }),

  methods: {
    async createCustomer() {
      await this.$router.push({ name: "CustomerSignup" });
    },
    async createTranslator() {
      await this.$router.push({ name: "TranslatorSignup" });
    },
  },
};
</script>

<style src="../../css/Home/home.css" />
