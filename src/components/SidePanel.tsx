import React from 'react';
import '../styles/Sidepanel.css';

function SidePanel(): JSX.Element {

    return (

        <header id="header" className="d-flex flex-column justify-content-center">

            <nav id="navbar" className="navbar nav-menu">

                <ul>

                    <li>
                        <a
                            className="clickable nav-link scrollto"
                            onClick={() => {
                                window.location.href = "/home"
                            }}>
                            <i className="bx bx-home"></i>
                            <span>Home</span>
                        </a>
                    </li>

                    <li>
                        <a
                            className="clickable nav-link scrollto"
                            onClick={() => {
                                window.location.href = "/search"
                            }}>
                            <i className="bx bx-search-alt"></i>
                            <span>Search</span>
                        </a>
                    </li>

                    <li>
                        <a
                            className="nav-link scrollto"
                            onClick={() => {
                                window.location.href = "/playlist"
                            }}>
                            <i className="bx bx-search-alt"></i>
                            <span>Playlist</span>
                        </a>
                    </li>

                    <li>
                        <a className="nav-link scrollto"
                           onClick={()=>{window.location.href="/profile"}}>
                        <i className="bx bx-user"></i>
                            <span>Profile</span>
                        </a>
                    </li>

                </ul>
            </nav>

        </header>

    )

}

export default SidePanel;
