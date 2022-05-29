import create from 'zustand'
import {EditUserPasswordModalState} from "../models/states/EditUserPasswordModalState";

const EditUserPasswordModalStore = create<EditUserPasswordModalState>((set) => ({

    showingEditUserPasswordModal: false,
    setShowingEditUserPasswordModal: (showingEditUserPasswordModal) => set(state => ({
        showingEditUserPasswordModal: showingEditUserPasswordModal
    })),

}))

export default EditUserPasswordModalStore;
