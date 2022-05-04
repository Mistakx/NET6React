import React from 'react';
import AuthenticatedSearchBar from "./searchBar/AuthenticatedSearchBar";
import SearchResultsList from "./searchItems/SearchResultsList";
import SidePanel from "../SidePanel";
import FloatingPlayer from "./FloatingPlayer";

function SearchPage(): JSX.Element {

    console.log("%cRendered search page.", "color: cyan")

    return (

        <div>

            <section id="services" className="services">
                <div className="container" data-aos="fade-up">

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

            <SidePanel/>

            <FloatingPlayer/>


        </div>



    )
}

export default SearchPage;
