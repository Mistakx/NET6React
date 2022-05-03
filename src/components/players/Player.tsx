import React from 'react';
import PlayerStore from '../../stores/PlayerStore'

function Player(): JSX.Element {

    const currentPlayer = PlayerStore(state => state.currentPlayer)

    return (<div className="col-12 h-100 d-inline-block"> {currentPlayer} </div>)

}

export default Player;
