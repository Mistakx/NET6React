import '../../../styles/SearchPage.css';
import React, {useEffect} from "react";
import "aos/dist/aos.css";
import {PlaylistBasicDetails} from "../../../models/backendRequests/PlaylistRoute/PlaylistBasicDetails";
import UserRequests from "../../../requests/backendRequests/UserRequests";
import PlaylistItem from "./PlaylistItem";
import AddPlaylistForm from "./AddPlaylistForm";

function PlaylistItemsList(): JSX.Element {

    const [newPlaylistResponse, setNewPlaylistResponse] = React.useState("");
    const [userPlaylists, setUserPlaylists] = React.useState<PlaylistBasicDetails[]>();

    useEffect(() => {
        (async () => {
            const sessionToken = window.sessionStorage.getItem("sessionToken");
            if (sessionToken) setUserPlaylists(await UserRequests.getPlaylists(sessionToken));
            else alert("No session token found.")
        })()
    }, []);

    useEffect(() => {
        (async () => {
            const sessionToken = window.sessionStorage.getItem("sessionToken");
            if (sessionToken) {
                setUserPlaylists(await UserRequests.getPlaylists(sessionToken));
                setNewPlaylistResponse("");
            } else alert("No session token found.")
        })()
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
