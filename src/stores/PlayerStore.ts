import create from 'zustand'
import {PlayerState} from "../models/States/PlayerState";

const PlayerStore = create<PlayerState>((set) => ({

    playingPlatform: null,
    setPlayingPlatform: (playingPlatform) => set((state) => ({
        playingPlatform: playingPlatform
    })),

    playingId: null,
    setPlayingId: (playingId) => set((state) => ({
        playingId: playingId
    })),

}))

export default PlayerStore;
