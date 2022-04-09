import React, {FormEvent, useEffect, useState} from 'react';
import Form from 'react-bootstrap/Form'
import SpotifyWebApi from "spotify-web-api-js";
import SpotifyAuthenticator from "../hooks/SpotifyAuthenticator";
import SearchResults from "./SearchResults";
import {SearchContent} from 'spotify-types'
import {Platform} from "../models/ComponentProperties/Platform";

function SearchPage(): JSX.Element {

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

    // Search
    const [selectedPlatform, setSelectedPlatform] = useState(platformNames[0]);
    const [hasSearched, setHasSearched] = useState(false)
    const [searchBarQuery, setSearchBarQuery] = useState("");
    const [searchResults, setSearchResults] = useState<SearchContent>()

    // Player
    const [playingPlatform, setPlayingPlatform] = useState<Platform>();
    const [playingId, setPlayingId] = useState<string>()

    /**
     * Searches the selected platform and updates the page results.
     * @param event The event of the search form.
     */
    async function searchSelectedPlatform(event: FormEvent) {
        event.preventDefault();
        setHasSearched(true);

        try {
            if (spotifyAccessToken && selectedPlatform === platformNames[1]) {
                let spotifyResults = await spotifyApi.searchTracks(searchBarQuery, {type: "track", limit: 40})
                // @ts-ignore
                setSearchResults(spotifyResults);
            }
        } catch (e) {
            alert(e);
        }

    }

    let searchResultsTable;
    if (searchResults) {
        searchResultsTable =
            <SearchResults searchedPlatform={JSON.parse(JSON.stringify(selectedPlatform))} hasSearched={hasSearched} searchResults={searchResults} setPlayingPlatform={setPlayingPlatform} setPlayingId={setPlayingId}/>
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

            {searchResultsTable}

        </div>

    )
}

export default SearchPage;
