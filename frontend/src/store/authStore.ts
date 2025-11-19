// src/store/authStore.ts
import { create } from "zustand";
import { persist } from "zustand/middleware";

type User = {
  id: string;
  name: string;
  email: string;
};

type AuthState = {
  user: User | null;
  accessToken: string | null;
  login: (data: { user: User; accessToken: string }) => void;
  logout: () => void;
};

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      accessToken: null,

      login: ({ user, accessToken }) =>
        set({
          user,
          accessToken
        }),

      logout: () => set({ user: null, accessToken: null })
    }),
    {
      name: "auth-storage",
      partialize: (state) => ({
        user: state.user,
        accessToken: state.accessToken
      })
    }
  )
);
