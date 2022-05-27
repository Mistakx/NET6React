import React, {useEffect} from 'react';
import '../../../styles/style.css';
import ProfilePlaylistItem from "./ProfilePlaylistItem";
import {PlaylistBasicDetails} from "../../../models/backendRequests/PlaylistRoute/PlaylistBasicDetails";
import UserRequests from "../../../requests/backendRequests/UserRequests";
import AddPlaylistItem from "./AddPlaylistItem";
import EditOrCreatePlaylistModal from "./EditOrCreatePlaylistModal";
import AlertStore from "../../../stores/AlertStore";
import BackendResponsesStore from "../../../stores/BackendResponsesStore";

function PlaylistsList(): JSX.Element {

    const prettyAlert = AlertStore(state => state.prettyAlert)

    const [userPlaylists, setUserPlaylists] = React.useState<PlaylistBasicDetails[]>();

    const setEditOrCreatePlaylistResponse = BackendResponsesStore(state => state.setEditOrCreatePlaylistResponse)
    const editOrCreatePlaylistResponse = BackendResponsesStore(state => state.editOrCreatePlaylistResponse)

    const deletePlaylistResponse = BackendResponsesStore(state => state.deletePlaylistResponse)
    const setDeletePlaylistResponse = BackendResponsesStore(state => state.setDeletePlaylistResponse)

    const resetCoverResponse = BackendResponsesStore(state => state.resetCoverResponse)
    const setResetCoverResponse = BackendResponsesStore(state => state.setResetCoverResponse)

    useEffect(() => {
        (async () => {
            const sessionToken = window.sessionStorage.getItem("sessionToken");
            if (sessionToken) {
                try {
                    setUserPlaylists(await UserRequests.getPlaylists(sessionToken));
                } catch (e: any) {
                    prettyAlert(e.response.data || e.toJSON().message, false)
                }
            } else prettyAlert("No session token found.", false)
        })()
    }, []);

    useEffect(() => {
        if (deletePlaylistResponse) {
            (async () => {
                const sessionToken = window.sessionStorage.getItem("sessionToken");
                if (sessionToken) {
                    try {
                        setUserPlaylists(await UserRequests.getPlaylists(sessionToken));
                    } catch (e: any) {
                        prettyAlert(e.response.data || e.toJSON().message, false)
                    }
                    setDeletePlaylistResponse(null);
                } else prettyAlert("No session token found.", false)
            })()
        }
    }, [deletePlaylistResponse]);

    useEffect(() => {
        if (resetCoverResponse) {
            (async () => {
                const sessionToken = window.sessionStorage.getItem("sessionToken");
                if (sessionToken) {
                    try {
                        setUserPlaylists(await UserRequests.getPlaylists(sessionToken));
                    } catch (e: any) {
                        prettyAlert(e.response.data || e.toJSON().message, false)
                    }
                    setResetCoverResponse(null);
                } else prettyAlert("No session token found.", false)
            })()
        }
    }, [resetCoverResponse]);

    useEffect(() => {
        if (editOrCreatePlaylistResponse) {
            (async () => {
                const sessionToken = window.sessionStorage.getItem("sessionToken");
                if (sessionToken) {
                    try {
                        setUserPlaylists(await UserRequests.getPlaylists(sessionToken));
                    } catch (e: any) {
                        prettyAlert(e.response.data || e.toJSON().message, false)
                    }
                    setEditOrCreatePlaylistResponse(null);
                } else prettyAlert("No session token found.", false)
            })()
        }
    }, [editOrCreatePlaylistResponse]);

    let playlistsList: JSX.Element[] = [];
    if (userPlaylists) {
        for (let currentPlaylistBasicDetails of userPlaylists) {

            let currentPlaylistItem = <ProfilePlaylistItem
                basicDetails={currentPlaylistBasicDetails}
            />
            playlistsList.push(currentPlaylistItem);

        }
    }

    return (

        <div className="col-md-8">

            <div className="row results">

                <AddPlaylistItem/>

                {playlistsList}

            </div>

            <EditOrCreatePlaylistModal/>

        </div>


    )

}

export default PlaylistsList;
