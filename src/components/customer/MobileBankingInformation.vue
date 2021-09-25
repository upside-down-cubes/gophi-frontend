<template>
  <v-container>
    <v-row class="mx-6 mt-3">
      <v-col md="4">
        <v-card-text
          style="font-size: large; font-weight: normal; color: #535353"
        >
          Bank name</v-card-text
        >
      </v-col>
      <v-col>
        <v-autocomplete
          color="#13B8A4"
          style="background-color: white"
          clearable
          outlined
          hide-details
          label="Select bank"
          item-color="teal accent-4"
          single-line
          v-model="bankSelected"
          :items="bankChoices"
          dense
        ></v-autocomplete>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "MobileBankingInformation",
  data: () => ({
    bankChoices: ["SCB", "TMB", "Kasikorn", "KTB", "Bangkok", "UOB", "TISCO"],
    bankSelected: "",
  }),
};
</script>

<style scoped></style>
