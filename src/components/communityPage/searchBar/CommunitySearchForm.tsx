import React from 'react';
import '../../../styles/style.css'
import SelectedPlatformSearchStore from "../../../stores/searches/SelectedPlatformSearchStore";
import {SearchFormProperties} from "../../../models/components/searchBar/SearchFormProperties";
import SelectedCommunitySearchStore from "../../../stores/searches/SelectedCommunitySearchStore";

function CommunitySearchForm(): JSX.Element {

    const searchBarQuery = SelectedCommunitySearchStore(state => state.searchBarQuery)
    const setSearchBarQuery = SelectedCommunitySearchStore(state => state.setSearchBarQuery)

    return (
        <input type="text submit" id="search"
                className={"form-control blue"}
                autoFocus
                autoComplete={"off"}
                value={searchBarQuery}
                placeholder="I want that content..."

                onChange={(event) => {
                    setSearchBarQuery(event.target.value)
                }}
        />

    )

}

export default CommunitySearchForm;
