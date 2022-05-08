// import React from 'react';
import AuthenticatedSearchBar from "./searchBar/AuthenticatedSearchBar";
import SearchResultsList from "./searchItems/SearchResultsList";
import SidePanel from "../SidePanel";
import FloatingPlayer from "./FloatingPlayer";
import ModalList from "./modalList/ModalList";
import '../../styles/SearchPage.css';
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function SearchPage(): JSX.Element {

    console.log("%cRendered search page.", "color: cyan")
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);  
    return (

        <div>

            <section id="services" className="services">
                <div className="container" data-aos="zoom-in" data-aos-duration="1000">

                    <div className="row">

                        <div className="col-md-10 offset-md-1">

                            <div className="search-body">

                                <AuthenticatedSearchBar/>
                                
                                <SearchResultsList/>

                            </div>


                        </div>
                    </div>
                </div>

            </section>

            <FloatingPlayer/>

            <ModalList/>

        </div>

    )
}

export default SearchPage;
