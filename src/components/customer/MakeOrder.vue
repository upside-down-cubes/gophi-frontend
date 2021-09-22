<template>
  <v-container fluid>
    <v-row class="mt-5" no-gutters>
      <v-col class="col-8 ml-10">
        <!--  Order input field -->
        <v-stepper v-model="e6" vertical flat max-width="1200">
          <!-- Upload file (step 1) -->
          <v-stepper-step
            @click.native="e6 = 1"
            :complete="e6 > 1"
            step="1"
            color="#13B8A4"
          >
            <span>File upload</span>
          </v-stepper-step>

          <v-stepper-content step="1">
            <v-card color="#F1F1F1" flat class="mb-12">
              <v-list-item two-line>
                <v-list-item-content>
                  <v-card-actions>
                    <v-btn
                      style="background-color: white"
                      elevation="0"
                      color="#13B8A4"
                      class="mt-3 mr-2"
                      outlined
                      @click="onButtonClick"
                    >
                      <span style="color: black">Choose file</span>
                    </v-btn>
                    <input
                      ref="uploader"
                      class="d-none"
                      type="file"
                      accept="video/*"
                      @change="onFileChanged"
                    />
                    <span class="mt-3">{{ fileName }}</span>
                  </v-card-actions>
                  <v-card-subtitle>
                    <span>Only video files are allowed to be uploaded.</span>
                  </v-card-subtitle>
                </v-list-item-content>

                <v-list-item-action>
                  <v-window>
                    <v-window-item v-html="video"></v-window-item>
                  </v-window>
                </v-list-item-action>
              </v-list-item>
              <v-card-actions class="justify-end mx-2">
                <v-btn
                  color="#13B8A4"
                  elevation="0"
                  @click="e6 = 2"
                  :disabled="this.selectedFile == null"
                  :dark="this.selectedFile !== null"
                  class="mb-3"
                >
                  Upload
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-stepper-content>

          <!--  Order information (step 2) -->
          <v-stepper-step
            :complete="e6 > 2"
            step="2"
            color="#13B8A4"
            @click.native="e6 = 2"
          >
            Order information
          </v-stepper-step>

          <v-stepper-content step="2">
            <v-card color="#F1F1F1" class="mb-12" flat>
              <v-card-title>
                <v-row no-gutters>
                  <v-col>
                    <p style="font-size: 12px; color: #5b5b5b" class="mb-0">
                      {{ fileName }}
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
                      <v-card-title class="gophi-theme-color-bg">
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
                <v-btn text @click="e6 = e6 - 1"> Back </v-btn>
                <v-btn color="#13B8A4" elevation="0" dark @click="e6 = 3">
                  Confirm
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-stepper-content>

          <!--  Payment (step 3) -->
          <v-stepper-step
            @click.native="e6 = 3"
            :complete="e6 > 3"
            step="3"
            color="#13B8A4"
          >
            Payment
          </v-stepper-step>

          <v-stepper-content step="3">
            <v-card color="#F1F1F1" flat>
              <v-card-title class="pb-0">
                <p style="font-size: 16px">Select your payment method</p>
              </v-card-title>
              <v-card-actions class="pt-0">
                <v-radio-group row hide-details class="mt-0 pt-0 mb-4">
                  <v-btn
                    @click="
                      creditDialog = !creditDialog;
                      qrcodeDialog = false;
                      mobileBankingDialog = false;
                    "
                    class="mx-10 my-1"
                    outlined
                    color="#13B8A4"
                    rounded
                  >
                    <v-radio value="credit" color="#13B8A4">
                      <span slot="label" class="default-color"
                        >Credit/Debit</span
                      >
                    </v-radio>
                  </v-btn>
                  <v-btn
                    @click="
                      creditDialog = false;
                      qrcodeDialog = false;
                      mobileBankingDialog = !mobileBankingDialog;
                    "
                    class="mx-10 my-1"
                    outlined
                    color="#13B8A4"
                    rounded
                  >
                    <v-radio value="mobileBank" color="#13B8A4">
                      <span slot="label" class="default-color"
                        >Mobile Banking</span
                      >
                    </v-radio>
                  </v-btn>
                  <v-btn
                    @click="
                      creditDialog = false;
                      qrcodeDialog = !qrcodeDialog;
                      mobileBankingDialog = false;
                    "
                    class="mx-10 my-1"
                    outlined
                    color="#13B8A4"
                    rounded
                  >
                    <v-radio value="qrcode" color="#13B8A4">
                      <span slot="label" class="default-color"
                        >QR code/Promtpay</span
                      >
                    </v-radio>
                  </v-btn>
                </v-radio-group>
              </v-card-actions>
              <!--   Credit card dialog -->
              <v-card class="mx-8" v-if="creditDialog" flat color="#f7f7f5">
                <v-card-title class="gophi-theme-color-bg">
                  <v-row>
                    <v-col class="col-1">
                      <v-icon color="white">mdi-credit-card</v-icon>
                    </v-col>
                    <v-col>
                      <span class="text-h5 white--text"
                        >Credit/Debit card information</span
                      >
                    </v-col>
                  </v-row>
                </v-card-title>
                <CreditInformation />
                <v-card-actions class="justify-end mr-3">
                  <v-btn
                    elevation="0"
                    class="mb-2"
                    color="#13b8a4"
                    @click="creditDialog = false"
                    dark
                    >Confirm</v-btn
                  >
                </v-card-actions>
              </v-card>
              <!--   Mobile Banking -->
              <v-card
                class="mx-8"
                v-if="mobileBankingDialog"
                flat
                color="#f7f7f5"
              >
                <v-card-title class="gophi-theme-color-bg">
                  <v-row>
                    <v-col class="col-1">
                      <v-icon color="white">mdi-cellphone</v-icon>
                    </v-col>
                    <v-col>
                      <span class="text-h5 white--text"
                        >Mobile bank information</span
                      >
                    </v-col>
                  </v-row>
                </v-card-title>
                <MobileBankingInformation />
                <v-card-actions class="justify-end mr-3">
                  <v-btn
                    elevation="0"
                    class="mb-2"
                    color="#13b8a4"
                    @click="mobileBankingDialog = false"
                    dark
                    >Confirm</v-btn
                  >
                </v-card-actions>
              </v-card>
              <!--   QR code -->
              <v-card class="mx-8" v-if="qrcodeDialog" flat color="#f7f7f5">
                <v-card-title class="gophi-theme-color-bg">
                  <v-row>
                    <v-col class="col-1">
                      <v-icon color="white">mdi-qrcode-scan </v-icon>
                    </v-col>
                    <v-col>
                      <span class="text-h5 white--text"
                        >QR code / Promtpay</span
                      >
                    </v-col>
                  </v-row>
                </v-card-title>
                <v-card-actions class="justify-center mt-3">
                  <v-img
                    max-height="300"
                    max-width="300"
                    :src="require('../../assets/gophi-qrcode.png')"
                    alt="QR code payment"
                  />
                </v-card-actions>
                <v-card-actions class="justify-end mr-3">
                  <v-btn
                    elevation="0"
                    class="mb-2"
                    color="#13b8a4"
                    @click="qrcodeDialog = false"
                    dark
                    >Confirm</v-btn
                  >
                </v-card-actions>
              </v-card>
              <v-card-actions class="justify-end">
                <v-btn text @click="e6 = e6 - 1"> Back </v-btn>
              </v-card-actions>
            </v-card>
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
import CreditInformation from "./CreditInformation";
import MobileBankingInformation from "./MobileBankingInformation";

export default {
  name: "MakeOrder",
  components: { CreditInformation, MobileBankingInformation },
  data() {
    return {
      dialog: false,
      note: "",
      credit: false,
      qrcode: false,
      cardNumber: "",
      creditDialog: false,
      mobileBankingDialog: false,
      qrcodeDialog: false,
      mobileBanking: false,
      video:
        '<iframe width="213" height="150" src="https://www.youtube.com/embed/H3vFeHYfquw" allow="autoplay; encrypted-media" allowfullscreen></iframe>',
      audioLangInput: "English",
      subtitlingLangInput: "English",
      levelOfLangInput: "Basic",
      categoryInput: "Business",
      proofread: false,
      isSelecting: false,
      selectedFile: null,
      levelOfLang: ["Basic", "Friendly", "Academic"],
      subtitlingLang: ["Japan", "Thai", "English", "Spanish"],
      audioLang: ["Japan", "Thai", "English", "Spanish"],
      category: ["Business", "Sport", "Cosmetic", "Science"],
      e6: 3,
    };
  },
  computed: {
    fileName() {
      return this.selectedFile ? this.selectedFile.name : "No file chosen";
    },
  },
  methods: {
    onButtonClick() {
      this.isSelecting = true;
      window.addEventListener(
        "focus",
        () => {
          this.isSelecting = false;
        },
        { once: true }
      );

      this.$refs.uploader.click();
    },
    test() {
      console.log("can click");
    },
    onFileChanged(e) {
      this.selectedFile = e.target.files[0];

      // do something
    },
  },
};
</script>

<style src="../../css/customer/MakeOrder.css"></style>
