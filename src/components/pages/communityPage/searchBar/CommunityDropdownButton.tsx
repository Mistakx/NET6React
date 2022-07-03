import React from 'react';
import '../../../../styles/style.css'
import SelectedPlatformSearchStore from "../../../../stores/searches/SelectedPlatformSearchStore";
import {PlatformDropdownButtonProperties} from "../../../../models/components/pages/searchBar/PlatformDropdownButtonProperties";
import SelectedCommunitySearchStore from "../../../../stores/searches/SelectedCommunitySearchStore";

function CommunityDropdownButton(props: PlatformDropdownButtonProperties): JSX.Element {

    const selectedSearch = SelectedCommunitySearchStore(state => state.selectedCommunitySearch)

    return (

        <button className={"btn dropdown-toggle btn-sparta"}
                id="choose"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false" onClick={() => {
            props.togglePlatformDropdownList()
        }}>{
            <i className='h5' style={{"fontStyle":"normal"}}>{selectedSearch.getButtonText()}</i>
        }

        </button>


    )
}

export default CommunityDropdownButton;
