import create from 'zustand'
import {EditOrCreatePlaylistModalState} from "../models/states/modals/EditOrCreatePlaylistModalState";
import {LoginState} from "../models/states/LoginState";

const LoginStore = create<LoginState>((set) => ({

    isAuthenticated: false,
    setIsAuthenticated: (isAuthenticated) => set(state => ({
        isAuthenticated: isAuthenticated
    })),

}))

export default LoginStore;
