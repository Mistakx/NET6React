import React from 'react';
import PlayerStore from '../../stores/PlayerStore'

function Player(): JSX.Element {

    const currentPlayer = PlayerStore(state => state.currentPlayer)

    return (<div id="Player" style={{marginTop: "30px"}}> {currentPlayer} </div>)

}

export default Player;
