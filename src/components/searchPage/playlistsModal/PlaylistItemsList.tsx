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
                setUserPlaylists(await UserRequests.getPlaylists(process.env.REACT_APP_USER_ID as string));
            })()
        }
    }, [userPlaylists]);

    let playlistItemsList: JSX.Element[] = [];
    if (userPlaylists) {
        for (const currentUserPlaylist of userPlaylists) {
            playlistItemsList.push(
                <PlaylistItem id={currentUserPlaylist.id}
                              title={currentUserPlaylist.title}
                              thumbnailUrl={currentUserPlaylist.thumbnailUrl}
                />)
        }
    }

    return (

        <div>

            {playlistItemsList}

        </div>
    )
}

export default PlaylistItemsList;
