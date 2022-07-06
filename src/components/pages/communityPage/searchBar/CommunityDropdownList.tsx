import React from 'react';
import '../../../../styles/style.css'
import {PlatformDropdownListProperties} from "../../../../models/components/pages/searchBar/PlatformDropdownListProperties";
import SelectedCommunitySearchStore from "../../../../stores/searches/SelectedCommunitySearchStore";
import CommunityDropdownStore from "../../../../stores/searches/CommunityDropdownStore";
import {UserRequest} from "../../../../requests/backendRequests/communitySearchBar/UserRequest";
import {PlaylistRequest} from "../../../../requests/backendRequests/communitySearchBar/PlaylistRequest";

function CommunityDropdownList(props: PlatformDropdownListProperties): JSX.Element {

    const setSelectedSearch = SelectedCommunitySearchStore(state => state.setSelectedCommunitySearch)
    const platformDropdownList = CommunityDropdownStore(state => state.communityDropdownList)

    return (

        <ul className={platformDropdownList}>

            {/*User*/}
            <li>
                <div className="dropdown-item text-center text-white h5 btn-sparta"

                     onClick={(e) => {
                         props.togglePlatformDropdownList()
                         e.preventDefault()
                         setSelectedSearch(UserRequest.getInstance())
                     }}>
                
                    User
                </div>
            </li>

            <li>
                <div className="dropdown-item text-center text-white h5 btn-sparta"

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
