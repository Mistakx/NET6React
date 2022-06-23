import create from 'zustand'
import {PlaylistPagePlayerState} from "../../models/states/players/PlaylistPagePlayerState";

const PlaylistPlayerPageStore = create<PlaylistPagePlayerState>((set) => ({

    playlistPlayerCurrentResult: null,
    setPlaylistPlayerCurrentResult: (playlistPlayerCurrentResult) => set(state => ({
        playlistPlayerCurrentResult: playlistPlayerCurrentResult
    })),

    playlistCurrentResults: null,
    setPlaylistCurrentResults: (playlistCurrentResults) => set(state => ({
        playlistCurrentResults: playlistCurrentResults
    })),

    resetPlaylistPagePlayerState: () => set(state => ({
        playlistPlayerCurrentResult: null,
        playlistCurrentResults: null
    }))

}))

export default PlaylistPlayerPageStore;
