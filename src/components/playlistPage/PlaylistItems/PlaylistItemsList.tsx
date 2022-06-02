import '../../../styles/Playlist.css'
import '../../../styles/SearchPage.css'
import PlaylistItem from "./PlaylistItem";
import React, {useEffect} from "react";
import "aos/dist/aos.css";
import {PlaylistItemsListProperties} from "../../../models/components/playlistPage/PlaylistItemsListProperties";
import PlaylistRequests from "../../../requests/backendRequests/PlaylistRequests";
import AlertStore from "../../../stores/AlertStore";
import BackendResponsesStore from "../../../stores/BackendResponsesStore";
import {GeneralizedResult} from "../../../models/apiRequests/GenericResults";
import {arrayMove} from 'react-movable';
import {
    closestCenter,
    DndContext,
    DragEndEvent,
    KeyboardSensor,
    PointerSensor,
    useSensor,
    useSensors
} from "@dnd-kit/core";
import {restrictToParentElement} from "@dnd-kit/modifiers";
import {rectSortingStrategy, SortableContext, sortableKeyboardCoordinates} from "@dnd-kit/sortable";

function PlaylistItemsList(props: PlaylistItemsListProperties): JSX.Element {

    const prettyAlert = AlertStore(state => state.prettyAlert)

    const deleteGeneralizedResultResponse = BackendResponsesStore(state => state.deleteGeneralizedResultResponse)
    const setDeleteGeneralizedResultResponse = BackendResponsesStore(state => state.setDeleteGeneralizedResultResponse)

    const [playlistGeneralizedResults, setPlaylistGeneralizedResults] = React.useState<GeneralizedResult[]>([]);

    useEffect(() => {
        (async () => {
            try {
                let response = await PlaylistRequests.getPlaylistGeneralizedResults(props.playlistId)
                // response.sort(compareTitle)
                setPlaylistGeneralizedResults(response)
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
                    // response.sort(compareTitle)
                    setPlaylistGeneralizedResults(response)
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

    const sensors = useSensors(
        useSensor(PointerSensor, {
            activationConstraint: {
                distance: 1
            }
        }),
        useSensor(KeyboardSensor, {
            coordinateGetter: sortableKeyboardCoordinates,
        }),
    );

    async function handleDragEnd(event: DragEndEvent) {
        const {active, over} = event;

        if (active.id !== over?.id) {

            const sessionToken = sessionStorage.getItem("sessionToken");
            if (sessionToken) {
                try {
                    const oldIndex = playlistGeneralizedResults.findIndex((item) => item.platformId === active.id);
                    const newIndex = playlistGeneralizedResults.findIndex((item) => item.platformId === over?.id);
                    PlaylistRequests.sortGeneralizedResult(props.playlistId, playlistGeneralizedResults[oldIndex].databaseId!, newIndex, sessionToken).then(
                        (response) => {
                            prettyAlert(response, true)
                        }
                    )
                    setPlaylistGeneralizedResults(arrayMove(playlistGeneralizedResults, oldIndex, newIndex));
                } catch (e: any) {
                    prettyAlert(e.response?.data || e.toJSON().message, false)
                }
            } else prettyAlert("User needs to be logged in to sort playlist contents", false)

        }

        // if  (active.id !== over?.id) {
        //     const oldIndex = playlistGeneralizedResults.findIndex((item) => item.platformId === active.id);
        //     const newIndex = playlistGeneralizedResults.findIndex((item) => item.platformId === over?.id);
        //     setPlaylistGeneralizedResults(arrayMove(playlistGeneralizedResults, oldIndex, newIndex));
        // }
    }


    return (

        <div className="overflow-auto playlistItens">
            <ul className="list-group pt-2">

                <DndContext
                    sensors={sensors}
                    collisionDetection={closestCenter}
                    onDragEnd={handleDragEnd}
                    modifiers={[restrictToParentElement]}
                >
                    <SortableContext
                        items={playlistGeneralizedResults.map((playlist) => playlist.platformId)}
                        strategy={rectSortingStrategy}
                    >

                        {playlistGeneralizedResults.map((result) => (
                            <PlaylistItem
                                key={result.platformId}
                                playlistId={props.playlistId}
                                genericResult={result}
                            />
                        ))}

                    </SortableContext>
                </DndContext>

            </ul>

        </div>


    )

}

export default PlaylistItemsList;
