<script setup lang="ts">
import { usePassword } from "./composables/usePassword";
import PassDisplay from "./components/PassDisplay.vue";
import Slider from "./components/form/Slider.vue";
import Checkbox from "./components/form/Checkbox.vue";
import PassStrength from "./components/PassStrength.vue";
import Button from "./components/form/Button.vue";
import { computed } from "vue";

const {
  password,
  length,
  strengthScore,
  includeUppercase,
  includeLowercase,
  includeNumbers,
  includeSymbols,

  genPassword,
  onCopy
} = usePassword();

const canGenerate = computed(() => {
  return includeUppercase.value ||
  includeLowercase.value ||
  includeNumbers.value ||
  includeSymbols.value
})
</script>

<template>
  <h1 class="sr-only">Password Generator</h1>
  <main
    class="w-full min-h-screen px-4 md:px-0 flex flex-col items-center bg-[#08070B] pt-16 md:pt-[8.3rem]"
  >
    <section class="w-full max-w-[33.75rem]">
      <h2 class="heading-m !text-[1rem] md:!text-[1.5rem] font-bold text-[#817D92] text-center">
        Password Generator
      </h2>
      <PassDisplay class="w-full mt-8" v-model="length" @copy="onCopy">{{
        password
      }}</PassDisplay>
    </section>

    <section
      class="w-full max-w-[33.75rem] mt-4 md:mt-8 p-4 md:p-8 bg-dark-grey flex flex-col"
    >
      <Slider v-model:charCount="length" />
      <Checkbox v-model:isChecked="includeUppercase" class="mt-[2rem]"
        >Include Uppercase Letters</Checkbox
      >
      <Checkbox v-model:isChecked="includeLowercase" class="mt-4 md:mt-6"
        >Include Lowercase Letters</Checkbox
      >
      <Checkbox v-model:isChecked="includeNumbers" class="mt-4 md:mt-6"
        >Include Numbers</Checkbox
      >
      <Checkbox v-model:isChecked="includeSymbols" class="mt-4 md:mt-6"
        >Include Symbols</Checkbox
      >
      <PassStrength class="mt-8" :strength="strengthScore" />

      <Button :disabled="!canGenerate" class="mt-4 md:mt-8" @click="genPassword">Generate</Button>
    </section>
  </main>
</template>
