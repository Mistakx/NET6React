import React, {useEffect} from 'react';
import '../../../../styles/style.css'
import SelectedPlatformSearchStore from "../../../../stores/searches/SelectedPlatformSearchStore";
import {SearchFormProperties} from "../../../../models/components/pages/searchBar/SearchFormProperties";
import AlertStore from "../../../../stores/AlertStore";
import "../../../../styles/Autocomplete.css";

function SearchForm(props: SearchFormProperties): JSX.Element {

    const selectedSearch = SelectedPlatformSearchStore(state => state.selectedSearch)
    const searchBarQuery = SelectedPlatformSearchStore(state => state.searchBarQuery)
    const setSearchBarQuery = SelectedPlatformSearchStore(state => state.setSearchBarQuery)

    const prettyAlert = AlertStore(state => state.prettyAlert)

    const recommendations = SelectedPlatformSearchStore(state => state.recommendations)
    const setFirstRecommendationsTitles = SelectedPlatformSearchStore(state => state.setFirstRecommendationsTitles)


    function onChangeHandler(event: React.ChangeEvent<HTMLInputElement>) {
        setSearchBarQuery(event.target.value)

        const recommendationsTitles = recommendations.map(recommendation => recommendation.title)

        if (recommendationsTitles.length > 0) {
            let allMatches = recommendationsTitles.filter(title => title.toLowerCase().includes(event.target.value.toLowerCase()))
            setFirstRecommendationsTitles(allMatches.slice(0, 5))
        }

    }

    return (

        <input type="text submit" id="search"
               className={"form-control " + selectedSearch.getPlatform().getColorClass()}
            // style={{"width": "100%"}}
               autoFocus
               autoComplete={"off"}
               value={searchBarQuery}
               placeholder="I want that content..."

               onChange={(event) => {
                   onChangeHandler(event)
               }}
        />

    )

}

export default SearchForm;
