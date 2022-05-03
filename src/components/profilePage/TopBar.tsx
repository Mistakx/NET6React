import React from 'react';
import '../../styles/style.css';
import SidePanel from "../SidePanel";
import User from "./User";
import Playlist from "./Playlist";
import PlaylistsList from "./PlaylistsList";

function TopBar(): JSX.Element {

    return (


        <div className="row">
            <div className="col-12">
                <div className="iconbox-blue rounded">
                    <nav aria-label="breadcrumb ">
                        <ol className="breadcrumb p-3">
                            <li className="breadcrumb-item active text-white" aria-current="page">Profile page
                            </li>
                        </ol>
                    </nav>
                </div>
            </div>
        </div>


    )

}

export default TopBar;
