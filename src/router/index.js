import { createRouter, createWebHashHistory } from 'vue-router'
import { authAPI } from '../services/api'
import Index from '../views/Index.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Profile from '../views/Profile.vue'
import Welcome from '../views/Welcome.vue'
import Academy from '../views/Academy.vue'
import Pricing from '../views/Pricing.vue'
import FileSystem from '../views/FileSystem.vue'
import OptimizationStore from '../views/OptimizationStore.vue'
import Troubleshooting from '../views/Troubleshooting.vue'
import Simulator from '../views/Simulator.vue'
import TerminalBasics from '../views/TerminalBasics.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile,
      meta: { requiresAuth: true }
    },
    {
      path: '/welcome',
      name: 'welcome',
      component: Welcome,
      meta: { requiresAuth: true }
    },
    {
      path: '/academy',
      name: 'academy',
      component: Academy,
      meta: { requiresAuth: true }
    },
    {
      path: '/pricing',
      name: 'pricing',
      component: Pricing
    },
    {
      path: '/file-system',
      name: 'file-system',
      component: FileSystem
    },
    {
      path: '/optimization',
      name: 'optimization',
      component: OptimizationStore
    },
    {
      path: '/troubleshooting',
      name: 'troubleshooting',
      component: Troubleshooting
    },
    {
      path: '/simulator',
      name: 'simulator',
      component: Simulator
    },
    {
      path: '/terminal-basics',
      name: 'terminal-basics',
      component: TerminalBasics
    }
  ]
})

// Navigation guard untuk proteksi route
router.beforeEach((to, from, next) => {
  const isAuthenticated = authAPI.isAuthenticated()
  
  // Jika route memerlukan autentikasi
  if (to.meta.requiresAuth && !isAuthenticated) {
    // Redirect ke login
    next('/login')
  } 
  // Jika sudah login dan mencoba akses login/register, redirect ke welcome
  else if ((to.path === '/login' || to.path === '/register') && isAuthenticated) {
    next('/welcome')
  }
  // Lanjutkan ke route yang diminta
  else {
    next()
  }
})

export default router
