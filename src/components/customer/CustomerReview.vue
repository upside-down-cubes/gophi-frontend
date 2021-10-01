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
            <v-menu
              top
              min-width="300px"
              max-height="300px"
              offset-y
              right
              offset-x
            >
              <template v-slot:activator="{ on }">
                <v-btn rounded x-small elevation="0" v-on="on" color="#CECECE">
                  <v-icon> mdi-dots-horizontal </v-icon>
                </v-btn>
              </template>
              <v-card class="mx-auto" max-width="300" outlined>
                <v-card-title class="ma-1">
                  <p
                    class="font-weight-light"
                    style="
                      font-size: 14px;
                      white-space: pre-wrap;
                      word-break: normal;
                    "
                  >
                    Hi! I would like this video to be translated from English to
                    to Thai, preferably within the next 2 weeks.
                  </p>
                </v-card-title>
              </v-card>
            </v-menu>
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
    <v-row class="mt-2 mx-10">
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
    <!--Text Suggestion-->
    <v-window>
      <CustomerReviewSubmission
        v-if="this.step === 'submission'"
      ></CustomerReviewSubmission>
      <CustomerReviewDownload
        v-if="this.step === 'download'"
      ></CustomerReviewDownload>
    </v-window>
  </v-container>
</template>

<script>
import CustomerReviewSubmission from "./CustomerReviewSubmission";
import CustomerReviewDownload from "./CustomerReviewDownload";
export default {
  name: "CustomerReview",
  components: { CustomerReviewDownload, CustomerReviewSubmission },
  data: () => ({
    text: "center",
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
        length: "~3 min",
        amount: "฿122",
      },
    ],
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
    step: "",
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
    this.step = this.$route.params.step;
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
