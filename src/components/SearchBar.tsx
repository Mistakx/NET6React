import React, {FormEvent, useEffect, useState} from 'react';
import Form from 'react-bootstrap/Form'
import {Platform} from "../models/Platform";
import {SearchContent} from "spotify-types";
import SearchResultsStore from '../stores/SearchResultsStore'
import YoutubeSearch from "youtube-api-search-typed/dist"
import VimeoAuthenticator from "../authenticators/VimeoAuthenticator";
import {TwitchAuthenticator} from "../authenticators/TwitchAuthenticator";
import SpotifyAuthenticator from "../authenticators/SpotifyAuthenticator";
import searchSpotifyTracks from "../apiSearches/SpotifySearch";
import searchYouTubeVideos from "../apiSearches/YouTubeSearch";

function SearchBar(): JSX.Element {

    let platformNames: Platform[] = ["YouTube", "Spotify", "TikTok", "Vimeo"];

    const spotifyAccessToken = SpotifyAuthenticator()
    const twitchAccessToken = TwitchAuthenticator()

    const setHasSearched = SearchResultsStore(state => state.setHasSearched)
    const setSearchResultsPlatform = SearchResultsStore(state => state.setSearchResultsPlatform)
    const setSearchResults = SearchResultsStore(state => state.setSearchResults)
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


                let youtubeResults = await searchYouTubeVideos(searchBarQuery, 20)
                setSearchResults(youtubeResults);
                setSearchResultsPlatform("YouTube")

            }

            else if (spotifyAccessToken && selectedPlatform === platformNames[1]) {
                let spotifyResults = await searchSpotifyTracks(searchBarQuery, spotifyAccessToken, 40)
                setSearchResults(spotifyResults);
                setSearchResultsPlatform("Spotify");

            }

            else if (selectedPlatform === platformNames[3]) {
                // let vimeoVideos = await vimeoApi.searchVideo(searchBarQuery)
                // setSearchResults(vimeoVideos);
                // setSearchResultsPlatform("Vimeo");

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
