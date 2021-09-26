<template>
  <div>
    <v-container style="background-color: #f1f1f1">
      <v-row class="my-16 mx-auto">
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
            <img width="100" src="../../assets/home-img/affordable.png" />
            <p style="font-size: x-large">Affordable</p>
          </v-col>
          <v-col md="3">
            <img width="100" src="../../assets/home-img/quick.png" />
            <p style="font-size: x-large">Quick</p>
          </v-col>
          <v-col md="3">
            <img width="100" src="../../assets/home-img/accurate.png" />
            <p style="font-size: x-large">Accurate</p>
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
          <v-divider vertical />
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
            <ul
              style="
                list-style-position: inside;
                text-align: center;
                padding-right: 40px;
                color: #1bb7a4;
              "
            >
              <li>Order subtitles</li>
              <li>Subtitle your own video</li>
            </ul>
          </v-col>
          <v-divider vertical />
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
            <ul
              style="
                list-style-position: inside;
                text-align: center;
                padding-right: 40px;
                color: #1bb7a4;
              "
            >
              <li>Find & Work on freelance subtitle orders</li>
            </ul>
          </v-col>
        </v-row>
      </div>
    </v-container>
    <v-container style="background-color: #ffffff">
      <h1 style="color: #1bb7a4" class="mx-16 mt-8">Our subtitling service</h1>
      <v-divider class="mb-3 mx-16" style="border-color: #1bb7a4" />
      <div class="text-center" style="font-size: larger">
        <v-row class="my-10 mx-16">
          <v-col class="mx=5">
            <img
              width="100"
              src="../../assets/home-img/accurate.png"
              alt="Cart"
            />
            <p>
              <span style="color: #1bb7a4; font-weight: bolder">Order</span>
              translations with
              <span style="font-weight: bolder"
                >automatically-matched translators</span
              >
              according to your content context and category
            </p>
          </v-col>
          <v-col>
            <img
              width="100"
              src="../../assets/home-img/accurate.png"
              alt="Pencil"
            />
            <p>
              <span style="color: #1bb7a4; font-weight: bolder">Create</span>
              your videos subtitles by yourself with our
              <span style="font-weight: bolder"
                >machine-assisted subtitling service</span
              >
              to streamline your subtitling process
            </p>
          </v-col>
        </v-row>
        <v-card
          class="mx-16 mb-16"
          style="background-color: #d4f8f4"
          flat
          rounded
        >
          <v-row>
            <v-col class="mx-16">
              <p>What do you get?</p>
            </v-col>
            <v-col>
              <ul class="checklist">
                <li>Subtitle files in your preferred format</li>
                <li>Video files with burned-in subtitles</li>
              </ul>
            </v-col>
          </v-row>
        </v-card>
      </div>
    </v-container>
    <v-container style="background-color: #f1f1f1">
      <div class="text-center my-8">
        <h2 style="color: #1bb7a4">We serve a wide range of content</h2>
        <p style="color: #1bb7a4">
          No matter what category or context you have, we find the best
          translator match for you.
        </p>
        <v-card
          color="white"
          flat
          rounded
          style="padding-top: 30px; padding-bottom: 10px"
          class="mx-8"
        >
          <p
            style="
              font-size: larger;
              font-weight: bold;
              text-align: left;
              color: #5b5b5b;
            "
            class="mx-16"
          >
            <u>Content Examples:</u>
          </p>
          <v-row class="mx-4 my-8">
            <v-col>
              <img
                src="../../assets/home-img/product-description.png"
                width="100"
              />
              <p>Product Description</p>
            </v-col>
            <v-col>
              <img src="../../assets/home-img/food-travel.png" width="100" />
              <p>Food & Travel</p>
            </v-col>
            <v-col>
              <img
                src="../../assets/home-img/arts-entertainment.png"
                width="100"
              />
              <p>Arts & Entertainment</p>
            </v-col>
            <v-col>
              <img
                src="../../assets/home-img/educational-webinar.png"
                width="100"
              />
              <p>Educational & Webinar</p>
            </v-col>
            <v-col>
              <img src="../../assets/home-img/tutorial.png" width="100" />
              <p>Tutorials</p>
            </v-col>
            <v-col>
              <img
                src="../../assets/home-img/personal-business.png"
                width="100"
              />
              <p>Personal & Business</p>
            </v-col>
          </v-row>
        </v-card>
      </div>
    </v-container>
    <v-container style="background-color: #ffffff">
      <div class="mx-16 my-16">
        <h1 style="color: #1bb7a4">Become a freelance translator</h1>
        <v-row class="mb-8">
          <v-col>
            <v-divider style="border-color: #1bb7a4" />
          </v-col>
          <v-col></v-col>
        </v-row>
        <v-row>
          <v-col>
            <h2 style="color: #5b5b5b">
              <span style="color: #1bb7a4">Get</span> automatically-matched
              subtitle orders
            </h2>
            <p style="color: #5b5b5b; font-size: large">
              Content category and context are matched with your expertise
            </p>
            <h2 style="color: #5b5b5b">
              <span style="color: #1bb7a4">Work</span> with our machine-assisted
              subtitling service
            </h2>
            <p style="color: #5b5b5b; font-size: large">
              Our AI-integrated subtitling tools streamlines your subtitling
              process
            </p>
          </v-col>
          <v-col>
            <v-card
              style="
                background-color: #f1f1f1;
                padding-top: 5px;
                padding-bottom: 5px;
              "
              flat
              rounded
            >
              <div class="mx-6 my-6">
                <h2>Q & A</h2>
                <p style="font-weight: bold">
                  How can I become a gophi translator?
                </p>
                <p>
                  Take our translation tests according to your language pair and
                  expertise. Optional certificate submission can be a fast-pass
                  to higher-level tests...
                </p>
                <p align="right" style="color: #cccccc"><u>More</u></p>
              </div>
            </v-card>
          </v-col>
        </v-row>
        <v-divider style="border-color: grey" class="my-8" />
        <p style="font-size: x-large; font-weight: bold">About us</p>
        <p>
          Gophi was founded by a group of undergraduate students with the
          objective of making information accessible. We aim to streamline the
          video subtitling process to help overcome the language barrier to
          information.
        </p>
        <p>Acknowledgements:</p>
      </div>
    </v-container>
    <v-container style="background-color: #1bb7a4">
      <div class="my-7 mx-10">
        <v-row>
          <v-col md="2">
            <h2 style="color: #ffffff"><b>Contact us:</b></h2>
          </v-col>
          <v-col md="4">
            <h2 style="color: #ffffff">sopanat+gophi@gmail.com</h2>
          </v-col>
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
      '<iframe width="600" height="365" src="https://www.youtube.com/embed/wLN1vVYqOXM" allow="autoplay; encrypted-media" allowfullscreen></iframe>',
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

<style>
@import "../../css/home/home.css";
</style>
