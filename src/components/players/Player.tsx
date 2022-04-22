import React from 'react';
import PlayerStore from '../../stores/PlayerStore'

function Player(): JSX.Element {

    const currentPlayer = PlayerStore(state => state.currentPlayer)

    return (<div id="Player"> {currentPlayer} </div>)

}

export default Player;
