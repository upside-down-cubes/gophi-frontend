<template>
  <v-container>
    <v-card width="1200" elevation="0" class="mx-auto mt-10">
      <span>Comments</span>
      <v-textarea
        solo
        flat
        filled
        dense
        hide-details
        no-resize
        rows="4"
        background-color="#f1f1f1"
        class="mt-1"
        style="font-size: 14px"
      >
      </v-textarea>
    </v-card>
    <v-row>
      <v-spacer></v-spacer>
      <v-btn
        dark
        class="ma-7"
        color="#13B8A4"
        elevation="0"
        :to="{ name: 'CustomerOrder' }"
        >Save & Continue
      </v-btn>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "CustomerReviewSubmission",
};
</script>

<style scoped></style>
