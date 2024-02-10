<template>
  <button :class="buttonClass">{{ text }}</button>
</template>

<script setup lang="ts">
import { computed } from 'vue';

interface Props {
  text: string;
  type?: 'primary' | 'secondary';
}

const props = withDefaults(defineProps<Props>(), {
  type: 'primary',
});

const buttonClass = computed(() => {
  return {
    [props.type]: true,
  };
});
</script>

<style scoped>
button {
  @apply px-5 py-3 font-medium;
}

.primary {
  @apply rounded bg-brand-blue-1 text-white hover:shadow-blue;
}

.secondary {
  @apply bg-transparent text-brand-blue-1 hover:bg-brand-blue-2 hover:text-white;
}
</style>
