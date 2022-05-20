import '../../styles/Playlist.css'
import '../../styles/SearchPage.css'
import React, {useState} from "react";
import "aos/dist/aos.css";
import {PlayerFactory} from "../players/PlayerFactory";
import PlaylistPagePlayerStore from "../../stores/PlaylistPagePlayerStore";

function PlaylistPlayer(): JSX.Element {

    const playingGenericResult = PlaylistPagePlayerStore(state => state.playingGenericResult)

    const [playerStarted, setPlayerStarted] = useState(false)

    let playlistPlayer;
    if (playingGenericResult) {
        playlistPlayer = PlayerFactory.createPlayer(playingGenericResult, setPlayerStarted)
    }

    return (

        <div className="col-lg-8 col-md-8 col-12" id="player">

            <div className="align-items-stretch position-relative"
                data-aos="fade-right" data-aos-delay="100">

                <div className="ratio ratio-16x9">
                    <div className="card col-12 h-100 d-inline-block">
                        {playlistPlayer}
                    </div>
                </div>

                {/*<div className="player-options rounded">*/}
                {/*    <button className="btn btn-link text-white">*/}
                {/*        <i className='bx bx-skip-previous h3'></i>*/}
                {/*    </button>*/}
                {/*    <button className="btn btn-link text-white">*/}
                {/*        <i className='bx bx-skip-next h3'></i>*/}
                {/*    </button>*/}
                {/*</div>*/}

            </div>

            
            <div className="social text-white rounded mt-4"  id="titulo" data-aos="fade-right" data-aos-delay="200">
                <h3 className="p-3">{playingGenericResult?.title}</h3>
            </div>
        </div>

    )

}

export default PlaylistPlayer;
