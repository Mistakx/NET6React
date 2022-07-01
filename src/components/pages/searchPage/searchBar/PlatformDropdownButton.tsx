import React from 'react';
import '../../../../styles/style.css'
import SelectedPlatformSearchStore from "../../../../stores/searches/SelectedPlatformSearchStore";
import {PlatformDropdownButtonProperties} from "../../../../models/components/pages/searchBar/PlatformDropdownButtonProperties";

function PlatformDropdownButton(props: PlatformDropdownButtonProperties): JSX.Element {

    const selectedSearch = SelectedPlatformSearchStore(state => state.selectedSearch)

    return (

        <button className={"btn btn-icon dropdown-toggle " + selectedSearch.getPlatform().getDropdownButtonClass()}
                id="choose"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false" onClick={() => {
            props.togglePlatformDropdownList()
        }}>{selectedSearch.getPlatform().getDropdownButtonIcon()}

        </button>


    )
}

export default PlatformDropdownButton;
