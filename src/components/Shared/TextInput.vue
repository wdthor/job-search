<template>
  <input
    type="text"
    :value="modelValue"
    class="w-full text-lg font-normal focus:outline-none"
    @input="handleInput"
  />
</template>

<script setup lang="ts">
const emit = defineEmits<{
  'update:modelValue': [value: string];
}>();

defineProps<{
  modelValue: string;
}>();

const handleInput = ($event: Event) => {
  const target = $event.target as HTMLInputElement;
  emit('update:modelValue', target.value);
};
</script>

<style scoped></style>
