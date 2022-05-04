import React from 'react';
import Player from "../players/Player";
import AuthenticatedSearchBar from "./searchBar/AuthenticatedSearchBar";
import SearchResultsList from "./searchItems/SearchResultsList";
import SidePanel from "../SidePanel";
import SearchLabel from "./searchBar/SearchLabel";

function FloatingPlayer(): JSX.Element {

    return (

        <div className="container">
            <div className="row">

                <div className="player-flutuante col-md-3 col-12 player mb-4 pr-3" id="player">


                    <div className="ratio ratio-16x9">
                        <Player/>
                    </div>

                </div>
            </div>
        </div>


    )
}

export default FloatingPlayer;
