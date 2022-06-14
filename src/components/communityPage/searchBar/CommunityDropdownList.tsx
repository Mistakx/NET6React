import React from 'react';
import '../../../styles/style.css'
import SelectedPlatformSearchStore from "../../../stores/searches/SelectedPlatformSearchStore";
import {VimeoSearchVideoByName} from "../../../requests/apiRequests/specificSearches/VimeoSearchVideoByName";
import {YouTubeSearchVideoByGeneral} from "../../../requests/apiRequests/specificSearches/YouTubeSearchVideoByGeneral";
import {SpotifySearchTrackByName} from "../../../requests/apiRequests/specificSearches/SpotifySearchTrackByName";
import {SpotifySearchTrackByAlbum} from "../../../requests/apiRequests/specificSearches/SpotifySearchTrackByAlbum";
import {TwitchSearchClipByChannel} from "../../../requests/apiRequests/specificSearches/TwitchSearchClipByChannel";
import {TwitchSearchClipByGame} from "../../../requests/apiRequests/specificSearches/TwitchSearchClipByGame";
import {TwitchSearchVideoByChannel} from "../../../requests/apiRequests/specificSearches/TwitchSearchVideoByChannel";
import {TwitchSearchVideoByGame} from "../../../requests/apiRequests/specificSearches/TwitchSearchVideoByGame";
import {
    TwitchSearchLivestreamByGeneral
} from "../../../requests/apiRequests/specificSearches/TwitchSearchLivestreamByGeneral";
import {PlatformDropdownListProperties} from "../../../models/components/searchBar/PlatformDropdownListProperties";
import PlatformDropdownStore from "../../../stores/searches/PlatformDropdownStore";
import SelectedCommunitySearchStore from "../../../stores/searches/SelectedCommunitySearchStore";
import CommunityDropdownStore from "../../../stores/searches/CommunityDropdownStore";
import {UserRequest} from "../../../requests/backendRequests/communitySearchBar/UserRequest";
import {PlaylistRequest} from "../../../requests/backendRequests/communitySearchBar/PlaylistRequest";

function CommunityDropdownList(props: PlatformDropdownListProperties): JSX.Element {

    const setSelectedSearch = SelectedCommunitySearchStore(state => state.setSelectedCommunitySearch)
    const platformDropdownList = CommunityDropdownStore(state => state.communityDropdownList)

    return (

        <ul className={platformDropdownList}>

            {/*User*/}
            <li>
                <div className="dropdown-item text-center text-white h3 btn-sparta"

                     onClick={(e) => {
                         props.togglePlatformDropdownList()
                         e.preventDefault()
                         setSelectedSearch(UserRequest.getInstance())
                     }}>
                    User
                </div>
            </li>

            <li>
                <div className="dropdown-item text-center text-white h3 btn-sparta"

                     onClick={(e) => {
                         props.togglePlatformDropdownList()
                         e.preventDefault()
                         setSelectedSearch(PlaylistRequest.getInstance())
                     }}>
                    Playlist
                </div>
            </li>


        </ul>

    )
}

export default CommunityDropdownList;
