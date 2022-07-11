import React from 'react';
import '../../../../styles/style.css'
import SelectedCommunitySearchStore from "../../../../stores/searches/SelectedCommunitySearchStore";
import SelectedPlatformSearchStore from "../../../../stores/searches/SelectedPlatformSearchStore";

function CommunitySearchForm(): JSX.Element {

    const searchBarQuery = SelectedCommunitySearchStore(state => state.searchBarQuery)
    const setSearchBarQuery = SelectedCommunitySearchStore(state => state.setSearchBarQuery)

    return (
        <input type="text submit" id="search"
               className={"form-control sparta"}
               autoFocus
               autoComplete={"off"}
               value={searchBarQuery}
               placeholder="Search..."

               onChange={(event) => {
                   setSearchBarQuery(event.target.value)
               }}
        />

    )

}

export default CommunitySearchForm;
