import React, {useState} from 'react';
import '../../styles/style.css'
import MauricioSearchForm from "./MauricioSearchForm";
import {SearchBarProperties} from "../../models/components/searchBar/SearchBarProperties";
import SelectedSearchStore from "../../stores/SelectedSearchStore";
import SearchLabel from "./SearchLabel";
import {VimeoSearchVideoByName} from "../../apiSearches/specificSearches/VimeoSearchVideoByName";
import {YouTubeSearchVideoByGeneral} from "../../apiSearches/specificSearches/YouTubeSearchVideoByGeneral";
import {SpotifySearchTrackByName} from "../../apiSearches/specificSearches/SpotifySearchTrackByName";
import {SpotifySearchTrackByAlbum} from "../../apiSearches/specificSearches/SpotifySearchTrackByAlbum";
import {TwitchSearchClipByChannel} from "../../apiSearches/specificSearches/TwitchSearchClipByChannel";
import {TwitchSearchClipByGame} from "../../apiSearches/specificSearches/TwitchSearchClipByGame";
import {TwitchSearchVideoByChannel} from "../../apiSearches/specificSearches/TwitchSearchVideoByChannel";
import {TwitchSearchVideoByGame} from "../../apiSearches/specificSearches/TwitchSearchVideoByGame";
import {TwitchSearchLivestreamByGeneral} from "../../apiSearches/specificSearches/TwitchSearchLivestreamByGeneral";
import {VideoSearchList} from "../../searchLists/VideoSearchList";
import {TrackSearchList} from "../../searchLists/TrackSearchList";
import {LivestreamSearchList} from "../../searchLists/LivestreamSearchList";
import SearchedListStore from "../../stores/SearchedListStore";

function MauricioSearchBar(props: SearchBarProperties): JSX.Element {

    const openedDropdown = "dropdown-menu dropdown-menu-dark align-items-center bg-dark show"
    const closedDropdown = "dropdown-menu dropdown-menu-dark align-items-center bg-dark"

    const selectedSearch = SelectedSearchStore(state => state.selectedSearch)
    const setSelectedSearch = SelectedSearchStore(state => state.setSelectedSearch)
    const [dropdown, setDropdown] = React.useState(closedDropdown)

    const [searchBarQuery, setSearchBarQuery] = useState("");
    const setSearchedList = SearchedListStore(state => state.setSearchedList)

    function dropdownToggle() {
        if (dropdown === closedDropdown) {
            setDropdown(openedDropdown)
        } else {
            setDropdown(closedDropdown)
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

                    <button className={"btn dropdown-toggle " + selectedSearch.getPlatform().getDropdownButtonClass()}
                            id="choose"
                            type="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false" onClick={() => {
                        dropdownToggle()
                    }}>{selectedSearch.getPlatform().getDropdownButtonIcon()}

                    </button>

                    <ul className={dropdown}>

                        <li>
                            <div className="dropdown-item text-center text-white h3 bg-success"
                                 id="platform"
                                 data-id="spotify"><i className='bx bxl-spotify' onClick={(e) => {
                                dropdownToggle()
                                e.preventDefault()
                                setSelectedSearch(SpotifySearchTrackByName.getInstance())
                            }}></i></div>
                        </li>

                        <li>
                            <div className="dropdown-item text-center text-white h3 bg-success"
                                 id="platform"
                                 data-id="spotify" onClick={(e) => {
                                dropdownToggle()
                                e.preventDefault()
                                setSelectedSearch(SpotifySearchTrackByAlbum.getInstance())
                            }}><i className='bx bxl-spotify'></i></div>
                        </li>

                        <li>
                            <div className="dropdown-item text-center text-white h3 bg-danger"
                                 id="platform"
                                 data-id="youtube" onClick={(e) => {
                                dropdownToggle()
                                e.preventDefault()
                                setSelectedSearch(YouTubeSearchVideoByGeneral.getInstance())
                            }}><i className='bx bxl-youtube'></i></div>
                        </li>

                        <li>
                            <div className="dropdown-item text-center text-white h3 bg-twitch"
                                 id="platform"
                                 data-id="twitch" onClick={(e) => {
                                dropdownToggle()
                                e.preventDefault()
                                setSelectedSearch(TwitchSearchClipByChannel.getInstance())
                            }}><i className='bx bxl-twitch'></i></div>
                        </li>

                        <li>
                            <div className="dropdown-item text-center text-white h3 bg-twitch"
                                 id="platform"
                                 data-id="twitch" onClick={(e) => {
                                dropdownToggle()
                                e.preventDefault()
                                setSelectedSearch(TwitchSearchClipByGame.getInstance())
                            }}><i className='bx bxl-twitch'></i></div>
                        </li>

                        <li>
                            <div className="dropdown-item text-center text-white h3 bg-twitch"
                                 id="platform"
                                 data-id="twitch" onClick={(e) => {
                                dropdownToggle()
                                e.preventDefault()
                                setSelectedSearch(TwitchSearchVideoByChannel.getInstance())
                            }}><i className='bx bxl-twitch'></i></div>
                        </li>

                        <li>
                            <div className="dropdown-item text-center text-white h3 bg-twitch"
                                 id="platform"
                                 data-id="twitch" onClick={(e) => {
                                dropdownToggle()
                                e.preventDefault()
                                setSelectedSearch(TwitchSearchVideoByGame.getInstance())
                            }}><i className='bx bxl-twitch'></i></div>
                        </li>

                        <li>
                            <div className="dropdown-item text-center text-white h3 bg-twitch"
                                 id="platform"
                                 data-id="twitch" onClick={(e) => {
                                dropdownToggle()
                                e.preventDefault()
                                setSelectedSearch(TwitchSearchLivestreamByGeneral.getInstance())
                            }}><i className='bx bxl-twitch'></i></div>
                        </li>

                        <li>
                            <div className="dropdown-item text-center text-white h3 bg-info" id="platform"
                                 data-id="vimeo" onClick={() => {
                                setSelectedSearch(VimeoSearchVideoByName.getInstance())
                            }}><i className='bx bxl-vimeo'></i></div>
                        </li>
                    </ul>

                    <MauricioSearchForm spotifyAuthenticator={props.spotifyAuthenticator}
                                        twitchAuthenticator={props.twitchAuthenticator} searchBarQuery={searchBarQuery}
                                        setSearchBarQuery={setSearchBarQuery}/>

                </div>

            </form>

        </div>

    )
}

export default MauricioSearchBar;
