import '../../../styles/SearchPage.css';
import React, {useEffect} from "react";
import "aos/dist/aos.css";
import {PlaylistBasicDetails} from "../../../models/backendRequests/PlaylistBasicDetails";
import UserRequests from "../../../requests/backendRequests/UserRequests";
import PlaylistItem from "./PlaylistItem";

function PlaylistItemsList(): JSX.Element {

    const [userPlaylists, setUserPlaylists] = React.useState<PlaylistBasicDetails[]>();

    useEffect(() => {
        if (!userPlaylists) {
            (async () => {
                const sessionToken = window.sessionStorage.getItem("sessionToken");
                if (sessionToken) setUserPlaylists(await UserRequests.getPlaylists(sessionToken));
                else alert("No session token found.")
            })()
        }
    }, [userPlaylists]);

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
            <li className="list-group-item add-list clickable">
                <div className="input-group">
                    <input type="text" className="form-control" placeholder="Add Playlist" />
                    <button className="btn btn-success">OK</button>
                </div>
            </li>
            {playlistItemsList}
        </ul>
    )
}

export default PlaylistItemsList;
