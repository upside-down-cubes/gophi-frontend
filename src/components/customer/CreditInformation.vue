<template>
  <v-container class="pb-0">
    <v-row class="mx-6 mt-3">
      <v-col md="4">
        <v-card-text
          style="font-size: large; font-weight: normal; color: #535353"
        >
          Card number</v-card-text
        >
      </v-col>
      <v-col class="mr-5">
        <v-text-field
          v-model="cardNumber"
          hide-details
          color="#13B8A4"
          label="•••• •••• •••• ••••"
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
          Cardholder name</v-card-text
        >
      </v-col>
      <v-col class="mr-5">
        <v-text-field
          v-model="fullName"
          color="#13B8A4"
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
      <v-col md="4">
        <v-card-text
          style="font-size: large; font-weight: normal; color: #535353"
        >
          Expiry date</v-card-text
        >
      </v-col>
      <v-col class="mr-5">
        <v-menu
          ref="menu"
          v-model="menu"
          :close-on-content-click="false"
          :return-value.sync="date"
          transition="scale-transition"
          max-width="290px"
          min-width="auto"
          offset-overflow
          ><template v-slot:activator="{ on, attrs }">
            <v-text-field
              v-model="date"
              color="#13B8A4"
              prepend-inner-icon="mdi-calendar"
              required
              clearable
              outlined
              dense
              single-line
              solo
              readonly
              filled
              v-bind="attrs"
              v-on="on"
            ></v-text-field>
          </template>
          <v-date-picker
            v-model="date"
            no-title
            type="month"
            scrollable
            color="#13B8A4"
            light
          >
            <v-spacer></v-spacer>
            <v-btn text color="#13B8A4" @click="menu = false"> Cancel </v-btn>
            <v-btn text color="#13B8A4" @click="$refs.menu.save(date)">
              OK
            </v-btn>
          </v-date-picker>
        </v-menu>
      </v-col>
    </v-row>
    <v-row class="mx-6">
      <v-col md="4">
        <v-card-text
          style="font-size: large; font-weight: normal; color: #535353"
        >
          CVC</v-card-text
        >
      </v-col>
      <v-col class="mr-5">
        <v-text-field
          v-model="cvc"
          color="#13B8A4"
          label="•••"
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
  </v-container>
</template>

<script>
export default {
  name: "CreditInformation",

  data: () => ({
    email: "",
    fullName: "",
    cardNumber: "",
    date: new Date().toISOString().substr(0, 7),
    menu: false,
    cvc: "",
  }),

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
  },
};
</script>

<style scoped></style>
