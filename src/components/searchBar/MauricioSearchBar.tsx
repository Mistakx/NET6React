import React from 'react';
import '../../styles/style.css'
import MauricioSearchForm from "./MauricioSearchForm";
import {SearchBarProperties} from "../../models/components/searchBar/SearchBarProperties";
import SelectedSearchStore from "../../stores/SelectedSearchStore";
import SearchedListStore from "../../stores/SearchedListStore";
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

function MauricioSearchBar(props: SearchBarProperties): JSX.Element {

    const openedDropdown = "dropdown-menu dropdown-menu-dark align-items-center bg-dark show"
    const closedDropdown = "dropdown-menu dropdown-menu-dark align-items-center bg-dark"

    const selectedSearch = SelectedSearchStore(state => state.selectedSearch)
    const setSelectedSearch = SelectedSearchStore(state => state.setSelectedSearch)
    const [dropdown, setDropdown] = React.useState(closedDropdown)

    function dropdownToggle() {
        if (dropdown === closedDropdown) {
            setDropdown(openedDropdown)
        } else {
            setDropdown(closedDropdown)
        }
    }

    return (

        <div className="form-wrapper">

            <SearchLabel/>

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

                    <li><a className="dropdown-item text-center text-white h3 bg-success"
                           id="platform"
                           data-id="spotify"><i className='bx bxl-spotify' onClick={(e) => {
                        dropdownToggle()
                        e.preventDefault()
                        setSelectedSearch(SpotifySearchTrackByName.getInstance())
                    }}></i></a>
                    </li>

                    <li><a className="dropdown-item text-center text-white h3 bg-success"
                           id="platform"
                           data-id="spotify" onClick={(e) => {
                        dropdownToggle()
                        e.preventDefault()
                        setSelectedSearch(SpotifySearchTrackByAlbum.getInstance())
                    }}><i className='bx bxl-spotify'></i></a>
                    </li>

                    <li><a className="dropdown-item text-center text-white h3 bg-danger"
                           id="platform"
                           data-id="youtube" onClick={(e) => {
                        dropdownToggle()
                        e.preventDefault()
                        setSelectedSearch(YouTubeSearchVideoByGeneral.getInstance())
                    }}><i className='bx bxl-youtube'></i></a>
                    </li>

                    <li><a className="dropdown-item text-center text-white h3 bg-twitch"
                           id="platform"
                           data-id="twitch" onClick={(e) => {
                        dropdownToggle()
                        e.preventDefault()
                        setSelectedSearch(TwitchSearchClipByChannel.getInstance())
                    }}><i className='bx bxl-twitch'></i></a>
                    </li>

                    <li><a className="dropdown-item text-center text-white h3 bg-twitch"
                           id="platform"
                           data-id="twitch" onClick={(e) => {
                        dropdownToggle()
                        e.preventDefault()
                        setSelectedSearch(TwitchSearchClipByGame.getInstance())
                    }}><i className='bx bxl-twitch'></i></a>
                    </li>

                    <li><a className="dropdown-item text-center text-white h3 bg-twitch"
                           id="platform"
                           data-id="twitch" onClick={(e) => {
                        dropdownToggle()
                        e.preventDefault()
                        setSelectedSearch(TwitchSearchVideoByChannel.getInstance())
                    }}><i className='bx bxl-twitch'></i></a>
                    </li>

                    <li><a className="dropdown-item text-center text-white h3 bg-twitch"
                           id="platform"
                           data-id="twitch" onClick={(e) => {
                        dropdownToggle()
                        e.preventDefault()
                        setSelectedSearch(TwitchSearchVideoByGame.getInstance())
                    }}><i className='bx bxl-twitch'></i></a>
                    </li>

                    <li><a className="dropdown-item text-center text-white h3 bg-twitch"
                           id="platform"
                           data-id="twitch" onClick={(e) => {
                        dropdownToggle()
                        e.preventDefault()
                        setSelectedSearch(TwitchSearchLivestreamByGeneral.getInstance())
                    }}><i className='bx bxl-twitch'></i></a>
                    </li>

                    <li><a className="dropdown-item text-center text-white h3 bg-info" id="platform"
                           data-id="vimeo" onClick={() => {
                        setSelectedSearch(VimeoSearchVideoByName.getInstance())
                    }}><i className='bx bxl-vimeo'></i></a></li>
                </ul>

                <MauricioSearchForm/>

            </div>

        </div>

    )
}

export default MauricioSearchBar;
