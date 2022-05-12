import create from 'zustand'
import {GlobalPlayerState} from "../models/states/GlobalPlayerState";

const GlobalPlayerStore = create<GlobalPlayerState>((set) => ({

    playingGenericResult: null,
    setPlayingGenericResult: (playingGenericResult) => set(state => ({
        playingGenericResult: playingGenericResult
    }))

}))

export default GlobalPlayerStore;
