import create from 'zustand'
import {FollowersModalState} from "../../models/states/modals/FollowersModalState";
import {StatisticsModalState} from "../../models/states/modals/StatisticsModalState";

const StatisticsModalStore = create<StatisticsModalState>((set) => ({

    showingStatisticsOf: null,
    setShowingStatisticsOf: (showingStatisticsOf) => set(state => ({
        showingStatisticsOf: showingStatisticsOf
    })),

    showingStatisticsModal: false,
    setShowingStatisticsModal: (showingStatisticsModal) => set(state => ({
        showingStatisticsModal: showingStatisticsModal
    })),

    resetStatisticsModal: () => set(state => ({
        showingStatisticsOf: null,
        showingStatisticsModal: false
    }))

}))

export default StatisticsModalStore;
