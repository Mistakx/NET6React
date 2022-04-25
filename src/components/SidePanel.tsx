import React from 'react';
import '../styles/style.css';

function SidePanel(): JSX.Element {

    return (

        <header id="header" className="d-flex flex-column justify-content-center">

            <nav id="navbar" className="navbar nav-menu">
                <ul>
                    <li><a href="#hero" className="nav-link scrollto active"><span>Home</span> <i
                        className="bx bx-home"></i></a></li>
                    <li><a href="#" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight"
                           aria-controls="offcanvasRight"
                           className="nav-link scrollto"><span>Search</span><i className="bx bx-search-alt"></i> </a>
                    </li>
                    <li><a href="profile" className="nav-link scrollto"> <span>Profile</span><i
                        className="bx bx-user"></i></a></li>
                </ul>
            </nav>

        </header>

    )

}

export default SidePanel;