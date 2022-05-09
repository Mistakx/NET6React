import '../../styles/Playlist.css'
import '../../styles/SearchPage.css'
import React, {useEffect} from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import TopBar from "../TopBar";
import {useParams} from "react-router-dom";
import axios from "axios";
import {PlaylistDetails} from "../../models/backendRequests/PlaylistDetails";
import PlaylistItemsList from "./PlaylistItemsList";

function PlaylistPage(): JSX.Element {

    const playlistId = useParams().playlistId

    const [playlistInformation, setPlaylistInformation] = React.useState<PlaylistDetails>();

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
    }, [playlistId]);
    
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

    
    return (

        <div>

            <main id="main">

                <section id="services" className="playlist">
                    <div className="container">

                        <TopBar text={"Playlist Page"}/>

                        <div className="row">

                            {/* <div className="d-flex flex-wrap" id="grid"> */}

                            <div className="col-md-8 col-12" id="player">
                                <div style={{position: "relative"}} className="align-items-stretch"
                                     data-aos="fade-right" data-aos-delay="100">
                                    <div className="ratio ratio-16x9">

                                        <iframe
                                            className="card col-12 h-100 d-inline-block"
                                            src="https://www.youtube.com/embed/5yDuXbaaJwQ"
                                            // frameborder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            // allowfullscreen
                                        >

                                        </iframe>

                                    </div>
                                    <div className="player-options rounded">
                                        <button className="btn btn-link text-white">
                                            <i className='bx bx-skip-previous h3'></i>
                                        </button>
                                        <button className="btn btn-link text-white">
                                            <i className='bx bx-skip-next h3'></i>
                                        </button>
                                    </div>

                                </div>
                            </div>

                            <div className="col-md-4 col-12" id="playlist" data-aos="fade-left" data-aos-delay="200">

                                <div className="card align-items-stretch mt-4 mt-md-0">

                                    <div className="card-profile position-relative"
                                         style={{backgroundImage: "url(https://cdn.pixabay.com/photo/2017/11/24/10/43/album-2974646_960_720.jpg)"}}>
                                        <h2 className="text-white text-center text-wrap position-absolute top-50 start-50 translate-middle">
                                            {playlistInformation?.title}
                                        </h2>
                                    </div>


                                    <PlaylistItemsList playlists={playlistInformation?.contents}/>

                                </div>

                            </div>

                            <div className="col-md-8 col-12" id="titulo" data-aos="fade-right" data-aos-delay="200">
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
