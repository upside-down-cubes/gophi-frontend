<template>
  <v-container>
    <v-row class="mt-5">
      <v-col>
        <v-btn-toggle
          v-model="text"
          class="mt-10 rounded-lg"
          color="green"
          mandatory
        >
          <v-btn class="mr-1 rounded-lg" @click="test('left')">
            <span class="disable-color">Your Orders</span>
          </v-btn>
          <v-btn class="rounded-lg" @click="test('center')">
            <span class="disable-color">Quick Orders</span>
          </v-btn>
        </v-btn-toggle>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-simple-table class="styled-table">
          <template v-slot:default>
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
              </tr>
            </thead>
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
                  <v-menu
                    top
                    min-width="300px"
                    max-height="600px"
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
                          distracted by the readable content of a page when
                          looking at its layout. The point of using Lorem Ipsum
                          is that it has a more-or-less normal distribution of
                          letters, as opposed to using 'Content here, content
                          here', making it look like readable English. Many
                          desktop publishing packages and web page editors now
                          use Lorem Ipsum as their default model text, and a
                          search for 'lorem ipsum' will uncover many web sites
                          still in their infancy. Various versions have evolved
                          over the years, sometimes by accident, sometimes on
                          purpose (injected humour and the like).
                        </p>
                      </v-card-title>
                    </v-card>
                  </v-menu>
                </td>
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
  name: "Translator_Order",
  data: () => ({
    text: "left",
    toggle_multiple: [0, 1, 2],
    order: [
      {
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
        category: "Bussiness",
        length: "~3 mins",
        amount: "$122",
      },
    ],
  }),
  methods: {
    test(input) {
      if (input === "left") {
        this.order = [
          {
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
            category: "Bussiness",
            length: "~3 mins",
            amount: "$122",
          },
        ];
      } else if (input === "center") {
        this.order = [
          {
            date: "24-Sep-2021 10:14",
            by: "gophi team",
            language: [
              {
                content: "JP > TH",
              },
              {
                content: "JP > EN",
              },
            ],
            level: "Academic",
            category: "Sport",
            length: "~10 mins",
            amount: "$1,342",
          },
          {
            date: "10-Oct-2021 15:01",
            by: "gophi team",
            language: [
              {
                content: "KR > CN",
              },
            ],
            level: "Basic",
            category: "Cosmetic",
            length: "~2 mins",
            amount: "$90",
          },
        ];
      }
    },
  },
};
</script>

<style src="../../css/translator/order.css"></style>
