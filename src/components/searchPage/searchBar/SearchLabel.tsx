import React from 'react';
import '../../../styles/style.css';
import SelectedSearchStore from "../../../stores/SelectedSearchStore";

function SearchLabel(): JSX.Element {

    const selectedSearch = SelectedSearchStore(state => state.selectedSearch)

    return (

        <h2
            className={selectedSearch.getPlatform().getColorClass()}>Search {selectedSearch.getButtonText()}
        </h2>

    )

}

export default SearchLabel;
