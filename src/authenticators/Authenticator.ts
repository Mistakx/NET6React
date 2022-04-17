import spotifyAuthenticator from "./SpotifyAuthenticator";
import twitchAuthenticator from "./TwitchAuthenticator";

export function Authenticator() {

    spotifyAuthenticator()
    twitchAuthenticator()

}

export default Authenticator;
