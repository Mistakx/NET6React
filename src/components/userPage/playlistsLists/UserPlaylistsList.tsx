import React, {useEffect} from 'react';
import '../../../styles/style.css';
import UserPlaylistItem from "./UserPlaylistItem";
import {PlaylistDto} from "../../../models/backendRequests/PlaylistRoute/PlaylistDto";
import UserRequests from "../../../requests/backendRequests/UserRequests";
import AddPlaylistItem from "./AddPlaylistItem";
import EditOrCreatePlaylistModal from "./EditOrCreatePlaylistModal";
import AlertStore from "../../../stores/AlertStore";
import BackendResponsesStore from "../../../stores/BackendResponsesStore";
import {
    DndContext,
    closestCenter,
    KeyboardSensor,
    PointerSensor,
    MouseSensor,
    useSensor,
    useSensors, DragEndEvent,
} from '@dnd-kit/core';
import {
    arrayMove,
    SortableContext,
    sortableKeyboardCoordinates,
    rectSortingStrategy,
} from '@dnd-kit/sortable';
import {restrictToParentElement, restrictToWindowEdges} from "@dnd-kit/modifiers";
import PlaylistRequests from "../../../requests/backendRequests/PlaylistRequests";
import {UserPlaylistsListProperties} from "../../../models/components/userPage/UserPlaylistsListProperties";
import UserTopBarStore from "../../../stores/topBars/UserTopBarStore";


function UserPlaylistsList(props: UserPlaylistsListProperties): JSX.Element {

    const prettyAlert = AlertStore(state => state.prettyAlert)

    const [userPlaylistItems, setUserPlaylistItems] = React.useState<PlaylistDto[]>([]);

    const showing = UserTopBarStore(state => state.showing)

    const setEditOrCreatePlaylistResponse = BackendResponsesStore(state => state.setEditOrCreatePlaylistResponse)
    const editOrCreatePlaylistResponse = BackendResponsesStore(state => state.editOrCreatePlaylistResponse)

    const deletePlaylistResponse = BackendResponsesStore(state => state.deletePlaylistResponse)
    const setDeletePlaylistResponse = BackendResponsesStore(state => state.setDeletePlaylistResponse)

    const resetCoverResponse = BackendResponsesStore(state => state.resetCoverResponse)
    const setResetCoverResponse = BackendResponsesStore(state => state.setResetCoverResponse)

    useEffect(() => {
        (async () => {
            const sessionToken = window.sessionStorage.getItem("sessionToken");
            if (sessionToken) {
                try {
                    const userPlaylists = await UserRequests.getPlaylists(props.username, sessionToken)
                    if (showing === "Custom Order") userPlaylists.sort()
                    else if (showing === "Order by Title") userPlaylists.sort(compareTitle)
                    else if (showing === "Order by Items Amount") userPlaylists.sort(compareResultsAmount)
                    else if (showing === "Order by Weekly Views") userPlaylists.sort(compareWeeklyViews)
                    else if (showing === "Order by Total Views") userPlaylists.sort(compareTotalViews)

                    setUserPlaylistItems(userPlaylists);
                } catch (e: any) {
                    prettyAlert(e.response?.data || e.toJSON().message, false)
                }
            } else prettyAlert("No session token found.", false)
        })()
    }, [props.username, showing]);

    useEffect(() => {
        if (deletePlaylistResponse) {
            (async () => {
                const sessionToken = window.sessionStorage.getItem("sessionToken");
                if (sessionToken) {
                    try {
                        const userPlaylists = await UserRequests.getPlaylists(props.username, sessionToken)
                        // userPlaylists.sort(compare)
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
                        // userPlaylists.sort(compare)
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
        if (editOrCreatePlaylistResponse) {
            (async () => {
                const sessionToken = window.sessionStorage.getItem("sessionToken");
                if (sessionToken) {
                    try {
                        const userPlaylists = await UserRequests.getPlaylists(props.username, sessionToken)
                        // userPlaylists.sort(compare)
                        setUserPlaylistItems(userPlaylists);
                    } catch (e: any) {
                        prettyAlert(e.response?.data || e.toJSON().message, false)
                    }
                    setEditOrCreatePlaylistResponse(null);
                } else prettyAlert("No session token found.", false)
            })()
        }
    }, [editOrCreatePlaylistResponse]);

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

    let editOrCreatePlaylistModal;
    if (props.username === sessionStorage.getItem("username")) {
        editOrCreatePlaylistModal = <EditOrCreatePlaylistModal/>
    }

    let playlistList;
    let addPlaylistItem;

    // Showing my playlist, and a custom order
    if (props.username === sessionStorage.getItem("username") && showing === "Custom Order") {
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
                    <UserPlaylistItem key={playlist.id} basicDetails={playlist} showingMyPlaylists={true}
                                      showingPlaylistInSearch={false} draggable={true}/>
                ))}

            </SortableContext>
        </DndContext>
    }

    // Showing my playlist, but not a custom order
    else if (props.username === sessionStorage.getItem("username") && showing !== "Custom Order") {
        addPlaylistItem = <AddPlaylistItem/>
        playlistList = <>
                {userPlaylistItems.map((playlist) => (
                    <UserPlaylistItem key={playlist.id} basicDetails={playlist} showingMyPlaylists={true}
                                      showingPlaylistInSearch={false} draggable={false}/>
                ))}
        </>


    }

    // Showing another user playlist
    else {
        playlistList = <>
            {
                userPlaylistItems.map((playlist) => (
                    <UserPlaylistItem key={playlist.id} basicDetails={playlist} showingMyPlaylists={false}
                                      showingPlaylistInSearch={false} draggable={false}/>
                ))
            }
        </>
    }

    return (

        <div className="col-lg-8 col-md-6 col-sm-12 col-12">

            {editOrCreatePlaylistModal}

            <div className="row results">

                {addPlaylistItem}

                {playlistList}

            </div>
        </div>


    )

}

export default UserPlaylistsList;
