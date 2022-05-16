import '../../styles/Playlist.css'
import '../../styles/SearchPage.css'
import React, {useEffect} from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import TopBar from "../TopBar";
import {useParams} from "react-router-dom";
import axios from "axios";
import {PlaylistDetails} from "../../models/backendRequests/PlaylistRoute/PlaylistDetails";
import PlaylistItemsList from "./PlaylistItemsList";
import PlaylistTitle from "./PlaylistTitle";
import PlaylistPlayer from "./PlaylistPlayer";
import PlaylistPagePlayerStore from "../../stores/PlaylistPagePlayerStore";

function PlaylistPage(): JSX.Element {

    const playlistId = useParams().playlistId

    const [playlistInformation, setPlaylistInformation] = React.useState<PlaylistDetails>();

    const setPlayingGenericResult = PlaylistPagePlayerStore(state => state.setPlayingGenericResult)
    const setPlayingGenericResultPlaylistIndex = PlaylistPagePlayerStore(state => state.setPlayingGenericResultPlaylistIndex)


    async function getPlaylist(playlistId: string) {
        const url = "/Playlist/" + playlistId;

        const options = {
            method: 'GET',
            url: url,
        };

        // @ts-ignore
        let profileResponse = await axios(options);
        let profile: PlaylistDetails = profileResponse.data;
        return profile;

    }

    useEffect(() => {
        if (!playlistInformation && playlistId) {
            (async () => {
                setPlaylistInformation(await getPlaylist(playlistId));
            })()
        }
    }, []);

    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

    useEffect(() => {
        setPlayingGenericResult(null)
        setPlayingGenericResultPlaylistIndex(null)
    },[])

    return (

        <div>

            <main id="main">

                <section id="services" className="playlist">
                    <div className="container">

                        <TopBar text={"Playlist Page"}/>

                        <div className="row">

                            {/* <div className="d-flex flex-wrap" id="grid"> */}

                            <PlaylistPlayer/>

                            <div className="col-lg-4 col-12" id="playlist" data-aos="fade-left" data-aos-delay="200">

                                <div className="card align-items-stretch mt-4 mt-md-0">

                                    <PlaylistTitle title={playlistInformation?.title}/>

                                    <PlaylistItemsList playlists={playlistInformation?.contents}/>

                                </div>

                            </div>

                            <div className="col-lg-8 col-12" id="titulo" data-aos="fade-right" data-aos-delay="200">
                                <div className="social text-white rounded">
                                    <h3 className="p-3">Nome Música</h3>
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
