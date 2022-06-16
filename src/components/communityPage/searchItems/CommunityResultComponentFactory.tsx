import {PlaylistDto} from "../../../models/backendRequests/PlaylistRoute/PlaylistDto";
import UserPlaylistItem from "../../userPage/playlistsLists/UserPlaylistItem";
import {UserProfileResponseDto} from "../../../models/backendResponses/userRoute/UserProfileResponseDto";
import UserItem from "./UserItem";

class CommunityResultComponentFactory {

    static create(results: PlaylistDto[] | UserProfileResponseDto[]) {

        let searchResultItems: JSX.Element[] = []

        for (const currentCommunityItem of results) {

            if ("visibility" in currentCommunityItem) {
                let currentPlaylistItem = <UserPlaylistItem basicDetails={currentCommunityItem} showingMyPlaylists={false} showingPlaylistInSearch={true}/>
                searchResultItems.push(currentPlaylistItem);
            } else if ("username" in currentCommunityItem) {
                let currentUserItem = <UserItem basicDetails={currentCommunityItem}/>
                searchResultItems.push(currentUserItem);
            }

        }

        return searchResultItems

    }
}

export default CommunityResultComponentFactory;