import '../../styles/style.css';
import User from "./User";
import PlaylistsList from "./PlaylistsList";
import React, {useEffect} from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import axios from "axios";
import {UserProfile} from "../../models/backendRequests/UserProfile";
import TopBar from "../TopBar";
import FloatingPlayer from "../searchPage/FloatingPlayer";

function ProfilePage(): JSX.Element {

    return (

        <div>

            <main id="main">
                <section id="services" className="services">
                    <div className="container">

                        <TopBar text="My Playlists Page"/>

                        <div className="row">
                            <User/>
                            <PlaylistsList/>
                        </div>

                    </div>
                </section>
            </main>

            <FloatingPlayer/>

        </div>

    )

}

export default ProfilePage;
