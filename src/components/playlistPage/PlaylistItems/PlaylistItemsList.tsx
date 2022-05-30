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
import {
    closestCenter,
    DndContext,
    DragEndEvent,
    KeyboardSensor,
    PointerSensor,
    useSensor,
    useSensors
} from "@dnd-kit/core";
import {restrictToWindowEdges} from "@dnd-kit/modifiers";
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
                response.sort(compareTitle)
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
                    response.sort(compareTitle)
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

    function handleDragEnd(event: DragEndEvent) {
        const {active, over} = event;

        if  (active.id !== over?.id) {
            setPlaylistGeneralizedResults((items) => {
                const oldIndex = items.findIndex((item) => item.id === active.id);
                const newIndex = items.findIndex((item) => item.id === over?.id);
                return arrayMove(items, oldIndex, newIndex);
            });
        }
    }


    return (

        <div className="overflow-auto playlistItens">
            <ul className="list-group">

                <DndContext
                    sensors={sensors}
                    collisionDetection={closestCenter}
                    onDragEnd={handleDragEnd}
                    modifiers={[restrictToWindowEdges]}
                >
                    <SortableContext
                        items={playlistGeneralizedResults.map((playlist) => playlist.id)}
                        strategy={rectSortingStrategy}
                    >

                        {playlistGeneralizedResults.map((playlist) => (
                            <PlaylistItem
                                key={playlist.id}
                                playlistId={props.playlistId}
                                genericResult={playlist}
                            />)
                        )}

                    </SortableContext>
                </DndContext>

            </ul>

        </div>


    )

}

export default PlaylistItemsList;
