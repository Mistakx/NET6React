import React, {useEffect} from 'react';
import '../../../../styles/style.css'
import SearchForm from "./SearchForm";
import {SearchBarProperties} from "../../../../models/components/pages/searchBar/SearchBarProperties";
import SelectedPlatformSearchStore from "../../../../stores/searches/SelectedPlatformSearchStore";
import SearchedPlatformResultsStore from "../../../../stores/searches/SearchedPlatformResultsStore";
import PlatformDropdownButton from "./PlatformDropdownButton";
import PlatformDropdownList from "./PlatformDropdownList";
import PlatformDropdownStore from "../../../../stores/searches/PlatformDropdownStore";
import {
    GeneralizedResult,
} from "../../../../models/apiResponses/GenericResults";
import AlertStore from "../../../../stores/AlertStore";
import SearchLabel from "./SearchLabel";

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

        let searchList: GeneralizedResult[];
        
            if (selectedSearch.getPlatform().getName() === "Spotify") {
                searchList = await selectedSearch.getSearchResults(chosenSearchQuery, 1, 40, props.spotifyAuthenticator.current)
            } else if (selectedSearch.getPlatform().getName() === "Twitch") {
                searchList = await selectedSearch.getSearchResults(chosenSearchQuery, 1, 40, props.twitchAuthenticator.current)
            } else {
                searchList = await selectedSearch.getSearchResults(chosenSearchQuery, 1, 40)
            }
            return searchList;

    }

    return (
        <div className="form-wrapper">

            <SearchLabel/>

            <form onSubmit={async (event) => {
                try {
                    event.preventDefault()
                    console.log("Mistakx")
                    let results = await searchPlatformItems(searchBarQuery)
                    setSearchedResults(results)
                    console.log(results)
                    console.log("Mistakx END")

                } catch (e: any) {
                    console.log(e.response?.data.message)
                    console.log(e.response?.data.error?.message)
                    console.log(e.response?.data.error)
                    console.log(e.toJSON().message)
                    prettyAlert("Error occurred on search", false)
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
