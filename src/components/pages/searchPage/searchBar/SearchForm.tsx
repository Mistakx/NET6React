import React from 'react';
import '../../../../styles/style.css'
import SelectedPlatformSearchStore from "../../../../stores/searches/SelectedPlatformSearchStore";
import {SearchFormProperties} from "../../../../models/components/pages/searchBar/SearchFormProperties";
import AlertStore from "../../../../stores/AlertStore";
import "../../../../styles/Autocomplete.css";

function SearchForm(props: SearchFormProperties): JSX.Element {

    const selectedSearch = SelectedPlatformSearchStore(state => state.selectedSearch)
    const searchBarQuery = SelectedPlatformSearchStore(state => state.searchBarQuery)
    const setSearchBarQuery = SelectedPlatformSearchStore(state => state.setSearchBarQuery)
    const setShowingRecommendations = SelectedPlatformSearchStore(state => state.setShowingRecommendations)


    const recommendations = SelectedPlatformSearchStore(state => state.recommendations)
    const setFirstRecommendationsTitles = SelectedPlatformSearchStore(state => state.setFirstRecommendationsTitles)

    return (

        <input type="text submit" id="search"
               className={"form-control " + selectedSearch.getPlatform().getColorClass()}
               autoFocus
               autoComplete={"off"}
               value={searchBarQuery}
               placeholder="I want that content..."

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

export default SearchForm;
