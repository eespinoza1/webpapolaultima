// router/router.js
import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/Home.vue'; 
import TermsAndConditions from '../components/TermsAndConditions.vue';
import PolicyAndPrivacy from '../components/PolicyandPrivacy.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/terminos',
    name: 'TermsAndConditions',
    component: TermsAndConditions
  },
  {
    path: '/politica',
    name: 'PolicyAndPrivacy',
    component: PolicyAndPrivacy
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;