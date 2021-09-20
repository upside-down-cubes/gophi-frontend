<template>
  <v-container fluid>
    <v-row class="mt-5" no-gutters>
      <v-col class="col-8 ml-10">
        <!--  Order input field -->
        <v-stepper v-model="e6" vertical flat max-width="1200">
          <!-- Upload file (step 1) -->
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
                  <v-window>
                    <v-window-item v-html="video"></v-window-item>
                  </v-window>
                </v-list-item-action>
              </v-list-item>
            </v-card>
          </v-stepper-content>

          <!--  Order information (step 2) -->
          <v-stepper-step :complete="e6 > 2" step="2" color="#13B8A4">
            Order information
          </v-stepper-step>

          <v-stepper-content step="2">
            <v-card color="#F1F1F1" class="mb-12" flat>
              <v-card-title>
                <v-row no-gutters>
                  <v-col>
                    <p style="font-size: 12px; color: #5b5b5b" class="mb-0">
                      go-gophi.mp4
                    </p>
                  </v-col>
                  <v-col>
                    <p
                      style="font-size: 12px; color: #5b5b5b"
                      class="mb-0 text-end"
                    >
                      ~3 mins
                    </p>
                  </v-col>
                </v-row>
              </v-card-title>
              <v-row class="mx-2">
                <v-col>
                  <span>Audio language</span>
                  <v-autocomplete
                    color="#13B8A4"
                    style="background-color: white"
                    clearable
                    outlined
                    hide-details
                    single-line
                    v-model="audioLangInput"
                    :items="audioLang"
                    dense
                  ></v-autocomplete>
                </v-col>
                <v-col>
                  <span>Subtitling language</span>
                  <v-autocomplete
                    outlined
                    color="#13B8A4"
                    style="background-color: white"
                    clearable
                    v-model="subtitlingLangInput"
                    hide-details
                    single-line
                    :items="subtitlingLang"
                    dense
                  ></v-autocomplete>
                </v-col>
              </v-row>
              <v-row class="mx-2">
                <v-col>
                  <span>Level of language</span>
                  <v-autocomplete
                    outlined
                    color="#13B8A4"
                    style="background-color: white"
                    clearable
                    v-model="levelOfLangInput"
                    hide-details
                    single-line
                    :items="levelOfLang"
                    dense
                  ></v-autocomplete>
                </v-col>
                <v-col>
                  <span>Content category</span>
                  <v-autocomplete
                    outlined
                    color="#13B8A4"
                    style="background-color: white"
                    clearable
                    v-model="categoryInput"
                    hide-details
                    single-line
                    :items="category"
                    dense
                  ></v-autocomplete>
                </v-col>
              </v-row>
              <v-row class="mx-2">
                <v-col>
                  <v-switch
                    class="mt-2"
                    v-model="proofread"
                    color="#13B8A4"
                    label="Proofread by reviewer"
                    hide-details
                  ></v-switch>
                </v-col>
                <v-col>
                  <v-dialog v-model="dialog" width="500">
                    <template v-slot:activator="{ on, attrs }">
                      <v-card-actions class="justify-end">
                        <v-btn elevation="0" text v-bind="attrs" v-on="on">
                          <v-icon color="#13B8A4" class="mr-1">mdi-chat</v-icon>
                          <span style="color: dimgray"
                            >Notes to translators</span
                          >
                        </v-btn>
                      </v-card-actions>
                    </template>

                    <v-card>
                      <v-card-title style="background-color: #13b8a4">
                        <span style="color: white">Note to translators</span>
                      </v-card-title>

                      <v-card-actions class="mt-5">
                        <v-textarea
                          v-model="note"
                          solo
                          label="Please fill in this area"
                          outlined
                          color="#13b8a4"
                        >
                        </v-textarea>
                      </v-card-actions>
                      <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="#13b8a4" text @click="dialog = false">
                          Confirm
                        </v-btn>
                      </v-card-actions>
                    </v-card>
                  </v-dialog>
                </v-col>
              </v-row>
              <v-card-actions class="justify-end">
                <v-btn color="#13B8A4" elevation="0" dark @click="e6 = 3">
                  Confirm
                </v-btn>
                <v-btn text @click="e6 = e6 - 1"> Back </v-btn>
              </v-card-actions>
            </v-card>
          </v-stepper-content>

          <!--  Payment (step 3) -->
          <v-stepper-step :complete="e6 > 3" step="3" color="#13B8A4">
            Payment
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
          class="justify-center"
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
      dialog: false,
      note: "",
      video:
        '<iframe width="213" height="150" src="https://www.youtube.com/embed/H3vFeHYfquw" allow="autoplay; encrypted-media" allowfullscreen></iframe>',
      audioLangInput: "English",
      subtitlingLangInput: "English",
      levelOfLangInput: "Basic",
      categoryInput: "Business",
      proofread: false,
      levelOfLang: ["Basic", "Friendly", "Academic"],
      subtitlingLang: ["Japan", "Thai", "English", "Spanish"],
      audioLang: ["Japan", "Thai", "English", "Spanish"],
      category: ["Business", "Sport", "Cosmetic", "Science"],
      e6: 2,
    };
  },
};
</script>

<style src="../../css/customer/MakeOrder.css"></style>
