import create from 'zustand'
import {PlaylistModalState} from "../models/states/PlaylistModalState";
import React from "react";

const PlaylistsModalStore = create<PlaylistModalState>((set) => ({

    contentToAddId: null,
    setContentToAddId: (contentToAddId) => set(state => ({
        contentToAddId: contentToAddId
    })),

    contentToAddTitle: null,
    setContentToAddTitle: (contentToAddTitle) => set(state => ({
        contentToAddTitle: contentToAddTitle
    })),

    showingPlaylistsModal: false,
    setShowingPlaylistsModal: (showingPlaylistsModal) => set(state => ({
        showingPlaylistsModal: showingPlaylistsModal
    })),

}))

export default PlaylistsModalStore;
