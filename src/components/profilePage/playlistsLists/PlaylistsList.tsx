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


function PlaylistsList(): JSX.Element {

    const prettyAlert = AlertStore(state => state.prettyAlert)

    const [userPlaylistItems, setUserPlaylistItems] = React.useState<PlaylistBasicDetails[]>([]);
    const [number, setNumber] = React.useState(1);

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
                    const userPlaylists = await UserRequests.getPlaylists(sessionToken)
                    userPlaylists.sort(compare)
                    setUserPlaylistItems(userPlaylists);
                    setNumber(2)
                } catch (e: any) {
                    prettyAlert(e.response?.data || e.toJSON().message, false)
                }
            } else prettyAlert("No session token found.", false)
        })()
    }, []);

    useEffect(() => {
        if (deletePlaylistResponse) {
            (async () => {
                const sessionToken = window.sessionStorage.getItem("sessionToken");
                if (sessionToken) {
                    try {
                        const userPlaylists = await UserRequests.getPlaylists(sessionToken)
                        userPlaylists.sort(compare)
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
                        const userPlaylists = await UserRequests.getPlaylists(sessionToken)
                        userPlaylists.sort(compare)
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
                        const userPlaylists = await UserRequests.getPlaylists(sessionToken)
                        userPlaylists.sort(compare)
                        setUserPlaylistItems(userPlaylists);
                    } catch (e: any) {
                        prettyAlert(e.response?.data || e.toJSON().message, false)
                    }
                    setEditOrCreatePlaylistResponse(null);
                } else prettyAlert("No session token found.", false)
            })()
        }
    }, [editOrCreatePlaylistResponse]);

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

    function compare(a: PlaylistBasicDetails, b: PlaylistBasicDetails) {
        return (a.title.localeCompare(b.title));
    }

    function handleDragEnd(event: DragEndEvent) {
        const {active, over} = event;

        if (active.id !== over?.id) {
            setUserPlaylistItems((items) => {
                const oldIndex = items.findIndex((item) => item.id === active.id);
                const newIndex = items.findIndex((item) => item.id === over?.id);
                return arrayMove(items, oldIndex, newIndex);
            });
        }
    }

    return (

        <div className="col-md-8">

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
                        <AddPlaylistItem/>

                        {userPlaylistItems.map((playlist) => (
                            <ProfilePlaylistItem key={playlist.id} basicDetails={playlist}/>
                        ))}

                    </SortableContext>
                </DndContext>

            </div>
        </div>


    )

}

export default PlaylistsList;
