import create from 'zustand'
import {EditUserPasswordModalState} from "../../models/states/modals/EditUserPasswordModalState";

const EditUserPasswordModalStore = create<EditUserPasswordModalState>((set) => ({

    showingEditUserPasswordModal: false,
    setShowingEditUserPasswordModal: (showingEditUserPasswordModal) => set(state => ({
        showingEditUserPasswordModal: showingEditUserPasswordModal
    })),

    resetEditUserPasswordModal: () => set(state => ({
        showingEditUserPasswordModal: false
    }))


}))

export default EditUserPasswordModalStore;
