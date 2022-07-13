import React from 'react';
import '../../../../styles/style.css'
import SelectedPlatformSearchStore from "../../../../stores/searches/SelectedPlatformSearchStore";
import {VimeoSearchVideoByName} from "../../../../requests/apiRequests/specificSearches/VimeoSearchVideoByName";
import {
    YouTubeSearchVideoByGeneral
} from "../../../../requests/apiRequests/specificSearches/YouTubeSearchVideoByGeneral";
import {SpotifySearchTrackByAlbum} from "../../../../requests/apiRequests/specificSearches/SpotifySearchTrackByAlbum";
import {SpotifySearchTrackByName} from "../../../../requests/apiRequests/specificSearches/SpotifySearchTrackByName";
import {
    SpotifySearchPodcastsByName
} from "../../../../requests/apiRequests/specificSearches/SpotifySearchPodcastsByName";
import {TwitchSearchClipByChannel} from "../../../../requests/apiRequests/specificSearches/TwitchSearchClipByChannel";
import {TwitchSearchClipByGame} from "../../../../requests/apiRequests/specificSearches/TwitchSearchClipByGame";
import {TwitchSearchVideoByChannel} from "../../../../requests/apiRequests/specificSearches/TwitchSearchVideoByChannel";
import {TwitchSearchVideoByGame} from "../../../../requests/apiRequests/specificSearches/TwitchSearchVideoByGame";
import {
    TwitchSearchLivestreamByGeneral
} from "../../../../requests/apiRequests/specificSearches/TwitchSearchLivestreamByGeneral";
import {
    PlatformDropdownListProperties
} from "../../../../models/components/pages/searchBar/PlatformDropdownListProperties";
import PlatformDropdownStore from "../../../../stores/searches/PlatformDropdownStore";
import {SoundcloudSearchTrack} from "../../../../requests/apiRequests/specificSearches/SoundcloudSearchTrackByName";
import {MixcloudSearchTrack} from "../../../../requests/apiRequests/specificSearches/MixcloudSearchTrack";
import {DailymotionSearchVideo} from "../../../../requests/apiRequests/specificSearches/DailymotionSearchVideo";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faYoutube,
    faVimeoV,
    faSpotify,
    faSoundcloud,
    faMixcloud,
    faDailymotion,
    faTwitch
} from "@fortawesome/free-brands-svg-icons";
import {faRadio} from "@fortawesome/free-solid-svg-icons";


import {RadioSearchByName} from "../../../../requests/apiRequests/specificSearches/RadioSearchByName";

function PlatformDropdownList(props: PlatformDropdownListProperties): JSX.Element {

    const setSelectedSearch = SelectedPlatformSearchStore(state => state.setSelectedSearch)
    const platformDropdownList = PlatformDropdownStore(state => state.platformDropdownList)

    return (

        <ul className={platformDropdownList}>

            {/*YouTube*/}
            <li>
                <div className="dropdown-item text-center text-white h4 btn-youtube"
                     id="platform"
                     data-id="youtube" onClick={(e) => {
                    props.togglePlatformDropdownList()
                    e.preventDefault()
                    setSelectedSearch(YouTubeSearchVideoByGeneral.getInstance())
                }}>
                    <FontAwesomeIcon icon={faYoutube}/>
                </div>
            </li>

            {/*Vimeo*/}
            <li>
                <div className="dropdown-item text-center text-white h4 btn-vimeo"
                     id="platform"
                     data-id="vimeo" onClick={(e) => {
                    props.togglePlatformDropdownList()
                    e.preventDefault()
                    setSelectedSearch(VimeoSearchVideoByName.getInstance())
                }}>
                    <FontAwesomeIcon icon={faVimeoV}/>
                </div>
            </li>

            {/*Spotify*/}
            <li>

                {/*Spotify button*/}
                <div className="clickable dropdown-item text-center text-white h4 btn-spotify"
                     id="platform"
                     data-id="spotify"
                     onClick={(e) => {
                         props.togglePlatformDropdownList()
                         e.preventDefault()
                         setSelectedSearch(SpotifySearchTrackByName.getInstance())
                     }}
                >
                    <FontAwesomeIcon icon={faSpotify}/> &raquo;
                </div>

                {/*Spotify dropdown*/}
                <ul className="dropdown-menu dropdown-submenu spotify">

                    {/*Spotify by track button*/}
                    <li onClick={(e) => {
                        props.togglePlatformDropdownList()
                        e.preventDefault()
                        setSelectedSearch(SpotifySearchTrackByName.getInstance())
                    }}>
                        <div className="clickable dropdown-item btn-spotify">Track</div>
                    </li>

                    {/*Spotify by album button*/}
                    <li onClick={(e) => {
                        props.togglePlatformDropdownList()
                        e.preventDefault()
                        setSelectedSearch(SpotifySearchTrackByAlbum.getInstance())

                    }}>
                        <div className="clickable dropdown-item btn-spotify">Album</div>
                    </li>

                    {/*Spotify by podcast button*/}
                    <li onClick={(e) => {
                        props.togglePlatformDropdownList()
                        e.preventDefault()
                        setSelectedSearch(SpotifySearchPodcastsByName.getInstance())

                    }}>
                        <div className="clickable dropdown-item btn-spotify">Podcasts</div>
                    </li>

                </ul>
            </li>

            {/*Soundcloud*/}
            <li>
                <div className="dropdown-item text-center text-white h4 btn-soundCloud"
                     id="platform"
                     data-id="soundCloud" onClick={(e) => {
                    props.togglePlatformDropdownList()
                    e.preventDefault()
                    setSelectedSearch(SoundcloudSearchTrack.getInstance())
                }}>
                    <FontAwesomeIcon icon={faSoundcloud}/>
                </div>
            </li>

            {/*Mixcloud*/}
            <li>
                <div className="dropdown-item text-center text-white h4 btn-mixcloud"
                     id="platform"
                     data-id="mixcloud" onClick={(e) => {
                    props.togglePlatformDropdownList()
                    e.preventDefault()
                    setSelectedSearch(MixcloudSearchTrack.getInstance())
                }}>
                    <FontAwesomeIcon icon={faMixcloud}/>
                </div>
            </li>

            {/*DailyMotion*/}
            <li>
                <div className="dropdown-item text-center text-white h4 btn-dailymotion"
                     id="platform"
                     data-id="dailymotion" onClick={(e) => {
                    props.togglePlatformDropdownList()
                    e.preventDefault()
                    setSelectedSearch(DailymotionSearchVideo.getInstance())
                }}>
                    <FontAwesomeIcon icon={faDailymotion}/>
                </div>
            </li>

            {/*Twitch*/}
            <li>

                {/*Twitch button*/}
                <div className="clickable dropdown-item text-center text-white h4 btn-twitch"
                     id="platform"
                     data-id="twitch"
                     onClick={(e) => {
                         props.togglePlatformDropdownList()
                         e.preventDefault()
                         setSelectedSearch(TwitchSearchLivestreamByGeneral.getInstance())
                     }}
                >
                    <FontAwesomeIcon icon={faTwitch}/> &raquo;
                </div>

                {/*Twitch dropdown*/}
                <ul className="dropdown-menu dropdown-submenu twitch">

                    {/*Twitch livestream*/}
                    <li onClick={(e) => {
                        props.togglePlatformDropdownList()
                        e.preventDefault()
                        setSelectedSearch(TwitchSearchLivestreamByGeneral.getInstance())
                    }}>
                        <div className="clickable dropdown-item btn-twitch">Livestream</div>
                    </li>

                    {/*Twitch clip by channel*/}
                    <li onClick={(e) => {
                        props.togglePlatformDropdownList()
                        e.preventDefault()
                        setSelectedSearch(TwitchSearchClipByChannel.getInstance())

                    }}>
                        <div className="clickable dropdown-item btn-twitch">Clip - Channel</div>
                    </li>

                    {/*Twitch clip by game*/}
                    <li onClick={(e) => {
                        props.togglePlatformDropdownList()
                        e.preventDefault()
                        setSelectedSearch(TwitchSearchClipByGame.getInstance())

                    }}>
                        <div className="clickable dropdown-item btn-twitch">Clip - Game</div>
                    </li>

                    {/*Twitch video by channel*/}
                    <li onClick={(e) => {
                        props.togglePlatformDropdownList()
                        e.preventDefault()
                        setSelectedSearch(TwitchSearchVideoByChannel.getInstance())

                    }}>
                        <div className="clickable dropdown-item btn-twitch">Video - Channel</div>
                    </li>

                    {/*Twitch video by game*/}
                    {/*<li onClick={(e) => {*/}
                    {/*    props.togglePlatformDropdownList()*/}
                    {/*    e.preventDefault()*/}
                    {/*    setSelectedSearch(TwitchSearchVideoByGame.getInstance())*/}
                    
                    {/*}}>*/}
                    {/*    <div className="clickable dropdown-item btn-twitch">Video - Game</div>*/}
                    {/*</li>*/}

                </ul>
            </li>

            {/*Radio*/}
            <li>
                <div className="dropdown-item text-center text-white h4 btn-radio"
                     id="platform"
                     data-id="radio" onClick={(e) => {
                    props.togglePlatformDropdownList()
                    e.preventDefault()
                    setSelectedSearch(RadioSearchByName.getInstance())
                }}>
                    <FontAwesomeIcon icon={faRadio}></FontAwesomeIcon>
                </div>
            </li>

        </ul>

    )
}

export default PlatformDropdownList;
