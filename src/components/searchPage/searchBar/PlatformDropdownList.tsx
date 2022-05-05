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


            <li>
                <div className="dropdown-item text-center text-white h3 btn-spotify" id="platform"
                   data-id="spotify"><i className='bx bxl-spotify'></i> &raquo;
                </div>
                <ul className="dropdown-menu dropdown-submenu spotify">
                    <li>
                        <a className="dropdown-item spotify" href="#">Track</a>
                    </li>
                    <li>
                        <a className="dropdown-item spotify" href="#">Album</a>
                    </li>
                </ul>
            </li>

            <li>
                <div className="dropdown-item text-center text-white h3 btn-spotify"
                     id="platform"
                     data-id="spotify"
                     onClick={(e) => {
                         props.togglePlatformDropdownList()
                         e.preventDefault()
                         setSelectedSearch(SpotifySearchTrackByName.getInstance())
                     }}>
                    <i className='bx bxl-spotify'></i>
                </div>

            </li>

            <li>
                <div className="dropdown-item text-center text-white h3 btn-spotify"
                     id="platform"
                     data-id="spotify"
                     onClick={(e) => {
                         props.togglePlatformDropdownList()
                         e.preventDefault()
                         setSelectedSearch(SpotifySearchTrackByAlbum.getInstance())
                     }}>
                    <i className='bx bxl-spotify'></i>
                </div>
            </li>

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

            <li>
                <div className="dropdown-item text-center text-white h3 btn-twitch"
                     id="platform"
                     data-id="twitch" onClick={(e) => {
                    props.togglePlatformDropdownList()
                    e.preventDefault()
                    setSelectedSearch(TwitchSearchClipByChannel.getInstance())
                }}>
                    <i className='bx bxl-twitch'></i>
                </div>
            </li>

            <li>
                <div className="dropdown-item text-center text-white h3 btn-twitch"
                     id="platform"
                     data-id="twitch" onClick={(e) => {
                    props.togglePlatformDropdownList()
                    e.preventDefault()
                    setSelectedSearch(TwitchSearchClipByGame.getInstance())
                }}>
                    <i className='bx bxl-twitch'></i>
                </div>
            </li>

            <li>
                <div className="dropdown-item text-center text-white h3 btn-twitch"
                     id="platform"
                     data-id="twitch" onClick={(e) => {
                    props.togglePlatformDropdownList()
                    e.preventDefault()
                    setSelectedSearch(TwitchSearchVideoByChannel.getInstance())
                }}>
                    <i className='bx bxl-twitch'></i>
                </div>
            </li>

            <li>
                <div className="dropdown-item text-center text-white h3 btn-twitch"
                     id="platform"
                     data-id="twitch" onClick={(e) => {
                    props.togglePlatformDropdownList()
                    e.preventDefault()
                    setSelectedSearch(TwitchSearchVideoByGame.getInstance())
                }}><i className='bx bxl-twitch'></i></div>
            </li>

            <li>
                <div className="dropdown-item text-center text-white h3 btn-twitch"
                     id="platform"
                     data-id="twitch" onClick={(e) => {
                    props.togglePlatformDropdownList()
                    e.preventDefault()
                    setSelectedSearch(TwitchSearchLivestreamByGeneral.getInstance())
                }}><i className='bx bxl-twitch'></i></div>
            </li>

            <li>
                <div className="dropdown-item text-center text-white h3 btn-vimeo"
                     id="platform"
                     data-id="vimeo" onClick={(e) => {
                    props.togglePlatformDropdownList()
                    e.preventDefault()
                    setSelectedSearch(VimeoSearchVideoByName.getInstance())
                }}><i className='bx bxl-vimeo'></i></div>
            </li>
        </ul>

    )
}

export default PlatformDropdownList;
