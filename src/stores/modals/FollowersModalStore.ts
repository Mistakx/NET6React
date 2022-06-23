import create from 'zustand'
import {FollowersModalState} from "../../models/states/modals/FollowersModalState";

const FollowersModalStore = create<FollowersModalState>((set) => ({

    showingFollowersOf: null,
    setShowingFollowersOf: (showingFollowersOf) => set(state => ({
        showingFollowersOf: showingFollowersOf
    })),

    showingFollowersModal: false,
    setShowingFollowersModal: (showingFollowersModal) => set(state => ({
        showingFollowersModal: showingFollowersModal
    })),

    resetFollowersModal: () => set(state => ({
        showingFollowersOf: null,
        showingFollowersModal: false
    }))

}))

export default FollowersModalStore;
