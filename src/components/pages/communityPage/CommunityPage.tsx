import '../../../styles/SearchPage.css';
import React, { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import CommunitySearchBar from "./searchBar/CommunitySearchBar";
import CommunityResultsList from "./searchItems/CommunityResultsList";

function CommunityPage(): JSX.Element {

    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <section id="services" className="services">
            <div className="container" >

                <div className="row">

                    <div className="col-md-10 offset-md-1">

                        <div className="search-body">

                            <CommunitySearchBar/>
                            
                            <CommunityResultsList/>

                        </div>

                    </div>
                </div>
            </div>

        </section>

    )
}

export default CommunityPage;
