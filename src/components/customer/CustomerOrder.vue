<template>
  <v-container>
    <v-row class="mt-5">
      <v-col> </v-col>
    </v-row>
    <h2>Order History</h2>
    <v-row>
      <v-col>
        <v-simple-table class="styled-table">
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-left" width="20%">
                  <span style="font-size: 18px">Order ID </span>
                </th>
                <th class="text-left" width="30%">
                  <span style="font-size: 18px">Title </span>
                </th>
                <th class="text-left">
                  <span style="font-size: 18px">Status </span>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in order" :key="item.name">
                <td>{{ item.id }}</td>
                <td>{{ item.title }}</td>
                <!-- Status buttons -->
                <!-- status 0: waiting for Translator to accept -->
                <v-btn
                  v-if="item.status === 0"
                  rounded
                  small
                  elevation="0"
                  color="#A0A0A0"
                  class="white--text mt-3"
                >
                  Order sent
                </v-btn>
                <span
                  v-if="item.status === 0"
                  style="cursor: pointer"
                  class="grey--text mr-3 float-right mt-3"
                  ><u>View more details</u></span
                >
                <!-- status 1: Work is done from Translator-->
                <v-btn
                  v-if="item.status === 1"
                  rounded
                  small
                  elevation="0"
                  color="#A0A0A0"
                  class="white--text mt-3"
                >
                  Customer review
                </v-btn>
                <v-btn
                  v-if="item.status === 1"
                  @click="changeStatus(item, 3)"
                  rounded
                  small
                  elevation="0"
                  color="#1bb7a4"
                  class="white--text mt-3 ml-10"
                >
                  Accept
                </v-btn>
                <v-btn
                  v-if="item.status === 1"
                  @click="changeStatus(item, 2)"
                  rounded
                  small
                  elevation="0"
                  color="#CECECE"
                  class="mt-3 ml-2"
                >
                  Request revision
                </v-btn>
                <span
                  v-if="item.status === 1"
                  @click="viewWorkspace"
                  style="cursor: pointer"
                  class="grey--text mr-4 float-right mt-3 underlined"
                  ><u>View submission</u></span
                >
                <!-- status 2: Request revision-->
                <v-btn
                  v-if="item.status === 2"
                  rounded
                  small
                  elevation="0"
                  color="#A0A0A0"
                  class="white--text mt-3"
                >
                  Revision Requested
                </v-btn>
                <span
                  @click="viewWorkspace"
                  style="cursor: pointer"
                  v-if="item.status === 2"
                  class="grey--text mr-4 float-right mt-3"
                  ><u>View submission</u></span
                >
                <!-- status 3: ACCEPTED-->
                <v-btn
                  v-if="item.status === 3"
                  rounded
                  small
                  elevation="0"
                  color="#A0A0A0"
                  class="white--text mt-3"
                >
                  Order Completed
                </v-btn>
                <span
                  @click="viewWorkspace"
                  style="cursor: pointer"
                  v-if="item.status === 3"
                  class="grey--text mr-4 float-right mt-3"
                  ><u>View submission</u></span
                >
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Translator_OrderHistory",
  data: () => ({
    // status
    /*
    0: waiting for Translator to accept
    1: Work is done from Translator
    2: Request revision
    3: ACCEPTED
    */
    order: [
      {
        id: "#000001",
        title: "Go gophi!",
        status: 0,
        //some Random data
      },
      {
        id: "#000002",
        title: "A new youtube video on space",
        status: 1,
        //some Random data
      },
      {
        id: "#000003",
        title: "Sports commentary",
        status: 1,
        //some Random data
      },
      {
        id: "#000004",
        title: "Documentary on dinosaurs",
        status: 1,
        //some Random data
      },
    ],
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
    changeStatus(item, num) {
      console.log("hit");
      item.status = num;
    },
    preventNav(event) {
      event.preventDefault();
      event.returnValue = "";
    },
    viewWorkspace() {
      this.$router.push({ name: "CustomerViewWorkspace" });
    },
  },
};
</script>

<style src="../../css/translator/order.css"></style>
