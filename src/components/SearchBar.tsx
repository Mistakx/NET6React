import React, {FormEvent, useState} from 'react';
import Form from 'react-bootstrap/Form'
import {Platform} from "../models/Platform";
import SearchResultsStore from '../stores/SearchResultsStore'
import searchSpotifyTracks from "../apiSearches/SpotifySearch";
import searchYouTubeVideos from "../apiSearches/YouTubeSearch";
import searchVimeoVideos from "../apiSearches/VimeoSearch";
import searchTwitchChannels from "../apiSearches/TwitchSearch";
import AccessTokensStore from "../stores/AccessTokensStore";

function SearchBar(): JSX.Element {

    let platformNames: Platform[] = ["YouTube", "Spotify", "TikTok", "Vimeo", "Twitch"];

    const setHasSearched = SearchResultsStore(state => state.setHasSearched)
    const setSearchResultsPlatform = SearchResultsStore(state => state.setSearchResultsPlatform)
    const setSearchResults = SearchResultsStore(state => state.setSearchResults)
    const spotifyAccessToken = AccessTokensStore(state => state.spotifyAccessToken)
    const twitchAccessToken = AccessTokensStore(state => state.twitchAccessToken)
    const [selectedPlatform, setSelectedPlatform] = useState<Platform>("YouTube");
    const [searchBarQuery, setSearchBarQuery] = useState("");


    /**
     * Searches the selected platform and updates the page results.
     * @param event The event of the search form.
     */
    async function searchSelectedPlatform(event: FormEvent) {
        event.preventDefault();
        setHasSearched(true);

        try {

            if (selectedPlatform === platformNames[0]) {
                let youtubeResults = await searchYouTubeVideos(searchBarQuery, 40, null)
                setSearchResults(youtubeResults);
                setSearchResultsPlatform(platformNames[0])
            } else if (spotifyAccessToken && selectedPlatform === platformNames[1]) {
                let spotifyResults = await searchSpotifyTracks(searchBarQuery, spotifyAccessToken, 40)
                setSearchResults(spotifyResults);
                setSearchResultsPlatform(platformNames[1]);
            } else if (selectedPlatform === platformNames[3]) {
                let vimeoVideos = await searchVimeoVideos(searchBarQuery, 40, 1)
                setSearchResults(vimeoVideos);
                setSearchResultsPlatform(platformNames[3]);
            } else if (twitchAccessToken && selectedPlatform === platformNames[4]) {
                let twitchChannels = await searchTwitchChannels(searchBarQuery, twitchAccessToken, 40, 1)
                setSearchResults(twitchChannels);
                setSearchResultsPlatform(platformNames[4]);
            }

        } catch (e) {
            alert(e);
        }

    }

    return (

        <div className="SearchPage">

            {"Selected Platform:"}
            <Form.Select onChange={(event) => {
                setSelectedPlatform(event.target.value as Platform)
            }}>
                <option value={platformNames[0]}> {platformNames[0]} </option>
                <option value={platformNames[1]}> {platformNames[1]} </option>
                <option value={platformNames[2]}> {platformNames[2]} </option>
                <option value={platformNames[3]}> {platformNames[3]} </option>
                <option value={platformNames[4]}> {platformNames[4]} </option>
            </Form.Select>

            {/*Search bar*/}
            <form onSubmit={async (event) => {
                await searchSelectedPlatform(event)
            }}>

                <input autoFocus value={searchBarQuery} onChange={(event) => {
                    setSearchBarQuery(event.target.value)
                }}/>

                <button>Search {selectedPlatform}</button>

            </form>

        </div>

    )
}

export default SearchBar;
