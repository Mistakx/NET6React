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
                            <span className='d-none d-sm-block'>Home</span>
                        </div>
                    </li>

                    <li>
                        <div className="clickable nav-link scrollto"
                             onClick={() => {
                                 navigate('/trending');
                             }}>
                            <i className='bx bxs-hot'></i>
                            <span className='d-none d-sm-block'>Trending</span>
                        </div>
                    </li>

                    <li>
                        <div className="clickable nav-link scrollto"
                             onClick={() => {
                                 navigate('/search');
                             }}>
                            <i className="bx bx-search-alt"></i>
                            <span className='d-none d-sm-block'>Search</span>
                        </div>
                    </li>

                    <li>
                        <div className="clickable nav-link scrollto"
                             onClick={() => {
                                 navigate('/community');
                             }}>
                            <i className='bx bx-shape-circle'></i>
                            <span className='d-none d-sm-block'>Community</span>
                        </div>
                    </li>

                    <li>
                        <div className="clickable nav-link scrollto"
                             onClick={() => {
                                 navigate('/following');
                             }}>
                            <i className="bx bx-heart"></i>
                            <span className='d-none d-sm-block'>Following</span>
                        </div>
                    </li>

                    <li>
                        <div className="clickable nav-link scrollto"
                             onClick={() => {
                                 navigate('/user/' + window.sessionStorage.getItem("username"));

                             }}>
                            <i className='bx bxs-playlist'></i>
                            <span className='d-none d-sm-block'>My Profile</span>
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
