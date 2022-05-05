import React from 'react';
import '../../../styles/style.css'
import SelectedSearchStore from "../../../stores/SelectedSearchStore";
import {VimeoSearchVideoByName} from "../../../apiSearches/specificSearches/VimeoSearchVideoByName";
import {YouTubeSearchVideoByGeneral} from "../../../apiSearches/specificSearches/YouTubeSearchVideoByGeneral";
import {SpotifySearchTrackByName} from "../../../apiSearches/specificSearches/SpotifySearchTrackByName";
import {SpotifySearchTrackByAlbum} from "../../../apiSearches/specificSearches/SpotifySearchTrackByAlbum";
import {TwitchSearchClipByChannel} from "../../../apiSearches/specificSearches/TwitchSearchClipByChannel";
import {TwitchSearchClipByGame} from "../../../apiSearches/specificSearches/TwitchSearchClipByGame";
import {TwitchSearchVideoByChannel} from "../../../apiSearches/specificSearches/TwitchSearchVideoByChannel";
import {TwitchSearchVideoByGame} from "../../../apiSearches/specificSearches/TwitchSearchVideoByGame";
import {TwitchSearchLivestreamByGeneral} from "../../../apiSearches/specificSearches/TwitchSearchLivestreamByGeneral";
import {PlatformDropdownListProperties} from "../../../models/components/searchBar/PlatformDropdownListProperties";
import PlatformDropdownStore from "../../../stores/PlatformDropdownStore";

function PlatformDropdownList(props: PlatformDropdownListProperties): JSX.Element {

    const setSelectedSearch = SelectedSearchStore(state => state.setSelectedSearch)
    const platformDropdownList = PlatformDropdownStore(state => state.platformDropdownList)

    return (

        <ul className={platformDropdownList}>

            {/*YouTube*/}
            <li>
                <div className="dropdown-item text-center text-white h3 btn-youtube"
                     id="platform"
                     data-id="youtube" onClick={(e) => {
                    props.togglePlatformDropdownList()
                    e.preventDefault()
                    setSelectedSearch(YouTubeSearchVideoByGeneral.getInstance())
                }}>
                    <i className='bx bxl-youtube'></i>
                </div>
            </li>

            {/*Vimeo*/}
            <li>
                <div className="dropdown-item text-center text-white h3 btn-vimeo"
                     id="platform"
                     data-id="vimeo" onClick={(e) => {
                    props.togglePlatformDropdownList()
                    e.preventDefault()
                    setSelectedSearch(VimeoSearchVideoByName.getInstance())
                }}><i className='bx bxl-vimeo'></i></div>
            </li>

            {/*Spotify*/}
            <li>

                {/*Spotify button*/}
                <div className="clickable dropdown-item text-center text-white h3 btn-spotify"
                     id="platform"
                     data-id="spotify"
                     onClick={(e) => {
                         props.togglePlatformDropdownList()
                         e.preventDefault()
                         setSelectedSearch(SpotifySearchTrackByName.getInstance())
                     }}
                >
                    <i className='bx bxl-spotify'></i> &raquo;
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

                </ul>
            </li>

            {/*Twitch*/}
            <li>

                {/*Twitch button*/}
                <div className="clickable dropdown-item text-center text-white h3 btn-twitch"
                     id="platform"
                     data-id="twitch"
                     onClick={(e) => {
                         props.togglePlatformDropdownList()
                         e.preventDefault()
                         setSelectedSearch(TwitchSearchLivestreamByGeneral.getInstance())
                     }}
                >
                    <i className='bx bxl-twitch'></i> &raquo;
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
                    <li onClick={(e) => {
                        props.togglePlatformDropdownList()
                        e.preventDefault()
                        setSelectedSearch(TwitchSearchVideoByGame.getInstance())

                    }}>
                        <div className="clickable dropdown-item btn-twitch">Video - Game</div>
                    </li>

                </ul>
            </li>

        </ul>

    )
}

export default PlatformDropdownList;
