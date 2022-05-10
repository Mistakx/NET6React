import React, {useEffect, useRef, useState} from 'react';
import axios from 'axios';
import base64 from "base-64";
import qs from "qs";
import {SpotifyAuthorization} from "../../models/authenticators/ApiAuthorizations";

/**
 * Hook responsible for continuously getting a Spotify access token.
 * Each access token expires after an hour, after which a new one is re-negotiated.
 * https://developer.spotify.com/documentation/general/guides/authorization/client-credentials/
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

    const accessToken = useRef<string>()
    const expiresIn = useRef<number>();

    /**
     * Continuously negotiate access token.
     */
    useEffect(() => {

        (async () => {

            console.log("%c1st time negotiation: Beginning.", "color: green");
            let spotifyAuthorization = await getSpotifyAuthorization();
            accessToken.current = spotifyAuthorization.access_token;
            expiresIn.current = spotifyAuthorization.expires_in;
            console.log("%c1st time negotiation: Complete: " + accessToken.current, "color: green");

            console.log("%cRenegotiation: Started timer: " + (expiresIn.current - 60) + " seconds.", "color: green")
            setInterval(() => {

                (async () => {
                    console.log("%cRenegotiation: Access token expired. Renegotiating.", "color: green")
                    let spotifyAuthorization = await getSpotifyAuthorization()
                    accessToken.current = spotifyAuthorization.access_token;
                    expiresIn.current = spotifyAuthorization.expires_in;
                    console.log("%Renegotiation: Ended: " + accessToken.current, "color: green");
                })();

            }, (expiresIn.current - 60) * 1000);


        })()

    });

    return accessToken as React.MutableRefObject<string>; // It's guaranteed that after the first useEffect access token is a string

}

export default SpotifyAuthenticator;
