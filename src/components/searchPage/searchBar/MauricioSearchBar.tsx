import React, {useState} from 'react';
import '../../../styles/style.css'
import MauricioSearchForm from "./MauricioSearchForm";
import {SearchBarProperties} from "../../../models/components/searchBar/SearchBarProperties";
import SelectedSearchStore from "../../../stores/SelectedSearchStore";
import SearchLabel from "./SearchLabel";
import {VimeoSearchVideoByName} from "../../../apiSearches/specificSearches/VimeoSearchVideoByName";
import {YouTubeSearchVideoByGeneral} from "../../../apiSearches/specificSearches/YouTubeSearchVideoByGeneral";
import {SpotifySearchTrackByName} from "../../../apiSearches/specificSearches/SpotifySearchTrackByName";
import {SpotifySearchTrackByAlbum} from "../../../apiSearches/specificSearches/SpotifySearchTrackByAlbum";
import {TwitchSearchClipByChannel} from "../../../apiSearches/specificSearches/TwitchSearchClipByChannel";
import {TwitchSearchClipByGame} from "../../../apiSearches/specificSearches/TwitchSearchClipByGame";
import {TwitchSearchVideoByChannel} from "../../../apiSearches/specificSearches/TwitchSearchVideoByChannel";
import {TwitchSearchVideoByGame} from "../../../apiSearches/specificSearches/TwitchSearchVideoByGame";
import {TwitchSearchLivestreamByGeneral} from "../../../apiSearches/specificSearches/TwitchSearchLivestreamByGeneral";
import {VideoSearchList} from "../../../searchLists/VideoSearchList";
import {TrackSearchList} from "../../../searchLists/TrackSearchList";
import {LivestreamSearchList} from "../../../searchLists/LivestreamSearchList";
import SearchedListStore from "../../../stores/SearchedListStore";
import PlatformDropdownButton from "./PlatformDropdownButton";
import PlatformDropdownList from "./PlatformDropdownList";
import PlatformDropdownStore from "../../../stores/PlatformDropdownStore";

function MauricioSearchBar(props: SearchBarProperties): JSX.Element {

    const openedDropdown = "dropdown-menu dropdown-menu-dark align-items-center bg-dark show"
    const closedDropdown = "dropdown-menu dropdown-menu-dark align-items-center bg-dark"

    const selectedSearch = SelectedSearchStore(state => state.selectedSearch)
    const platformDropdownList = PlatformDropdownStore(state => state.platformDropdownList)
    const setPlatformDropdownList = PlatformDropdownStore(state => state.setPlatformDropdownList)

    const [searchBarQuery, setSearchBarQuery] = useState("");
    const setSearchedList = SearchedListStore(state => state.setSearchedList)

    function togglePlatformDropdownList() {
        if (platformDropdownList === closedDropdown) {
            setPlatformDropdownList(openedDropdown)
        } else {
            setPlatformDropdownList(closedDropdown)
        }
    }

    async function searchPlatformItems(chosenSearchQuery: string) {

        let searchList: VideoSearchList | TrackSearchList | LivestreamSearchList

        if (selectedSearch.getPlatform().getName() === "Spotify") {
            searchList = await selectedSearch.getSearchList(chosenSearchQuery, 1, 40, props.spotifyAuthenticator.current)
        } else if (selectedSearch.getPlatform().getName() === "Twitch") {
            searchList = await selectedSearch.getSearchList(chosenSearchQuery, 1, 40, props.twitchAuthenticator.current)
        } else {
            searchList = await selectedSearch.getSearchList(chosenSearchQuery, 1, 40)
        }
        return searchList

    }

    return (

        <div className="form-wrapper">

            <SearchLabel/>

            <form onSubmit={async (event) => {
                event.preventDefault()
                setSearchedList(await searchPlatformItems(searchBarQuery));
            }}>

                <div className="input-group">

                    <PlatformDropdownButton togglePlatformDropdownList={togglePlatformDropdownList}/>

                    <PlatformDropdownList togglePlatformDropdownList={togglePlatformDropdownList}/>

                    <MauricioSearchForm spotifyAuthenticator={props.spotifyAuthenticator}
                                        twitchAuthenticator={props.twitchAuthenticator} searchBarQuery={searchBarQuery}
                                        setSearchBarQuery={setSearchBarQuery}/>

                </div>

            </form>

        </div>

    )
}

export default MauricioSearchBar;
