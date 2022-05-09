import '../../styles/Playlist.css'
import '../../styles/SearchPage.css'
import PlaylistItem from "./PlaylistItem";
import React from "react";
import "aos/dist/aos.css";
import {PlaylistItemsListProperties} from "../../models/components/playlistPage/PlaylistItemsListProperties";

function PlaylistItemsList(props: PlaylistItemsListProperties): JSX.Element {

    let playlistItemsList: JSX.Element[] = []
    if (props.playlists) {
        for (const currentPlaylistItem of props.playlists) {
            playlistItemsList.push(<PlaylistItem
                title={currentPlaylistItem.title}
                thumbnailUrl={currentPlaylistItem.thumbnailUrl}
            />)
        }
    }

    return (

        <div className="overflow-auto">

            <ul className="list-group">
                {playlistItemsList}
            </ul>

        </div>


    )

}

export default PlaylistItemsList;
