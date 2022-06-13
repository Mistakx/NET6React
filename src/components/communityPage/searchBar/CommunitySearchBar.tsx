import React, {useEffect} from 'react';
import '../../../styles/style.css'
import CommunitySearchForm from "./CommunitySearchForm";
import SearchLabel from "./SearchLabel";
import PlatformDropdownButton from "./PlatformDropdownButton";
import PlatformDropdownList from "./PlatformDropdownList";
import AlertStore from "../../../stores/AlertStore";
import SelectedCommunitySearchStore from "../../../stores/searches/SelectedCommunitySearchStore";
import CommunityDropdownStore from "../../../stores/searches/CommunityDropdownStore";
import SearchedCommunityResultsStore from "../../../stores/searches/SearchedCommunityResultsStore";
import {PlaylistBasicDetails} from "../../../models/backendRequests/PlaylistRoute/PlaylistBasicDetails";
import {UserProfile} from "../../../models/backendRequests/UserRoute/UserProfile";

function CommunitySearchBar(): JSX.Element {

    const openedDropdown = "dropdown-menu dropdown-menu-dark align-items-center bg-dark show"
    const closedDropdown = "dropdown-menu dropdown-menu-dark align-items-center bg-dark"

    const selectedSearch = SelectedCommunitySearchStore(state => state.selectedCommunitySearch)
    const searchBarQuery = SelectedCommunitySearchStore(state => state.searchBarQuery)

    const platformDropdownList = CommunityDropdownStore(state => state.communityDropdownList)
    const setPlatformDropdownList = CommunityDropdownStore(state => state.setCommunityDropdownList)

    const setSearchedResults = SearchedCommunityResultsStore(state => state.setSearchedCommunityResults)

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

        let searchList: PlaylistBasicDetails[] | UserProfile[] = [];

        try {
            if (selectedSearch.getButtonText() === "User") {
                searchList = await selectedSearch.getSearchResults(chosenSearchQuery)
            } else if (selectedSearch.getButtonText() === "Playlist") {
                const sessionToken = window.sessionStorage.getItem("sessionToken")
                if (sessionToken) {
                    searchList = await selectedSearch.getSearchResults(chosenSearchQuery, sessionToken)
                } else prettyAlert("You need to be logged in to add a playlist.", false)
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

                    <CommunitySearchForm/>

                    <button className={"btn btn-search blue"} type="submit"
                            id="button-addon2"><i className='bx bx-search-alt h3'></i></button>
                </div>
            </form>

        </div>

    )
}

export default CommunitySearchBar;
