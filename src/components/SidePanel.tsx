import React from 'react';
import '../styles/Sidepanel.css';
import {useNavigate} from "react-router-dom";
import LoginStore from "../stores/LoginStore";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPeopleGroup, faTowerBroadcast} from "@fortawesome/free-solid-svg-icons";

function SidePanel(): JSX.Element {

    const navigate = useNavigate();

    const isAuthenticated = LoginStore(state => state.isAuthenticated)

    let sidePanel;
    if (isAuthenticated) {
        sidePanel = <header id="header" className="d-flex flex-column justify-content-center">

            <nav id="navbar" className="navbar nav-menu">

                <ul>

                    <li>
                        <div className="clickable nav-link scrollto"
                             onClick={() => {
                                 navigate('/trending');
                             }}>
                            <i className='bx bxs-hot'></i>
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
                             }}
                        >
                            <FontAwesomeIcon icon={faPeopleGroup} />
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
                                 navigate('/user/' + localStorage.getItem("username"));

                             }}>
                            <i className='bx bxs-playlist'></i>
                            <span>My Profile</span>
                        </div>
                    </li>

                    <li>
                        <div className="clickable nav-link scrollto sinal"
                            data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"
                            title="See online friends"
                             onClick={() => {
                                 navigate('/user/' + localStorage.getItem("username"));

                             }}>
                            <FontAwesomeIcon icon={faTowerBroadcast} />
                            <span>Live Room</span>
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
