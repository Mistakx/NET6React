import '../../styles/Playlist.css'
import '../../styles/SearchPage.css'
import React, {useEffect, useState} from "react";
import "aos/dist/aos.css";
import TopBar from "../TopBar";
import {useParams} from "react-router-dom";
import PlaylistItemsList from "./PlaylistItemsList";
import PlaylistCover from "./PlaylistCover";
import PlaylistPlayer from "./PlaylistPlayer";
import PlaylistPagePlayerStore from "../../stores/PlaylistPagePlayerStore";
import {PlaylistBasicDetails} from "../../models/backendRequests/PlaylistRoute/PlaylistBasicDetails";
import PlaylistRequests from "../../requests/backendRequests/PlaylistRequests";
import AOS from "aos";
import AlertStore from "../../stores/AlertStore";

function PlaylistPage(): JSX.Element {

    const playlistId = useParams().playlistId

    const setPlayingGenericResult = PlaylistPagePlayerStore(state => state.setPlayingGenericResult)
    const setPlayingGenericResultPlaylistIndex = PlaylistPagePlayerStore(state => state.setPlayingGenericResultPlaylistIndex)

    useEffect(() => {
        AOS.init();
        (async () => {
            setPlayingGenericResult(null)
            setPlayingGenericResultPlaylistIndex(null)
        })()
    }, []);

    return (

        <div>

            <main id="main">

                <section id="services" className="playlist">
                    <div className="container">

                        <TopBar text={"Playlist Page"}/>

                        <div className="row">

                            {/* <div className="d-flex flex-wrap" id="grid"> */}

                            <PlaylistPlayer/>

                            <div className="col-lg-4 col-md-4 col-12" id="playlist" data-aos="fade-left"
                                 data-aos-delay="200">

                                <div className="card align-items-stretch mt-4 mt-md-0">

                                    <PlaylistCover playlistId={playlistId}/>

                                    <PlaylistItemsList playlistId={playlistId!}/>

                                </div>

                            </div>

                            {/* </div> */}

                        </div>
                    </div>

                </section>

            </main>

        </div>

    )

}

export default PlaylistPage;
