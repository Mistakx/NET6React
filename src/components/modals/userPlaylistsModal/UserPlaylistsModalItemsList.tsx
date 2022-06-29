import '../../../styles/SearchPage.css';
import React, {useEffect} from "react";
import "aos/dist/aos.css";
import {PlaylistDto} from "../../../models/backendRequests/PlaylistRoute/PlaylistDto";
import UserRequests from "../../../requests/backendRequests/UserRequests";
import UserPlaylistsModalItem from "./UserPlaylistsModalItem";
import AlertStore from "../../../stores/AlertStore";
import BackendResponsesStore from "../../../stores/BackendResponsesStore";
import AddPlaylistForm from "./AddPlaylistForm";


function UserPlaylistsModalItemsList(): JSX.Element {

    const prettyAlert = AlertStore(state => state.prettyAlert)

    const newPlaylistResponse = BackendResponsesStore(state => state.newPlaylistResponse)
    const setNewPlaylistResponse = BackendResponsesStore(state => state.setNewPlaylistResponse)

    const [userPlaylists, setUserPlaylists] = React.useState<PlaylistDto[]>();

    const username = localStorage.getItem("username");

    useEffect(() => {
        (async () => {
            const sessionToken = localStorage.getItem("sessionToken");
            if (sessionToken) {
                try {
                    setUserPlaylists(await UserRequests.getPlaylists(username!, sessionToken));
                } catch (e: any) {
                    prettyAlert(e.response.data, false)
                }
            } else prettyAlert("No session token found.", false)
        })()
    }, []);

    useEffect(() => {
        if (newPlaylistResponse) {
            (async () => {
                const sessionToken = localStorage.getItem("sessionToken");
                if (sessionToken) {
                    try {
                        setUserPlaylists(await UserRequests.getPlaylists(username!, sessionToken));
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
                <UserPlaylistsModalItem key={currentUserPlaylist.id} id={currentUserPlaylist.id}
                                        title={currentUserPlaylist.title}
                />)
        }
    }

    return (
        <div>

            <AddPlaylistForm/>
            <ul className="list-group">
                {playlistItemsList}
            </ul>
        </div>
    )
}

export default UserPlaylistsModalItemsList;
