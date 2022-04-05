import {useEffect, useState} from 'react';
import axios from 'axios';
import base64 from "base-64";
import qs from "qs";
import {SpotifyAuthorization} from "../models/SpotifyAuthorization";

/**
 * Hook responsible for continuously getting a Spotify access token.
 * Each access token expires after an hour, after which a new one is re-negotiated.
 */
function SpotifyAuthenticator(): string {

    async function getSpotifyAuthorization() {

        const clientId = process.env.REACT_APP_CLIENT_ID;
        const clientSecret = process.env.REACT_APP_CLIENT_SECRET;

        const url = "https://accounts.spotify.com/api/token"
        const headers = {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Basic ' + base64.encode(clientId + ':' + clientSecret)
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

                console.log("Negotiating Spotify access token for the first time.");
                let spotifyAuthorization = await getSpotifyAuthorization();
                setAccessToken(spotifyAuthorization.access_token);
                setExpiresIn(spotifyAuthorization.expires_in);
                console.log("Ended Spotify access token negotiation for the first time.");

            })()

        }

    });

    /**
     * Renegotiate access token after it expires.
     */
    useEffect(() => {

        if (expiresIn) {

            console.log("Started timer for renegotiating Spotify access token.")

            const interval = setInterval(() => {


                (async () => {
                    console.log("Renegotiating Spotify access token.")
                    let spotifyAuthorization = await getSpotifyAuthorization()
                    setAccessToken(spotifyAuthorization.access_token);
                    setExpiresIn(spotifyAuthorization.expires_in);
                    console.log("Ended Spotify access token negotiation.")

                })();

            }, (expiresIn - 60) * 1000);

            clearInterval(interval);

        }

    }, [expiresIn]);

    return accessToken as string; // It's guaranteed that after the first useEffect access token is a string

}

export default SpotifyAuthenticator;
