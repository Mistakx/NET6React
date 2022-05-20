import React, {useEffect} from 'react';
import '../../../styles/style.css';
import ProfilePlaylistItem from "./ProfilePlaylistItem";
import {PlaylistBasicDetails} from "../../../models/backendRequests/PlaylistRoute/PlaylistBasicDetails";
import UserRequests from "../../../requests/backendRequests/UserRequests";
import AddPlaylistItem from "./AddPlaylistItem";
import EditOrCreatePlaylistModal from "./EditOrCreatePlaylistModal";
import AlertStore from "../../../stores/AlertStore";

function PlaylistsList(): JSX.Element {

    const prettyAlert = AlertStore(state => state.prettyAlert)

    const [userPlaylists, setUserPlaylists] = React.useState<PlaylistBasicDetails[]>();
    const [deletePlaylistResponse, setDeletePlaylistResponse] = React.useState<string | null>(null);
    const [editOrCreatePlaylistResponse, setEditOrCreatePlaylistResponse] = React.useState<string | null>(null);

    useEffect(() => {
        (async () => {
            const sessionToken = window.sessionStorage.getItem("sessionToken");
            if (sessionToken) {
                try {
                    setUserPlaylists(await UserRequests.getPlaylists(sessionToken));
                } catch (e: any) {
                    prettyAlert(e.response.data, false)
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
                        prettyAlert(e.response.data, false)
                    }
                    setDeletePlaylistResponse(null);
                } else prettyAlert("No session token found.", false)
            })()
        }
    }, [deletePlaylistResponse]);

    useEffect(() => {
        if (editOrCreatePlaylistResponse) {
            (async () => {
                const sessionToken = window.sessionStorage.getItem("sessionToken");
                if (sessionToken) {
                    try {
                        setUserPlaylists(await UserRequests.getPlaylists(sessionToken));
                    } catch (e: any) {
                        prettyAlert(e.response.data, false)
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
                setDeletePlaylistResponse={setDeletePlaylistResponse}
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

            <EditOrCreatePlaylistModal setEditOrCreatePlaylistResponse={setEditOrCreatePlaylistResponse}/>

        </div>


    )

}

export default PlaylistsList;
