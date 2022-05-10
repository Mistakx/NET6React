import AuthenticatedSearchBar from "./searchBar/AuthenticatedSearchBar";
import SearchResultsList from "./searchItems/SearchResultsList";
import FloatingPlayer from "./FloatingPlayer";
import '../../styles/SearchPage.css';
import React, { useEffect } from "react";
import "aos/dist/aos.css";

function SearchPage(): JSX.Element {

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

        </div>

    )
}

export default SearchPage;
