import React, {useEffect, useRef, useState} from 'react';
import axios from 'axios';
import qs from "qs";
import {TwitchAuthorization} from "../models/authenticators/ApiAuthorizations";

/**
 * Hook responsible for continuously getting a Twitch access token.
 * https://dev.twitch.tv/docs/authentication/getting-tokens-oauth/#client-credentials-grant-flow */

export function TwitchAuthenticator() {

    async function getTwitchAuthorization() {

        const twitchClientId = process.env.REACT_APP_TWITCH_CLIENT_ID;
        const twitchClientSecret = process.env.REACT_APP_TWITCH_CLIENT_SECRET;

        const url = "https://id.twitch.tv/oauth2/token"
        const headers = {
            'Content-Type': 'application/x-www-form-urlencoded',
        }
        const data = {
            'client_id': twitchClientId,
            'client_secret': twitchClientSecret,
            'grant_type': 'client_credentials'
        };
        const options = {
            method: 'POST',
            headers: headers,
            data: qs.stringify(data),
            url,
        };

        // @ts-ignore
        let twitchAuthorizationResponse = await axios(options);
        let twitchAuthorization: TwitchAuthorization = twitchAuthorizationResponse.data;
        return twitchAuthorization;


    }

    const accessToken = useRef<string>()
    const expiresIn = useRef<number>();

    /**
     * Continuously negotiate access token.
     */
    useEffect(() => {


        (async () => {

            console.log("%c1st time negotiation: Beginning.", "color: purple");
            let twitchAuthorization = await getTwitchAuthorization();
            accessToken.current = twitchAuthorization.access_token;
            expiresIn.current = twitchAuthorization.expires_in;
            console.log("%c1st time negotiation: Complete: " + accessToken.current, "color: purple");

            console.log("%cRenegotiation: Started timer: " + (expiresIn.current - 60) + " seconds.", "color: purple")
            setInterval(() => {


                (async () => {
                    console.log("%cRenegotiation: Access token expired. Renegotiating.", "color: purple")
                    let twitchAuthorization = await getTwitchAuthorization()
                    accessToken.current = twitchAuthorization.access_token;
                    expiresIn.current = twitchAuthorization.expires_in;
                    console.log("%Renegotiation: Ended: " + accessToken.current, "color: purple");

                })();

            }, (expiresIn.current - 60) * 1000);

        })()

    });

    return accessToken as React.MutableRefObject<string>; // It's guaranteed that after the first useEffect access token is a string

}

export default TwitchAuthenticator;
