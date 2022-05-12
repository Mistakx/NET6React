import create from 'zustand'
import {PlaylistPagePlayerState} from "../models/states/PlaylistPagePlayerState";

const PlaylistPlayerPage = create<PlaylistPagePlayerState>((set) => ({

    playingGenericResultPlaylistIndex: null,
    setPlayingGenericResultPlaylistIndex: (playingGenericResultPlaylistIndex) => set(state => ({
        playingGenericResultPlaylistIndex: playingGenericResultPlaylistIndex
    })),

    playingGenericResult: null,
    setPlayingGenericResult: (playingGenericResult) => set(state => ({
        playingGenericResult: playingGenericResult
    }))

}))

export default PlaylistPlayerPage;
