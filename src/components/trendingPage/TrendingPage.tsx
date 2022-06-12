import '../../styles/SearchPage.css';
import React, {useEffect} from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import TrendingResultsList from "./searchItems/TrendingResultsList";

function TrendingPage(): JSX.Element {

    useEffect(() => {
        AOS.init();
    }, []);

    return (

        <div>

            <section id="services" className="services">
                <div className="container">

                    <div className="row">

                        <div className="col-md-10 offset-md-1">

                            <div className="search-body">

                                <TrendingResultsList/>

                            </div>


                        </div>
                    </div>
                </div>

            </section>

        </div>

    )
}

export default TrendingPage;
