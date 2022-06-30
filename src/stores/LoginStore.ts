import create from 'zustand'
import {EditOrCreatePlaylistModalState} from "../models/states/modals/EditOrCreatePlaylistModalState";
import {LoginState} from "../models/states/LoginState";

const LoginStore = create<LoginState>((set) => ({

    location: "/home",
    setLocation: (location) => set(state => ({
        location: location
    })),

    isAuthenticated: false,
    setIsAuthenticated: (isAuthenticated) => set(state => ({
        isAuthenticated: isAuthenticated
    })),

}))

export default LoginStore;
