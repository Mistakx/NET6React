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
import EditOrCreatePlaylistModal from "../../modals/EditOrCreatePlaylistModal";
import EditOrCreatePlaylistModalStore from "../../../stores/modals/EditOrCreatePlaylistModalStore";
import FollowersModalStore from "../../../stores/modals/FollowersModalStore";
import FollowersModal from "../../modals/followersModal/FollowersModal";
import StatisticsModalStore from "../../../stores/modals/StatisticsModalStore";
import StatisticsModal from "../../modals/statisticsModal/StatisticsModal";
import {EditOrCreatePlaylistModalState} from "../../../models/states/modals/EditOrCreatePlaylistModalState";

function PlaylistPage(): JSX.Element {

    const playlistId = useParams().playlistId

    const resetPlaylistPagePlayerState = PlaylistPagePlayerStore(state => state.resetPlaylistPagePlayerState)
    const resetEditOrCreatePlaylistModal = EditOrCreatePlaylistModalStore(state => state.resetEditOrCreatePlaylistModal)
    const resetFollowersModal = FollowersModalStore(state => state.resetFollowersModal)
    const resetStatisticsModal = StatisticsModalStore(state => state.resetStatisticsModal)

    useEffect(() => {
        AOS.init();

        resetPlaylistPagePlayerState()
        resetEditOrCreatePlaylistModal()
        resetFollowersModal()
        resetStatisticsModal()

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

            <EditOrCreatePlaylistModal/>
            <FollowersModal/>
            <StatisticsModal/>

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
