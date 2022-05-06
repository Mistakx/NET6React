import React, {useState} from 'react';
import PlayerStore from '../../stores/PlayerStore'
import CloseVideoButton from "./CloseVideoButton";
import {Rnd} from "react-rnd";
import MoveVideoButton from "./MoveVideoButton";

function ResizeablePlayer(): JSX.Element {

    const playingId = PlayerStore(state => state.playingId)
    const playingThumbnailUrl = PlayerStore(state => state.playingThumbnailUrl)
    const playerCreator = PlayerStore(state => state.playerCreator)

    const [playerStarted, setPlayerStarted] = useState(false)

    let resizeablePlayer;
    if (playerCreator && playingId) {
        let player = playerCreator.create(playingId, setPlayerStarted, playingThumbnailUrl)
        const resizeablePlayerDefaultOptions = {
            x: 0,
            y: 0,
            width: "100%",
            height: "100em",
        }

        resizeablePlayer =

            <Rnd
                default={resizeablePlayerDefaultOptions}
                minWidth="200px"
                minHeight="150px"
            >
                <MoveVideoButton/>
                <CloseVideoButton/>
                {player}

            </Rnd>


    }


    return (
        <div className="ratio ratio-16x9">
            {resizeablePlayer}
        </div>
    )
}

export default ResizeablePlayer;
