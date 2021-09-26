<template>
  <v-container>
    <!-- Test button -->
    <v-row class="mt-5">
      <v-col>
        <!--    Button toggle    -->
        <v-btn-toggle class="mt-10 rounded-lg" color="#13B8A4" mandatory>
          <v-btn class="mr-1 rounded-lg" @click="changeOrderData(0)">
            <span class="disable-color">Your Orders</span>
          </v-btn>
          <v-btn class="rounded-lg" @click="changeOrderData(1)">
            <span class="disable-color">Quick Orders</span>
          </v-btn>
        </v-btn-toggle>
      </v-col>
      <v-select
        class="select-bar mr-9"
        style="max-width: 430px"
        v-model="selectionType"
        :items="['Customer Name', 'Language', 'Level of language']"
        label="Filter by"
        color="#13B8A4"
        hide-details
        chips
        clearable
        item-color="teal accent-4"
      ></v-select>
    </v-row>
    <!--   Order table (styled table class is in css/translator/order.css)     -->

    <v-simple-table class="styled-table">
      <template v-slot:default>
        <!--  Header -->
        <thead>
          <tr>
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
                max-height="300px"
                offset-y
                right
                offset-x
              >
                <template v-slot:activator="{ on }">
                  <v-btn
                    rounded
                    x-small
                    elevation="0"
                    v-on="on"
                    color="#CECECE"
                  >
                    <v-icon> mdi-dots-horizontal </v-icon>
                  </v-btn>
                </template>
                <v-card class="mx-auto" max-width="300" outlined>
                  <v-card-title class="ma-1">
                    <p class="font-weight-light" style="font-size: 14px">
                      {{ item.noteFromCustomer }}
                    </p>
                  </v-card-title>
                </v-card>
              </v-menu>
            </td>
            <td>
              <!-- Accept button with dialog -->
              <v-dialog transition="dialog-top-transition" max-width="600">
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    color="#13B8A4"
                    dark
                    elevation="0"
                    x-small
                    v-bind="attrs"
                    v-on="on"
                    >Accept</v-btn
                  >
                </template>
                <!--  Pop up dialog to select estimate time to finish -->
                <template v-slot:default="dialog">
                  <v-card>
                    <v-card-title style="background-color: #13b8a4">
                      <span style="color: white">Estimate time to finish</span>
                    </v-card-title>
                    <v-row class="mx-5 mt-4">
                      <v-col>
                        <v-menu
                          v-model="menu"
                          :close-on-content-click="false"
                          :nudge-right="40"
                          transition="scale-transition"
                          offset-y
                          min-width="auto"
                        >
                          <template v-slot:activator="{ on, attrs }">
                            <v-text-field
                              v-model="date"
                              label="Estimate Date"
                              outlined
                              color="#13b8a4"
                              prepend-icon="mdi-calendar"
                              readonly
                              v-bind="attrs"
                              v-on="on"
                            ></v-text-field>
                          </template>
                          <v-date-picker
                            v-model="date"
                            color="#13b8a4"
                            @input="menu = false"
                          ></v-date-picker>
                        </v-menu>
                      </v-col>
                      <v-col>
                        <v-menu
                          ref="menu"
                          v-model="menu2"
                          :close-on-content-click="false"
                          :nudge-right="40"
                          :return-value.sync="time"
                          transition="scale-transition"
                          offset-y
                          max-width="290px"
                          min-width="290px"
                        >
                          <template v-slot:activator="{ on, attrs }">
                            <v-text-field
                              v-model="time"
                              color="#13b8a4"
                              label="Estimate time"
                              prepend-icon="mdi-clock-time-four-outline"
                              readonly
                              outlined
                              v-bind="attrs"
                              v-on="on"
                            ></v-text-field>
                          </template>
                          <v-time-picker
                            v-if="menu2"
                            v-model="time"
                            color="#13b8a4"
                            format="24hr"
                            full-width
                            @click:minute="$refs.menu[0].save(time)"
                          ></v-time-picker>
                        </v-menu>
                      </v-col>
                    </v-row>
                    <v-card-actions class="justify-end">
                      <v-btn text @click="clearDate(dialog)">Close</v-btn>
                      <v-btn
                        color="#13b8a4"
                        elevation="0"
                        dark
                        @click="dialog.value = false"
                        >Confirm</v-btn
                      >
                    </v-card-actions>
                  </v-card>
                </template>
              </v-dialog>
              <!--    Reject button  -->
              <v-btn
                v-if="text === 0"
                class="ma-1"
                color="#ACACAC"
                elevation="0"
                x-small
              >
                <span style="color: white"> Reject </span>
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
    <!-- History table (styled table class in the ccs/translator/order.css) -->

    <v-card-title v-if="!text">
      Order History
      <v-spacer></v-spacer>
      <v-text-field
        class="search-bar mt-0"
        v-model="search"
        append-icon="mdi-magnify"
        label="Search"
        style="max-width: 430px"
        single-line
        hide-details
        color="#13B8A4"
      ></v-text-field>
    </v-card-title>
    <v-simple-table v-if="!text" class="styled-table">
      <template v-slot:default>
        <!--  Header -->
        <thead>
          <tr>
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
          <tr v-for="item in orderHistory" :key="item.name">
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
import store from "../../store";

export default {
  name: "Translator_Order",
  data: () => ({
    text: 0,
    time: null,
    noteToCustomer: "",
    date: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
      .toISOString()
      .substr(0, 10),
    menu: false,
    menu2: false,
    dialog: false,
    toggle_multiple: [0, 1, 2],
    order: [],
    search: "",
    selectionType: "",
    orderHistory: [
      {
        date: "10-Aug-2021 14:14",
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
  beforeMount() {
    this.changeOrderData(0);
  },
  methods: {
    clearDate(dialog) {
      this.date = new Date(Date.now() - new Date().getTimezoneOffset() * 60000);
      this.time = null;
      dialog.value = false;
    },
    changeOrderData(input) {
      this.text = input;
      if (input === 0) {
        let allOrder = store.state.orderData;
        this.order = allOrder.filter((allOrder) => allOrder.audioLang === "EN");
      } else if (input === 1) {
        this.order = store.state.orderData;
      }
    },
  },
};
</script>

<style src="../../css/translator/order.css"></style>
