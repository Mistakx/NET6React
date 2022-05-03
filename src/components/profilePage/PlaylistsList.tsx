import React from 'react';
import '../../styles/style.css';
import SidePanel from "../SidePanel";
import User from "./User";
import Playlist from "./Playlist";

function PlaylistsList(): JSX.Element {

    return (

        <div className="col-md-8">

            <div className="row results">

                <Playlist/>
                <Playlist/>
                <Playlist/>
                <Playlist/>
                <Playlist/>
                <Playlist/>

            </div>

        </div>


    )

}

export default PlaylistsList;
