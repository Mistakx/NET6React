import {PlaylistDto} from "../../../../models/backendRequests/PlaylistRoute/PlaylistDto";
import {UserProfileDto} from "../../../../models/backendResponses/userRoute/UserProfileDto";
import UserItem from "../../../cards/UserItem";
import PlaylistItem from "../../../cards/PlaylistItem";

class CommunityResultComponentFactory {

    static create(results: PlaylistDto[] | UserProfileDto[]) {

        let searchResultItems: JSX.Element[] = []

        for (const currentCommunityItem of results) {

            if ("visibility" in currentCommunityItem) {
                let currentPlaylistItem = <PlaylistItem key={currentCommunityItem.id} basicDetails={currentCommunityItem}
                                                        showingMyPlaylists={false} showingPlaylistInSearch={true}
                                                        draggable={false}/>
                searchResultItems.push(currentPlaylistItem);
            } else if ("username" in currentCommunityItem) {
                let currentUserItem = <UserItem key={currentCommunityItem.username} basicDetails={currentCommunityItem} draggable={false}/>
                searchResultItems.push(currentUserItem);
            }

        }

        return searchResultItems

    }
}

export default CommunityResultComponentFactory;