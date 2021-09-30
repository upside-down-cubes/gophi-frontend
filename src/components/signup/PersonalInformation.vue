<template>
  <v-container class="mt-10 justify-space-around justify-space-between">
    <v-row class="mx-2 justify-space-between">
      <v-col md="4" class="pt-2">
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
          hide-details
          dense
          single-line
          solo
        ></v-text-field>
      </v-col>
    </v-row>

    <v-row class="mx-2 justify-space-between">
      <v-col md="4">
        <v-card-text
          style="font-size: large; font-weight: normal; color: #535353"
        >
          Email</v-card-text
        >
      </v-col>
      <v-col class="mr-5 pb-0 mb-0">
        <v-text-field
          color="#13B8A4"
          v-model="email"
          :rules="emailRules"
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

    <v-row class="mx-2 justify-space-between">
      <v-col md="4">
        <v-card-text
          style="font-size: large; font-weight: normal; color: #535353"
        >
          Password</v-card-text
        >
      </v-col>
      <v-col class="mr-5 pb-0">
        <v-text-field
          v-model="password"
          color="#13B8A4"
          label="••••••••"
          required
          clearable
          hide-details
          outlined
          dense
          single-line
          solo
          type="password"
        ></v-text-field>
      </v-col>
    </v-row>

    <v-row class="mx-2 justify-space-between">
      <v-col md="4">
        <v-card-text
          style="font-size: large; font-weight: normal; color: #535353"
        >
          Confirm password</v-card-text
        >
      </v-col>
      <v-col class="mr-5 pb-0">
        <v-text-field
          v-model="confirmPassword"
          :rules="[passwordConfirmationRule]"
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
    password: "",
    confirmPassword: "",

    emailRules: [
      (v) =>
        !v ||
        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
        "E-mail must be valid",
    ],
  }),

  computed: {
    passwordConfirmationRule() {
      return () => (this.password === this.confirmPassword) || 'Password must match'
    },
  }
};
</script>

<style scoped></style>
