import React from 'react';
import '../../../../styles/style.css'
import SelectedCommunitySearchStore from "../../../../stores/searches/SelectedCommunitySearchStore";
import SelectedPlatformSearchStore from "../../../../stores/searches/SelectedPlatformSearchStore";

function CommunitySearchForm(): JSX.Element {

    const searchBarQuery = SelectedCommunitySearchStore(state => state.searchBarQuery)
    const setSearchBarQuery = SelectedCommunitySearchStore(state => state.setSearchBarQuery)
    const setShowingRecommendations = SelectedCommunitySearchStore(state => state.setShowingRecommendations)

    return (
        <input type="text submit" id="search"
               className={"form-control sparta"}
               autoFocus
               autoComplete={"off"}
               value={searchBarQuery}
               placeholder="Search..."

               onFocus={() => {
                   setShowingRecommendations(true)
               }}
               onBlur={() => {
                   // Set the timeout to hide the recommendations
                   // If immediate, the recommendations would be hidden before the user has clicked a recommendation
                   setTimeout(() => {
                       setShowingRecommendations(false)
                   }, 100)
               }}

               onChange={(event) => {
                   setSearchBarQuery(event.target.value)
               }}
        />

    )

}

export default CommunitySearchForm;
