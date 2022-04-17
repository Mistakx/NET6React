import {useEffect, useState} from 'react';
import axios from 'axios';
import qs from "qs";
import {TwitchAuthorization} from "../models/ApiRequests/TwitchAuthorization";

/**
 * Hook responsible for continuously getting a Twitch access token.
 * Each access token expires after an hour, after which a new one is re-negotiated.
 */
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

    const [accessToken, setAccessToken] = useState<string>();
    const [expiresIn, setExpiresIn] = useState<number>();

    /**
     * Negotiate access token for the fist time.
     */
    useEffect(() => {

        if (!accessToken) {

            (async () => {

                console.log("%cNegotiating Twitch access token for the first time.", "color: purple");
                let twitchAuthorization = await getTwitchAuthorization();
                setAccessToken(twitchAuthorization.access_token);
                setExpiresIn(twitchAuthorization.expires_in);
                console.log("%cEnded Twitch access token negotiation for the first time: " + twitchAuthorization.access_token, "color: purple");

            })()

        }

    });

    /**
     * Renegotiate access token after it expires.
     */
    useEffect(() => {

        if (expiresIn) {

            console.log("%cStarted timer for renegotiating Twitch access token.", "color: purple")

            const interval = setInterval(() => {


                (async () => {
                    console.log("%cRenegotiating Twitch access token.", "color: purple")
                    let twitchAuthorization = await getTwitchAuthorization()
                    setAccessToken(twitchAuthorization.access_token);
                    setExpiresIn(twitchAuthorization.expires_in);
                    console.log("%cEnded Twitch access token negotiation.", "color: purple")

                })();

            }, (expiresIn - 60) * 1000);

            clearInterval(interval);

        }

    }, [expiresIn]);

    return accessToken as string; // It's guaranteed that after the first useEffect access token is a string

}

export default TwitchAuthenticator;
