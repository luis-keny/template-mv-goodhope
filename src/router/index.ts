import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import IntroductionView from '../views/IntroductionView.vue';
import InstallationView from '../views/InstallationView.vue';
import ComponentsIndexView from '../views/ComponentsIndexView.vue';
import ComponentDetailView from '../views/ComponentDetailView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/docs/introduction',
      name: 'introduction',
      component: IntroductionView,
    },
    {
      path: '/docs/installation',
      name: 'installation',
      component: InstallationView,
    },
    {
      path: '/docs/components',
      name: 'components-index',
      component: ComponentsIndexView,
    },
    {
      path: '/docs/components/:name',
      name: 'component-detail',
      component: ComponentDetailView,
    },
  ],
});

export default router;
