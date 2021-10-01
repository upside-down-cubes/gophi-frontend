<template>
  <v-container>
    <!--Order Info-->
    <v-row class="mt-4 mx-10">
      <span class="font-weight-bold">Project name: Go gophi!</span>
      <v-spacer></v-spacer>
      <span class="grey--text"><u>Subscribed</u></span>
    </v-row>
    <!--Video + Transcript-->
    <v-row class="mt-4 mx-10">
      <!--Video Player-->
      <v-col>
        <v-window>
          <v-window-item v-html="video"></v-window-item>
        </v-window>
      </v-col>
      <!--Transcript-->
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
              >{{ transLang }} <v-icon right> mdi-chevron-down </v-icon>
            </v-chip>
          </template>
          <v-list dense>
            <v-list-item-group color="#13B8A4">
              <v-list-item
                v-for="item in languages"
                :key="item"
                @click="
                  transLang = item;
                  changeTranscript();
                "
              >
                <v-list-item-content>{{ item }}</v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-menu>

        <v-card height="250" class="overflow-y-auto mt-1" color="#F1F1F1" flat>
          <v-card-text v-text="transcript"></v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <!--Dummy Subtitle Layout-->
    <v-card
      width="1440"
      height="100"
      elevation="0"
      tile
      dark
      class="mt-3 overflow-hidden"
      color="#5B5B5B"
    >
      <v-row>
        <v-spacer></v-spacer>
        <v-col v-for="s in subtitle" :key="s.id" width="400">
          <div v-if="s.id === '2'">
            <v-icon small color="red">mdi-triangle mdi-flip-v</v-icon>
            <span style="font-size: 10px">00:05 / 1:40</span>
          </div>
          <div v-else>
            <span style="font-size: 10px; color: #5b5b5b">00:05 / 1:40</span>
          </div>
          <v-row class="mt-1">
            <v-card
              height="70"
              width="395"
              outlined
              class="rounded-lg"
              color="#41A1FB"
              style="border-color: white"
            >
              <v-card-text style="font-size: 12px">{{ s.yours }}</v-card-text>
            </v-card>
          </v-row>
        </v-col>
      </v-row>
    </v-card>
    <!--Text Suggestion-->
    <v-card width="1200" elevation="0" class="mx-auto mt-10">
      <v-row class="ml-0">
        <div v-if="this.subtitle === this.subtitleEN">
          <v-btn
            class="rounded-lg mr-1"
            small
            color="#13B8A4"
            elevation="0"
            dense
          >
            <span style="color: white">EN > EN</span>
          </v-btn>
          <v-btn
            class="rounded-lg"
            small
            color="#B2DFDB"
            elevation="0"
            dense
            @click="changeSubtitle"
          >
            <span style="color: white">EN > TH</span>
          </v-btn>
        </div>
        <div v-else>
          <v-btn
            class="rounded-lg mr-1"
            small
            color="#B2DFDB"
            elevation="0"
            dense
            @click="changeSubtitle"
          >
            <span style="color: white">EN > EN</span>
          </v-btn>
          <v-btn class="rounded-lg" small color="#13B8A4" elevation="0" dense>
            <span style="color: white">EN > TH</span>
          </v-btn>
        </div>
      </v-row>
      <v-simple-table
        fixed-header
        dark
        class="styled-table"
        dense
        style="margin-bottom: unset"
      >
        <thead>
          <tr>
            <th class="text-left" style="color: #f1f1f1">#</th>
            <th class="text-left" style="color: #f1f1f1">Text suggestion</th>
            <th />
            <th class="text-left" style="color: #f1f1f1">Text by You</th>
            <th class="text-right" style="color: #f1f1f1">Char.</th>
          </tr>
        </thead>
      </v-simple-table>
      <!--Timeline-->
      <v-card height="200" class="overflow-y-auto" elevation="0">
        <v-slide-y-transition group>
          <v-list-item v-for="sub in timeline" :key="sub.id" small>
            <v-col>
              <v-row class="justify-space-between" style="width: 190px">
                <v-text-field
                  v-model="sub.start"
                  type="time"
                  dense
                  color="#13B8A4"
                  hide-details
                  style="font-size: 12px; margin: unset"
                ></v-text-field>
                <v-text-field
                  v-model="sub.end"
                  type="time"
                  color="#13B8A4"
                  dense
                  hide-details
                  style="font-size: 12px; margin: unset"
                >
                  <template v-slot:prepend>
                    <v-icon x-small class="mt-1"> mdi-minus </v-icon>
                  </template>
                </v-text-field>
                <v-spacer></v-spacer>
              </v-row>
              <v-row>
                <v-card
                  color="#f1f1f1"
                  width="1440"
                  class="pa-1"
                  elevation="0"
                  tile
                >
                  <v-row
                    justify="space-around"
                    align="center"
                    style="font-size: 14px"
                  >
                    <v-col cols="1" v-text="sub.id"></v-col>
                    <v-col cols="4" v-text="sub.suggest"></v-col>
                    <v-btn
                      rounded
                      x-small
                      color="#c4c4c4"
                      elevation="0"
                      @click="sub.yours = sub.suggest"
                    >
                      <v-icon color="#000000"> mdi-arrow-right </v-icon>
                    </v-btn>
                    <v-col cols="4"
                      ><v-textarea
                        v-model="sub.yours"
                        outlined
                        dense
                        hide-details
                        no-resize
                        rows="2"
                        style="font-size: 12px"
                      ></v-textarea
                    ></v-col>
                    <v-col
                      cols="1"
                      class="text-right"
                      v-text="sub.yours.length"
                    ></v-col>
                  </v-row>
                </v-card>
              </v-row>
            </v-col>
          </v-list-item>
        </v-slide-y-transition>
      </v-card>
    </v-card>
    <v-row>
      <v-spacer></v-spacer>
      <v-btn
        dark
        class="ma-7"
        color="#13B8A4"
        elevation="0"
        :to="{ name: 'CustomerOrder' }"
        >Save Draft
      </v-btn>
      <v-btn
        dark
        class="ma-7"
        color="#13B8A4"
        elevation="0"
        :to="{ name: 'CustomerReview', params: { step: 'download' } }"
        >Download
      </v-btn>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "CustomerViewWorkspace",

  data: () => ({
    text: "center",
    video:
      '<iframe width="413" height="280" src="https://www.youtube.com/embed/H3vFeHYfquw" allow="autoplay; encrypted-media" allowfullscreen></iframe>',
    languages: ["English", "Thai"],
    transLang: "English",
    transcripts: [],
    transcript: "",
    subtitle: null,
    subtitleEN: [
      {
        id: "1",
        start: "00:00:19",
        end: "00:05:27",
        suggest:
          "goofy is a subtitling platform for globalizing knowledge we aim to streamline the subtitling and",
        yours:
          "Gophi is a subtitling platform for globalizing knowledge. We aim to streamline the subtitling and",
      },
      {
        id: "2",
        start: "00:05:27",
        end: "00:11:08",
        suggest:
          "translation process with machine assistance to provide affordable quick and accurate subtitles",
        yours:
          "translation process with machine assistance to provide affordable, quick and accurate subtitles.",
      },
      {
        id: "3",
        start: "00:13:03",
        end: "00:17:24",
        suggest:
          "kofi provides subtitling service through two models first a customer can order subtitles",
        yours:
          "Gophi provides subtitling service through two models. First, a customer can order subtitles",
      },
      {
        id: "4",
        start: "00:17:24",
        end: "00:22:16",
        suggest:
          "through gofee which matches the customer’s order with a translator on the platform the matching",
        yours:
          "through Gophi, which matches the customer’s order with a translator on the platform. The matching",
      },
      {
        id: "5",
        start: "00:22:16",
        end: "00:27:17",
        suggest:
          "process considers subtitling language and content context or category a customer can make a",
        yours:
          "process considers subtitling language and content context or category. A customer can make a",
      },
    ],
    subtitleTH: [
      {
        id: "1",
        start: "00:00:19",
        end: "00:05:27",
        suggest:
          "Gophi เป็นแพลตฟอร์มคำบรรยายสำหรับความรู้โลกาภิวัตน์ เรามุ่งหวังที่จะปรับปรุงกระบวนการคำบรรยาย",
        yours:
          "โกฟิเป็นแพลตฟอร์มสร้างคำบรรยายในวิดีโอเพื่อช่วยเผยแพร่ความรู้ให้เป็นสากล เรามุ่งหวังที่จะทำให้กระบวนการสร้างคำบรรยาย",
      },
      {
        id: "2",
        start: "00:05:27",
        end: "00:11:08",
        suggest:
          "และการแปลด้วยความช่วยเหลือของเครื่องเพื่อให้คำบรรยายราคาไม่แพง รวดเร็ว และแม่นยำ",
        yours:
          "รวมถึงขั้นตอนการแปลมีประสิทธิภาพมากยิ่งขึ้น โดยใช้ประโยชน์จากปัญญาประดิษฐ์ เพื่อให้ได้คำบรรยายอย่างรวดเร็วและแม่นยำในราคาที่เหมาะสม",
      },
      {
        id: "3",
        start: "00:13:03",
        end: "00:17:24",
        suggest:
          "Gophi ให้บริการคำบรรยายผ่านสองรูปแบบ ประการแรก ลูกค้าสามารถสั่งซื้อคำบรรยาย",
        yours:
          "โกฟิให้บริการสร้างคำบรรยายในวิดีโอในสองรูปแบบ ในรูปแบบแรก ลูกค้าสามารถสั่งทำคำบรรยายในวิดีโอ",
      },
      {
        id: "4",
        start: "00:17:24",
        end: "00:22:16",
        suggest:
          "ผ่านโกฟิ ซึ่งจับคู่คำสั่งงานของลูกค้ากับนักแปลในระบบ การจับคู่นี้คำนึงถึงภาษาของคำบรรยายรวมถึง  ",
        yours:
          "ผ่านโกฟิ ซึ่งจับคู่คำสั่งงานของลูกค้ากับนักแปลในระบบ การจับคู่นี้คำนึงถึงภาษาของคำบรรยายรวมถึงบริบทหรือประเภทของเนื้อหา",
      },
      {
        id: "5",
        start: "00:22:16",
        end: "00:27:17",
        suggest:
          "ขั้นตอนการจับคู่จะพิจารณาภาษาซับไตเติ้ลและบริบทเนื้อหาหรือหมวดหมู่ ลูกค้าสามารถ",
        yours:
          "ลูกค้าสามารถสั่งซื้อคำบรรยายในวิดีโอโดยอัปโหลดวิดีโอ เลือกภาษาของคำบรรยาย อารมณ์และน้ำเสียง และหมวดหมู่",
      },
    ],
    time: "00.25",
    totalSeconds: 0,
  }),

  created() {
    this.subtitle = this.subtitleEN;
    this.changeTranscript();
    this.subtitleTH.forEach((t) => {
      this.$watch(() => t, this.updateTranscript, { deep: true });
    });
    this.subtitleEN.forEach((t) => {
      this.$watch(() => t, this.updateTranscript, { deep: true });
    });
    setInterval(this.countTimer, 1000);
  },

  computed: {
    timeline() {
      return this.subtitle.slice();
    },
  },

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
    changeSubtitle() {
      if (this.subtitle === this.subtitleEN) {
        this.subtitle = this.subtitleTH;
      } else {
        this.subtitle = this.subtitleEN;
      }
    },

    changeTranscript() {
      if (this.transLang === "English") {
        this.transcripts = this.subtitleEN;
      } else {
        this.transcripts = this.subtitleTH;
      }
      this.updateTranscript();
    },

    updateTranscript() {
      this.transcript = "";
      for (let i = 0; i < this.transcripts.length; i++) {
        this.transcript += this.transcripts[i].yours;
      }
    },

    countTimer() {
      this.totalSeconds++;
      let hour = Math.floor(this.totalSeconds / 3600);
      let minute = Math.floor((this.totalSeconds - hour * 3600) / 60);
      let seconds = this.totalSeconds - (hour * 3600 + minute * 60);
      if (hour < 10) hour = "0" + hour;
      if (minute < 10) minute = "0" + minute;
      if (seconds < 10) seconds = "0" + seconds;
      this.time = hour + ":" + minute + ":" + seconds;
    },
  },
};
</script>

<style scoped></style>
