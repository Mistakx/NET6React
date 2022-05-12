import create from 'zustand'
import {PlaylistModalState} from "../models/states/PlaylistModalState";
import React from "react";

const PlaylistsModalStore = create<PlaylistModalState>((set) => ({

    resultToAdd: null,
    setResultToAdd: (resultToAdd) => set(state => ({
        resultToAdd: resultToAdd
    })),

    showingPlaylistsModal: false,
    setShowingPlaylistsModal: (showingPlaylistsModal) => set(state => ({
        showingPlaylistsModal: showingPlaylistsModal
    })),

}))

export default PlaylistsModalStore;
