import { create } from "zustand";
import { devtools, persist } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer'
import { IUser } from "../types";

interface IAuthStore {
    user: IUser;
    isLogged: boolean;
    setUser: (user: IUser) => void;
    setIsLogged: (def: boolean) => void;
}

export const useAuthStore = create<IAuthStore>()(devtools(immer((set) => ({
    user: {
        username: '',
        email: '',
        token: '',
        id: ''
    },
    isLogged: false,

    setUser: (user) => set({ user }),
    setIsLogged: (def) => set({ isLogged: def })

}))));