import '../../../../styles/Playlist.css'
import '../../../../styles/SearchPage.css'
import React, {useState} from "react";
import {OverlayTrigger, Popover} from "react-bootstrap";
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
        playlistPlayer = PlayerFactory.createPlayer(playlistPlayerCurrentResult, setPlaylistPlayerCurrentResult, autoPlay, playlistCurrentResults)
    }

    let currentlyPlayingText = playlistPlayerCurrentResult?.title ? playlistPlayerCurrentResult?.title : "Not playing content"

    function playNextContent() {
        if (playlistPlayerCurrentResult) {

            let playlistResultIndex = 0
            for (let result of playlistCurrentResults!) {

                if (result.platformId === playlistPlayerCurrentResult.platformId
                    && result.playerFactoryName === playlistPlayerCurrentResult.playerFactoryName
                    && result.platformPlayerUrl === playlistPlayerCurrentResult.platformPlayerUrl) {
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

                if (result.platformId === playlistPlayerCurrentResult.platformId
                    && result.playerFactoryName === playlistPlayerCurrentResult.playerFactoryName
                    && result.platformPlayerUrl === playlistPlayerCurrentResult.platformPlayerUrl) {
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
                    <OverlayTrigger
                        trigger={['hover', 'focus']}
                        placement="bottom"
                        overlay={<Popover id="popover-trigger-focus" className='bg-dark text-white p-1'
                                          title="Popover right">
                            Previous
                        </Popover>}>
                        <button className="btn btn-link text-white"
                                onClick={playPreviousContent}
                        >
                            <i className='bx bx-skip-previous h3'></i>
                        </button>
                    </OverlayTrigger>
                    <OverlayTrigger
                        trigger={['hover', 'focus']}
                        placement="bottom"
                        overlay={<Popover id="popover-trigger-focus" className='bg-dark text-white p-1'
                                          title="Popover right">
                            Toggle autoplay
                        </Popover>}>
                        <button className={"btn btn-link text-" + (autoPlay ? "success" : "white")}
                                onClick={toggleAutoPlay}
                        >
                            <i className='bx bx-reset h3'></i>
                        </button>
                    </OverlayTrigger>
                    <OverlayTrigger
                        trigger={['hover', 'focus']}
                        placement="bottom"
                        overlay={<Popover id="popover-trigger-focus" className='bg-dark text-white p-1'
                                          title="Popover right">
                            Next
                        </Popover>}>
                        <button className="btn btn-link text-white"
                                onClick={playNextContent}
                        >
                            <i className='bx bx-skip-next h3'></i>
                        </button>
                    </OverlayTrigger>
                </div>

            </div>


            <div className="social text-white rounded mt-4" id="titulo" data-aos="fade-right" data-aos-delay="200">
                <h3 className="p-3">{currentlyPlayingText}</h3>
            </div>
        </div>

    )

}

export default PlaylistPlayer;
