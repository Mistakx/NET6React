import React, {FormEvent, useEffect, useState} from 'react';
import Form from 'react-bootstrap/Form'
import {Platform} from "../models/Platform";
import SpotifyWebApi from "spotify-web-api-js";
import SpotifyAuthenticator from "../hooks/SpotifyAuthenticator";
import {SearchContent} from "spotify-types";
import SearchResultsStore from '../stores/SearchResultsStore'
import YoutubeSearch, { Video } from "youtube-api-search-typed/dist"

function SearchBar(): JSX.Element {

    let platformNames: Platform[] = ["YouTube", "Spotify", "TikTok"];

    const spotifyApi = new SpotifyWebApi();
    const spotifyAccessToken = SpotifyAuthenticator()
    /**
     * Sets the access token in the Spotify Api.
     */
    useEffect(() => {

        if (spotifyAccessToken) {
            console.log("Refreshing access token after change: " + spotifyAccessToken);
            spotifyApi.setAccessToken(spotifyAccessToken)
        }

    }, [spotifyAccessToken]);


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
                let youtubeResults = await YoutubeSearch({
                    key: 'AIzaSyCqxUkoWYb78UH5e3BEzZmHHcCkxAb9C-g',
                    term: searchBarQuery,
                    part: "snippet",
                    type: "video",
                    maxResults: "40"
                })
                setSearchResults(youtubeResults);
                setSearchResultsPlatform("YouTube")

            }

            if (spotifyAccessToken && selectedPlatform === platformNames[1]) {
                let spotifyResults = await spotifyApi.searchTracks(searchBarQuery, {type: "track", limit: 40})
                setSearchResults(spotifyResults as unknown as SearchContent);
                setSearchResultsPlatform("Spotify");

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
