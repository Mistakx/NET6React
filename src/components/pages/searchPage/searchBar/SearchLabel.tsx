import React from 'react';
import '../../../../styles/style.css';
import SelectedPlatformSearchStore from "../../../../stores/searches/SelectedPlatformSearchStore";

function SearchLabel(): JSX.Element {

    const selectedSearch = SelectedPlatformSearchStore(state => state.selectedSearch)

    return (

        <h2
            className={selectedSearch.getPlatform().getColorClass()}>Search {selectedSearch.getButtonText()}
        </h2>

    )

}

export default SearchLabel;
