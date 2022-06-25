import '../../../../styles/Playlist.css'
import '../../../../styles/SearchPage.css'
import PlaylistContentItem from "./PlaylistContentItem";
import React, {useEffect} from "react";
import "aos/dist/aos.css";
import {PlaylistItemsListProperties} from "../../../../models/components/pages/playlistPage/PlaylistItemsListProperties";
import PlaylistRequests from "../../../../requests/backendRequests/PlaylistRequests";
import AlertStore from "../../../../stores/AlertStore";
import BackendResponsesStore from "../../../../stores/BackendResponsesStore";
import {GeneralizedResult} from "../../../../models/apiResponses/GenericResults";
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
import PlaylistTopBarStore from "../../../../stores/topBars/PlaylistTopBarStore";
import {PlaylistDto} from "../../../../models/backendRequests/PlaylistRoute/PlaylistDto";
import {compareContentCreator, compareContentTitle} from "../../../../utils/sorting/contentSorting";

function PlaylistContentList(props: PlaylistItemsListProperties): JSX.Element {

    const prettyAlert = AlertStore(state => state.prettyAlert)

    const order = PlaylistTopBarStore(state => state.order)

    const deleteGeneralizedResultResponse = BackendResponsesStore(state => state.deleteGeneralizedResultResponse)
    const setDeleteGeneralizedResultResponse = BackendResponsesStore(state => state.setDeleteGeneralizedResultResponse)

    const [playlistContent, setPlaylistContent] = React.useState<GeneralizedResult[]>([]);
    const [playlistBasicDetails, setPlaylistBasicDetails] = React.useState<PlaylistDto>();

    useEffect(() => {
        (async () => {
            setPlaylistBasicDetails(await PlaylistRequests.getPlaylistInformation(props.playlistId, window.sessionStorage.getItem("sessionToken")!))
        })()
    }, []);

    useEffect(() => {
        (async () => {
            try {
                let response = await PlaylistRequests.getPlaylistContent(props.playlistId)
                if (order === "Custom Order") response.sort()
                else if (order === "Order by Title") response.sort(compareContentTitle)
                else if (order === "Order by Creator") response.sort(compareContentCreator)
                setPlaylistContent(response)
            } catch (e: any) {
                prettyAlert(e.response?.data || e.toJSON().message, false)
            }
        })()

    }, [order]);

    useEffect(() => {
        if (deleteGeneralizedResultResponse) {
            (async () => {
                try {
                    let response = await PlaylistRequests.getPlaylistContent(props.playlistId)
                    if (order === "Custom Order") response.sort()
                    else if (order === "Order by Title") response.sort(compareContentTitle)
                    else if (order === "Order by Creator") response.sort(compareContentCreator)
                    setPlaylistContent(response)
                } catch (e: any) {
                    prettyAlert(e.response?.data || e.toJSON().message, false)
                }
                setDeleteGeneralizedResultResponse("")
            })()
        }
    }, [deleteGeneralizedResultResponse]);



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
                    const oldIndex = playlistContent.findIndex((item) => item.platformId === active.id);
                    const newIndex = playlistContent.findIndex((item) => item.platformId === over?.id);
                    PlaylistRequests.sortContent(props.playlistId, playlistContent[oldIndex].databaseId!, newIndex, sessionToken).then(
                        (response) => {
                            prettyAlert(response, true)
                        }
                    )
                    setPlaylistContent(arrayMove(playlistContent, oldIndex, newIndex));
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

    let contentList;
    if (playlistContent.length == 0) contentList = <h4 className="text-center">No results found</h4>
    else {

        // If the playlist results came with the creator field, we can't sort or edit the results
        if (playlistBasicDetails && playlistBasicDetails.owner !== null) {

            contentList = playlistContent.map((result) => (
                <PlaylistContentItem
                    key={result.platformId}
                    playlistId={props.playlistId}
                    generalizedResult={result}
                    generalizedResults={playlistContent}
                    draggable={false}
                    showingMyPlaylist={false}
                />
            ))

        }

        // If the playlist results came without creator field, we can sort the results if the order is custom on the top bar
        else if (playlistBasicDetails && playlistBasicDetails.owner === null) {

            console.log("DEBUG2")

            if (order === "Custom Order") {

                contentList = <DndContext
                    sensors={sensors}
                    collisionDetection={closestCenter}
                    onDragEnd={handleDragEnd}
                    modifiers={[restrictToParentElement]}
                >
                    {/* TODO no mobile fica estranho */}
                    <SortableContext
                        items={playlistContent.map((playlist) => playlist.platformId)}
                        strategy={rectSortingStrategy}
                    >

                        {playlistContent.map((result) => (
                            <PlaylistContentItem
                                key={result.platformId}
                                playlistId={props.playlistId}
                                generalizedResult={result}
                                generalizedResults={playlistContent}
                                showingMyPlaylist={true}
                                draggable={true}
                            />
                        ))}

                    </SortableContext>
                </DndContext>
            } else {
                contentList = playlistContent.map((result) => (
                    <PlaylistContentItem
                        key={result.platformId}
                        playlistId={props.playlistId}
                        generalizedResult={result}
                        generalizedResults={playlistContent}
                        showingMyPlaylist={true}
                        draggable={false}
                    />
                ))

            }

        }

    }

    return (

        <div className="overflow-auto playlistItens">
            <ul className="list-group pt-2">

                {contentList}

            </ul>

        </div>

    )

}

export default PlaylistContentList;
