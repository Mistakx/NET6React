import React, {useState} from 'react';
import SearchedListStore from '../../stores/SearchedListStore'
import {VideoSearchList} from "../../searchLists/VideoSearchList";
import {TrackSearchList} from "../../searchLists/TrackSearchList";
import {LivestreamSearchList} from "../../searchLists/LivestreamSearchList";
import {SearchFormProperties} from "../../models/components/searchBar/SearchFormProperties";
import '../../styles/style.css'
import SelectedSearchStore from "../../stores/SelectedSearchStore";

function SearchForm(props: SearchFormProperties): JSX.Element {

    const [searchBarQuery, setSearchBarQuery] = useState("");

    const selectedSearch = SelectedSearchStore(state => state.selectedSearch)
    const setSearchedList = SearchedListStore(state => state.setSearchedList)

    async function searchPlatformItems(chosenSearchQuery: string) {

        let searchList: VideoSearchList | TrackSearchList | LivestreamSearchList

        if (selectedSearch.getPlatform().getName() === "Spotify") {
            searchList = await selectedSearch.getSearchList(chosenSearchQuery, 1, 40, props.spotifyAuthenticator.current)
        } else if (selectedSearch.getPlatform().getName() === "Twitch") {
            searchList = await selectedSearch.getSearchList(chosenSearchQuery, 1, 40, props.twitchAuthenticator.current)
        } else {
            searchList = await selectedSearch.getSearchList(chosenSearchQuery, 1, 40)
        }
        return searchList

    }


    return (

        <div>

            {/*Search bar*/}
            <form onSubmit={async (event) => {
                event.preventDefault()
                setSearchedList(await searchPlatformItems(searchBarQuery));
            }}>

                <input autoFocus value={searchBarQuery} onChange={(event) => {
                    setSearchBarQuery(event.target.value)
                }}/>

                <button>{selectedSearch.getButtonText()}</button>

            </form>

        </div>

    )
}

export default SearchForm;
