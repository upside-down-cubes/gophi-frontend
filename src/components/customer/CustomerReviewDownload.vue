<template>
  <v-container>
    <v-card width="1200" elevation="0" class="mx-auto mt-10">
      <span>Download</span>
      <v-card color="#f1f1f1" flat class="mt-5" style="font-size: 14px">
        <v-row class="mx-2">
          <v-col>
            <span>File Format</span>
            <v-autocomplete
              color="#13B8A4"
              item-color="teal accent-4"
              style="background-color: white"
              clearable
              outlined
              hide-details
              label="Select your preferred file formats"
              single-line
              v-model="fileFormat"
              :items="formatList"
              item-value="short"
              item-text="fullName"
              dense
            >
              <template v-slot:selection="data">
                <v-chip
                  small
                  v-bind="data.attrs"
                  :input-value="data.selected"
                  color="rgba(19, 184, 165, 0.7)"
                  dark
                  close
                  @click="data.select"
                  @click:close="fileFormat = ''"
                >
                  {{ data.item.short }}
                </v-chip>
              </template>
              <template v-slot:item="data">
                <template>
                  <v-list-item-content>
                    <v-list-item-title
                      v-html="data.item.fullName"
                    ></v-list-item-title>
                    <v-list-item-subtitle
                      v-html="data.item.short"
                    ></v-list-item-subtitle>
                  </v-list-item-content>
                </template>
              </template>
            </v-autocomplete>
          </v-col>
          <v-col>
            <span>Video files with burned-in subtitles</span>
            <v-autocomplete
              outlined
              color="#13B8A4"
              style="background-color: white"
              item-color="teal accent-4"
              label="Select your preferred subtitles style"
              v-model="subtitleStyle"
              hide-details
              single-line
              :items="styleList"
              item-value="short"
              item-text="fullName"
              multiple
              dense
            >
              <template v-slot:selection="data">
                <v-chip
                  v-bind="data.attrs"
                  small
                  color="rgba(19, 184, 165, 0.7)"
                  dark
                  :input-value="data.selected"
                  close
                  @click="data.select"
                  @click:close="remove(data.item)"
                >
                  {{ data.item.short }}
                </v-chip>
              </template>
              <template v-slot:item="data">
                <template>
                  <v-list-item-content>
                    <v-list-item-title
                      v-html="data.item.fullName"
                    ></v-list-item-title>
                    <v-list-item-subtitle
                      v-html="data.item.short"
                    ></v-list-item-subtitle>
                  </v-list-item-content>
                </template>
              </template>
            </v-autocomplete>
          </v-col>
        </v-row>
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
        >Download
      </v-btn>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "CustomerReviewDownload",

  data: () => ({
    fileFormat: "",
    formatList: [
      { short: ".txt", fullName: "Text File" },
      { short: ".dummy", fullName: "dummy" },
      { short: ".csv", fullName: "CSV" },
    ],
    subtitleStyle: "",
    styleList: [
      { short: "bt", fullName: "Burnt In" },
      { short: "lol", fullName: "LOL" },
    ],
  }),
};
</script>

<style scoped></style>
