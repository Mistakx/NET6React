import React from 'react';
import '../styles/style.css';

function SidePanel(): JSX.Element {

    return (

        <header id="header" className="d-flex flex-column justify-content-center">

            <nav id="navbar" className="navbar nav-menu">

                <ul>

                    {/*<li>*/}
                    {/*    <a href="" className="nav-link scrollto active">*/}
                    {/*        <i className="bx bx-home"></i>*/}
                    {/*        <span>Home</span>*/}
                    {/*    </a>*/}
                    {/*</li>*/}

                    {/*<li>*/}
                    {/*    <a href="" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight"*/}
                    {/*       aria-controls="offcanvasRight"*/}
                    {/*       className="nav-link scrollto">*/}
                    {/*        <i className="bx bx-search-alt"></i>*/}
                    {/*        <span>Search</span>*/}
                    {/*    </a>*/}
                    {/*</li>*/}

                    <li>
                        <a href="/" className="nav-link scrollto">
                            <i className="bx bx-search-alt"></i>
                            <span>Search</span>
                        </a>
                    </li>

                    <li>
                        <a href="/profile" className="nav-link scrollto">
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
