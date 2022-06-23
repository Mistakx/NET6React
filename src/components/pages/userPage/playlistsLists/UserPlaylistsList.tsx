import React, {useEffect} from 'react';
import '../../../../styles/style.css';
import PlaylistItem from "../../../cards/PlaylistItem";
import {PlaylistDto} from "../../../../models/backendRequests/PlaylistRoute/PlaylistDto";
import UserRequests from "../../../../requests/backendRequests/UserRequests";
import AddPlaylistItem from "./AddPlaylistItem";
import EditOrCreatePlaylistModal from "../../../modals/EditOrCreatePlaylistModal";
import AlertStore from "../../../../stores/AlertStore";
import BackendResponsesStore from "../../../../stores/BackendResponsesStore";
import {
    DndContext,
    closestCenter,
    KeyboardSensor,
    PointerSensor,
    useSensor,
    useSensors, DragEndEvent,
} from '@dnd-kit/core';
import {
    arrayMove,
    SortableContext,
    sortableKeyboardCoordinates,
    rectSortingStrategy,
} from '@dnd-kit/sortable';
import {restrictToWindowEdges} from "@dnd-kit/modifiers";
import {UserPlaylistsListProperties} from "../../../../models/components/pages/userPage/UserPlaylistsListProperties";
import UserTopBarStore from "../../../../stores/topBars/UserTopBarStore";


function UserPlaylistsList(props: UserPlaylistsListProperties): JSX.Element {

    const prettyAlert = AlertStore(state => state.prettyAlert)

    const [userPlaylistItems, setUserPlaylistItems] = React.useState<PlaylistDto[]>([]);

    const order = UserTopBarStore(state => state.order)

    const editPlaylistResponse = BackendResponsesStore(state => state.editPlaylistResponse)
    const setEditPlaylistResponse = BackendResponsesStore(state => state.setEditPlaylistResponse)

    const createPlaylistResponse = BackendResponsesStore(state => state.createPlaylistResponse)
    const setCreatePlaylistResponse = BackendResponsesStore(state => state.setCreatePlaylistResponse)

    const deletePlaylistResponse = BackendResponsesStore(state => state.deletePlaylistResponse)
    const setDeletePlaylistResponse = BackendResponsesStore(state => state.setDeletePlaylistResponse)

    const resetCoverResponse = BackendResponsesStore(state => state.resetCoverResponse)
    const setResetCoverResponse = BackendResponsesStore(state => state.setResetCoverResponse)

    const setToggledFollowResponse = BackendResponsesStore(state => state.setToggledFollowResponse)
    const toggledFollowResponse = BackendResponsesStore(state => state.toggledFollowResponse)


    useEffect(() => {
        (async () => {
            const sessionToken = window.sessionStorage.getItem("sessionToken");
            if (sessionToken) {
                try {
                    const userPlaylists = await UserRequests.getPlaylists(props.username, sessionToken)
                    if (order === "Custom Order") userPlaylists.sort()
                    else if (order === "Order by Title") userPlaylists.sort(compareTitle)
                    else if (order === "Order by Items Amount") userPlaylists.sort(compareResultsAmount)
                    else if (order === "Order by Weekly Views") userPlaylists.sort(compareWeeklyViews)
                    else if (order === "Order by Total Views") userPlaylists.sort(compareTotalViews)

                    setUserPlaylistItems(userPlaylists);
                } catch (e: any) {
                    prettyAlert(e.response?.data || e.toJSON().message, false)
                }
            } else prettyAlert("No session token found.", false)
        })()
    }, [order]);

    useEffect(() => {
        if (deletePlaylistResponse) {
            (async () => {
                const sessionToken = window.sessionStorage.getItem("sessionToken");
                if (sessionToken) {
                    try {
                        const userPlaylists = await UserRequests.getPlaylists(props.username, sessionToken)
                        if (order === "Custom Order") userPlaylists.sort()
                        else if (order === "Order by Title") userPlaylists.sort(compareTitle)
                        else if (order === "Order by Items Amount") userPlaylists.sort(compareResultsAmount)
                        else if (order === "Order by Weekly Views") userPlaylists.sort(compareWeeklyViews)
                        else if (order === "Order by Total Views") userPlaylists.sort(compareTotalViews)
                        setUserPlaylistItems(userPlaylists);
                    } catch (e: any) {
                        prettyAlert(e.response?.data || e.toJSON().message, false)
                    }
                    setDeletePlaylistResponse(null);
                } else prettyAlert("No session token found.", false)
            })()
        }
    }, [deletePlaylistResponse]);

    useEffect(() => {
        if (resetCoverResponse) {
            (async () => {
                const sessionToken = window.sessionStorage.getItem("sessionToken");
                if (sessionToken) {
                    try {
                        const userPlaylists = await UserRequests.getPlaylists(props.username, sessionToken)
                        if (order === "Custom Order") userPlaylists.sort()
                        else if (order === "Order by Title") userPlaylists.sort(compareTitle)
                        else if (order === "Order by Items Amount") userPlaylists.sort(compareResultsAmount)
                        else if (order === "Order by Weekly Views") userPlaylists.sort(compareWeeklyViews)
                        else if (order === "Order by Total Views") userPlaylists.sort(compareTotalViews)
                        setUserPlaylistItems(userPlaylists);
                    } catch (e: any) {
                        prettyAlert(e.response?.data || e.toJSON().message, false)
                    }
                    setResetCoverResponse(null);
                } else prettyAlert("No session token found.", false)
            })()
        }
    }, [resetCoverResponse]);

    useEffect(() => {
        if (editPlaylistResponse) {
            (async () => {
                const sessionToken = window.sessionStorage.getItem("sessionToken");
                if (sessionToken) {
                    try {
                        const userPlaylists = await UserRequests.getPlaylists(props.username, sessionToken)
                        if (order === "Custom Order") userPlaylists.sort()
                        else if (order === "Order by Title") userPlaylists.sort(compareTitle)
                        else if (order === "Order by Items Amount") userPlaylists.sort(compareResultsAmount)
                        else if (order === "Order by Weekly Views") userPlaylists.sort(compareWeeklyViews)
                        else if (order === "Order by Total Views") userPlaylists.sort(compareTotalViews)
                        setUserPlaylistItems(userPlaylists);
                    } catch (e: any) {
                        prettyAlert(e.response?.data || e.toJSON().message, false)
                    }
                    setEditPlaylistResponse(null);
                } else prettyAlert("No session token found.", false)
            })()
        }
    }, [editPlaylistResponse]);

    useEffect(() => {
        if (createPlaylistResponse) {
            (async () => {
                const sessionToken = window.sessionStorage.getItem("sessionToken");
                if (sessionToken) {
                    try {
                        const userPlaylists = await UserRequests.getPlaylists(props.username, sessionToken)
                        if (order === "Custom Order") userPlaylists.sort()
                        else if (order === "Order by Title") userPlaylists.sort(compareTitle)
                        else if (order === "Order by Items Amount") userPlaylists.sort(compareResultsAmount)
                        else if (order === "Order by Weekly Views") userPlaylists.sort(compareWeeklyViews)
                        else if (order === "Order by Total Views") userPlaylists.sort(compareTotalViews)
                        setUserPlaylistItems(userPlaylists);
                    } catch (e: any) {
                        prettyAlert(e.response?.data || e.toJSON().message, false)
                    }
                    setCreatePlaylistResponse(null);
                } else prettyAlert("No session token found.", false)
            })()
        }
    }, [createPlaylistResponse]);

    useEffect(() => {
        if (toggledFollowResponse) {
            (async () => {
                const sessionToken = window.sessionStorage.getItem("sessionToken");
                if (sessionToken) {
                    try {
                        const userPlaylists = await UserRequests.getPlaylists(props.username, sessionToken)
                        if (order === "Custom Order") userPlaylists.sort()
                        else if (order === "Order by Title") userPlaylists.sort(compareTitle)
                        else if (order === "Order by Items Amount") userPlaylists.sort(compareResultsAmount)
                        else if (order === "Order by Weekly Views") userPlaylists.sort(compareWeeklyViews)
                        else if (order === "Order by Total Views") userPlaylists.sort(compareTotalViews)
                        setUserPlaylistItems(userPlaylists);
                    } catch (e: any) {
                        prettyAlert(e.response?.data || e.toJSON().message, false)
                    }
                    setToggledFollowResponse(null);
                } else prettyAlert("No session token found.", false)
            })()
        }
    }, [toggledFollowResponse]);


    function compareTitle(a: PlaylistDto, b: PlaylistDto) {
        return (a.title.localeCompare(b.title));
    }

    function compareWeeklyViews(a: PlaylistDto, b: PlaylistDto) {
        return (b.weeklyViewsAmount! - a.weeklyViewsAmount!);
    }

    function compareTotalViews(a: PlaylistDto, b: PlaylistDto) {
        return (b.totalViewsAmount! - a.totalViewsAmount!);
    }

    function compareResultsAmount(a: PlaylistDto, b: PlaylistDto) {
        return (b.resultsAmount! - a.resultsAmount!);
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

        if (active.id !== over?.id) {

            const sessionToken = sessionStorage.getItem("sessionToken");
            if (sessionToken) {
                try {
                    const oldIndex = userPlaylistItems.findIndex((item) => item.id === active.id);
                    const newIndex = userPlaylistItems.findIndex((item) => item.id === over?.id);
                    UserRequests.sortPlaylist(userPlaylistItems[oldIndex].id!, newIndex, sessionToken).then(
                        (response) => {
                            prettyAlert(response, true)
                        }
                    )
                    setUserPlaylistItems(arrayMove(userPlaylistItems, oldIndex, newIndex));
                } catch (e: any) {
                    prettyAlert(e.response?.data || e.toJSON().message, false)
                }
            } else prettyAlert("User needs to be logged in to sort playlists", false)

        }
    }

    let playlistList;
    let addPlaylistItem;

    // Showing my playlist, and a custom order
    if (props.username === sessionStorage.getItem("username") && order === "Custom Order") {
        addPlaylistItem = <AddPlaylistItem/>
        playlistList = <DndContext
            sensors={sensors}
            collisionDetection={closestCenter}
            onDragEnd={handleDragEnd}
            modifiers={[restrictToWindowEdges]}
        >
            <SortableContext
                items={userPlaylistItems.map((playlist) => playlist.id)}
                strategy={rectSortingStrategy}
            >

                {userPlaylistItems.map((playlist) => (
                    <PlaylistItem key={playlist.id} basicDetails={playlist} showingMyPlaylists={true}
                                  showingPlaylistInSearch={false} draggable={true}/>
                ))}

            </SortableContext>
        </DndContext>
    }

    // Showing my playlist, but not a custom order
    else if (props.username === sessionStorage.getItem("username") && order !== "Custom Order") {
        addPlaylistItem = <AddPlaylistItem/>
        playlistList = <>
                {userPlaylistItems.map((playlist) => (
                    <PlaylistItem key={playlist.id} basicDetails={playlist} showingMyPlaylists={true}
                                  showingPlaylistInSearch={false} draggable={false}/>
                ))}
        </>


    }

    // Showing another user playlist
    else {
        playlistList = <>
            {
                userPlaylistItems.map((playlist) => (
                    <PlaylistItem key={playlist.id} basicDetails={playlist} showingMyPlaylists={false}
                                  showingPlaylistInSearch={false} draggable={false}/>
                ))
            }
        </>
    }

    return (

        <div className="col-lg-8 col-md-6 col-sm-12 col-12">

            <div className="row results">

                {addPlaylistItem}

                {playlistList}

            </div>
        </div>


    )

}

export default UserPlaylistsList;
