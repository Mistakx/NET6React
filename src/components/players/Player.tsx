import React, {useEffect, useState} from 'react';
import PlayerStore from '../../stores/PlayerStore'
import SearchedListStore from "../../stores/SearchedListStore";
import {PlayerCreator} from "../../playerCreators/PlayerCreator";
import CloseVideoButton from "./CloseVideoButton";

function Player(): JSX.Element {

    const playingId = PlayerStore(state => state.playingId)
    const playingThumbnailUrl = PlayerStore(state => state.playingThumbnailUrl)
    const playerCreator = PlayerStore(state => state.playerCreator)

    const [playerStarted, setPlayerStarted] = useState(false)
    // const [closePlayerButton, setClosePlayerButton] = useState<JSX.Element | null>(<div/>)

    useEffect((() => {
            setPlayerStarted(false)
            if (playingId) {
            }
        }), [playerStarted]
    )

    let player;
    let closePlayerButton;
    if (playerCreator && playingId) {
        player = playerCreator.create(playingId, setPlayerStarted, playingThumbnailUrl)
        closePlayerButton = <CloseVideoButton/>
    }

    return (
        <div>
            {closePlayerButton}
            {player}
        </div>)

}

export default Player;
