import '../../../../styles/Playlist.css'
import '../../../../styles/SearchPage.css'
import React, {useState} from "react";
import "aos/dist/aos.css";
import {PlayerFactory} from "../../../players/PlayerFactory";
import PlaylistPagePlayerStore from "../../../../stores/players/PlaylistPagePlayerStore";

function PlaylistPlayer(): JSX.Element {

    const playlistPlayerCurrentResult = PlaylistPagePlayerStore(state => state.playlistPlayerCurrentResult)
    const setPlaylistPlayerCurrentResult = PlaylistPagePlayerStore(state => state.setPlaylistPlayerCurrentResult)
    const playlistCurrentResults = PlaylistPagePlayerStore(state => state.playlistCurrentResults)

    const [autoPlay, setAutoPlay] = useState(false)

    let playlistPlayer;
    if (playlistPlayerCurrentResult && playlistCurrentResults) {
        playlistPlayer = PlayerFactory.createPlayer(playlistPlayerCurrentResult, playlistCurrentResults, setPlaylistPlayerCurrentResult, autoPlay)
    }

    let currentlyPlayingText = playlistPlayerCurrentResult?.title ? playlistPlayerCurrentResult?.title : "Not playing content"

    function playNextContent() {
        if (playlistPlayerCurrentResult) {

            let playlistResultIndex = 0
            for (let result of playlistCurrentResults!) {

                if (result === playlistPlayerCurrentResult) {
                    break
                }
                playlistResultIndex++
            }
            if (playlistResultIndex !== playlistCurrentResults?.length! - 1) setPlaylistPlayerCurrentResult(playlistCurrentResults![playlistResultIndex + 1])
        }
    }

    function playPreviousContent() {
        if (playlistPlayerCurrentResult) {
            let playlistResultIndex = 0
            for (let result of playlistCurrentResults!) {

                if (result === playlistPlayerCurrentResult) {
                    break
                }
                playlistResultIndex++
            }
            if (playlistResultIndex !== 0) setPlaylistPlayerCurrentResult(playlistCurrentResults![playlistResultIndex - 1])
        }
    }

    function toggleAutoPlay() {
        setAutoPlay(!autoPlay)
    }

    return (

        <div className="col-lg-8 col-md-8 col-sm-12 col-12" id="player">

            <div className="align-items-stretch position-relative"
                 data-aos="fade-right" data-aos-delay="100">

                <div className="ratio ratio-16x9">
                    <div className="card col-12 h-100 d-inline-block">
                        {playlistPlayer}
                    </div>
                </div>

                <div className="player-options rounded">
                    <button className="btn btn-link text-white"
                            onClick={playPreviousContent}
                    >
                        <i className='bx bx-skip-previous h3'></i>
                    </button>
                    <button className={"btn btn-link text-" + (autoPlay ? "success" : "white")}
                            title="Toggle autoplay"
                            onClick={toggleAutoPlay}
                    >
                        <i className='bx bx-reset h3'></i>
                    </button>
                    <button className="btn btn-link text-white"
                            onClick={playNextContent}
                    >
                        <i className='bx bx-skip-next h3'></i>
                    </button>
                </div>

            </div>


            <div className="social text-white rounded mt-4" id="titulo" data-aos="fade-right" data-aos-delay="200">
                <h3 className="p-3">{currentlyPlayingText}</h3>
            </div>
        </div>

    )

}

export default PlaylistPlayer;
