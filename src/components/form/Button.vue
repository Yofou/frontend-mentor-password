<template>
  <button
    class="flex font-bold gap-6 items-center justify-center uppercase body text-[1rem] md:!text-[1.125rem] text-dark-grey bg-neon-green/100 border-2 border-neon-green hover:bg-neon-green/0 hover:text-neon-green transition-colors py-4 md:py-5"
    @click="onClick"
    :disabled="props.disabled"
  >
    <slot />

    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.10553 12L11.1055 6.00002L5.10553 0L3.84051 1.26501L7.681 5.10547L6.10352e-05 5.10547V6.8946L7.681 6.8946L3.84051 10.735L5.10553 12Z"
        fill="currentColor"
      />
    </svg>
  </button>
</template>

<script setup lang="ts">
///// props/emits /////
  const props = defineProps<{
    disabled: boolean;
  }>()

const emits = defineEmits<{
  (e: "click"): void;
}>();

///// refs, provide or inject then variables /////

///// computed /////

///// methods /////
const onClick = () => {
  emits("click");
};

///// watchers /////

///// lifecycle /////
</script>
