<template>
  <v-container>
    <v-row class="mt-5">
      <v-col>
      </v-col>
    </v-row>
    <h2>Order History</h2>
    <v-row>
      <v-col>
        <v-simple-table class="styled-table">
          <template v-slot:default>
            <thead>
            <tr>
              <th class="text-left">
                <span style="font-size: 18px">Order ID </span>
              </th>
              <th class="text-left">
                <span style="font-size: 18px">Title </span>
              </th>
              <th class="text-left">
                <span style="font-size: 18px">Status </span>
              </th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="item in order" :key="item.name">
              <td>{{ item.id}}</td>
              <td>{{ item.title}}</td>
              <v-btn rounded small elevation="0" color="#CECECE" class="white--text mt-3">
                Customer review
              </v-btn>
                <v-btn rounded small elevation="0" color="#1bb7a4" class="white--text mt-3 ml-10" >
                  Approve
                </v-btn>
              <v-btn  rounded small elevation="0" color="#CECECE" class="mt-3 ml-2" >
                Request revision
              </v-btn>
              <a href="workspace" class="ml-16" >View submission</a>
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
    text: "left",
    toggle_multiple: [0, 1, 2],
    order: [
      {
        id: "#000001",
        title: "Go gophi!",
        approve: true,
        //some Random data
      },
    ],
  }),
  methods: {
     }
};
</script>

<style src="../../css/translator/order.css"></style>
