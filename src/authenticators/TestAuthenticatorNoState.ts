import React, {useEffect, useRef} from 'react';

/**
 * Hook responsible for continuously getting a Spotify access token.
 * Each access token expires after an hour, after which a new one is re-negotiated.
 */
function TestAuthenticatorNoState() {

    const accessToken = useRef<string>()
    let expiresIn: number;

    console.log("%cTestAuthenticator render: " + accessToken.current, "color: cyan");

    /**
     * Negotiate access token for the fist time.
     */
    useEffect(() => {

        (async () => {

            console.log("%c1st time negotiation: Beginning.", "color: orange");
            accessToken.current = "alpha";
            expiresIn = 75;
            console.log("%c1st time negotiation: Complete: " + "alpha", "color: orange");

        })()

    });

    /**
     * Continuously renegotiate access token after it expires.
     */
    useEffect(() => {

        if (expiresIn) {
            console.log("%cRenegotiation: Started timer: " + (expiresIn - 60) + " seconds.", "color: orange")
            setInterval(() => {

                (async () => {
                    console.log("%cRenegotiation: Access token expired. Renegotiating test access token.", "color: orange")
                    accessToken.current = ("beta");
                    expiresIn = (75);
                    console.log("%cEnded test access token renegotiation: " + "beta", "color: orange");
                })();

            }, (expiresIn - 60) * 1000);
        } else {
            console.log("%cRenegotiation: 1st negotiation hasn't happened yet.", "color: orange");
        }


    });

    return accessToken as  React.MutableRefObject<string>; // After the authentication it is guaranteed to be a string

}

export default TestAuthenticatorNoState;
