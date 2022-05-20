import React, {useEffect} from 'react';
import '../../../styles/style.css';
import ProfilePlaylistItem from "./ProfilePlaylistItem";
import {PlaylistBasicDetails} from "../../../models/backendRequests/PlaylistRoute/PlaylistBasicDetails";
import UserRequests from "../../../requests/backendRequests/UserRequests";
import AddPlaylistItem from "./AddPlaylistItem";
import EditOrCreatePlaylistModal from "./EditOrCreatePlaylistModal";

function PlaylistsList(): JSX.Element {

    const [userPlaylists, setUserPlaylists] = React.useState<PlaylistBasicDetails[]>();
    const [deletePlaylistResponse, setDeletePlaylistResponse] = React.useState<string | null>(null);
    const [editOrCreatePlaylistResponse, setEditOrCreatePlaylistResponse] = React.useState<string | null>(null);

    useEffect(() => {
        (async () => {
            const sessionToken = window.sessionStorage.getItem("sessionToken");
            if (sessionToken) setUserPlaylists(await UserRequests.getPlaylists(sessionToken));
            else alert("No session token found.")
        })()
    }, []);

    useEffect(() => {
        if (deletePlaylistResponse) {
            (async () => {
                const sessionToken = window.sessionStorage.getItem("sessionToken");
                if (sessionToken) {
                    setUserPlaylists(await UserRequests.getPlaylists(sessionToken));
                    setDeletePlaylistResponse(null);
                } else alert("No session token found.")
            })()
        }
    }, [deletePlaylistResponse, editOrCreatePlaylistResponse]);

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
