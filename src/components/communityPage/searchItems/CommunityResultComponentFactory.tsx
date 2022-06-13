import {PlaylistBasicDetails} from "../../../models/backendRequests/PlaylistRoute/PlaylistBasicDetails";
import ProfilePlaylistItem from "../../profilePage/playlistsLists/ProfilePlaylistItem";
import {UserProfile} from "../../../models/backendRequests/UserRoute/UserProfile";

class CommunityResultComponentFactory {

    static create(results: PlaylistBasicDetails[] | UserProfile[]) {

        let searchResultItems: JSX.Element[] = []

        for (const currentCommunityItem of results) {

            if ("visibility" in currentCommunityItem) {
                    let currentVideoItem = <ProfilePlaylistItem basicDetails={currentCommunityItem}/>
                    searchResultItems.push(currentVideoItem);
                    break;
            }
            else {

            }

        }

        return searchResultItems

    }
}

export default CommunityResultComponentFactory;