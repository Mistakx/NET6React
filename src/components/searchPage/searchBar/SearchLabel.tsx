import React from 'react';
import '../../../styles/style.css';
import SelectedSearchStore from "../../../stores/SelectedSearchStore";

function SearchLabel(): JSX.Element {

    const selectedSearch = SelectedSearchStore(state => state.selectedSearch)

    return (

        <h2 id="offcanvasRightLabel"
            className={selectedSearch.getPlatform().getColorClass()}>Search {selectedSearch.getButtonText()}
            <small></small></h2>

    )

}

export default SearchLabel;
