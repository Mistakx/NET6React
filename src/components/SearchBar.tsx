import React, {useState} from 'react';
import Form from 'react-bootstrap/Form'
import {SpecificSearchType} from "../models/apiSearches/PlatformSearches";
import ChosenSearchStore from '../stores/ChosenSearchStore'
import {ApiSearch} from "../apiSearches/specificSearches/ApiSearch";
import {YouTubeSearchVideoByGeneral} from "../apiSearches/specificSearches/YouTubeSearchVideoByGeneral";
import {SpotifySearchTrackByName} from "../apiSearches/specificSearches/SpotifySearchTrackByName";
import {SpotifySearchTrackByAlbum} from "../apiSearches/specificSearches/SpotifySearchTrackByAlbum";
import {VimeoSearchVideoByName} from "../apiSearches/specificSearches/VimeoSearchVideoByName";
import {TwitchSearchClipByGame} from "../apiSearches/specificSearches/TwitchSearchClipByGame";
import {TwitchSearchClipByChannel} from "../apiSearches/specificSearches/TwitchSearchClipByChannel";
import {TwitchSearchVideoByChannel} from "../apiSearches/specificSearches/TwitchSearchVideoByChannel";
import {TwitchSearchVideoByGame} from "../apiSearches/specificSearches/TwitchSearchVideoByGame";
import {TwitchSearchLivestreamByGeneral} from "../apiSearches/specificSearches/TwitchSearchLivestreamByGeneral";

function SearchBar(): JSX.Element {

    console.log("%cRendered search bar.", "color: cyan")

    const [selectedSearch, setSelectedSearch] = useState<ApiSearch>(YouTubeSearchVideoByGeneral.getInstance());
    const [searchBarQuery, setSearchBarQuery] = useState("");
    const setChosenSearchType = ChosenSearchStore(state => state.setChosenSearchType)

    return (

        <div className="SearchPage">

            {"Selected Platform specificSearches:"}
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
                <option value={"TwitchSearchClipByChannel"}> {"Twitch Clip (Broadcaster)"} </option>
                <option value={"TwitchSearchClipByGame"}> {"Twitch Clip (Game)"} </option>
                <option value={"TwitchSearchVideoByChannel"}> {"Twitch Video (Broadcaster)"} </option>
                <option value={"TwitchSearchVideoByGame"}> {"Twitch Video (Game)"} </option>
                <option value={"TwitchSearchLivestreamByGeneral"}> {"Twitch - Livestream"} </option>

            </Form.Select>

            {/*Search bar*/}
            <form onSubmit={async (_) => {
                setChosenSearchType(selectedSearch);
            }}>

                <input autoFocus value={searchBarQuery} onChange={(event) => {
                    setSearchBarQuery(event.target.value)
                }}/>

                <button>{selectedSearch.getButtonText()}</button>

            </form>

        </div>

    )
}

export default SearchBar;
