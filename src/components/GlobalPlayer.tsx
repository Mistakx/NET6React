import React, {useState} from 'react';
import GlobalPlayerStore from '../stores/GlobalPlayerStore'
import CloseVideoButton from "./CloseVideoButton";
import {Rnd} from "react-rnd";
import MoveVideoButton from "./MoveVideoButton";
import {PlayerFactory} from "./players/PlayerFactory";

function GlobalPlayer(): JSX.Element {

    const globalPlayerCurrentResult = GlobalPlayerStore(state => state.globalPlayerCurrentResult)
    const setGlobalPlayerCurrentResult = GlobalPlayerStore(state => state.setGlobalPlayerCurrentResult)
    const searchCurrentResults = GlobalPlayerStore(state => state.searchCurrentResults)

    const [playerStarted, setPlayerStarted] = useState(false)

    let resizeablePlayer;
    if (globalPlayerCurrentResult && searchCurrentResults) {
        let player = PlayerFactory.createPlayer(globalPlayerCurrentResult, searchCurrentResults, setGlobalPlayerCurrentResult)
        const resizeablePlayerDefaultOptions = {
            x: 0,
            y: 0,
            width: "100%",
            height: "100em",
        }

        resizeablePlayer =

            <div className="ratio ratio-16x9">

                <Rnd
                    default={resizeablePlayerDefaultOptions}
                    minWidth="200px"
                    minHeight="150px"
                >
                    <MoveVideoButton/>
                    <CloseVideoButton/>
                    {player}

                </Rnd>
            </div>


    }

    return (
        <div className="container">
            <div className="row">

                <div className="player-flutuante col-md-3 col-12 player mb-4 pr-3">
                    {resizeablePlayer}

                </div>
            </div>
        </div>
    )

}

export default GlobalPlayer;
