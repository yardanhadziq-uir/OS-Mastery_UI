import { createRouter, createWebHistory } from 'vue-router'
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
  history: createWebHistory(),
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
      component: Profile
    },
    {
      path: '/welcome',
      name: 'welcome',
      component: Welcome
    },
    {
      path: '/academy',
      name: 'academy',
      component: Academy
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

export default router
