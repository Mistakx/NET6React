import create from 'zustand'
import {UserFollowersModalState} from "../../models/states/modals/UserFollowersModalState";

const FollowersModalStore = create<UserFollowersModalState>((set) => ({

    showingFollowersOf: null,
    setShowingFollowersOf: (showingFollowersOf) => set(state => ({
        showingFollowersOf: showingFollowersOf
    })),

    showingFollowersModal: false,
    setShowingFollowersModal: (showingFollowersModal) => set(state => ({
        showingFollowersModal: showingFollowersModal
    })),

}))

export default FollowersModalStore;
