import React from 'react';
import '../../../styles/style.css'
import SelectedSearchStore from "../../../stores/SelectedSearchStore";
import {PlatformDropdownButtonProperties} from "../../../models/components/searchBar/PlatformDropdownButtonProperties";

function PlatformDropdownButton(props: PlatformDropdownButtonProperties): JSX.Element {

    const selectedSearch = SelectedSearchStore(state => state.selectedSearch)

    return (

        <button className={"btn dropdown-toggle " + selectedSearch.getPlatform().getDropdownButtonClass()}
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
