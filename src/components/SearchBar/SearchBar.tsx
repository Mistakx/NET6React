import React, {FormEvent, useState} from 'react';
import Form from 'react-bootstrap/Form'
import {SpecificSearch} from "../../models/ApiSearches/PlatformSearches";
import SearchResultsStore from '../../stores/SearchResultsStore'
import searchYouTubeVideos from "../../apiSearches/YouTubeSearch";
import searchVimeoVideos from "../../apiSearches/VimeoSearch";
import {
    searchTwitchChannels,
    searchTwitchClipsByChannel,
    searchTwitchClipsByGame,
    searchTwitchVideosByChannel, searchTwitchVideosByGame
} from "../../apiSearches/TwitchSearch";
import {SearchBarProperties} from "../../models/ComponentProperties/SearchBarProperties";
import {searchSpotifyTracksByAlbum, searchSpotifyTracksByName} from "../../apiSearches/SpotifySearch";

function SearchBar(props: SearchBarProperties): JSX.Element {

    console.log("%cRendered search bar.", "color: cyan")

    const setHasSearched = SearchResultsStore(state => state.setHasSearched)
    const setSearchResultType = SearchResultsStore(state => state.setSearchResultType)
    const setSearchResult = SearchResultsStore(state => state.setSearchResults)
    const [specificSearchType, setSpecificSearchType] = useState<SpecificSearch>("YouTubeSearchVideoByGeneral");
    const [searchBarQuery, setSearchBarQuery] = useState("");

    /**
     * Searches the selected platform and updates the page results.
     * @param event The event of the search form.
     */
    // TODO: Create abstract class with specific type and search behaviour
    async function searchSelectedPlatform(event: FormEvent) {
        event.preventDefault();
        setHasSearched(true);

        try {

            if (specificSearchType === "YouTubeSearchVideoByGeneral") {
                let youtubeResults = await searchYouTubeVideos(searchBarQuery, 40, null)
                setSearchResult(youtubeResults);
                setSearchResultType("YouTubeVideo")
            } else if (specificSearchType === "SpotifySearchTrackByName") {

                if (props.spotifyAccessToken) {
                    let spotifyResults = await searchSpotifyTracksByName(searchBarQuery, props.spotifyAccessToken.current, 40)
                    console.log((spotifyResults))
                    setSearchResult(spotifyResults);
                    setSearchResultType("SpotifyTrack");
                } else {
                    alert("No Spotify access token found.")
                }

            } else if (specificSearchType === "SpotifySearchTrackByAlbum") {

                if (props.spotifyAccessToken) {
                    let spotifyResults = await searchSpotifyTracksByAlbum(searchBarQuery, props.spotifyAccessToken.current, 40)
                    console.log((spotifyResults))
                    setSearchResult(spotifyResults);
                    setSearchResultType("SpotifyTrack");
                } else {
                    alert("No Spotify access token found.")
                }

            } else if (specificSearchType === "VimeoSearchVideoByName") {
                let vimeoVideos = await searchVimeoVideos(searchBarQuery, 10, 1)
                setSearchResult(vimeoVideos);
                setSearchResultType("VimeoVideo");
            } else if (specificSearchType === "TwitchSearchClipByBroadcaster") {

                if (props.twitchAccessToken) {
                    let twitchClips = await searchTwitchClipsByChannel(searchBarQuery, props.twitchAccessToken.current, 40, null)
                    setSearchResult(twitchClips);
                    setSearchResultType("TwitchClip");
                } else {
                    alert("No Twitch access token found.")
                }

            } else if (specificSearchType === "TwitchSearchClipByGame") {

                if (props.twitchAccessToken) {
                    let twitchClips = await searchTwitchClipsByGame(searchBarQuery, props.twitchAccessToken.current, 40, null)
                    setSearchResult(twitchClips);
                    setSearchResultType("TwitchClip");
                } else {
                    alert("No Twitch access token found.")
                }

            } else if (specificSearchType === "TwitchSearchVideoByBroadcaster") {

                if (props.twitchAccessToken) {
                    let twitchVideos = await searchTwitchVideosByChannel(searchBarQuery, "week", "trending", props.twitchAccessToken.current, 40, null)
                    setSearchResult(twitchVideos);
                    setSearchResultType("TwitchVideo");
                } else {
                    alert("No Twitch access token found.")
                }

            } else if (specificSearchType === "TwitchSearchVideoByGame") {

                if (props.twitchAccessToken) {
                    let twitchVideos = await searchTwitchVideosByGame(searchBarQuery, "week", "trending", props.twitchAccessToken.current, 40, null)
                    setSearchResult(twitchVideos);
                    setSearchResultType("TwitchVideo");
                } else {
                    alert("No Twitch access token found.")
                }

            } else if (specificSearchType === "TwitchSearchChannelByGeneral") {

                if (props.twitchAccessToken) {
                    let twitchLiveChannels = await searchTwitchChannels(searchBarQuery, props.twitchAccessToken.current, 40, null, true)
                    setSearchResult(twitchLiveChannels);
                    setSearchResultType("TwitchLive");
                } else {
                    alert("No Twitch access token found.")
                }

            }

        } catch (exception) {
            alert(exception);
        }

    }

    /**
     * Search button
     */
    // TODO: Create abstract class with specific search type and corresponding button text
    let searchButton;
    if (specificSearchType === "YouTubeSearchVideoByGeneral") {
        searchButton = <button>Search YouTube</button>
    } else if (specificSearchType === "SpotifySearchTrackByName") {
        searchButton = <button>Search Spotify (Track)</button>
    } else if (specificSearchType === "SpotifySearchTrackByAlbum") {
        searchButton = <button>Search Spotify (Album)</button>
    } else if (specificSearchType === "VimeoSearchVideoByName") {
        searchButton = <button>Search Vimeo</button>
    } else if (specificSearchType === "TwitchSearchClipByBroadcaster") {
        searchButton = <button>Search Twitch - Clip (Broadcaster)</button>
    } else if (specificSearchType === "TwitchSearchClipByGame") {
        searchButton = <button>Search Twitch - Clip (Game)</button>
    } else if (specificSearchType === "TwitchSearchVideoByBroadcaster") {
        searchButton = <button>Search Twitch - Video (Broadcaster)</button>
    } else if (specificSearchType === "TwitchSearchVideoByGame") {
        searchButton = <button>Search Twitch - Video (Game)</button>
    }else if (specificSearchType === "TwitchSearchChannelByGeneral") {
        searchButton = <button>Search Twitch - Live Channel</button>
    }

    return (

        <div className="SearchPage">

            {"Selected Platform Searches:"}
            <Form.Select onChange={(event) => {
                setSpecificSearchType(event.target.value as SpecificSearch)
            }}>
                <option value={"YouTubeSearchVideoByGeneral"}> {"YouTube"} </option>
                <option value={"SpotifySearchTrackByName"}> {"Spotify (Track)"} </option>
                <option value={"SpotifySearchTrackByAlbum"}> {"Spotify (Album)"} </option>
                <option value={"VimeoSearchVideoByName"}> {"Vimeo"} </option>
                <option value={"TwitchSearchClipByBroadcaster"}> {"Twitch Clip (Broadcaster)"} </option>
                <option value={"TwitchSearchClipByGame"}> {"Twitch Clip (Game)"} </option>
                <option value={"TwitchSearchVideoByBroadcaster"}> {"Twitch Video (Broadcaster)"} </option>
                <option value={"TwitchSearchVideoByGame"}> {"Twitch Video (Game)"} </option>
                <option value={"TwitchSearchChannelByGeneral"}> {"Twitch - Live Channel"} </option>

            </Form.Select>

            {/*Search bar*/}
            <form onSubmit={async (event) => {
                await searchSelectedPlatform(event)
            }}>

                <input autoFocus value={searchBarQuery} onChange={(event) => {
                    setSearchBarQuery(event.target.value)
                }}/>

                {searchButton}

            </form>

        </div>

    )
}

export default SearchBar;
