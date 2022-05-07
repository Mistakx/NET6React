import React from 'react';
import '../../styles/style.css';
import SidePanel from "../SidePanel";
import User from "./User";
import PlaylistItem from "./PlaylistItem";
import PlaylistsList from "./PlaylistsList";
import {ProfileTopBarProperties} from "../../models/components/profilePage/ProfileTopBarProperties";

function ProfileTopBar(props: ProfileTopBarProperties): JSX.Element {

    return (


        <div className="row">
            <div className="col-12">
                <div className="iconbox-blue rounded">
                    <nav aria-label="breadcrumb ">
                        <ol className="breadcrumb p-3">
                            <li className="breadcrumb-item active text-white" aria-current="page">Profile page - {props.id}
                            </li>
                        </ol>
                    </nav>
                </div>
            </div>
        </div>


    )

}

export default ProfileTopBar;
