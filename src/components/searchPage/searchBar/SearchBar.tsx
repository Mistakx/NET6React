import React, {useEffect, useState} from 'react';
import '../../../styles/style.css'
import SearchForm from "./SearchForm";
import {SearchBarProperties} from "../../../models/components/searchBar/SearchBarProperties";
import SelectedPlatformSearchStore from "../../../stores/searches/SelectedPlatformSearchStore";
import SearchLabel from "./SearchLabel";
import SearchedPlatformResultsStore from "../../../stores/searches/SearchedPlatformResultsStore";
import PlatformDropdownButton from "./PlatformDropdownButton";
import PlatformDropdownList from "./PlatformDropdownList";
import PlatformDropdownStore from "../../../stores/searches/PlatformDropdownStore";
import {
    GeneralizedResult,
} from "../../../models/apiResponses/GenericResults";
import AlertStore from "../../../stores/AlertStore";

function SearchBar(props: SearchBarProperties): JSX.Element {

    const openedDropdown = "dropdown-menu dropdown-menu-dark align-items-center bg-dark show"
    const closedDropdown = "dropdown-menu dropdown-menu-dark align-items-center bg-dark"

    const selectedSearch = SelectedPlatformSearchStore(state => state.selectedSearch)
    const searchBarQuery = SelectedPlatformSearchStore(state => state.searchBarQuery)

    const platformDropdownList = PlatformDropdownStore(state => state.platformDropdownList)
    const setPlatformDropdownList = PlatformDropdownStore(state => state.setPlatformDropdownList)

    const setSearchedResults = SearchedPlatformResultsStore(state => state.setSearchedResults)

    const prettyAlert = AlertStore(state => state.prettyAlert)

    useEffect(() => {
        setPlatformDropdownList(closedDropdown)
    }, [])


    function togglePlatformDropdownList() {
        if (platformDropdownList === closedDropdown) {
            setPlatformDropdownList(openedDropdown)
        } else {
            setPlatformDropdownList(closedDropdown)
        }
    }

    async function searchPlatformItems(chosenSearchQuery: string) {

        let searchList: GeneralizedResult[] = [];

        try {
            if (selectedSearch.getPlatform().getName() === "Spotify") {
                searchList = await selectedSearch.getSearchResults(chosenSearchQuery, 1, 40, props.spotifyAuthenticator.current)
            } else if (selectedSearch.getPlatform().getName() === "Twitch") {
                searchList = await selectedSearch.getSearchResults(chosenSearchQuery, 1, 40, props.twitchAuthenticator.current)
            } else {
                searchList = await selectedSearch.getSearchResults(chosenSearchQuery, 1, 40)
            }
            return searchList
        } catch (e: any) {
            prettyAlert(e.response?.data || e.toJSON().message, false)
        }


    }

    return (
        <div className="form-wrapper top-stick">

            <SearchLabel/>

            <form onSubmit={async (event) => {
                event.preventDefault()
                let results = await searchPlatformItems(searchBarQuery)
                if (results) {
                    setSearchedResults(results)
                }
            }}>

                <div className="input-group">

                    <PlatformDropdownButton togglePlatformDropdownList={togglePlatformDropdownList}/>

                    <PlatformDropdownList togglePlatformDropdownList={togglePlatformDropdownList}/>

                    <SearchForm spotifyAuthenticator={props.spotifyAuthenticator}
                                twitchAuthenticator={props.twitchAuthenticator}
                    />

                    <button className={"btn btn-search " + selectedSearch.getPlatform().getColorClass()} type="submit"
                            id="button-addon2"><i className='bx bx-search-alt h3'></i></button>
                </div>
            </form>

        </div>

    )
}

export default SearchBar;
