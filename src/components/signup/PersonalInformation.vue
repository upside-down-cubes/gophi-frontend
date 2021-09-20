<template>
  <v-container>
    <v-row class="mx-6 mt-8">
      <v-col cols="3">
        <v-card-text
          style="font-size: large; font-weight: normal; color: #535353"
        >
          Full Name</v-card-text
        >
      </v-col>
      <v-col class="mr-5">
        <v-text-field
          v-model="fullName"
          label="John Doe"
          persistent-hint
          required
          clearable
          outlined
          dense
          single-line
          solo
        ></v-text-field>
      </v-col>
    </v-row>

    <v-row class="mx-6">
      <v-col cols="3">
        <v-card-text
          style="font-size: large; font-weight: normal; color: #535353"
        >
          Email</v-card-text
        >
      </v-col>
      <v-col class="mr-5">
        <v-text-field
          v-model="email"
          label="customer@example.com"
          persistent-hint
          required
          clearable
          outlined
          dense
          single-line
          solo
        ></v-text-field>
      </v-col>
    </v-row>

    <v-row class="mx-6">
      <v-col cols="3">
        <v-card-text
          style="font-size: large; font-weight: normal; color: #535353"
        >
          Password</v-card-text
        >
      </v-col>
      <v-col class="mr-5">
        <v-text-field
          label="••••••••"
          required
          clearable
          outlined
          dense
          single-line
          solo
          type="password"
        ></v-text-field>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "PersonalInformation",

  data: () => ({
    email: "",
    fullName: "",
  }),
};
</script>

<style scoped></style>
