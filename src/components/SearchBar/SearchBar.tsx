import React, {FormEvent, useState} from 'react';
import Form from 'react-bootstrap/Form'
import {SpecificSearchType} from "../../models/ApiSearches/PlatformSearches";
import SearchResultsStore from '../../stores/SearchResultsStore'
import {SearchBarProperties} from "../../models/ComponentProperties/SearchBarProperties";
import {SpecificSearch} from "../../SpecificSearches/SpecificSearch";
import {YouTubeSearchByGeneral} from "../../SpecificSearches/YouTubeSearchByGeneral";

function SearchBar(props: SearchBarProperties): JSX.Element {

    console.log("%cRendered search bar.", "color: cyan")

    const setHasSearched = SearchResultsStore(state => state.setHasSearched)
    const setSearchResultType = SearchResultsStore(state => state.setSearchResultType)
    const setSearchResult = SearchResultsStore(state => state.setSearchResults)
    const [specificSearch, setSpecificSearch] = useState<SpecificSearch>(YouTubeSearchByGeneral.getInstance());
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

            if (specificSearch.getType() === "YouTubeSearchVideoByGeneral") {
                let youtubeResults = await searchYouTubeVideos(searchBarQuery, 40, null)
                setSearchResult(youtubeResults);
                setSearchResultType("YouTubeVideo")
            } else if (specificSearch === "SpotifySearchTrackByName") {

                if (props.spotifyAccessToken) {
                    let spotifyResults = await searchSpotifyTracksByName(searchBarQuery, props.spotifyAccessToken.current, 40)
                    console.log((spotifyResults))
                    setSearchResult(spotifyResults);
                    setSearchResultType("SpotifyTrack");
                } else {
                    alert("No Spotify access token found.")
                }

            } else if (specificSearch === "SpotifySearchTrackByAlbum") {

                if (props.spotifyAccessToken) {
                    let spotifyResults = await searchSpotifyTracksByAlbum(searchBarQuery, props.spotifyAccessToken.current, 40)
                    console.log((spotifyResults))
                    setSearchResult(spotifyResults);
                    setSearchResultType("SpotifyTrack");
                } else {
                    alert("No Spotify access token found.")
                }

            } else if (specificSearch === "VimeoSearchVideoByName") {
                let vimeoVideos = await searchVimeoVideos(searchBarQuery, 10, 1)
                setSearchResult(vimeoVideos);
                setSearchResultType("VimeoVideo");
            } else if (specificSearch === "TwitchSearchClipByBroadcaster") {

                if (props.twitchAccessToken) {
                    let twitchClips = await searchTwitchClipsByChannel(searchBarQuery, props.twitchAccessToken.current, 40, null)
                    setSearchResult(twitchClips);
                    setSearchResultType("TwitchClip");
                } else {
                    alert("No Twitch access token found.")
                }

            } else if (specificSearch === "TwitchSearchClipByGame") {

                if (props.twitchAccessToken) {
                    let twitchClips = await searchTwitchClipsByGame(searchBarQuery, props.twitchAccessToken.current, 40, null)
                    setSearchResult(twitchClips);
                    setSearchResultType("TwitchClip");
                } else {
                    alert("No Twitch access token found.")
                }

            } else if (specificSearch === "TwitchSearchVideoByBroadcaster") {

                if (props.twitchAccessToken) {
                    let twitchVideos = await searchTwitchVideosByChannel(searchBarQuery, "week", "trending", props.twitchAccessToken.current, 40, null)
                    setSearchResult(twitchVideos);
                    setSearchResultType("TwitchVideo");
                } else {
                    alert("No Twitch access token found.")
                }

            } else if (specificSearch === "TwitchSearchVideoByGame") {

                if (props.twitchAccessToken) {
                    let twitchVideos = await searchTwitchVideosByGame(searchBarQuery, "week", "trending", props.twitchAccessToken.current, 40, null)
                    setSearchResult(twitchVideos);
                    setSearchResultType("TwitchVideo");
                } else {
                    alert("No Twitch access token found.")
                }

            } else if (specificSearch === "TwitchSearchChannelByGeneral") {

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

    return (

        <div className="SearchPage">

            {"Selected Platform Searches:"}
            <Form.Select onChange={(event) => {
                setSpecificSearch(event.target.value as SpecificSearchType)
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

                <button>{specificSearch.getButtonText()}</button>

            </form>

        </div>

    )
}

export default SearchBar;
