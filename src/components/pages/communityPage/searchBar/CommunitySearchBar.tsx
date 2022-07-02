import React, {useEffect} from 'react';
import '../../../../styles/style.css'
import CommunitySearchForm from "./CommunitySearchForm";
import CommunityDropdownButton from "./CommunityDropdownButton";
import CommunityDropdownList from "./CommunityDropdownList";
import AlertStore from "../../../../stores/AlertStore";
import SelectedCommunitySearchStore from "../../../../stores/searches/SelectedCommunitySearchStore";
import CommunityDropdownStore from "../../../../stores/searches/CommunityDropdownStore";
import SearchedCommunityResultsStore from "../../../../stores/searches/SearchedCommunityResultsStore";
import {PlaylistDto} from "../../../../models/backendRequests/PlaylistRoute/PlaylistDto";
import {UserProfileDto} from "../../../../models/backendResponses/userRoute/UserProfileDto";
import CommunitySearchLabel from "./CommunitySearchLabel";

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

        let searchList: PlaylistDto[] | UserProfileDto[] = [];

        try {
            const sessionToken = localStorage.getItem("sessionToken")
            if (sessionToken) {

                if (selectedSearch.getButtonText() === "User") {
                    searchList = await selectedSearch.getSearchResults(chosenSearchQuery, 1, 40, sessionToken)
                } else if (selectedSearch.getButtonText() === "Playlist") {
                    searchList = await selectedSearch.getSearchResults(chosenSearchQuery, 1, 40, sessionToken)
                }
            } else prettyAlert("You need to be logged in to add a playlist.", false)
            return searchList
        } catch (e: any) {
            prettyAlert(e.response.data, false)
        }

    }

    return (
        <div className="form-wrapper position-relative">

            <CommunitySearchLabel/>

            <form onSubmit={async (event) => {
                event.preventDefault()
                let results = await searchPlatformItems(searchBarQuery)
                if (results) {
                    setSearchedResults(results)
                }
            }}>

                <div className="input-group top-stick">

                    <CommunityDropdownButton togglePlatformDropdownList={togglePlatformDropdownList}/>

                    <CommunityDropdownList togglePlatformDropdownList={togglePlatformDropdownList}/>

                    <CommunitySearchForm/>

                    <button className={"btn btn-search sparta"} type="submit"
                            id="button-addon2"><i className='bx bx-search-alt h3'></i></button>
                </div>
            </form>

        </div>

    )
}

export default CommunitySearchBar;
