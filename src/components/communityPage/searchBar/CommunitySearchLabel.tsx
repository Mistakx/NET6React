import React from 'react';
import '../../../styles/style.css';
import SelectedCommunitySearchStore from "../../../stores/searches/SelectedCommunitySearchStore";

function CommunitySearchLabel(): JSX.Element {

    const selectedSearch = SelectedCommunitySearchStore(state => state.selectedCommunitySearch)

    return (

        <h2
            className="sparta">Search {selectedSearch.getButtonText()}
        </h2>

    )

}

export default CommunitySearchLabel;
