import React, {useState} from 'react';
import Form from 'react-bootstrap/Form'
import {SpecificSearchType} from "../../models/apiSearches/PlatformSearches";
import SearchListStore from '../../stores/SearchListStore'
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

function SearchBar(props: SearchBarProperties): JSX.Element {

    console.log("%cRendered search bar.", "color: cyan")

    const [selectedSearch, setSelectedSearch] = useState<ApiSearch>(YouTubeSearchVideoByGeneral.getInstance());
    const [searchBarQuery, setSearchBarQuery] = useState("");

    const setSearchList = SearchListStore(state => state.setSearchList)

    async function searchPlatformItems(chosenSearchQuery: string) {

        let searchList: VideoSearchList | TrackSearchList | LivestreamSearchList

        if (selectedSearch.getPlatform() === "Spotify") {
            searchList = await selectedSearch.getSearchList(chosenSearchQuery, 1, 40, props.spotifyAuthenticator.current)
        } else if (selectedSearch.getPlatform() === "Twitch") {
            searchList = await selectedSearch.getSearchList(chosenSearchQuery, 1, 40, props.twitchAuthenticator.current)
        } else {
            searchList = await selectedSearch.getSearchList(chosenSearchQuery, 1, 40)
            console.log(searchList)
        }
        return searchList

    }

    return (

        <div>

            <div>

                {"Selected Platform:"}
                <Form.Select onChange={(event) => {
                    switch (event.target.value as SpecificSearchType) {
                        case "YouTubeSearchVideoByGeneral":
                            setSelectedSearch(YouTubeSearchVideoByGeneral.getInstance())
                            break;
                        case "SpotifySearchTrackByName":
                            setSelectedSearch(SpotifySearchTrackByName.getInstance())
                            break;
                        case "SpotifySearchTrackByAlbum":
                            setSelectedSearch(SpotifySearchTrackByAlbum.getInstance())
                            break;
                        case "VimeoSearchVideoByName":
                            setSelectedSearch(VimeoSearchVideoByName.getInstance())
                            break;
                        case "TwitchSearchClipByChannel":
                            setSelectedSearch(TwitchSearchClipByChannel.getInstance())
                            break;
                        case "TwitchSearchClipByGame":
                            setSelectedSearch(TwitchSearchClipByGame.getInstance())
                            break;
                        case "TwitchSearchVideoByChannel":
                            setSelectedSearch(TwitchSearchVideoByChannel.getInstance())
                            break;
                        case "TwitchSearchVideoByGame":
                            setSelectedSearch(TwitchSearchVideoByGame.getInstance())
                            break;
                        case "TwitchSearchLivestreamByGeneral":
                            setSelectedSearch(TwitchSearchLivestreamByGeneral.getInstance())
                            break;
                    }
                }}>
                    <option value={"YouTubeSearchVideoByGeneral"}> {"YouTube"} </option>
                    <option value={"SpotifySearchTrackByName"}> {"Spotify (Track)"} </option>
                    <option value={"SpotifySearchTrackByAlbum"}> {"Spotify (Album)"} </option>
                    <option value={"VimeoSearchVideoByName"}> {"Vimeo"} </option>
                    <option value={"TwitchSearchClipByChannel"}> {"Twitch - Clip (Channel)"} </option>
                    <option value={"TwitchSearchClipByGame"}> {"Twitch - Clip (Game)"} </option>
                    <option value={"TwitchSearchVideoByChannel"}> {"Twitch - Video (Channel)"} </option>
                    <option value={"TwitchSearchVideoByGame"}> {"Twitch - Video (Game)"} </option>
                    <option value={"TwitchSearchLivestreamByGeneral"}> {"Twitch - Livestream"} </option>

                </Form.Select>

                {/*Search bar*/}
                <form onSubmit={async (event) => {
                    event.preventDefault()
                    setSearchList(await searchPlatformItems(searchBarQuery));
                }}>

                    <input autoFocus value={searchBarQuery} onChange={(event) => {
                        setSearchBarQuery(event.target.value)
                    }}/>

                    <button>{selectedSearch.getButtonText()}</button>

                </form>

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
