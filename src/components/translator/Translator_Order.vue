<template>
  <v-container>
    <v-row>
      <v-col>
        <v-btn-toggle
          v-model="text"
          class="mt-10 rounded-lg"
          color="purple"
          mandatory
        >
          <v-btn value="left" class="mr-2 rounded-lg" @click="test('left')">
            <span class="disable-color">Your Orders</span>
          </v-btn>
          <v-btn value="center" class="rounded-lg" @click="test('center')">
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
                <th class="text-left">Name</th>
                <th class="text-left">Calories</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in desserts" :key="item.name">
                <td>{{ item.name }}</td>
                <td>{{ item.calories }}</td>
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
    desserts: [
      {
        name: "Frozen Yogurt",
        calories: 159,
      },
      {
        name: "Ice cream sandwich",
        calories: 237,
      },
      {
        name: "Eclair",
        calories: 262,
      },
      {
        name: "Cupcake",
        calories: 305,
      },
      {
        name: "Gingerbread",
        calories: 356,
      },
      {
        name: "Jelly bean",
        calories: 375,
      },
      {
        name: "Lollipop",
        calories: 392,
      },
      {
        name: "Honeycomb",
        calories: 408,
      },
      {
        name: "Donut",
        calories: 452,
      },
      {
        name: "KitKat",
        calories: 518,
      },
    ],
  }),
  methods: {
    test(input) {
      if (input === "center") {
        this.desserts = [
          {
            name: "Cupcake",
            calories: 305,
          },
          {
            name: "Gingerbread",
            calories: 356,
          },
          {
            name: "Jelly bean",
            calories: 375,
          },
          {
            name: "Honeycomb",
            calories: 408,
          },
        ];
      } else if (input === "left") {
        this.desserts = [
          {
            name: "Frozen Yogurt",
            calories: 159,
          },
          {
            name: "Ice cream sandwich",
            calories: 237,
          },
          {
            name: "Eclair",
            calories: 262,
          },
          {
            name: "Cupcake",
            calories: 305,
          },
          {
            name: "Gingerbread",
            calories: 356,
          },
          {
            name: "Jelly bean",
            calories: 375,
          },
          {
            name: "Lollipop",
            calories: 392,
          },
          {
            name: "Honeycomb",
            calories: 408,
          },
          {
            name: "Donut",
            calories: 452,
          },
          {
            name: "KitKat",
            calories: 518,
          },
        ]
      }
    },
  },
};
</script>

<style src="../../css/translator/order.css"></style>
