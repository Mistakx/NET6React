import React, {useState} from 'react';
import PlayerStore from '../../stores/PlayerStore'
import CloseVideoButton from "./CloseVideoButton";
import { Rnd } from "react-rnd";

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
            height: "100%",
        }
        resizeablePlayer = <Rnd
            default={resizeablePlayerDefaultOptions}
            minWidth={100}
            minHeight={100}
        >
            <CloseVideoButton/>
            {player}

        </Rnd>
    }


    return (

        <div>
            {resizeablePlayer}
        </div>)

}

export default ResizeablePlayer;
