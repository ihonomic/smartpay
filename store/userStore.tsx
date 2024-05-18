// https://docs.pmnd.rs/zustand/getting-started/introduction

import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { IUser } from "../types";

import { dummyUser } from "./dummy";

export const UserAccount = create<IUser>()(
  persist(
    (set, get) => ({
      isAuthenticated: false,
      isOnboardingCompleted: false,
      isUserSecurityPinRequired: false,
      userInfo: dummyUser,
      userPin: null,

      saveUser: (data: any) => {
        set(() => ({
          isAuthenticated: true,
          userInfo: data,
        }));
      },
      saveUserPin: (data: any) => {
        set(() => ({
          isAuthenticated: true,
          userPin: data,
        }));
      },
      logoutUser: () => {
        set(() => ({
          isAuthenticated: false,
          userInfo: dummyUser,
          // userPin: null,
        }));
      },

      setOnboardingCompleted: () => {
        set(() => ({ isOnboardingCompleted: true }));
      },

      toogleSecurityPinEnabled: () => {
        set((state) => ({
          userInfo: { ...state.userInfo, security_pin_enabled: true },
        }));
      },

      setUserMustEnterSecurityPin: (action: boolean) => {
        set(() => ({ isUserSecurityPinRequired: action }));
      },
    }),
    {
      name: "user-storage",
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
