import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '@/views/auth/LoginView.vue'
import HomePageView from '@/views/HomePageView.vue'
import ProfileView from '@/views/ProfileView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      children: [
        {
          // Page "Home" affichant les projets en cours, accessible après authentification
          path: '',
          name: 'home',
          component: HomePageView,
          meta: {
            requiresAuth: false,
          },
        },
        {
          // Page de profil, accessible uniquement aux utilisateurs authentifiés
          path: 'profile',
          name: 'profile',
          component: ProfileView,
          meta: {
            requiresAuth: false,
          },
        },
      ],
    },
    {
      // Route de connexion
      path: '/login',
      name: 'login',
      component: LoginView,
      meta: {
        requiresAuth: false,
      },
    },
  ],
})

router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem('isAuthenticated')
  if (to.meta.requiresAuth && !isAuthenticated) {
    next('/login')
  } else {
    next()
  }
})

export default router
