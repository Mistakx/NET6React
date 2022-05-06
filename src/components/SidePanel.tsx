import React from 'react';
import '../styles/Sidepanel.css';

function SidePanel(): JSX.Element {

    return (

        <header id="header" className="d-flex flex-column justify-content-center">

            <nav id="navbar" className="navbar nav-menu">

                <ul>

                    <li>
                        <div
                            className="clickable nav-link scrollto"
                            onClick={() => {
                                window.location.href = "/home"
                            }}>
                            <i className="bx bx-home"></i>
                            <span>Home</span>
                        </div>
                    </li>

                    <li>
                        <div
                            className="clickable nav-link scrollto"
                            onClick={() => {
                                window.location.href = "/search"
                            }}>
                            <i className="bx bx-search-alt"></i>
                            <span>Search</span>
                        </div>
                    </li>

                    <li>
                        <div
                            className="clickable nav-link scrollto"
                            onClick={() => {
                                window.location.href = "/playlist"
                            }}>
                            <i className='bx bxs-playlist'></i>
                            <span>Playlist</span>
                        </div>
                    </li>

                    <li>
                        <div className="clickable nav-link scrollto"
                           onClick={()=>{window.location.href="/profile"}}>
                        <i className="bx bx-user"></i>
                            <span>Profile</span>
                        </div>
                    </li>

                </ul>
            </nav>

        </header>

    )

}

export default SidePanel;
