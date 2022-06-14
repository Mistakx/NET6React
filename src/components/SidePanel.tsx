import React from 'react';
import '../styles/Sidepanel.css';
import {useNavigate} from "react-router-dom";

function SidePanel(): JSX.Element {

    const navigate = useNavigate();

    let sidePanel;
    if (window.sessionStorage.getItem("sessionToken")) {
        sidePanel = <header id="header" className="d-flex flex-column justify-content-center">

            <nav id="navbar" className="navbar nav-menu">

                <ul>

                    <li>
                        <div className="clickable nav-link scrollto"
                             onClick={() => {
                                 navigate('/home');
                             }}>
                            <i className="bx bx-home"></i>
                            <span>Home</span>
                        </div>
                    </li>

                    <li>
                        <div className="clickable nav-link scrollto"
                             onClick={() => {
                                 navigate('/trending');
                             }}>
                            <i className="bx bxs-flame"></i>
                            <span>Trending</span>
                        </div>
                    </li>

                    <li>
                        <div className="clickable nav-link scrollto"
                             onClick={() => {
                                 navigate('/search');
                             }}>
                            <i className="bx bx-search-alt"></i>
                            <span>Search</span>
                        </div>
                    </li>

                    <li>
                        <div className="clickable nav-link scrollto"
                             onClick={() => {
                                 navigate('/community');
                             }}>
                            <i className="bx bx-user"></i>
                            <span>Community</span>
                        </div>
                    </li>

                    <li>
                        <div className="clickable nav-link scrollto"
                             onClick={() => {
                                 navigate('/following');
                             }}>
                            <i className="bx bx-heart"></i>
                            <span>Following</span>
                        </div>
                    </li>

                    <li>
                        <div className="clickable nav-link scrollto"
                             onClick={() => {
                                 navigate('/user/' + window.sessionStorage.getItem("username"));

                             }}>
                            <i className='bx bxs-playlist'></i>
                            <span>My Playlists</span>
                        </div>
                    </li>

                </ul>
            </nav>

        </header>

    }

    return (

        <div>
            {sidePanel}
        </div>

    )

}

export default SidePanel;
