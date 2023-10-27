import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { AuthUser } from "@/features/auth";

type AuthState = {
  user: AuthUser | null;
};

type AuthAction = {
  login: (user: AuthUser) => void;
  logout: () => void;
};

export const useAuthUserStore = create<AuthState & AuthAction>()(
  devtools((set) => ({
    user: null,
    login: (user) => set({ user }),
    logout: () => set({ user: null }),
  }))
);
