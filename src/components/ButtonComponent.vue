<template>
  <div class="text-center">
      <v-btn
        x-large
        v-bind:color="sdkEnabled ? 'success' : 'error'"
        @click="switchState()"
      >
        {{ sdkEnabled ? "Acceso" : "Spento" }}
      </v-btn>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  computed: mapState(["sdkEnabled"]),
  methods: {
    ...mapMutations(["switchState"]),
  },
};
</script>