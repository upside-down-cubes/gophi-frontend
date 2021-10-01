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
                <!--
                <v-list-item-action>
                  <v-window>
                    <v-window-item v-html="video"></v-window-item>
                  </v-window>
                </v-list-item-action>
                -->
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
                      ~{{ videoLength }} min
                    </p>
                  </v-col>
                </v-row>
              </v-card-title>
              <v-row class="mx-2">
                <v-col>
                  <span>Audio language</span>
                  <v-autocomplete
                    color="#13B8A4"
                    item-color="teal accent-4"
                    style="background-color: white"
                    clearable
                    outlined
                    hide-details
                    label="Select language"
                    single-line
                    v-model="audioLangInput"
                    :items="LangChoices"
                    item-value="short"
                    item-text="fullName"
                    dense
                  >
                    <template v-slot:selection="data">
                      <v-chip
                        small
                        v-bind="data.attrs"
                        :input-value="data.selected"
                        color="rgba(19, 184, 165, 0.7)"
                        dark
                        close
                        @click="data.select"
                        @click:close="audioLangInput = ''"
                      >
                        {{ data.item.short }}
                      </v-chip>
                    </template>
                    <template v-slot:item="data">
                      <template>
                        <v-list-item-content>
                          <v-list-item-title
                            v-html="data.item.fullName"
                          ></v-list-item-title>
                          <v-list-item-subtitle
                            v-html="data.item.short"
                          ></v-list-item-subtitle>
                        </v-list-item-content>
                      </template>
                    </template>
                  </v-autocomplete>
                </v-col>
                <v-col>
                  <span>Subtitling language</span>
                  <v-autocomplete
                    outlined
                    color="#13B8A4"
                    style="background-color: white"
                    item-color="teal accent-4"
                    label="Select language"
                    v-model="subtitlingLangInput"
                    hide-details
                    single-line
                    :items="LangChoices"
                    item-value="short"
                    item-text="fullName"
                    multiple
                    dense
                  >
                    <template v-slot:selection="data">
                      <v-chip
                        v-bind="data.attrs"
                        small
                        color="rgba(19, 184, 165, 0.7)"
                        dark
                        :input-value="data.selected"
                        close
                        @click="data.select"
                        @click:close="remove(data.item)"
                      >
                        {{ data.item.short }}
                      </v-chip>
                    </template>
                    <template v-slot:item="data">
                      <template>
                        <v-list-item-content>
                          <v-list-item-title
                            v-html="data.item.fullName"
                          ></v-list-item-title>
                          <v-list-item-subtitle
                            v-html="data.item.short"
                          ></v-list-item-subtitle>
                        </v-list-item-content>
                      </template>
                    </template>
                  </v-autocomplete>
                </v-col>
              </v-row>
              <v-card-subtitle class="mx-2 pt-1">
                <span>*Auto-detected</span>
              </v-card-subtitle>
              <v-row class="mx-2">
                <v-col>
                  <span>Level of language</span>
                  <v-autocomplete
                    outlined
                    color="#13B8A4"
                    item-color="teal accent-4"
                    style="background-color: white"
                    clearable
                    v-model="levelOfLangInput"
                    label="Select level of language"
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
                    item-color="teal accent-4"
                    style="background-color: white"
                    v-model="categoryInput"
                    hide-details
                    label="Select category"
                    single-line
                    :items="category"
                    dense
                  ></v-autocomplete>
                </v-col>
              </v-row>
              <v-row class="mx-1">
                <v-checkbox
                  class="mx-5 mb-2"
                  v-model="checkBox"
                  label="I would like to receive my order within 12 hours"
                  color="#13B8A4"
                  value="#13B8A4"
                  hide-details
                  @click="proofread = false"
                  ><v-tooltip slot="append" max-width="250" bottom>
                    <template v-slot:activator="{ on }">
                      <v-icon small v-on="on" color="#13B8A4" class="mt-1">
                        mdi-help
                      </v-icon>
                    </template>
                    <span style="font-size: 12px"
                      >If you would like to receive your order within 12 hours,
                      your order will be sent to a larger group of translators
                      of your match for the quickest acceptance. Otherwise, your
                      order wil be sent to the top ~3 translators of your match
                      whereby the acceptance time may be longer.</span
                    >
                  </v-tooltip>
                </v-checkbox>
              </v-row>
              <v-row class="mx-2">
                <v-col>
                  <v-switch
                    class="mt-2"
                    v-model="proofread"
                    :disabled="checkBox"
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
          class="justify-center overflow-y-auto"
          min-height="300"
          min-width="200"
          max-width="300"
          max-height="400"
        >
          <v-card-title class="justify-center">
            <h4>Order summary</h4>
          </v-card-title>
          <v-divider class="mx-10"></v-divider>
          <v-card-subtitle>
            <p class="font-weight-bold">Languages</p>
            <ul class="my-3" v-for="(item, i) in langPriceInput" :key="i">
              <li>
                <v-row>
                  <v-col cols="6">
                    <span>{{ item.language }}</span>
                  </v-col>
                  <v-col>~{{ item.general }} Baht/min</v-col>
                </v-row>
              </li>
            </ul>
            <ul class="my-3" v-if="subtitlingLangInput.length === 0">
              <li>No subtitling language selected</li>
            </ul>
            <p class="font-weight-bold">Content category</p>
            <ul class="my-3">
              <li v-if="categoryInput !== ''">
                <v-row>
                  <v-col cols="6">
                    <span>{{ categoryInput }}</span>
                  </v-col>
                  <v-col v-if="categoryInput !== ''"
                    >+{{ categoryPrice }} Baht/min</v-col
                  >
                </v-row>
              </li>
              <li v-else>No category selected</li>
            </ul>
            <v-row>
              <v-col cols="7">
                <span class="font-weight-bold">Video length</span>
              </v-col>
              <v-col>
                <span>~{{ videoLength }} min</span>
              </v-col>
            </v-row>
            <v-divider class="divider-header-1 my-2"></v-divider>
            <v-row>
              <v-col cols="7">
                <span class="font-weight-bold text-h6">Total:</span>
              </v-col>
              <v-col>
                <span class="text-h6">฿{{ totalPrice }}</span>
              </v-col>
            </v-row>
            <v-divider class="divider-header-2"></v-divider>
          </v-card-subtitle>
        </v-card>
        <v-btn
          @click="updateOrder"
          class="mt-3"
          color="#13B8A4"
          elevation="0"
          dark
        >
          Confirm order
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import CreditInformation from "./CreditInformation";
import MobileBankingInformation from "./MobileBankingInformation";
import store from "../../store";
import router from "../../router";

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
      checkBox: false,
      audioLangInput: "EN",
      subtitlingLangInput: [],
      levelOfLangInput: "",
      categoryInput: "General",
      categoryPriceInput: 0,
      proofread: false,
      isSelecting: false,
      selectedFile: null,
      levelOfLang: [
        "Academic",
        "Business Casual",
        "Business Formal",
        "Casual",
        "Conversational",
        "Formal/technical",
        "Marketing",
        "Other",
      ],
      LangChoices: [
        { short: "AR", fullName: "Arabic" },
        { short: "BN", fullName: "Bengali" },
        { short: "BS", fullName: "Bosnian" },
        { short: "BG", fullName: "Bulgarian" },
        { short: "MY", fullName: "Burmese" },
        { short: "ZH (s)", fullName: "Chinese (simplified)" },
        { short: "ZH (t)", fullName: "Chinese (traditional)" },
        { short: "DA", fullName: "Danish" },
        { short: "NL", fullName: "Dutch" },
        { short: "EN", fullName: "English" },
        { short: "EN (UK)", fullName: "English (UK)" },
        { short: "EN (US)", fullName: "English (US)" },
        { short: "ET", fullName: "Estonian" },
        { short: "FI", fullName: "Finnish" },
        { short: "FR", fullName: "French" },
        { short: "DE", fullName: "German" },
        { short: "EL", fullName: "Greek" },
        { short: "HI", fullName: "Hindi" },
        { short: "HU", fullName: "Hungarian" },
        { short: "IS", fullName: "Icelandic" },
        { short: "ID", fullName: "Indonesian" },
        { short: "GA", fullName: "Irish" },
        { short: "IT", fullName: "Italian" },
        { short: "JA", fullName: "Japanese" },
        { short: "KO", fullName: "Korean" },
        { short: "LO", fullName: "Lao" },
        { short: "LA", fullName: "Latin" },
        { short: "LV", fullName: "Latvian" },
        { short: "MS", fullName: "Malay" },
        { short: "MN", fullName: "Mongolian" },
        { short: "NE", fullName: "Nepali" },
        { short: "NO", fullName: "Norwegian" },
        { short: "PS", fullName: "Pashto" },
        { short: "FA", fullName: "Persian" },
        { short: "PL", fullName: "Polish" },
        { short: "PT", fullName: "Portuguese" },
        { short: "RO", fullName: "Romanian" },
        { short: "RU", fullName: "Russian" },
        { short: "SR", fullName: "Serbian" },
        { short: "SK", fullName: "Slovak" },
        { short: "SL", fullName: "Slovenian" },
        { short: "ES", fullName: "Spanish" },
        { short: "SV", fullName: "Swedish" },
        { short: "TA", fullName: "Tamil" },
        { short: "TH", fullName: "Thai" },
        { short: "TR", fullName: "Turkish" },
        { short: "UK", fullName: "Ukrainian" },
        { short: "UR", fullName: "Urdu" },
        { short: "UZ", fullName: "Uzbek" },
        { short: "VI", fullName: "Vietnamese" },
        { short: "CY", fullName: "Welsh" },
      ],
      category: [
        "General",
        "Arts & Entertainment",
        "Biology",
        "Business",
        "Chemistry",
        "Economics & Finance",
        "Games & Fiction",
        "General science",
        "History",
        "Law",
        "Lifestyle & Health",
        "Medical science",
        "News & Politics",
        "Physics & Engineering",
        "Society & Culture",
        "Sports & Recreation",
        "Technology & Product description",
      ],
      total: 0,
      langPrices: [
        { language: "AF", general: 32, special: 41.6 },
        { language: "AR", general: 22, special: 28.6 },
        { language: "BN", general: 32, special: 41.6 },
        { language: "BS", general: 32, special: 41.6 },
        { language: "BG", general: 32, special: 41.6 },
        { language: "MY", general: 32, special: 41.6 },
        { language: "ZH (s)", general: 32, special: 41.6 },
        { language: "ZH (t)", general: 32, special: 41.6 },
        { language: "DA", general: 32, special: 41.6 },
        { language: "NL", general: 32, special: 41.6 },
        { language: "EN", general: 15, special: 19.5 },
        { language: "EN (UK)", general: 15, special: 19.5 },
        { language: "EN (US)", general: 15, special: 19.5 },
        { language: "ET", general: 32, special: 41.6 },
        { language: "FI", general: 32, special: 41.6 },
        { language: "FR", general: 32, special: 41.6 },
        { language: "DE", general: 32, special: 41.6 },
        { language: "EL", general: 32, special: 41.6 },
        { language: "HI", general: 22, special: 28.6 },
        { language: "HU", general: 32, special: 41.6 },
        { language: "IS", general: 32, special: 41.6 },
        { language: "ID", general: 32, special: 41.6 },
        { language: "GA", general: 22, special: 28.6 },
        { language: "IT", general: 32, special: 41.6 },
        { language: "JA", general: 45, special: 58.5 },
        { language: "KO", general: 32, special: 41.6 },
        { language: "LO", general: 32, special: 41.6 },
        { language: "LA", general: 45, special: 58.5 },
        { language: "LV", general: 32, special: 41.6 },
        { language: "MS", general: 32, special: 41.6 },
        { language: "MN", general: 32, special: 41.6 },
        { language: "NE", general: 32, special: 41.6 },
        { language: "NO", general: 32, special: 41.6 },
        { language: "PS", general: 32, special: 41.6 },
        { language: "FA", general: 32, special: 41.6 },
        { language: "PL", general: 22, special: 28.6 },
        { language: "PT", general: 22, special: 28.6 },
        { language: "RO", general: 32, special: 41.6 },
        { language: "RU", general: 32, special: 41.6 },
        { language: "SR", general: 32, special: 41.6 },
        { language: "SK", general: 32, special: 41.6 },
        { language: "SL", general: 32, special: 41.6 },
        { language: "ES", general: 22, special: 28.6 },
        { language: "SV", general: 32, special: 41.6 },
        { language: "TA", general: 32, special: 41.6 },
        { language: "TH", general: 32, special: 41.6 },
        { language: "TR", general: 22, special: 28.6 },
        { language: "UK", general: 32, special: 41.6 },
        { language: "UR", general: 32, special: 41.6 },
        { language: "UZ", general: 32, special: 41.6 },
        { language: "VI", general: 32, special: 41.6 },
        { language: "CY", general: 32, special: 41.6 },
      ],
      e6: 2,
    };
  },
  computed: {
    fileName() {
      return this.selectedFile ? this.selectedFile.name : "No file chosen";
    },
    videoLength() {
      return this.selectedFile ? Math.floor(Math.random() * 10) + 1 : 0;
    },
    langPriceInput() {
      if (this.subtitlingLangInput) {
        let lst = [];
        for (let i = 0; i < this.subtitlingLangInput.length; i++) {
          let lang = this.subtitlingLangInput[i];
          let search = this.langPrices.filter(
            (langRate) => langRate.language === lang
          );
          lst = lst.concat(search);
        }
        return lst;
      } else {
        return [];
      }
    },
    categoryPrice() {
      if (this.categoryInput !== "" && this.categoryInput !== "General") {
        let prices = 0;
        let n = 0;
        for (let i = 0; i < this.subtitlingLangInput.length; i++) {
          let searchResult = this.langPrices.filter(
            (lang) => lang.language === this.subtitlingLangInput[i]
          );
          for (let j = 0; j < searchResult.length; j++) {
            prices += searchResult[j].special - searchResult[j].general;
            n++;
          }
        }
        prices /= n;
        return prices.toFixed(1);
      } else {
        return 0;
      }
    },
    totalPrice() {
      if (this.subtitlingLangInput.length !== 0) {
        let pricePerMin = parseFloat(this.categoryPriceInput);
        for (let i = 0; i < this.subtitlingLangInput.length; i++) {
          let lang = this.subtitlingLangInput[i];
          let search = this.langPrices.filter(
            (langRate) => langRate.language === lang
          );
          for (let j = 0; j < search.length; j++) {
            if (this.categoryInput === "General") {
              pricePerMin += search[j].general;
            } else {
              pricePerMin += search[j].special;
            }
          }
        }
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
        this.total = (pricePerMin * this.videoLength).toFixed(1);
        return (pricePerMin * this.videoLength).toFixed(1);
      } else {
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
        this.total = 0;
        return 0;
      }
    },
  },
  mounted() {
    if (!this.$store.state.refresh) {
      this.$router.push({ name: "Home" });
    }
  },

  beforeMount() {
    window.addEventListener("beforeunload", this.preventNav);
  },

  beforeDestroy() {
    window.removeEventListener("beforeunload", this.preventNav);
  },

  methods: {
    preventNav(event) {
      event.preventDefault();
      event.returnValue = "";
    },
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
    async updateOrder() {
      let allMonths = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ];
      let currentDate = new Date();
      let orderDate =
        currentDate.getDate() +
        "-" +
        allMonths[currentDate.getMonth()] +
        "-" +
        currentDate.getFullYear() +
        " " +
        currentDate.getHours() +
        ":";
      if (currentDate.getMinutes() < 10) {
        orderDate += "0" + currentDate.getMinutes();
      } else {
        orderDate += "" + currentDate.getMinutes();
      }
      let language = [];
      for (let index = 0; index < this.subtitlingLangInput.length; index++) {
        let selectedLang = this.subtitlingLangInput[index];
        language.push({ content: this.audioLangInput + " > " + selectedLang });
      }
      let noteFromCustomer =
        this.note !== "" ? this.note : "No note from customer";
      let order = {
        date: orderDate,
        by: "gophi team",
        language: language,
        audioLang: this.audioLangInput,
        level: this.levelOfLangInput,
        category: this.categoryInput,
        noteFromCustomer: noteFromCustomer,
        length: "~" + this.videoLength + " min",
        amount: "฿" + this.total,
        quickOrder: this.checkBox,
      };
      await store.dispatch("addNewOrder", order);
      await router.push({ name: "CustomerOrder" });
    },
    onFileChanged(e) {
      this.selectedFile = e.target.files[0];
      // do something
    },
    remove(item) {
      const index = this.subtitlingLangInput.indexOf(item.short);
      if (index >= 0) this.subtitlingLangInput.splice(index, 1);
    },
  },
};
</script>

<style src="../../css/customer/MakeOrder.css"></style>
