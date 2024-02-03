<template>
  <label class="flex gap-5 md:gap-6 items-center">
    <input class="hidden" v-model="isChecked" type="checkbox" />
    <div
      class="w-5 h-5 bg-neon-green/0 border-2 border-almost-white transition-colors grid place-content-center"
      :class="{ '!bg-neon-green/100 border-neon-green': isChecked }"
    >
      <svg
        class="opacity-0"
        :class="{ 'opacity-100': isChecked }"
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4 10.6066L7.39341 14L15.3934 6"
          stroke="#18171F"
          stroke-width="3"
        />
      </svg>
    </div>

    <span class="body text-[1rem] md:!text-[1.125rem] font-bold text-almost-white">
      <slot />
    </span>
  </label>
</template>

<script setup lang="ts">
///// props/emits /////

///// refs, provide or inject then variables /////
const isChecked = defineModel<boolean>("isChecked", { default: false });

///// computed /////

///// methods /////

///// watchers /////

///// lifecycle /////
</script>
