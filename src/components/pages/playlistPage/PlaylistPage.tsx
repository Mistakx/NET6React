import '../../../styles/Playlist.css'
import '../../../styles/SearchPage.css'
import React, {useEffect, useState} from "react";
import "aos/dist/aos.css";
import {useParams} from "react-router-dom";
import PlaylistContentList from "./PlaylistItems/PlaylistContentList";
import PlaylistCover from "./PlaylistItems/PlaylistCover";
import PlaylistPlayer from "./PlaylistPlayer/PlaylistPlayer";
import PlaylistPagePlayerStore from "../../../stores/players/PlaylistPagePlayerStore";
import AOS from "aos";
import PlaylistTopBar from "./PlaylistTopBar";

function PlaylistPage(): JSX.Element {

    const playlistId = useParams().playlistId

    const setPlaylistPlayerGeneralizedResult = PlaylistPagePlayerStore(state => state.setPlaylistPlayerCurrentResult)
    const setPlaylistCurrentResults = PlaylistPagePlayerStore(state => state.setPlaylistCurrentResults)

    useEffect(() => {
        AOS.init();
        (async () => {
            setPlaylistPlayerGeneralizedResult(null)
            setPlaylistCurrentResults(null)
        })()
    }, []);

    let playlistCover;
    if (playlistId) {
        playlistCover = <PlaylistCover playlistId={playlistId}/>
    }

    let playlistsItemsList;
    if (playlistId) {
        playlistsItemsList = <PlaylistContentList playlistId={playlistId}/>
    }

    return (

        <div>

            <main id="main">

                <section id="services" className="playlist">
                    <div className="container">

                        <PlaylistTopBar/>

                        <div className="row">

                            <PlaylistPlayer/>

                            <div className="col-lg-4 col-md-4 col-sm-12 col-12" id="playlist" data-aos="fade-left"
                                 data-aos-delay="200">

                                <div className="card align-items-stretch mt-4 mt-md-0">

                                    {playlistCover}
                                    {playlistsItemsList}

                                </div>

                            </div>

                        </div>
                    </div>

                </section>

            </main>

        </div>

    )

}

export default PlaylistPage;
