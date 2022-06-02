import '../../styles/Playlist.css'
import '../../styles/SearchPage.css'
import React, {useEffect, useState} from "react";
import "aos/dist/aos.css";
import TopBar from "../TopBar";
import {useParams} from "react-router-dom";
import PlaylistItemsList from "./PlaylistItems/PlaylistItemsList";
import PlaylistCover from "./PlaylistItems/PlaylistCover";
import PlaylistPlayer from "./PlaylistPlayer/PlaylistPlayer";
import PlaylistPagePlayerStore from "../../stores/PlaylistPagePlayerStore";
import AOS from "aos";

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

    let playlistCover;
    if (playlistId) {
        playlistCover = <PlaylistCover playlistId={playlistId}/>
    }

    let playlistsItemsList;
    if (playlistId) {
        playlistsItemsList = <PlaylistItemsList playlistId={playlistId}/>
    }

    return (

        <div>

            <main id="main">

                <section id="services" className="playlist">
                    <div className="container">

                        <TopBar text={"Playlist Page"}/>

                        <div className="row">

                            <PlaylistPlayer/>

                            <div className="col-lg-4 col-md-4 col-sm-12 col-12" id="playlist" data-aos="fade-left"
                                 data-aos-delay="200">

                                <div className="card align-items-stretch mt-4 mt-md-0">

                                    {playlistCover}
                                    {playlistsItemsList}

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
