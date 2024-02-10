<template>
  <section class="mb-16">
    <h1 class="mb-14 text-8xl font-bold tracking-tighter">
      <span :class="actionClasses">{{ action }}</span>
      <br />
      for everyone
    </h1>
    <h2 class="text-3xl font-light">Find your next job at Thor corp.</h2>
  </section>
</template>

<script setup lang="ts">
import { computed, onBeforeMount, onBeforeUnmount, ref } from 'vue';
import { nextElementInList } from '@/utils/nextElementInList';

const action = ref('Build');
const interval = ref();

const changeTitle = (): void => {
  interval.value = setInterval(() => {
    const actions = ['Build', 'Create', 'Design', 'Code'];
    action.value = nextElementInList(actions, action.value);
  }, 2000);
};

const actionClasses = computed(() => {
  return {
    [action.value.toLowerCase()]: true,
  };
});

onBeforeMount(() => {
  changeTitle();
});

onBeforeUnmount(() => {
  clearInterval(interval.value);
});
</script>

<style scoped>
.build {
  color: #1a73e8;
}

.create {
  color: #43a853;
}

.design {
  color: #f9ab00;
}

.code {
  color: #d93025;
}
</style>
