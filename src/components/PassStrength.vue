<template>
  <div class="flex justify-between p-4 md:px-8 items-center md:py-6 bg-very-dark-grey gap-2">
    <h3 class="body text-[1rem] md:!text-[1.125rem] text-grey uppercase font-bold">Strength</h3>

    <div class="flex text-right gap-4 items-center overflow-hidden">
      <p class="heading-m !text-[1rem] md:!text-[1.125rem] uppercase text-almost-white font-bold truncate">{{ label }}</p>

      <div class="flex gap-2">
        <div
          class="w-[10px] h-[28px] bg-[var(--color)]"
          :style="{ '--color': fillColor }"
          v-for="_ in props.strength"
        ></div>

        <div
          class="w-[10px] h-[28px] border-2 border-almost-white"
          v-for="_ in nonFillSpace"
        ></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

///// props/emits /////
const props = defineProps<{
  strength: number;
}>();

///// refs, provide or inject then variables /////

///// computed /////
const labels = ["Too Weak!", "Weak", "Medium", "Strong"];
const label = computed(() => {
  return labels[props.strength - 1];
});

const fillColors = ["#F64A4A", "#FB7C58", "#F8CD65", "#A4FFAF"];
const fillColor = computed(() => {
  return fillColors[props.strength - 1];
});

const nonFillSpace = computed(() => {
  return 4 - props.strength;
});

///// methods /////

///// watchers /////

///// lifecycle /////
</script>
