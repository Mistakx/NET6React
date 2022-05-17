import '../../styles/Playlist.css'
import '../../styles/SearchPage.css'
import PlaylistItem from "./PlaylistItem";
import React from "react";
import "aos/dist/aos.css";
import {PlaylistItemsListProperties} from "../../models/components/playlistPage/PlaylistItemsListProperties";

function PlaylistItemsList(props: PlaylistItemsListProperties): JSX.Element {

    const [deleteGeneralizedResultResponse, setDeleteGeneralizedResultResponse] = React.useState("");

    let playlistItemsList: JSX.Element[] = []
    if (props.playlistItems) {
        for (const currentPlaylistItem of props.playlistItems) {
            playlistItemsList.push(
                <PlaylistItem
                    playlistId={props.playlistId}
                    genericResult={currentPlaylistItem}
                    setDeleteGeneralizedResultResponse={setDeleteGeneralizedResultResponse}
                />)
        }
    }

    return (

        <div className="overflow-auto playlistItens">
            <ul className="list-group">
                {playlistItemsList}
            </ul>

        </div>


    )

}

export default PlaylistItemsList;
