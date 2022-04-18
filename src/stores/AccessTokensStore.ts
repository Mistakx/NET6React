import create from 'zustand'
import {AccessTokensState} from "../models/States/AccessTokensState";

const AccessTokensStore = create<AccessTokensState>((set) => ({

    spotifyAccessToken: null,
    setSpotifyAccessToken: (spotifyAccessToken) => set(state => ({
        spotifyAccessToken: spotifyAccessToken
    })),

    twitchAccessToken: null,
    setTwitchAccessToken: (twitchAccessToken) => set(state => ({
        twitchAccessToken: twitchAccessToken
    })),

}))

export default AccessTokensStore;

