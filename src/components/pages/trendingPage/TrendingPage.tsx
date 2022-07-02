import '../../../styles/SearchPage.css';
import React, {useEffect} from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import TrendingResultsList from "./TrendingResultsList";
import TopBar from "../../TopBar";
import UserPlaylistsModal from "../../modals/userPlaylistsModal/UserPlaylistsModal";
import UserPlaylistsModalStore from "../../../stores/modals/UserPlaylistsModalStore";

function TrendingPage(): JSX.Element {

    const resetUserPlaylistsModal = UserPlaylistsModalStore(state => state.resetUserPlaylistsModal)

    useEffect(() => {
        AOS.init();
        resetUserPlaylistsModal()
    }, []);

    return (

        <div>

            <UserPlaylistsModal/>

            <section id="services" className="services">
                <div className="container">


                    <div className="row">


                        <div className="col-md-10 offset-md-1">

                            <TopBar text={"Trending This Week 🔥"}></TopBar>

                            <div className="">

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
