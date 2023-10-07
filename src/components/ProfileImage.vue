<template>
  <img class="h-8 w-8 rounded-3xl object-contain" :src="imageLink" alt="User profile image" />
</template>

<script setup lang="ts">
import { ref } from 'vue';

const imageLink = ref('https://api.dicebear.com/6.x/thumbs/svg?seed=Abby');
</script>

<style scoped></style>
