import create from 'zustand'
import {EditOrCreatePlaylistModalState} from "../models/states/modals/EditOrCreatePlaylistModalState";
import {AlertState} from "../models/states/AlertState";
import EditOrCreatePlaylistModalStore from "./modals/EditOrCreatePlaylistModalStore";

const AlertStore = create<AlertState>((set) => ({

    alertSucceeded: null,
    setAlertSucceeded: (alertSucceeded) => set(state => ({
        alertSucceeded: alertSucceeded
    })),

    alertMessage: null,
    setAlertMessage: (alertMessage) => set(state => ({
        alertMessage: alertMessage
    })),

    showingAlert: false,
    setShowingAlert: (showingAlert) => set(state => ({
        showingAlert: showingAlert
    })),

    prettyAlert: (alertMessage, alertSucceeded) => set(state => ({
        alertMessage: alertMessage,
        alertSucceeded: alertSucceeded,
        showingAlert: true
    }))

}))

export default AlertStore;
