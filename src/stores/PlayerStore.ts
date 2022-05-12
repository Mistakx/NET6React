import create from 'zustand'
import {PlayerState} from "../models/states/PlayerState";

const PlayerStore = create<PlayerState>((set) => ({

    playingGenericResult: null,
    setPlayingGenericResult: (playingGenericResult) => set(state => ({
        playingGenericResult: playingGenericResult
    }))

}))

export default PlayerStore;
