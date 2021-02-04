<template>
  <div id="progressContainer">
    <div class="text-center">
      <v-icon class="emoicon">mdi-emoticon-angry-outline</v-icon><span class="font-weight-bold">Angry</span>
    </div>
    <v-progress-linear id="angryBar" class="emotionBar" v-model="emotion.Angry" color="red lighten-1" height="25" rounded>
      <template v-slot:default="{ value }">
        <strong>{{ Math.ceil(value) }}%</strong>
      </template>
    </v-progress-linear>

    <br />

    <div class="text-center">
      <v-icon class="emoicon">mdi-emoticon-poop-outline</v-icon><span class="font-weight-bold">Disgust</span>
    </div>
    <v-progress-linear id="disgustBar" class="emotionBar" v-model="emotion.Disgust" color="brown lighten-1" height="25" rounded>
      <template v-slot:default="{ value }">
        <strong>{{ Math.ceil(value) }}%</strong>
      </template>
    </v-progress-linear>

    <br />

    <div class="text-center">
      <v-icon class="emoicon">mdi-emoticon-frown-outline</v-icon><span class="font-weight-bold">Fear</span>
    </div>
    <v-progress-linear id="fearBar" class="emotionBar" v-model="emotion.Fear" color="grey darken-3" height="25" rounded>
      <template v-slot:default="{ value }">
        <strong>{{ Math.ceil(value) }}%</strong>
      </template>
    </v-progress-linear>

    <br />

    <div class="text-center">
      <v-icon class="emoicon">mdi-emoticon-happy-outline</v-icon><span class="font-weight-bold">Happy</span>
    </div>
    <v-progress-linear id="happyBar" class="emotionBar" v-model="emotion.Happy" color="yellow accent-1" height="25" rounded>
      <template v-slot:default="{ value }">
        <strong>{{ Math.ceil(value) }}%</strong>
      </template>
    </v-progress-linear>

    <br />

    <div class="text-center">
      <v-icon class="emoicon">mdi-emoticon-sad-outline</v-icon><span class="font-weight-bold">Sad</span>
    </div>
    <v-progress-linear id="sadBar" class="emotionBar" v-model="emotion.Sad" color="blue darken-3" height="25" rounded>
      <template v-slot:default="{ value }">
        <strong>{{ Math.ceil(value) }}%</strong>
      </template>
    </v-progress-linear>

    <br />

    <div class="text-center">
      <v-icon class="emoicon">mdi-emoticon-outline</v-icon><span class="font-weight-bold">Surprise</span>
    </div>
    <v-progress-linear id="surpriseBar" class="emotionBar" v-model="emotion.Surprise" color="orange lighten-2" height="25" rounded>
      <template v-slot:default="{ value }">
        <strong>{{ Math.ceil(value) }}%</strong>
      </template>
    </v-progress-linear>

    <br />

    <div class="text-center">
      <v-icon class="emoicon">mdi-emoticon-neutral-outline</v-icon><span class="font-weight-bold">Neutral</span>
    </div>
    <v-progress-linear id="neutralBar" class="emotionBar" v-model="emotion.Neutral" color="green lighten-1" height="25" rounded>
      <template v-slot:default="{ value }">
        <strong>{{ Math.ceil(value) }}%</strong>
      </template>
    </v-progress-linear>
  </div>
</template>

<script>
import { mapState,mapGetters } from 'vuex'
export default {
  computed: {
    ...mapState(["sdkEnabled"]),
    ...mapGetters({
      emotion: 'getEmotion' 
    })
  },
  created: function () {
    this.$store.dispatch('loadModules','FACE_EMOTION')
    window.addEventListener(CY.modules().FACE_EMOTION.eventName, (evt) => {
      this.$store.dispatch('updateEmotion',evt)
    });
  },
};
</script>