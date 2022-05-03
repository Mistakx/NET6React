import React from 'react';
import Player from "../players/Player";
import AuthenticatedSearchBar from "./searchBar/AuthenticatedSearchBar";
import SearchResultsList from "./searchResults/SearchResultsList";
import SidePanel from "../SidePanel";
import SearchLabel from "./searchBar/SearchLabel";

function FloatingPlayer(): JSX.Element {

    return (

        <div className="container">
            <div className="row">

                <div className="player-flutuante col-md-4 col-12 player mb-4 pr-3" id="player">

                    <button className="btn btn-link"><i className='bx bx-x'></i></button>

                    <div className="ratio ratio-16x9">
                        {/*<Player/>*/}
                        <iframe className="card col-12 h-100 d-inline-block"
                                src="https://www.youtube.com/embed/5yDuXbaaJwQ"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen>
                        </iframe>
                    </div>

                </div>
            </div>
        </div>


    )
}

export default FloatingPlayer;
