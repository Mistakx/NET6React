import React, {useState} from 'react';
import PlayerStore from '../../stores/PlayerStore'
import CloseVideoButton from "./CloseVideoButton";
import {Rnd} from "react-rnd";
import MoveVideoButton from "./MoveVideoButton";
import {PlayerFactory} from "./PlayerFactory";

function ResizeablePlayer(): JSX.Element {

    const playingGenericResult = PlayerStore(state => state.playingGenericResult)

    const [playerStarted, setPlayerStarted] = useState(false)

    let resizeablePlayer;
    if (playingGenericResult) {
        let player = PlayerFactory.createPlayer(playingGenericResult, setPlayerStarted)
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
        <div>
            {resizeablePlayer}
        </div>
    )

}

export default ResizeablePlayer;
