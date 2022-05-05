import React from 'react';
import '../../styles/style.css';
import SidePanel from "../SidePanel";
import User from "./User";
import PlaylistItem from "./PlaylistItem";

function PlaylistsList(): JSX.Element {

    return (

        <div className="col-md-8">

            <div className="row results">

                <PlaylistItem/>
                <PlaylistItem/>
                <PlaylistItem/>
                <PlaylistItem/>
                <PlaylistItem/>
                <PlaylistItem/>

            </div>

        </div>


    )

}

export default PlaylistsList;
