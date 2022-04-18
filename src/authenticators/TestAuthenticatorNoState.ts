import React, {useEffect, useRef} from 'react';

/**
 * Hook responsible for continuously getting a test access token.
 */
function TestAuthenticatorNoState() {

    const accessToken = useRef<string>()
    const expiresIn = useRef<number>();

    console.log("%cTestAuthenticator render: " + accessToken.current, "color: cyan");

    /**
     * Continuously negotiate access token.
     */
    useEffect(() => {

        (async () => {

            console.log("%c1st time negotiation: Beginning.", "color: orange");
            accessToken.current = "alpha";
            expiresIn.current = 75;
            console.log("%c1st time negotiation: Complete: " + "alpha", "color: orange");

            console.log("%cRenegotiation: Started timer: " + (expiresIn.current - 60) + " seconds.", "color: orange")
            setInterval(() => {

                (async () => {
                    console.log("%cRenegotiation: Access token expired. Renegotiating test access token.", "color: orange")
                    accessToken.current = ("beta");
                    expiresIn.current = (75);
                    console.log("%Renegotiation: Ended: " + "beta", "color: orange");
                })();

            }, (expiresIn.current - 60) * 1000);
        })()

    });

    return accessToken as  React.MutableRefObject<string>; // After the authentication it is guaranteed to be a string

}

export default TestAuthenticatorNoState;
