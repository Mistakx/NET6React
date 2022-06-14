import {PlaylistBasicDetails} from "../../../models/backendRequests/PlaylistRoute/PlaylistBasicDetails";
import ProfilePlaylistItem from "../../userPage/playlistsLists/ProfilePlaylistItem";
import {UserProfileResponseDto} from "../../../models/backendResponses/userRoute/UserProfileResponseDto";
import UserItem from "./UserItem";

class CommunityResultComponentFactory {

    static create(results: PlaylistBasicDetails[] | UserProfileResponseDto[]) {

        let searchResultItems: JSX.Element[] = []

        for (const currentCommunityItem of results) {

            if ("visibility" in currentCommunityItem) {
                let currentPlaylistItem = <ProfilePlaylistItem basicDetails={currentCommunityItem}/>
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