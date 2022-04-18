import React, {FormEvent, useState} from 'react';
import Form from 'react-bootstrap/Form'
import {Platform} from "../../models/Platform";
import SearchResultsStore from '../../stores/SearchResultsStore'
import searchSpotifyTracks from "../../apiSearches/SpotifySearch";
import searchYouTubeVideos from "../../apiSearches/YouTubeSearch";
import searchVimeoVideos from "../../apiSearches/VimeoSearch";
import {searchTwitchClipsByBroadcasterId} from "../../apiSearches/TwitchSearch";
import {SearchBarProperties} from "../../models/ComponentProperties/SearchBarProperties";

function SearchBar(props: SearchBarProperties): JSX.Element {

    console.log("%cRendered search bar.", "color: cyan")

    const platformNames: Platform[] = ["YouTube", "Spotify", "Vimeo", "Twitch"];

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
                let youtubeResults = await searchYouTubeVideos(searchBarQuery, 40, null)
                setSearchResults(youtubeResults);
                setSearchResultsPlatform(platformNames[0])
            } else if (selectedPlatform === platformNames[1]) {

                if (props.spotifyAccessToken) {
                    let spotifyResults = await searchSpotifyTracks(searchBarQuery, props.spotifyAccessToken.current, 40)
                    setSearchResults(spotifyResults);
                    setSearchResultsPlatform(platformNames[1]);
                } else {
                    alert("No Spotify access token found.")
                }

            } else if (selectedPlatform === platformNames[2]) {
                let vimeoVideos = await searchVimeoVideos(searchBarQuery, 40, 1)
                setSearchResults(vimeoVideos);
                setSearchResultsPlatform(platformNames[2]);
            } else if (selectedPlatform === platformNames[3]) {

                if (props.twitchAccessToken) {
                    let twitchChannels = await searchTwitchClipsByBroadcasterId(searchBarQuery, props.twitchAccessToken.current, 40, null)
                    setSearchResults(twitchChannels);
                    setSearchResultsPlatform(platformNames[3]);
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
