<template>
  <v-container>
    <v-row class="mt-5">
      <v-col class="ml-10">
        <v-stepper v-model="e6" vertical flat max-width="700">
          <v-stepper-step :complete="e6 > 1" step="1" color="#13B8A4">
            <span>File upload</span>
            <v-divider></v-divider>
          </v-stepper-step>

          <v-stepper-content step="1">
            <v-card color="#F1F1F1" flat class="mb-12">
              <v-list-item three-line>
                <v-list-item-content>
                  <v-card-actions>
                    <v-btn
                      style="background-color: white"
                      elevation="0"
                      color="#13B8A4"
                      class="mt-3 mr-2"
                      outlined
                    >
                      <span style="color: black">Choose file</span>
                    </v-btn>
                    <span class="mt-3">No file chosen</span>
                  </v-card-actions>
                  <v-card-subtitle>
                    <span>Only video files are allowed to be uploaded.</span>
                  </v-card-subtitle>
                  <v-card-actions>
                    <v-btn
                      color="#13B8A4"
                      elevation="0"
                      @click="e6 = 2"
                      dark
                      class="mb-3"
                    >
                      Upload
                    </v-btn>
                  </v-card-actions>
                </v-list-item-content>

                <v-list-item-action>
                  <v-card height="130" width="180" color="grey" flat> </v-card>
                </v-list-item-action>
              </v-list-item>
            </v-card>
          </v-stepper-content>

          <v-stepper-step :complete="e6 > 2" step="2" color="#13B8A4">
            Order information
          </v-stepper-step>

          <v-stepper-content step="2">
            <v-card
              color="grey lighten-1"
              class="mb-12"
              height="200px"
            ></v-card>
            <v-btn color="primary" @click="e6 = 3"> Continue </v-btn>
            <v-btn text @click="e6 = e6 - 1"> Back </v-btn>
          </v-stepper-content>

          <v-stepper-step :complete="e6 > 3" step="3" color="#13B8A4">
            Select an ad format and name ad unit
          </v-stepper-step>

          <v-stepper-content step="3">
            <v-card
              color="grey lighten-1"
              class="mb-12"
              height="200px"
            ></v-card>
            <v-btn color="primary"> Continue </v-btn>
            <v-btn text @click="e6 = e6 - 1"> Back </v-btn>
          </v-stepper-content>
        </v-stepper>
      </v-col>
      <v-col class="mt-10">
        <v-card
          flat
          color="#F1F1F1"
          min-height="300"
          min-width="200"
          max-width="400"
          max-height="500"
        >
          <v-card-title class="justify-center">
            <h4>Order summary</h4>
          </v-card-title>
          <v-divider class="mx-10"></v-divider>
        </v-card>
        <v-btn class="mt-3" color="#13B8A4" elevation="0" dark>
          Confirm order
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "MakeOrder",
  data() {
    return {
      e6: 1,
    };
  },
};
</script>

<style src="../../css/customer/MakeOrder.css"></style>
