import {PlaylistDto} from "../../models/backendRequests/PlaylistRoute/PlaylistDto";
import {UserProfileDto} from "../../models/backendResponses/userRoute/UserProfileDto";
import React from "react";

export default function toggleFollowingPlaylistButton(playlist: PlaylistDto,
                                                      followingButtonShapeClass: string | undefined,
                                                      setFollowingButtonShapeClass: React.Dispatch<React.SetStateAction<string | undefined>>,
                                                      searchedCommunityResults: UserProfileDto[] | PlaylistDto[] | null,
                                                      setSearchedCommunityResults: (searchedCommunityResults: (UserProfileDto[] | PlaylistDto[])) => void) {

    if (followingButtonShapeClass === "bxs-heart") {
        setFollowingButtonShapeClass("bx-heart")
    } else if (followingButtonShapeClass === "bx-heart") {
        setFollowingButtonShapeClass("bxs-heart")
    }

    let updatedSearchedCommunityResults: PlaylistDto[] = []

    for (let searchedCommunityResult of searchedCommunityResults as PlaylistDto[]) {
        if (searchedCommunityResult.id === playlist.id) {
            let updatedCommunityResult: PlaylistDto = {
                ...searchedCommunityResult, followed: !searchedCommunityResult.followed
            }
            updatedSearchedCommunityResults.push(updatedCommunityResult)
        } else {
            updatedSearchedCommunityResults.push(searchedCommunityResult)
        }
    }
    setSearchedCommunityResults(updatedSearchedCommunityResults)

}