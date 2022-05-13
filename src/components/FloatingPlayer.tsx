import React from 'react';
import ResizeablePlayer from "./players/ResizeablePlayer";

function FloatingPlayer(): JSX.Element {

    return (

        <div className="container">
            <div className="row">

                <div className="player-flutuante col-md-3 col-12 player mb-4 pr-3">

                    <ResizeablePlayer/>

                </div>
            </div>
        </div>


    )
}

export default FloatingPlayer;
