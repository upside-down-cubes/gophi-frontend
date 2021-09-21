<template>
  <v-container>
    <v-row class="mx-6 mt-8">
      <v-col md="4">
        <v-card-text
          style="font-size: large; font-weight: normal; color: #535353"
        >
          Languages</v-card-text
        >
      </v-col>
      <v-col class="mr-5">
        <v-autocomplete
          v-model="language"
          ref="language"
          :items="allLanguages"
          label="Select your language of expertise"
          placeholder="Select your language of expertise"
          color="#13B8A4"
          outlined
          hide-selected
          single-line
          clearable
          deletable-chips
          multiple
          small-chips
          solo
          dense
        >
        </v-autocomplete>
      </v-col>
    </v-row>

    <v-row class="mx-6">
      <v-col md="4">
        <v-card-text
          style="font-size: large; font-weight: normal; color: #535353"
        >
          Content category</v-card-text
        >
      </v-col>
      <v-col class="mr-5">
        <v-autocomplete
          v-model="contentCategory"
          :items="allContents"
          label="Select your category of expertise"
          placeholder="Select your category of expertise"
          color="#13B8A4"
          outlined
          hide-selected
          single-line
          clearable
          deletable-chips
          multiple
          small-chips
          solo
          dense
        >
        </v-autocomplete>
      </v-col>
    </v-row>

    <v-row class="mx-6">
      <v-col md="4">
        <v-card-text
          style="font-size: large; font-weight: normal; color: #535353"
        >
          Level of expertise</v-card-text
        >
      </v-col>
      <v-col class="mr-5">
        <v-autocomplete
          v-model="level"
          :items="allLevels"
          label="Select your level of expertise"
          placeholder="Select your level of expertise"
          color="#13B8A4"
          item-color="teal accent-4"
          outlined
          single-line
          clearable
          solo
          dense
        >
        </v-autocomplete>
      </v-col>
    </v-row>

    <v-row class="mx-6">
      <v-col md="4">
        <v-card-text
          style="font-size: large; font-weight: normal; color: #535353"
        >
          Certification</v-card-text
        >
      </v-col>
      <v-col class="mr-5">
        <v-file-input
          label="Upload your certifications"
          placeholder="Upload your certifications"
          required
          clearable
          outlined
          dense
          single-line
          multiple
          filled
          solo
          append-icon="mdi-tray-arrow-up"
          prepend-icon=""
          color="#13B8A4"
          truncate-length="30"
        ></v-file-input>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Expertise",

  data: () => ({
    email: "",
    fullName: "",

    language: "",
    allLanguages: [
      "EN > EN",
      "EN > JP",
      "EN > KR",
      "EN > TH",
      "JP > EN",
      "JP > JP",
      "JP > KR",
      "JP > TH",
      "KR > EN",
      "KR > JP",
      "KR > KR",
      "KR > TH",
      "TH > EN",
      "TH > JP",
      "TH > TH",
    ],

    contentCategory: "",
    allContents: ["Fashion", "Sports", "Music"],

    level: "",
    allLevels: ["Beginner", "Intermediate", "Expert"],
  }),
};
</script>

<style scoped></style>
