import {PlaylistDto} from "../../../models/backendRequests/PlaylistRoute/PlaylistDto";
import ProfilePlaylistItem from "../../userPage/playlistsLists/ProfilePlaylistItem";
import {UserProfileResponseDto} from "../../../models/backendResponses/userRoute/UserProfileResponseDto";
import UserItem from "./UserItem";

class CommunityResultComponentFactory {

    static create(results: PlaylistDto[] | UserProfileResponseDto[]) {

        let searchResultItems: JSX.Element[] = []

        for (const currentCommunityItem of results) {

            if ("visibility" in currentCommunityItem) {
                let currentPlaylistItem = <ProfilePlaylistItem basicDetails={currentCommunityItem} showingMyPlaylists={false}/>
                searchResultItems.push(currentPlaylistItem);
            } else {
                let currentUserItem = <UserItem basicDetails={currentCommunityItem}/>
                searchResultItems.push(currentUserItem);
            }

        }

        return searchResultItems

    }
}

export default CommunityResultComponentFactory;