import React, {useEffect} from 'react';
import '../../../styles/style.css';
import ProfilePlaylistItem from "./ProfilePlaylistItem";
import {PlaylistBasicDetails} from "../../../models/backendRequests/PlaylistRoute/PlaylistBasicDetails";
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


function UserPlaylistsList(props: UserPlaylistsListProperties): JSX.Element {

    const prettyAlert = AlertStore(state => state.prettyAlert)

    const [userPlaylistItems, setUserPlaylistItems] = React.useState<PlaylistBasicDetails[]>([]);

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
                    // userPlaylists.sort(compare)
                    setUserPlaylistItems(userPlaylists);
                } catch (e: any) {
                    prettyAlert(e.response?.data || e.toJSON().message, false)
                }
            } else prettyAlert("No session token found.", false)
        })()
    }, [props.username]);

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

    function compare(a: PlaylistBasicDetails, b: PlaylistBasicDetails) {
        return (a.title.localeCompare(b.title));
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
                    PlaylistRequests.sortPlaylist(userPlaylistItems[oldIndex].id!, newIndex, sessionToken).then(
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

    let addPlaylistItem;
    if (props.username === sessionStorage.getItem("username")) {
        addPlaylistItem = <AddPlaylistItem/>
    }

    return (

        <div className="col-lg-8 col-md-6 col-sm-12 col-12">

            <EditOrCreatePlaylistModal/>

            <div className="row results">

                <DndContext
                    sensors={sensors}
                    collisionDetection={closestCenter}
                    onDragEnd={handleDragEnd}
                    modifiers={[restrictToWindowEdges]}
                >
                    <SortableContext
                        items={userPlaylistItems.map((playlist) => playlist.id)}
                        strategy={rectSortingStrategy}
                    >
                        {addPlaylistItem}

                        {userPlaylistItems.map((playlist) => (
                            <ProfilePlaylistItem key={playlist.id} basicDetails={playlist}/>
                        ))}

                    </SortableContext>
                </DndContext>

            </div>
        </div>


    )

}

export default UserPlaylistsList;
