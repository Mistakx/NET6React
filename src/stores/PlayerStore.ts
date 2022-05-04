import create from 'zustand'
import {PlayerState} from "../models/states/PlayerState";

const PlayerStore = create<PlayerState>((set) => ({

    playingId: null,
    setPlayingId: (playingId) => set(state => ({
        playingId: playingId
    })),

    playingThumbnailUrl: null,
    setPlayingThumbnailUrl: (playingThumbnailUrl) => set(state => ({
        playingThumbnailUrl: playingThumbnailUrl
    })),

    playerCreator: null,
    setPlayerCreator: (playerCreator) => set(state => ({
        playerCreator: playerCreator
    })),

}))

export default PlayerStore;
