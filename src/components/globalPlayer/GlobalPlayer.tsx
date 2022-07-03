import React from 'react';
import GlobalPlayerStore from '../../stores/players/GlobalPlayerStore'
import CloseVideoButton from "./CloseVideoButton";
import {Rnd} from "react-rnd";
import MoveVideoButton from "./MoveVideoButton";
import {PlayerFactory} from "../players/PlayerFactory";

function GlobalPlayer(): JSX.Element {

    const globalPlayerCurrentResult = GlobalPlayerStore(state => state.globalPlayerCurrentResult)
    const setGlobalPlayerCurrentResult = GlobalPlayerStore(state => state.setGlobalPlayerCurrentResult)
    const searchCurrentResults = GlobalPlayerStore(state => state.searchCurrentResults)

    let resizeablePlayer;
    if (globalPlayerCurrentResult && searchCurrentResults) {
        let player = PlayerFactory.createPlayer(globalPlayerCurrentResult, setGlobalPlayerCurrentResult, false, searchCurrentResults)
        const resizeablePlayerDefaultOptions = {
            x: 0,
            y: 0,
            width: "100%",
            height: "100em",
        }

        resizeablePlayer =

            <div className="ratio ratio-16x9" >
                {/* TODO botão para fechar não é percetivel no mobile */}

                <Rnd
                    default={resizeablePlayerDefaultOptions}
                    minWidth="200px"
                    minHeight="100%"
                    style={{zIndex:"9999"}}
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
