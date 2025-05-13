import { defineStore } from 'pinia'
import { api } from '@/api/authApi'
import type { UserLogin } from '@/interfaces/users.interfaces'

const localStates = localStorage.getItem('userState')
  ? JSON.parse(localStorage.getItem('userState') as string)
  : null
export const useUserStore = defineStore('user', {
  state: () => localStates ?? { access_token: '', refresh_token: '', myCompany: {} },
  actions: {
    // méthode pour vérifier si l'utilisateur est connecté
    setToken() {
      if (this.access_token) {
        api.defaults.headers.common['Authorization'] = `Bearer ${this.access_token}`
      }
    },

    unsetToken() {
      if (this.access_token) {
        this.access_token = ''
        this.refresh_token = ''
        delete api.defaults.headers.common['Authorization']
      }
    },

    // méthode refresh token
    async getNewToken() {
      try {
        const { data } = await api.post('/auth/refresh_token', {
          refresh_token: this.refresh_token,
        })
        this.access_token = data.access_token
        this.refresh_token = data.refresh_token
        this.setToken()
      } catch (error) {
        console.error('Refresh token failed:', error)
      }
    },

    async login(user: UserLogin) {
      try {
        const { data } = await api.post('/auth/login', {
          username: user.username,
          password: user.password,
        })
        this.access_token = data.access_token
        this.refresh_token = data.refresh_token
        this.setToken()
        localStorage.setItem('isAuthenticated', 'true')
      } catch {
        throw new Error('Login failed')
      }
    },

    async logout() {
      try {
        this.unsetToken()
        localStorage.removeItem('isAuthenticated')
        localStorage.removeItem('userState')
      } catch (error) {
        console.error('Logout failed:', error)
      }
    },

    async register(user: UserLogin) {
      try {
        const { data } = await api.post('/auth/register', {
          username: user.username,
          password: user.password,
        })
        this.access_token = data.access_token // on stocke le token dans le store
        this.refresh_token = data.refresh_token // on stocke le refresh token dans le store
        this.setToken()
        localStorage.setItem('isAuthenticated', 'true')
      } catch (error) {
        console.error('Register failed:', error)
      }
    },

    async profile(): Promise<Array<UserLogin>> {
      try {
        const { data } = await api.get('/auth/profile')
        return data
      } catch {
        return []
      }
    },
  },
})
