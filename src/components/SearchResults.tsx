import React, {useState} from 'react';
import ChosenSearchStore from "../stores/ChosenSearchStore";
import SpotifyAuthenticator from "../authenticators/SpotifyAuthenticator";
import TwitchAuthenticator from "../authenticators/TwitchAuthenticator";
import {SearchList} from "../searchList/SearchList";

function SearchResults(): JSX.Element {

    const twitchAuthenticator = TwitchAuthenticator()
    const spotifyAuthenticator = SpotifyAuthenticator()

    const [hasSearched, setHasSearched] = useState(false)
    const chosenSearchQuery = ChosenSearchStore(state => state.chosenSearchQuery)
    const chosenSearchType = ChosenSearchStore(state => state.chosenSearchType)

    let searchListHtml: JSX.Element = <div>Error occurred while searching platform.</div>

    async function searchPlatformItems() {

        let searchList: SearchList;

        if (chosenSearchType.getPlatform() === "Spotify") {
            searchList = await chosenSearchType.getSearchList(chosenSearchQuery, spotifyAuthenticator.current, 40, 1)
        } else if (chosenSearchType.getPlatform() === "Twitch") {
            searchList = await chosenSearchType.getSearchList(chosenSearchQuery, twitchAuthenticator.current, 40, 1)
        } else {
            searchList = await chosenSearchType.getSearchList(chosenSearchQuery, "", 40, 1)
        }
        setHasSearched(true)
        return searchList

    }

    searchPlatformItems().then(searchItems => {

        // No results
        if (hasSearched && searchItems.getItemsHtml().length === 0) {
            searchListHtml = <p>No results</p>;
        }

        // Valid results
        searchListHtml = <ul className="items"> {searchItems} </ul>


    })

    return (
        <div> {searchListHtml} </div>
    )

}

export default SearchResults;
