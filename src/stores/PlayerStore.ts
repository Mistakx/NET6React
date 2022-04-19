import create from 'zustand'
import {PlayerState} from "../models/States/PlayerState";

const PlayerStore = create<PlayerState>((set) => ({

    playingType: null,
    setPlayingType: (playingType) => set((state) => ({
        playingType: playingType
    })),

    playingId: null,
    setPlayingId: (playingId) => set((state) => ({
        playingId: playingId
    })),

}))

export default PlayerStore;
