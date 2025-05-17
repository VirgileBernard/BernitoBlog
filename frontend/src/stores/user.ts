import { defineStore } from 'pinia'
import type { UserProfile } from '@/interfaces/users.interfaces'

/* --------- PROFIL DÉMO PAR DÉFAUT --------- */
const demoProfile: UserProfile = {
  id: 1,
  firstName: 'Virgile',
  lastName: 'Bernard',
  job: 'CEO BernitoCorporation',
  bio: " L'expérience c'est la somme de toutes les erreurs",
  avatar: new URL('@/assets/img/pp.jpg', import.meta.url).href,
  role: 'AUTHOR',
  socials: {
    instagram: 'https://www.instagram.com/bernitojr/',
    github: 'https://github.com/VirgileBernard',
    linkedin: 'https://www.linkedin.com/in/virgile-bernard-221287366/',
    twitter: 'https://twitter.com/bernitojr',
  },
}

export const useUserStore = defineStore('user', {
  /* ---------- STATE ---------- */
  state: () => ({
    profile: demoProfile as UserProfile | null, // null si tu veux commencer vide
    isAuthenticated: true, // ou false si tu veux forcer un login
  }),

  /* ---------- GETTERS ---------- */
  getters: {
    fullName: (s) => (s.profile ? `${s.profile.firstName} ${s.profile.lastName}` : ''),
    isAuthor: (s) => s.profile?.role === 'AUTHOR',
  },

  /* ---------- ACTIONS ---------- */
  actions: {
    /** Modifie partiellement le profil (édition) */
    updateProfile(data: Partial<UserProfile>) {
      if (!this.profile) return
      this.profile = { ...this.profile, ...data }
    },

    /** Simule un login sans backend */
    fakeLogin() {
      this.isAuthenticated = true
    },

    fakeLogout() {
      this.isAuthenticated = false
    },
  },

  /* ---------- PERSISTENCE ---------- */
  persist: {
    key: 'userState',
    paths: ['profile', 'isAuthenticated'],
  },
})
