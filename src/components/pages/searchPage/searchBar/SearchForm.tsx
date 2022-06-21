import React from 'react';
import '../../../../styles/style.css'
import SelectedPlatformSearchStore from "../../../../stores/searches/SelectedPlatformSearchStore";
import {SearchFormProperties} from "../../../../models/components/pages/searchBar/SearchFormProperties";

function SearchForm(props: SearchFormProperties): JSX.Element {

    const selectedSearch = SelectedPlatformSearchStore(state => state.selectedSearch)
    const searchBarQuery = SelectedPlatformSearchStore(state => state.searchBarQuery)
    const setSearchBarQuery = SelectedPlatformSearchStore(state => state.setSearchBarQuery)

    return (
        <input type="text submit" id="search"
                className={"form-control " + selectedSearch.getPlatform().getColorClass()}
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

export default SearchForm;
