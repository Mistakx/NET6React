import create from 'zustand'
import {FollowersModalState} from "../../models/states/modals/FollowersModalState";
import {FollowingModalState} from "../../models/states/modals/FollowingModalState";

const FollowingModalStore = create<FollowingModalState>((set) => ({

    showingFollowingOf: null,
    setShowingFollowingOf: (showingFollowingOf) => set(state => ({
        showingFollowingOf: showingFollowingOf
    })),

    showingFollowingModal: false,
    setShowingFollowingModal: (showingFollowingModal) => set(state => ({
        showingFollowingModal: showingFollowingModal
    })),

    resetFollowingModal: () => set(state => ({
        showingFollowingOf: null,
        showingFollowingModal: false
    }))

}))

export default FollowingModalStore;
