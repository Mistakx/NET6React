import React from 'react';
import '../../styles/style.css';
import SidePanel from "../SidePanel";
import User from "./User";
import PlaylistItem from "./PlaylistItem";
import PlaylistsList from "./PlaylistsList";
import TopBar from "./TopBar";
import FloatingPlayer from "../searchPage/FloatingPlayer";

function ProfilePage(): JSX.Element {

    return (


        <div>


            <SidePanel/>

            <main id="main">

                <section id="services" className="services">

                    <div className="container" data-aos="fade-up">

                        <TopBar/>

                        <div className="row">

                            <User/>

                            <PlaylistsList/>

                        </div>

                    </div>

                </section>

            </main>

        </div>

    )

}

export default ProfilePage;
