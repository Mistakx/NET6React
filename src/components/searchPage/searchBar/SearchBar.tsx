import React, {useEffect, useState} from 'react';
import '../../../styles/style.css'
import SearchForm from "./SearchForm";
import {SearchBarProperties} from "../../../models/components/searchBar/SearchBarProperties";
import SelectedSearchStore from "../../../stores/SelectedSearchStore";
import SearchLabel from "./SearchLabel";
import SearchedListStore from "../../../stores/SearchedListStore";
import PlatformDropdownButton from "./PlatformDropdownButton";
import PlatformDropdownList from "./PlatformDropdownList";
import PlatformDropdownStore from "../../../stores/PlatformDropdownStore";
import {
    GenericResult,
} from "../../../models/apiRequests/GenericResults";

function SearchBar(props: SearchBarProperties): JSX.Element {

    const openedDropdown = "dropdown-menu dropdown-menu-dark align-items-center bg-dark show"
    const closedDropdown = "dropdown-menu dropdown-menu-dark align-items-center bg-dark"

    const selectedSearch = SelectedSearchStore(state => state.selectedSearch)
    const searchBarQuery = SelectedSearchStore(state => state.searchBarQuery)

    const platformDropdownList = PlatformDropdownStore(state => state.platformDropdownList)
    const setPlatformDropdownList = PlatformDropdownStore(state => state.setPlatformDropdownList)

    const setSearchedResults = SearchedListStore(state => state.setSearchedResults)

    useEffect(() => {
        setPlatformDropdownList(closedDropdown)
    },[])

    function togglePlatformDropdownList() {
        if (platformDropdownList === closedDropdown) {
            setPlatformDropdownList(openedDropdown)
        } else {
            setPlatformDropdownList(closedDropdown)
        }
    }

    async function searchPlatformItems(chosenSearchQuery: string) {

        let searchList: GenericResult[] = [];

        if (selectedSearch.getPlatform().getName() === "Spotify") {
            searchList = await selectedSearch.getSearchResults(chosenSearchQuery, 1, 40, props.spotifyAuthenticator.current)
        } else if (selectedSearch.getPlatform().getName() === "Twitch") {
            searchList = await selectedSearch.getSearchResults(chosenSearchQuery, 1, 40, props.twitchAuthenticator.current)
        } else {
            searchList = await selectedSearch.getSearchResults(chosenSearchQuery, 1, 40)
        }
        return searchList

    }

    return (

        <div className="form-wrapper">

            <SearchLabel/>

            <form onSubmit={async (event) => {
                event.preventDefault()
                setSearchedResults(await searchPlatformItems(searchBarQuery));
            }}>

                <div className="input-group">

                    <PlatformDropdownButton togglePlatformDropdownList={togglePlatformDropdownList}/>

                    <PlatformDropdownList togglePlatformDropdownList={togglePlatformDropdownList}/>

                    <SearchForm spotifyAuthenticator={props.spotifyAuthenticator}
                                twitchAuthenticator={props.twitchAuthenticator}
                    />

                </div>
            </form>

        </div>

    )
}

export default SearchBar;
