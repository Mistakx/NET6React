import React, {useEffect} from 'react';
import '../../../../styles/style.css'
import SearchForm from "./SearchForm";
import {SearchBarProperties} from "../../../../models/components/pages/searchBar/SearchBarProperties";
import SelectedPlatformSearchStore from "../../../../stores/searches/SelectedPlatformSearchStore";
import SearchedPlatformResultsStore from "../../../../stores/searches/SearchedPlatformResultsStore";
import PlatformDropdownButton from "./PlatformDropdownButton";
import PlatformDropdownList from "./PlatformDropdownList";
import PlatformDropdownStore from "../../../../stores/searches/PlatformDropdownStore";
import {
    GeneralizedResult,
} from "../../../../models/apiResponses/GenericResults";
import AlertStore from "../../../../stores/AlertStore";
import SearchLabel from "./SearchLabel";
import RecommendationRequests from "../../../../requests/backendRequests/RecommendationRequests";
import {flushSync} from "react-dom";

function SearchBar(props: SearchBarProperties): JSX.Element {

    const openedDropdown = "dropdown-menu dropdown-menu-dark align-items-center bg-dark show"
    const closedDropdown = "dropdown-menu dropdown-menu-dark align-items-center bg-dark"


    const selectedSearch = SelectedPlatformSearchStore(state => state.selectedSearch)
    const searchBarQuery = SelectedPlatformSearchStore(state => state.searchBarQuery)
    const setSearchBarQuery = SelectedPlatformSearchStore(state => state.setSearchBarQuery)
    const setRecommendations = SelectedPlatformSearchStore(state => state.setRecommendations)
    const showingRecommendations = SelectedPlatformSearchStore(state => state.showingRecommendations)
    const firstRecommendationsTitles = SelectedPlatformSearchStore(state => state.firstRecommendationsTitles)

    const platformDropdownList = PlatformDropdownStore(state => state.platformDropdownList)
    const setPlatformDropdownList = PlatformDropdownStore(state => state.setPlatformDropdownList)

    const setSearchedResults = SearchedPlatformResultsStore(state => state.setSearchedResults)

    const prettyAlert = AlertStore(state => state.prettyAlert)


    useEffect(() => {
        setPlatformDropdownList(closedDropdown)
    }, [])

    useEffect(() => {

        (async () => {
            const sessionToken = localStorage.getItem("sessionToken")
            if (sessionToken) {
                console.log(selectedSearch.getButtonText())

                if(selectedSearch.getButtonText() === 'YouTube') {
                     setRecommendations(await RecommendationRequests.getTrendingWeeklyYoutubeContent(1, 1000, sessionToken))
                }
                else if(selectedSearch.getButtonText() === 'Vimeo') {
                    setRecommendations(await RecommendationRequests.getTrendingWeeklyVimeoContent(1, 1000, sessionToken))
                }
                else if(selectedSearch.getButtonText() === 'Spotify (Track)' || selectedSearch.getButtonText() === 'Spotify (Album)') {
                    setRecommendations(await RecommendationRequests.getTrendingWeeklySpotifyTrackAndAlbumContent(1, 1000, sessionToken))
                }
                else if(selectedSearch.getButtonText() === 'Spotify (Podcasts)') {
                    setRecommendations(await RecommendationRequests.getTrendingWeeklySpotifyPodcastContent(1, 1000, sessionToken))
                }
                else if(selectedSearch.getButtonText() === 'SoundCloud') {
                    setRecommendations(await RecommendationRequests.getTrendingWeeklySoundCloudContent(1, 1000, sessionToken))
                }
                else if(selectedSearch.getButtonText() === 'Mixcloud') {
                    setRecommendations(await RecommendationRequests.getTrendingWeeklyMixcloudContent(1, 1000, sessionToken))
                }
                else if(selectedSearch.getButtonText() === 'Dailymotion') {
                    setRecommendations(await RecommendationRequests.getTrendingWeeklyDailymotionContent(1, 1000, sessionToken))
                }
                else if(selectedSearch.getButtonText() === 'Twitch - Livestream') {
                    setRecommendations(await RecommendationRequests.getTrendingWeeklyTwitchLivestreamContent(1, 1000, sessionToken))
                }
                else if(selectedSearch.getButtonText() === 'Twitch - Clip (Channel)' || selectedSearch.getButtonText() === 'Twitch - Clip (Game)') {
                    setRecommendations(await RecommendationRequests.GetTrendingWeeklyTwitchClipContent(1, 1000, sessionToken))
                }
                else if(selectedSearch.getButtonText() === 'Twitch - Video (Channel)' || selectedSearch.getButtonText() === 'Twitch - Video (Game)') {
                    setRecommendations(await RecommendationRequests.getTrendingWeeklyTwitchVideoContent(1, 1000, sessionToken))
                }
                else if(selectedSearch.getButtonText() === 'Radio') {
                    setRecommendations(await RecommendationRequests.getTrendingWeeklyRadioContent(1, 1000, sessionToken))
                }
            } 
            else prettyAlert("You must be logged in to view recommendations", false)
        })()

    }, [selectedSearch])

    function togglePlatformDropdownList() {
        if (platformDropdownList === closedDropdown) {
            setPlatformDropdownList(openedDropdown)
        } else {
            setPlatformDropdownList(closedDropdown)
        }
    }

    async function searchPlatformItems(chosenSearchQuery: string) {

        let searchList: GeneralizedResult[];

        if (selectedSearch.getPlatform().getName() === "Spotify") {
            searchList = await selectedSearch.getSearchResults(chosenSearchQuery, 1, 40, props.spotifyAuthenticator.current)
        } else if (selectedSearch.getPlatform().getName() === "Twitch") {
            searchList = await selectedSearch.getSearchResults(chosenSearchQuery, 1, 40, props.twitchAuthenticator.current)
        } else {
            searchList = await selectedSearch.getSearchResults(chosenSearchQuery, 1, 40)
        }
        return searchList;

    }

    let recommendationsList
    if (searchBarQuery.length > 0 && showingRecommendations) {
        recommendationsList = firstRecommendationsTitles.map(title => {

            return <div key={title} onClick={
                () => {

                    // https://codingshower.com/react-execute-code-immediately-after-set-state-update-and-re-render/
                    flushSync(() => {
                        setSearchBarQuery(title)
                    })

                    document.getElementById('button-addon2')?.click();
                }
            }>
                <li className={'align-middle btn-' + selectedSearch.getPlatform().getColorClass()}>
                    <i className='bx bx-search-alt'/> {title}
                </li>
            </div>
        })
    }


    return (
        <div className="form-wrapper position-relative">

            <SearchLabel/>

            <form id={"searchBar"} onSubmit={async (event) => {
                try {
                    event.preventDefault()
                    let results = await searchPlatformItems(searchBarQuery)
                    setSearchedResults(results)
                } catch (e: any) {
                    prettyAlert("Error occurred on search", false)
                    // console.log(e.response?.data.message)
                    // console.log(e.response?.data.error?.message)
                    // console.log(e.response?.data.error)
                    // console.log(e.toJSON().message)
                }
            }}>

                <div className={"row sticky-top"}>

                    <div className="input-group">

                        <PlatformDropdownButton togglePlatformDropdownList={togglePlatformDropdownList}/>

                        <PlatformDropdownList togglePlatformDropdownList={togglePlatformDropdownList}/>

                        <SearchForm spotifyAuthenticator={props.spotifyAuthenticator}
                                    twitchAuthenticator={props.twitchAuthenticator}
                        />

                        <button className={"btn btn-sm btn-search " + selectedSearch.getPlatform().getColorClass()}
                                type="submit"
                                id="button-addon2"><i className='bx bx-search-alt h3'></i></button>

                        <div className="suggestion">
                            {recommendationsList}
                        </div>

                    </div>

                </div>
            </form>

        </div>

    )
}

export default SearchBar;
