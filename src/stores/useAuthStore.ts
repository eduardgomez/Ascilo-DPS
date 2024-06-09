import { AuthStore } from './types'
import { create } from 'zustand'

export const useAuthStore = create<AuthStore>(
  (set) => ({
    isLoggedIn: false,
    setIsLoggedIn: (isLoggedIn: boolean) => set({ isLoggedIn }),
  })
)
