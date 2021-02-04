<template>
  <v-app>
    <v-main>
      <v-container>
        <v-row>
          <v-col cols="6" order="1">
            <video-component />
          </v-col>
          <v-col cols="6" order="2">
            <emotion-component />
          </v-col>
        </v-row>
        <v-row justify="center">
          <v-col cols="6">
            <button-component />
          </v-col>
          <v-col cols="6"> </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import VideoComponent from "./components/VideoComponent";
import EmotionComponent from "./components/EmotionComponent";
import ButtonComponent from "./components/ButtonComponent";

export default {
  name: "App",

  components: {
    VideoComponent,
    EmotionComponent,
    ButtonComponent,
  },

  created() {
    this.$store.dispatch("products/getAllProducts");
  },
};
</script>
