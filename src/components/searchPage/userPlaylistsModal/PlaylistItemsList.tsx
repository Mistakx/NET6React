import '../../../styles/SearchPage.css';
import React, {useEffect} from "react";
import "aos/dist/aos.css";
import {PlaylistBasicDetails} from "../../../models/backendRequests/PlaylistRoute/PlaylistBasicDetails";
import UserRequests from "../../../requests/backendRequests/UserRequests";
import PlaylistItem from "./PlaylistItem";
import AddPlaylistForm from "./AddPlaylistForm";
import AlertStore from "../../../stores/AlertStore";


function PlaylistItemsList(): JSX.Element {

    const prettyAlert = AlertStore(state => state.prettyAlert)

    const [newPlaylistResponse, setNewPlaylistResponse] = React.useState<string | null>(null);
    const [userPlaylists, setUserPlaylists] = React.useState<PlaylistBasicDetails[]>();

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
        if (newPlaylistResponse) {
            (async () => {
                const sessionToken = window.sessionStorage.getItem("sessionToken");
                if (sessionToken) {
                    try {
                        setUserPlaylists(await UserRequests.getPlaylists(sessionToken));
                    } catch (e: any) {
                        prettyAlert(e.response.data, false)
                    }
                    setNewPlaylistResponse(null);
                } else prettyAlert("No session token found.", false)
            })()
        }
    }, [newPlaylistResponse]);

    let playlistItemsList: JSX.Element[] = [];
    if (userPlaylists) {
        for (const currentUserPlaylist of userPlaylists) {
            playlistItemsList.push(
                <PlaylistItem id={currentUserPlaylist.id}
                              title={currentUserPlaylist.title}
                />)
        }
    }

    return (
        <ul className="list-group">
            <AddPlaylistForm setNewPlaylistResponse={setNewPlaylistResponse}/>
            {playlistItemsList}
        </ul>
    )
}

export default PlaylistItemsList;
