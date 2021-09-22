<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12" class="mt-16">
        <v-img
          :src="require('../assets/gophilogodark.png')"
          class="mt-16 mb-3"
          contain
          height="200"
        />
      </v-col>

      <v-col class="mb-4">
        <h1 class="mb-3">A subtitling platform for globalizing knowledge</h1>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "HelloWorld",

  data: () => ({}),
};
</script>
