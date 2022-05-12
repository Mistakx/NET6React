import React from 'react';
import '../../../styles/style.css'
import SelectedSearchStore from "../../../stores/SelectedSearchStore";
import {SearchFormProperties} from "../../../models/components/searchBar/SearchFormProperties";

function SearchForm(props: SearchFormProperties): JSX.Element {

    const selectedSearch = SelectedSearchStore(state => state.selectedSearch)
    const searchBarQuery = SelectedSearchStore(state => state.searchBarQuery)
    const setSearchBarQuery = SelectedSearchStore(state => state.setSearchBarQuery)

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
