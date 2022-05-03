import React from 'react';
import Player from "./players/Player";
import AuthenticatedSearchBar from "./searchBar/AuthenticatedSearchBar";
import SearchResultsList from "./searchResults/SearchResultsList";
import SidePanel from "./SidePanel";
import SearchLabel from "./searchBar/SearchLabel";

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

                                <Player/>

                                <SearchResultsList/>

                            </div>


                        </div>
                    </div>
                </div>

            </section>

            <SidePanel/>

        </div>

    )
}

export default SearchPage;
