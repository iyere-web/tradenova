import { User } from 'lucide-react'
import {create} from 'zustand'

export const useAuthStore = create((set) =>({
    user: null,
    isAuthenticated: false,

    setUser: (userData) =>  set({
        user: userData,
        isAuthenticated: true
    }),

    clearUser: ()=> set({
        user: null,
        isAuthenticated: false
    })
}))