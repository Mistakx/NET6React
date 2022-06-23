import AuthenticatedSearchBar from "./searchBar/AuthenticatedSearchBar";
import SearchResultsList from "./SearchResultsList";
import '../../../styles/SearchPage.css';
import React, { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import UserPlaylistsModalStore from "../../../stores/modals/UserPlaylistsModalStore";
import UserPlaylistsModal from "../../modals/userPlaylistsModal/UserPlaylistsModal";

function SearchPage(): JSX.Element {

    const setShowingPlaylistsModal = UserPlaylistsModalStore(state => state.setShowingPlaylistsModal)

    useEffect(() => {
        AOS.init();
        setShowingPlaylistsModal(false)
    }, []);

    return (

        <div>

            <UserPlaylistsModal/>

            <section id="services" className="services">
                <div className="container" >

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

        </div>

    )
}

export default SearchPage;
