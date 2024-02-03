<template>
  <div class="w-full bg-dark-grey  flex flex-col gap-6">
    <div class="w-full flex justify-between items-center">
      <h2 class="body text-[1rem] md:!text-[1.125rem] text-almost-white font-bold">Character Length</h2>
      <p class="heading-m md:heading-l text-neon-green font-bold">{{ charCount }}</p>
    </div>

    <input
      class="w-full"
      v-model.number="charCount"
      :style="{
        '--progress': trackProgressStyle,
        '--invert-progress': invertTrackProgressStyle,
      }"
      type="range"
      :min="MIN"
      :max="MAX"
    />
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

///// props/emits /////

///// refs, provide or inject then variables /////
const charCount = defineModel<number>("charCount", { default: 10 });

const MAX = 25
const MIN = 1

///// computed /////
const trackProgress = computed(() => {
  return (charCount.value - MIN) / (MAX - MIN);
});

const trackProgressStyle = computed(() => {
  return `${trackProgress.value * 100}%`;
});

const invertTrackProgress = computed(() => {
  if (trackProgress.value >= 0.5) {
    return 1 - trackProgress.value;
  } else {
    return trackProgress.value - 1;
  }
});

const invertTrackProgressStyle = computed(() => {
  return `${invertTrackProgress.value * 100}%`;
});

///// methods /////

///// watchers /////
new String("hello")

///// lifecycle /////
</script>

<style scoped>
input[type="range"] {
  -webkit-appearance: none;
  appearance: none;
  background: transparent;
  cursor: pointer;
}
/***** Track Styles *****/
/***** Chrome, Safari, Opera, and Edge Chromium *****/
input[type="range"]::-webkit-slider-runnable-track {
  background: linear-gradient(
    90deg,
    theme("colors.neon-green") calc(var(--progress)),
    theme("colors.very-dark-grey") calc(var(--invert-progress))
  );
  height: 0.5rem;
}

/******** Firefox ********/
input[type="range"]::-moz-range-track {
  background: theme("colors.very-dark-grey");
  height: 0.5rem;
}

/***** Thumb Styles *****/
/***** Chrome, Safari, Opera, and Edge Chromium *****/
input[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none; /* Override default look */
  appearance: none;
  margin-top: -10px; /* Centers thumb on the track */
  background-color: theme("colors.almost-white");
  height: 1.75rem;
  width: 1.75rem;
  border-radius: 9999px;
}

/***** Firefox *****/
input[type="range"]::-moz-range-thumb {
  border: none; /*Removes extra border that FF applies*/
  border-radius: 9999px;
  background-color: theme("colors.almost-white");
  height: 1.75rem;
  width: 1.75rem;
}

/***** Progress track Styles *****/
input[type="range"]::-moz-range-progress {
  background: theme("colors.neon-green");
  height: 0.5rem;
}

/***** Focus Styles *****/
/* Removes default focus */
input[type="range"]:focus {
  outline: none;
}

/***** Chrome, Safari, Opera, and Edge Chromium *****/
input[type="range"]:focus::-webkit-slider-thumb {
  outline: 2px solid theme("colors.neon-green");
  background-color: theme("colors.very-dark-grey");
}

/******** Firefox ********/
input[type="range"]:focus::-moz-range-thumb {
  outline: 2px solid theme("colors.neon-green");
  background-color: theme("colors.very-dark-grey");
}
</style>
