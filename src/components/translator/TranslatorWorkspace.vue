<template>
  <v-container>
    <!--Order Info-->
    <v-simple-table class="styled-table" dense>
      <thead>
        <tr v-for="item in order" :key="item.name">
          <td>Order {{ item.id }}</td>
          <td>{{ item.date }}</td>
          <td>By {{ item.by }}</td>
          <td>
            <v-chip
              class="ma-1"
              color="#CECECE"
              v-for="(lan_item, j) in item.language"
              :key="j"
              small
            >
              {{ lan_item.content }}
            </v-chip>
          </td>
          <td>{{ item.level }}</td>
          <td>
            <v-chip color="#CECECE" small>{{ item.category }}</v-chip>
          </td>
          <td>{{ item.length }}</td>
          <td>{{ item.amount }}</td>
          <td>
            <v-btn rounded x-small elevation="0">
              <v-icon> mdi-dots-horizontal </v-icon>
            </v-btn>
          </td>
          <td>
            <v-btn icon small elevation="0">
              <v-icon> mdi-chat </v-icon>
            </v-btn>
          </td>
        </tr>
      </thead>
    </v-simple-table>
    <div>
      <span class="mr-1">Time spent:</span>
      <v-chip v-text="time" x-small></v-chip>
    </div>
    <!--Video + Transcript-->
    <v-row class="mt-3 mx-10">
      <!--Video Player-->
      <v-col>
        <v-window>
          <v-window-item v-html="video"></v-window-item>
        </v-window>
      </v-col>
      <v-col>
        <span>Transcript</span>
        <v-menu transition="slide-y-transition" bottom offset-y>
          <template v-slot:activator="{ on, attrs }">
            <v-chip
              x-small
              class="ml-2"
              color="#13B8A4"
              dark
              v-bind="attrs"
              v-on="on"
              >English <v-icon right> mdi-chevron-down </v-icon>
            </v-chip>
          </template>
          <v-list dense>
            <v-list-item-group color="#13B8A4">
              <v-list-item
                v-for="item in transcripts"
                :key="item.language"
                @click="transcript = item.text"
              >
                <v-list-item-content>{{ item.language }}</v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-menu>

        <v-card height="250" class="overflow-y-auto mt-1" color="#F1F1F1" flat>
          <v-card-text v-text="transcript"></v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-simple-table fixed-header dark class="styled-table" height="200" dense>
      <thead>
        <tr>
          <th class="text-left" style="color: #f1f1f1">#</th>
          <th class="text-left" style="color: #f1f1f1">Text suggestion</th>
          <th />
          <th class="text-left" style="color: #f1f1f1">Text by You</th>
          <th class="text-left" style="color: #f1f1f1">Char.</th>
        </tr>
      </thead>
      <thead>
        <tr v-for="sub in subtitle" :key="sub.id" style="color: #000000">
          <td>{{ sub.id }}</td>
          <td>{{ sub.suggest }}</td>
          <td>
            <v-btn rounded x-small color="#c4c4c4" elevation="0">
              <v-icon color="#000000"> mdi-arrow-right </v-icon>
            </v-btn>
          </td>
          <td>{{ sub.yours }}</td>
          <td>{{ sub.char }}</td>
        </tr>
      </thead>
    </v-simple-table>
  </v-container>
</template>

<script>
export default {
  name: "TranslatorProject",

  data: () => ({
    video:
      '<iframe width="413" height="280" src="https://www.youtube.com/embed/H3vFeHYfquw" allow="autoplay; encrypted-media" allowfullscreen></iframe>',
    transcripts: [
      {
        language: "English",
        text: "Gophi is a subtitling platform for globalizing knowledge. We aim to streamline the subtitling and translation process with machine assistance to provide affordable, quick and accurate subtitles. Gophi provides subtitling service through two models. First, a customer can order subtitles through Gophi, which matches the customer’s order with a translator on the platform. The matching process considers subtitling language and content context or category. A customer can make a subtitle order by uploading their video, selecting subtitling languages, mood and tone, and category, then confirming the order and making payment. Once an automatically-selected translator accepts the order, the translator works on that order with our machine assistance service, using machine subtitles as a guideline. Within the agreed time frame, subtitles are submitted for customer approval. The customer can download their subtitles, and the translator is rewarded. For the second model, a customer interested in creating and translating subtitles themselves can use our machine-assisted subtitling service, in the same way translators do.\n",
      },
      {
        language: "Thai",
        text: "",
      },
    ],
    transcript: "",
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
    subtitle: [
      {
        id: "1",
        suggest:
          "goofy is a subtitling platform for globalizing knowledge we aim to streamline the subtitling and",
        yours:
          "Gophi is a subtitling platform for globalizing knowledge. We aim to streamline the subtitling and",
        char: "98",
      },
      {
        id: "2",
        suggest:
          "translation process with machine assistance to provide affordable quick and accurate subtitles",
        yours:
          "translation process with machine assistance to provide affordable, quick and accurate subtitles.",
        char: "96",
      },
      {
        id: "3",
        suggest:
          "kofi provides subtitling service through two models first a customer can order subtitles",
        yours:
          "Gophi provides subtitling service through two models. First, a customer can order subtitles",
        char: "90",
      },
      {
        id: "4",
        suggest:
          "through gofee which matches the customer’s order with a translator on the platform the matching",
        yours:
          "through Gophi, which matches the customer’s order with a translator on the platform. The matching",
        char: "97",
      },
      {
        id: "5",
        suggest:
          "process considers subtitling language and content context or category a customer can make a",
        yours:
          "process considers subtitling language and content context or category. A customer can make a",
        char: "92",
      },
    ],
    time: "00.25",
  }),
};
</script>

<style scoped></style>
