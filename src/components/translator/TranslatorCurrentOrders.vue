<template>
  <v-container>
    <v-row class="mt-5">
      <v-col><h4 style="font-size: 20px">Current Orders</h4></v-col>
    </v-row>
    <!--   Order table (styled table class is in css/translator/order.css)     -->
    <v-simple-table class="styled-table">
      <template v-slot:default>
        <!--  Header -->
        <thead>
          <tr>
            <th class="text-left">
              <span style="font-size: 18px">Order ID</span>
            </th>
            <th class="text-left">
              <span style="font-size: 18px">Date/Time</span>
            </th>
            <th class="text-left">
              <span style="font-size: 18px">By</span>
            </th>
            <th class="text-left">
              <span style="font-size: 18px"> Language </span>
            </th>
            <th class="text-left">
              <span style="font-size: 18px"> Level of language </span>
            </th>
            <th class="text-left">
              <span style="font-size: 18px"> Category </span>
            </th>
            <th class="text-left">
              <span style="font-size: 18px">Length</span>
            </th>
            <th class="text-left">
              <span style="font-size: 18px">Amount </span>
            </th>
            <th class="text-left">
              <span style="font-size: 18px">Notes</span>
            </th>
            <th />
          </tr>
        </thead>
        <!--      Table row      -->
        <tbody>
          <tr v-for="item in order" :key="item.name">
            <td>{{ item.id }}</td>
            <td>{{ item.date }}</td>
            <td>{{ item.by }}</td>
            <td>
              <v-chip
                class="ma-1"
                color="#CECECE"
                v-for="(lan_item, j) in item.language"
                :key="j"
              >
                {{ lan_item.content }}
              </v-chip>
            </td>
            <td>{{ item.level }}</td>
            <td>
              <v-chip color="#CECECE">{{ item.category }}</v-chip>
            </td>
            <td>{{ item.length }}</td>
            <td>{{ item.amount }}</td>
            <td>
              <!--    Note toggle  -->
              <v-menu
                top
                min-width="300px"
                max-height="500px"
                open-on-hover
                offset-y
                right
                offset-x
              >
                <template v-slot:activator="{ on }">
                  <v-btn icon v-on="on">
                    <v-icon> mdi-dots-horizontal </v-icon>
                  </v-btn>
                </template>
                <v-card class="mx-auto" max-width="300" outlined>
                  <v-card-title class="ma-1">
                    <p class="font-weight-light">
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout. The point of using Lorem Ipsum is that it
                      has a more-or-less normal distribution of letters, as
                      opposed to using 'Content here, content here', making it
                      look like readable English. Many desktop publishing
                      packages and web page editors now use Lorem Ipsum as their
                      default model text, and a search for 'lorem ipsum' will
                      uncover many web sites still in their infancy. Various
                      versions have evolved over the years, sometimes by
                      accident, sometimes on purpose (injected humour and the
                      like).
                    </p>
                  </v-card-title>
                </v-card>
              </v-menu>
            </td>
            <td>
              <v-btn
                class="mr-4"
                color="success"
                elevation="0"
                x-small
                :to="{ name: 'TranslatorWorkspace' }"
              >
                edit
              </v-btn>
              <v-dialog v-model="dialog" width="500">
                <template v-slot:activator="{ on, attrs }">
                  <v-btn icon elevation="0" v-bind="attrs" v-on="on">
                    <v-icon>mdi-chat</v-icon>
                  </v-btn>
                </template>

                <v-card>
                  <v-card-title style="background-color: #13b8a4">
                    <span style="color: white">Note to Customer</span>
                  </v-card-title>

                  <v-card-actions class="mt-5">
                    <v-textarea
                      v-model="noteToCustomer"
                      solo
                      label="Please fill in this area"
                      outlined
                      color="#13b8a4"
                    >
                    </v-textarea>
                  </v-card-actions>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                      text
                      @click="
                        dialog = false;
                        noteToCustomer = '';
                      "
                    >
                      Back
                    </v-btn>
                    <v-btn
                      color="#13b8a4"
                      dark
                      elevation="0"
                      @click="dialog = false"
                    >
                      Confirm
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </v-container>
</template>

<script>
export default {
  name: "Translator_Order",
  data: () => ({
    text: "left",
    time: null,
    noteToCustomer: "",
    date: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
      .toISOString()
      .substr(0, 10),
    menu: false,
    menu2: false,
    dialog: false,
    toggle_multiple: [0, 1, 2],
    order: [
      {
        id: "#000001",
        date: "25-Aug-2021 14:14",
        by: "gophi team",
        language: [
          {
            content: "EN > EN",
          },
          {
            content: "EN > TH",
          },
        ],
        level: "Friendly",
        category: "Business",
        length: "~3 mins",
        amount: "$122",
      },
    ],
  }),
};
</script>

<style src="../../css/translator/order.css"></style>
