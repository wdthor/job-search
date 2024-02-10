<template>
  <header :class="['w-full', 'text-sm', headerHeightClass]">
    <div class="fixed left-0 top-0 h-16 w-full bg-white">
      <div class="mx-auto flex h-full flex-nowrap border-b border-solid border-brand-gray-1 px-8">
        <a :href="url" target="_blank" class="flex h-full items-center text-xl">{{ company }}</a>
        <nav class="ml-12 h-full">
          <ul class="flex h-full list-none">
            <li v-for="menuItem in menuItems" :key="menuItem" class="ml-9 h-full first:ml-0">
              <a href="" class="flex h-full items-center py-2.5">{{ menuItem }}</a>
            </li>
          </ul>
        </nav>
        <div class="ml-auto flex h-full items-center">
          <ProfileImage v-if="isLoggedIn" />
          <ActionButton v-else text="Sign in" @click="loginUser" />
        </div>
      </div>
      <AppSubnav v-if="isLoggedIn" />
    </div>
  </header>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import ActionButton from '@/components/Shared/ActionButton.vue';
import ProfileImage from '@/components/Navigation/ProfileImage.vue';
import AppSubnav from '@/components/Navigation/AppSubnav.vue';

const company = ref('ThorWD Careers');

const url = ref('https://careers.google.com');

const menuItems = ['Teams', 'Locations', 'Life at ThorWD', 'How we hire', 'Students', 'Jobs'];

const isLoggedIn = ref(false);

const loginUser = () => {
  isLoggedIn.value = !isLoggedIn.value;
};

const headerHeightClass = computed(() => {
  return {
    'h-16': !isLoggedIn.value,
    'h-32': isLoggedIn.value,
  };
});
</script>
