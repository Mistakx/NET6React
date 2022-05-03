import React, {useState} from 'react';
import Form from 'react-bootstrap/Form'
import {SpecificSearchType} from "../../models/apiSearches/PlatformSearches";
import SearchedListStore from '../../stores/SearchedListStore'
import {ApiSearch} from "../../apiSearches/specificSearches/ApiSearch";
import {YouTubeSearchVideoByGeneral} from "../../apiSearches/specificSearches/YouTubeSearchVideoByGeneral";
import {SpotifySearchTrackByName} from "../../apiSearches/specificSearches/SpotifySearchTrackByName";
import {SpotifySearchTrackByAlbum} from "../../apiSearches/specificSearches/SpotifySearchTrackByAlbum";
import {VimeoSearchVideoByName} from "../../apiSearches/specificSearches/VimeoSearchVideoByName";
import {TwitchSearchClipByGame} from "../../apiSearches/specificSearches/TwitchSearchClipByGame";
import {TwitchSearchClipByChannel} from "../../apiSearches/specificSearches/TwitchSearchClipByChannel";
import {TwitchSearchVideoByChannel} from "../../apiSearches/specificSearches/TwitchSearchVideoByChannel";
import {TwitchSearchVideoByGame} from "../../apiSearches/specificSearches/TwitchSearchVideoByGame";
import {TwitchSearchLivestreamByGeneral} from "../../apiSearches/specificSearches/TwitchSearchLivestreamByGeneral";
import {VideoSearchList} from "../../searchLists/VideoSearchList";
import {TrackSearchList} from "../../searchLists/TrackSearchList";
import {LivestreamSearchList} from "../../searchLists/LivestreamSearchList";
import {SearchBarProperties} from "../../models/components/searchBar/SearchBarProperties";
import '../../styles/style.css'
import SearchLabel from "./SearchLabel";
import SelectedSearchStore from "../../stores/SelectedSearchStore";
import PlatformSelector from "./PlatformSelector";
import SearchForm from "./SearchForm";

function SearchBar(props: SearchBarProperties): JSX.Element {

    console.log("%cRendered search bar.", "color: cyan")

    const [searchBarStyle, setSearchBarStyle] = useState<string>("")
    const [searchBarQuery, setSearchBarQuery] = useState("");

    const selectedSearch = SelectedSearchStore(state => state.selectedSearch)
    const setSelectedSearch = SelectedSearchStore(state => state.setSelectedSearch)
    const setSearchedList = SearchedListStore(state => state.setSearchedList)

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

        <div>

            <SearchLabel/>

            <div>

                <PlatformSelector/>

                <SearchForm twitchAuthenticator={props.twitchAuthenticator} spotifyAuthenticator={props.spotifyAuthenticator}/>

            </div>

            <div className="form-wrapper">
                <div className="input-group">
                    <button className="btn btn-outline-warning dropdown-toggle" id="choose"
                            type="button"
                            data-bs-toggle="dropdown" aria-expanded="false">Platform
                    </button>
                    <ul className="dropdown-menu dropdown-menu-dark align-items-center bg-dark">
                        <li><a className="dropdown-item text-center text-white h3 bg-success"
                               id="platform"
                               data-id="spotify" href="#spotify"><i className='bx bxl-spotify'></i></a>
                        </li>
                        <li><a className="dropdown-item text-center text-white h3 bg-danger"
                               id="platform"
                               data-id="youtube" href="#youtube"><i className='bx bxl-youtube'></i></a>
                        </li>
                        <li><a className="dropdown-item text-center text-white h3 bg-twitch"
                               id="platform"
                               data-id="twitch" href="#twitch"><i className='bx bxl-twitch'></i></a>
                        </li>
                        <li><a className="dropdown-item text-center text-white h3 bg-info" id="platform"
                               data-id="vimeo" href="#vimeo"><i className='bx bxl-vimeo'></i></a></li>
                    </ul>

                    <input type="text" id="search" className="form-control form-control-lg default"
                           placeholder="I want that music..."/>
                    <span id="filtro" className="input-group-text d-none"></span>
                </div>

            </div>

        </div>

    )
}

export default SearchBar;
