import create from 'zustand'
import {EditUserInfoModalState} from "../../models/states/modals/EditUserInfoModalState";

const EditUserInfoModalStore = create<EditUserInfoModalState>((set) => ({

    name: null,
    setName: (name) => set(state => ({
        name: name
    })),

    username: null,
    setUsername: (username) => set(state => ({
        username: username
    })),

    email: null,
    setEmail: (email) => set(state => ({
        email: email
    })),

    showingEditUserInfoModal: false,
    setShowingEditUserInfoModal: (showingEditUserInfoModal) => set(state => ({
        showingEditUserInfoModal: showingEditUserInfoModal
    })),

}))

export default EditUserInfoModalStore;
