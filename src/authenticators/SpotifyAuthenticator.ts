import {useEffect, useState} from 'react';
import axios from 'axios';
import base64 from "base-64";
import qs from "qs";
import {SpotifyAuthorization} from "../models/ApiRequests/SpotifyAuthorization";

/**
 * Hook responsible for continuously getting a Spotify access token.
 * Each access token expires after an hour, after which a new one is re-negotiated.
 */
function SpotifyAuthenticator() {

    async function getSpotifyAuthorization() {

        const spotifyClientId = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
        const spotifyClientSecret = process.env.REACT_APP_SPOTIFY_CLIENT_SECRET;

        const url = "https://accounts.spotify.com/api/token"
        const headers = {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Basic ' + base64.encode(spotifyClientId + ':' + spotifyClientSecret)
        }
        const data = {'grant_type': 'client_credentials'};
        const options = {
            method: 'POST',
            headers: headers,
            data: qs.stringify(data),
            url,
        };

        // @ts-ignore
        let spotifyAuthorizationResponse = await axios(options);
        let spotifyAuthorization: SpotifyAuthorization = spotifyAuthorizationResponse.data;
        return spotifyAuthorization;


    }

    const [accessToken, setAccessToken] = useState<string>();
    const [expiresIn, setExpiresIn] = useState<number>();

    /**
     * Negotiate access token for the fist time.
     */
    useEffect(() => {

        if (!accessToken) {

            (async () => {

                console.log("%cNegotiating Spotify access token for the first time.", "color: green");
                let spotifyAuthorization = await getSpotifyAuthorization();
                setAccessToken(spotifyAuthorization.access_token);
                setExpiresIn(spotifyAuthorization.expires_in);
                console.log("%cEnded Spotify access token negotiation for the first time.", "color: green");

            })()

        }

    });

    /**
     * Renegotiate access token after it expires.
     */
    useEffect(() => {

        if (expiresIn) {

            console.log("%cStarted timer for renegotiating Spotify access token.", "color: green")

            const interval = setInterval(() => {


                (async () => {
                    console.log("%cRenegotiating Spotify access token.", "color: green")
                    let spotifyAuthorization = await getSpotifyAuthorization()
                    setAccessToken(spotifyAuthorization.access_token);
                    setExpiresIn(spotifyAuthorization.expires_in);
                    console.log("%cEnded Spotify access token negotiation.", "color: green")

                })();

            }, (expiresIn - 60) * 1000);

            clearInterval(interval);

        }

    }, [expiresIn]);

    return accessToken as string; // It's guaranteed that after the first useEffect access token is a string

}

export default SpotifyAuthenticator;
