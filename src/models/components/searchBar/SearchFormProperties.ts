import React from "react";

export interface SearchFormProperties {
    spotifyAuthenticator: React.MutableRefObject<string>
    twitchAuthenticator: React.MutableRefObject<string>
    searchBarQuery: string
    setSearchBarQuery: React.Dispatch<React.SetStateAction<string>>
}