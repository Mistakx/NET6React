import React from 'react';
import '../../styles/style.css';
import SelectedSearchStore from "../../stores/SelectedSearchStore";

function SearchLabel(): JSX.Element {

    const selectedSearch = SelectedSearchStore(state => state.selectedSearch)

    return (

        <div className="search-header">
            <h2 id="offcanvasRightLabel" className={selectedSearch.getPlatform().getColorClass()}>Search {selectedSearch.getButtonText()} <small></small></h2>
        </div>

    )

}

export default SearchLabel;
