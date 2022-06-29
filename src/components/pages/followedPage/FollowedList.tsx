import React, {useEffect, useState} from 'react';
import UserPlaylistsModal from "../../modals/userPlaylistsModal/UserPlaylistsModal";
import {PlaylistDto} from "../../../models/backendRequests/PlaylistRoute/PlaylistDto";
import FollowedTopBarStore from "../../../stores/topBars/FollowedTopBarStore";
import CommunityRequests from "../../../requests/backendRequests/CommunityRequests";
import {UserProfileDto} from "../../../models/backendResponses/userRoute/UserProfileDto";
import BackendResponsesStore from "../../../stores/BackendResponsesStore";
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
import {arrayMove, rectSortingStrategy, SortableContext, sortableKeyboardCoordinates} from "@dnd-kit/sortable";
import PlaylistItem from "../../cards/PlaylistItem";
import AlertStore from "../../../stores/AlertStore";
import UserItem from "../../cards/UserItem";
import {
    comparePlaylistResultsAmount,
    comparePlaylistTitle,
    comparePlaylistTotalViews,
    comparePlaylistWeeklyViews
} from "../../../utils/sorting/playlistSorting";
import {
    compareUsername,
    compareUserPlaylistAmount,
    compareUserTotalViews,
    compareUserWeeklyViews
} from "../../../utils/sorting/userSorting";

function FollowedList(): JSX.Element {

    const [followedResults, setFollowedResults] = useState<UserProfileDto[] | PlaylistDto[]>();

    const prettyAlert = AlertStore(state => state.prettyAlert)

    const toggledFollowResponse = BackendResponsesStore(state => state.toggledFollowResponse)

    const showing = FollowedTopBarStore(state => state.showing)
    const userOrder = FollowedTopBarStore(state => state.userOrder)
    const playlistOrder = FollowedTopBarStore(state => state.playlistOrder)

    let sessionToken = localStorage.getItem("sessionToken");

    useEffect(() => {
        if (sessionToken) {
            (async () => {
                if (showing == "Playlists") {
                    const followedPlaylists = await CommunityRequests.getFollowedPlaylists(sessionToken)
                    if (playlistOrder === "Custom Order") followedPlaylists.sort()
                    else if (playlistOrder === "Order by Title") followedPlaylists.sort(comparePlaylistTitle)
                    else if (playlistOrder === "Order by Items Amount") followedPlaylists.sort(comparePlaylistResultsAmount)
                    else if (playlistOrder === "Order by Weekly Views") followedPlaylists.sort(comparePlaylistWeeklyViews)
                    else if (playlistOrder === "Order by Total Views") followedPlaylists.sort(comparePlaylistTotalViews)
                    setFollowedResults(followedPlaylists)
                } else if (showing == "Users") {
                    const followedUsers = await CommunityRequests.getFollowedUsers(sessionToken);
                    if (userOrder === "Custom Order") followedUsers.sort()
                    else if (userOrder === "Order by Username") followedUsers.sort(compareUsername)
                    else if (userOrder === "Order by Weekly Views") followedUsers.sort(compareUserWeeklyViews)
                    else if (userOrder === "Order by Total Views") followedUsers.sort(compareUserTotalViews)
                    else if (userOrder === "Order by Playlists Amount") followedUsers.sort(compareUserPlaylistAmount)
                    setFollowedResults(followedUsers)
                }
            })()
        } else {
            prettyAlert("You must be logged in to view this page.", false)
        }
    }, [showing]);

    useEffect(() => {

        if (toggledFollowResponse) {
            if (sessionToken) {
                (async () => {
                    if (showing == "Playlists") {
                        const followedPlaylists = await CommunityRequests.getFollowedPlaylists(sessionToken)
                        if (playlistOrder === "Custom Order") followedPlaylists.sort()
                        else if (playlistOrder === "Order by Title") followedPlaylists.sort(comparePlaylistTitle)
                        else if (playlistOrder === "Order by Items Amount") followedPlaylists.sort(comparePlaylistResultsAmount)
                        else if (playlistOrder === "Order by Weekly Views") followedPlaylists.sort(comparePlaylistWeeklyViews)
                        else if (playlistOrder === "Order by Total Views") followedPlaylists.sort(comparePlaylistTotalViews)
                        setFollowedResults(followedPlaylists)
                    } else if (showing == "Users") {
                        const followedUsers = await CommunityRequests.getFollowedUsers(sessionToken);
                        if (userOrder === "Custom Order") followedUsers.sort()
                        else if (userOrder === "Order by Username") followedUsers.sort(compareUsername)
                        else if (userOrder === "Order by Weekly Views") followedUsers.sort(compareUserWeeklyViews)
                        else if (userOrder === "Order by Total Views") followedUsers.sort(compareUserTotalViews)
                        else if (userOrder === "Order by Playlists Amount") followedUsers.sort(compareUserPlaylistAmount)
                        setFollowedResults(followedUsers)
                    }
                })()
            } else {
                prettyAlert("You must be logged in to view this page.", false)
            }

        }
    }, [toggledFollowResponse]);

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

    function resultsArePlaylists() {
        return (followedResults![0] as PlaylistDto).owner != null
    }

    function resultsAreUsers() {
        return (followedResults![0] as UserProfileDto).username != null
    }


    function handleDragPlaylistEnd(event: DragEndEvent) {
        const {active, over} = event;

        if (active.id !== over?.id) {

            if (sessionToken) {
                try {
                    const oldIndex = (followedResults as PlaylistDto[]).findIndex((item) => item.id === active.id);
                    const newIndex = (followedResults as PlaylistDto[]).findIndex((item) => item.id === over?.id);
                    CommunityRequests.sortPlaylistFollow((followedResults as PlaylistDto[])[oldIndex].id!, newIndex, sessionToken).then(
                        (response) => {
                            prettyAlert(response, true)
                        }
                    )
                    setFollowedResults(arrayMove((followedResults as PlaylistDto[]), oldIndex, newIndex));
                } catch (e: any) {
                    prettyAlert(e.response.data, false)
                }
            } else prettyAlert("User needs to be logged in to sort playlists", false)

        }
    }

    function handleDragUserEnd(event: DragEndEvent) {
        const {active, over} = event;

        if (active.id !== over?.id) {

            if (sessionToken) {
                try {
                    const oldIndex = (followedResults as UserProfileDto[]).findIndex((item) => item.username === active.id);
                    const newIndex = (followedResults as UserProfileDto[]).findIndex((item) => item.username === over?.id);
                    CommunityRequests.sortUserFollow((followedResults as UserProfileDto[])[oldIndex].username!, newIndex, sessionToken).then(
                        (response) => {
                            prettyAlert(response, true)
                        }
                    )
                    setFollowedResults(arrayMove((followedResults as UserProfileDto[]), oldIndex, newIndex));
                } catch (e: any) {
                    prettyAlert(e.response.data, false)
                }
            } else prettyAlert("User needs to be logged in to sort playlists", false)

        }
    }

    let followedList;
    if (followedResults?.length === 0) {
        followedList = <p>No results.</p>;
    } else {

        // This runs when the top bar changes but the results according to the top bar are haven't yet been updated
        // As such a bug would occur, if the user changed from the users option to the playlist option, the code bellow
        // would try to render a playlist component, but would use the previous results that contain users

        if (followedResults && showing === "Playlists" && resultsArePlaylists()) {

            if (playlistOrder === "Custom Order") {
                followedList = <DndContext
                    sensors={sensors}
                    collisionDetection={closestCenter}
                    onDragEnd={handleDragPlaylistEnd}
                    modifiers={[restrictToWindowEdges]}
                >
                    <SortableContext
                        items={followedResults.map(followedResult => (followedResult as PlaylistDto).id)}
                        strategy={rectSortingStrategy}
                    >

                        {followedResults.map((playlist) => (
                            <PlaylistItem key={(playlist as PlaylistDto).id} basicDetails={playlist as PlaylistDto}
                                          showingMyPlaylists={false}
                                          showingPlaylistInSearch={true}
                                          draggable={true}/>
                        ))}

                    </SortableContext>
                </DndContext>
            } else {
                followedList = followedResults.map((playlist) => (
                    <PlaylistItem basicDetails={playlist as PlaylistDto} showingMyPlaylists={false}
                                  showingPlaylistInSearch={true}
                                  draggable={false}/>
                ))

            }


        } else if (followedResults && showing === "Users" && resultsAreUsers()) {

            if (userOrder === "Custom Order") {
                followedList = <DndContext
                    sensors={sensors}
                    collisionDetection={closestCenter}
                    onDragEnd={handleDragUserEnd}
                    modifiers={[restrictToWindowEdges]}
                >
                    <SortableContext
                        items={followedResults.map(followedResult => (followedResult as UserProfileDto).username)}
                        strategy={rectSortingStrategy}
                    >

                        {followedResults.map((user) => (
                            <UserItem key={(user as UserProfileDto).username} basicDetails={user as UserProfileDto}
                                      draggable={true}/>
                        ))}

                    </SortableContext>
                </DndContext>
            } else {
                followedList = followedResults.map((user) => (
                    <UserItem basicDetails={user as UserProfileDto} draggable={false}/>
                ))
            }

        }
    }


    return (

        <div>

            <UserPlaylistsModal/>

            <div className="results">
                <div className="row">

                    {followedList}

                </div>
            </div>
        </div>

    )

}

export default FollowedList;
