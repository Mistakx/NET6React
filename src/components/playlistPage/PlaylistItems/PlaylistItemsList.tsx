import '../../../styles/Playlist.css'
import '../../../styles/SearchPage.css'
import PlaylistItem from "./PlaylistItem";
import React, {useEffect} from "react";
import "aos/dist/aos.css";
import {PlaylistItemsListProperties} from "../../../models/components/playlistPage/PlaylistItemsListProperties";
import PlaylistRequests from "../../../requests/backendRequests/PlaylistRequests";
import {PlaylistGeneralizedResults} from "../../../models/backendRequests/PlaylistRoute/PlaylistGeneralizedResults";
import AlertStore from "../../../stores/AlertStore";
import BackendResponsesStore from "../../../stores/BackendResponsesStore";
import {GeneralizedResult} from "../../../models/apiRequests/GenericResults";
import {List, arrayMove} from 'react-movable';

function PlaylistItemsList(props: PlaylistItemsListProperties): JSX.Element {

    const prettyAlert = AlertStore(state => state.prettyAlert)

    const deleteGeneralizedResultResponse = BackendResponsesStore(state => state.deleteGeneralizedResultResponse)
    const setDeleteGeneralizedResultResponse = BackendResponsesStore(state => state.setDeleteGeneralizedResultResponse)

    const [playlistItems, setPlaylistItems] = React.useState<JSX.Element[]>([]);

    useEffect(() => {
        (async () => {
            try {
                let response = await PlaylistRequests.getPlaylistGeneralizedResults(props.playlistId)
                response.contents.sort(compareTitle)
                let playlistItemsList: JSX.Element[] = []
                for (const currentPlaylistItem of response?.contents!) {
                    playlistItemsList.push(
                        <PlaylistItem
                            playlistId={props.playlistId}
                            genericResult={currentPlaylistItem}
                        />)
                }
                setPlaylistItems(playlistItemsList)
            } catch (e: any) {
                prettyAlert(e.response?.data || e.toJSON().message, false)
            }
        })()
    }, []);

    useEffect(() => {
        if (deleteGeneralizedResultResponse) {
            (async () => {
                try {
                    let response = await PlaylistRequests.getPlaylistGeneralizedResults(props.playlistId)
                    response.contents.sort(compareTitle)
                    let playlistItemsList: JSX.Element[] = []
                    for (const currentPlaylistItem of response?.contents!) {
                        playlistItemsList.push(
                            <PlaylistItem
                                playlistId={props.playlistId}
                                genericResult={currentPlaylistItem}
                            />)
                    }
                    setPlaylistItems(playlistItemsList)
                } catch (e: any) {
                    prettyAlert(e.response?.data || e.toJSON().message, false)
                }
                setDeleteGeneralizedResultResponse("")
            })()
        }
    }, [deleteGeneralizedResultResponse]);

    function compareTitle(a: GeneralizedResult, b: GeneralizedResult) {
        return a.title.localeCompare(b.title)
    }

    function compareCreator(a: GeneralizedResult, b: GeneralizedResult) {
        return a.creator.localeCompare(b.creator)
    }


    return (

        <div className="overflow-auto playlistItens">
            <ul className="list-group">
                {playlistItems}
            </ul>

        </div>


    )

}

export default PlaylistItemsList;
