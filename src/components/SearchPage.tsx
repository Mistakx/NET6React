import React from 'react';
import Player from "./players/Player";
import AuthenticatedSearchBar from "./searchBar/AuthenticatedSearchBar";
import SearchResults from "./SearchResults";
import SidePanel from "./SidePanel";

function SearchPage(): JSX.Element {

    console.log("%cRendered search page.", "color: cyan")

    return (

        <div className="SearchPage">

            <section id="services" className="services">
                <div className="container" data-aos="fade-up">

                    <div className="row">
                        <div className="col-md-10 offset-md-1">

                            <div className="search-header">
                                <h2 id="offcanvasRightLabel">Search <small></small></h2>
                            </div>


                            <div className="search-body">

                                <AuthenticatedSearchBar/>

                                <SearchResults/>

                            </div>


                        </div>
                    </div>
                </div>

            </section>


            <Player/>


            <SidePanel/>

        </div>

    )
}

export default SearchPage;
