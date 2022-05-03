import React, {useState} from 'react';
import Form from 'react-bootstrap/Form'
import {SpecificSearchType} from "../../models/apiSearches/PlatformSearches";
import {YouTubeSearchVideoByGeneral} from "../../apiSearches/specificSearches/YouTubeSearchVideoByGeneral";
import {SpotifySearchTrackByName} from "../../apiSearches/specificSearches/SpotifySearchTrackByName";
import {SpotifySearchTrackByAlbum} from "../../apiSearches/specificSearches/SpotifySearchTrackByAlbum";
import {VimeoSearchVideoByName} from "../../apiSearches/specificSearches/VimeoSearchVideoByName";
import {TwitchSearchClipByGame} from "../../apiSearches/specificSearches/TwitchSearchClipByGame";
import {TwitchSearchClipByChannel} from "../../apiSearches/specificSearches/TwitchSearchClipByChannel";
import {TwitchSearchVideoByChannel} from "../../apiSearches/specificSearches/TwitchSearchVideoByChannel";
import {TwitchSearchVideoByGame} from "../../apiSearches/specificSearches/TwitchSearchVideoByGame";
import {TwitchSearchLivestreamByGeneral} from "../../apiSearches/specificSearches/TwitchSearchLivestreamByGeneral";
import '../../styles/style.css'
import SelectedSearchStore from "../../stores/SelectedSearchStore";

function PlatformSelector(): JSX.Element {

    const setSelectedSearch = SelectedSearchStore(state => state.setSelectedSearch)

    return (

        <div>

            {"Selected Platform:"}
            <Form.Select onChange={(event) => {
                switch (event.target.value as SpecificSearchType) {
                    case "YouTubeSearchVideoByGeneral":
                        setSelectedSearch(YouTubeSearchVideoByGeneral.getInstance())
                        break;
                    case "SpotifySearchTrackByName":
                        setSelectedSearch(SpotifySearchTrackByName.getInstance())
                        break;
                    case "SpotifySearchTrackByAlbum":
                        setSelectedSearch(SpotifySearchTrackByAlbum.getInstance())
                        break;
                    case "VimeoSearchVideoByName":
                        setSelectedSearch(VimeoSearchVideoByName.getInstance())
                        break;
                    case "TwitchSearchClipByChannel":
                        setSelectedSearch(TwitchSearchClipByChannel.getInstance())
                        break;
                    case "TwitchSearchClipByGame":
                        setSelectedSearch(TwitchSearchClipByGame.getInstance())
                        break;
                    case "TwitchSearchVideoByChannel":
                        setSelectedSearch(TwitchSearchVideoByChannel.getInstance())
                        break;
                    case "TwitchSearchVideoByGame":
                        setSelectedSearch(TwitchSearchVideoByGame.getInstance())
                        break;
                    case "TwitchSearchLivestreamByGeneral":
                        setSelectedSearch(TwitchSearchLivestreamByGeneral.getInstance())
                        break;
                }
            }}>
                <option value={"YouTubeSearchVideoByGeneral"}> {"YouTube"} </option>
                <option value={"SpotifySearchTrackByName"}> {"Spotify (Track)"} </option>
                <option value={"SpotifySearchTrackByAlbum"}> {"Spotify (Album)"} </option>
                <option value={"VimeoSearchVideoByName"}> {"Vimeo"} </option>
                <option value={"TwitchSearchClipByChannel"}> {"Twitch - Clip (Channel)"} </option>
                <option value={"TwitchSearchClipByGame"}> {"Twitch - Clip (Game)"} </option>
                <option value={"TwitchSearchVideoByChannel"}> {"Twitch - Video (Channel)"} </option>
                <option value={"TwitchSearchVideoByGame"}> {"Twitch - Video (Game)"} </option>
                <option value={"TwitchSearchLivestreamByGeneral"}> {"Twitch - Livestream"} </option>

            </Form.Select>
        </div>

    )
}

export default PlatformSelector;
