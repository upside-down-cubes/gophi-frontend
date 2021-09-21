<template>
  <v-container>
    <v-row class="mx-6 mt-8">
      <v-col md="4">
        <v-card-text
          style="font-size: large; font-weight: normal; color: #535353"
        >
          Full name</v-card-text
        >
      </v-col>
      <v-col class="mr-5">
        <v-text-field
          v-model="fullName"
          label="John Doe"
          color="#13B8A4"
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
      <v-col md="4">
        <v-card-text
          style="font-size: large; font-weight: normal; color: #535353"
        >
          Email</v-card-text
        >
      </v-col>
      <v-col class="mr-5">
        <v-text-field
          color="#13B8A4"
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
      <v-col md="4">
        <v-card-text
          style="font-size: large; font-weight: normal; color: #535353"
        >
          Password</v-card-text
        >
      </v-col>
      <v-col class="mr-5">
        <v-text-field
          color="#13B8A4"
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

    <v-row class="mx-6">
      <v-col md="4">
        <v-card-text
          style="font-size: large; font-weight: normal; color: #535353"
        >
          Confirm password</v-card-text
        >
      </v-col>
      <v-col class="mr-5">
        <v-text-field
          color="#13B8A4"
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
