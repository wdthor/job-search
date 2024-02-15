import { createRouter, createWebHashHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import JobResultsView from '@/views/JobResultsView.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
  },
  {
    path: '/job/results',
    name: 'JobResults',
    component: JobResultsView,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
