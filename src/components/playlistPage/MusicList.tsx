import React from 'react';
import '../../styles/style.css';
import SidePanel from "../SidePanel";
// import User from "./User";
// import PlaylistItem from "./PlaylistItem";
// import PlaylistsList from "./PlaylistsList";

function MusicList(): JSX.Element {

    return (

        <li className="list-group-item d-flex justify-content-between align-items-start align-middle">
            <div className="ms-2 me-auto">
                <h6 className="fw-bold">Music title</h6>
            </div>
            <span className="badge"><i className='bx bx-menu h5'></i></span>
        </li>

    )

}

export default MusicList;
