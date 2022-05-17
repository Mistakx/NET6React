import '../../styles/Playlist.css'
import '../../styles/SearchPage.css'
import PlaylistItem from "./PlaylistItem";
import React, {useEffect} from "react";
import "aos/dist/aos.css";
import {PlaylistItemsListProperties} from "../../models/components/playlistPage/PlaylistItemsListProperties";
import PlaylistRequests from "../../requests/backendRequests/PlaylistRequests";
import {GeneralizedResult} from "../../models/apiRequests/GenericResults";
import {PlaylistGeneralizedResults} from "../../models/backendRequests/PlaylistRoute/PlaylistGeneralizedResults";

function PlaylistItemsList(props: PlaylistItemsListProperties): JSX.Element {

    const [playlistGeneralizedResults, setPlaylistGeneralizedResults] = React.useState<PlaylistGeneralizedResults>();
    const [deleteGeneralizedResultResponse, setDeleteGeneralizedResultResponse] = React.useState("");

    useEffect(() => {
        (async () => {
            setPlaylistGeneralizedResults(await PlaylistRequests.getPlaylistGeneralizedResults(props.playlistId!));
        })()
    }, []);

    useEffect(() => {
        if (deleteGeneralizedResultResponse) {
            (async () => {
                setPlaylistGeneralizedResults(await PlaylistRequests.getPlaylistGeneralizedResults(props.playlistId!));
                setDeleteGeneralizedResultResponse("")
            })()
        }
    }, [deleteGeneralizedResultResponse]);

    let playlistItemsList: JSX.Element[] = []
    if (playlistGeneralizedResults) {
        for (const currentPlaylistItem of playlistGeneralizedResults.contents) {
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
