import create from 'zustand'
import {EditOrCreatePlaylistModalState} from "../models/states/EditOrCreatePlaylistModalState";
import {AlertState} from "../models/states/AlertState";
import EditOrCreatePlaylistModalStore from "./EditOrCreatePlaylistModalStore";

const AlertStore = create<AlertState>((set) => ({

    alertSucceeded: null,
    setAlertSucceeded: (alertSucceeded: boolean) => set(state => ({
        alertSucceeded: alertSucceeded
    })),

    alertMessage: null,
    setAlertMessage: (alertMessage: string) => set(state => ({
        alertMessage: alertMessage
    })),

    showingAlert: false,
    setShowingAlert: (showingAlert: boolean) => set(state => ({
        showingAlert: showingAlert
    })),

    prettyAlert: (alertMessage: string, alertSucceeded: boolean) => set(state => ({
        alertMessage: alertMessage,
        alertSucceeded: alertSucceeded,
        showingAlert: true
    }))

}))

export default AlertStore;
