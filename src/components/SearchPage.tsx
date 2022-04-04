import React, {useEffect, useState} from 'react';
import Form from 'react-bootstrap/Form'
import SpotifyWebApi from "spotify-web-api-js";
import SpotifyAuthenticator from "../hooks/SpotifyAuthenticator";

function SearchPage() {

    const platformNames = ["Youtube", "Spotify", "TikTok"];
    const spotifyApi = new SpotifyWebApi();
    let spotifyAccessToken = SpotifyAuthenticator()

    /**
     * Sets the access token in the Spotify Api
     */
    useEffect(() => {

        if (spotifyAccessToken) {
            console.log("Refreshing access token after change: " + spotifyAccessToken);
            spotifyApi.setAccessToken(spotifyAccessToken)
        }

    }, [spotifyAccessToken]);

    let [selectedPlatform, setSelectedPlatform] = useState(platformNames[0])

    function searchSong() {
        spotifyApi.searchArtists('Love').then(
            function (data) {
                console.log('Search artists by "Love"', data);
            },
            function (err) {
                console.error(err);
            }
        )
    }

    return (

        <div className="SearchPage">

            <Form.Select onChange={(event) => {
                setSelectedPlatform(event.target.value)
                searchSong()
            }}>
                <option value={platformNames[0]}> {platformNames[0]} </option>
                <option value={platformNames[1]}> {platformNames[1]} </option>
                <option value={platformNames[2]}> {platformNames[2]} </option>
            </Form.Select>

            {"Selected Platform:" + selectedPlatform}

        </div>

    )
}

export default SearchPage;
