import React from 'react';
import '../../styles/Playlist.css'
import '../../styles/SearchPage.css'
import SidePanel from "../SidePanel";
import TopBar from "../profilePage/TopBar";
import MusicList from "./MusicList";

function PlaylistPage(): JSX.Element {

    return (

        <div>

            <SidePanel/>

            <main id="main">

                <section id="services" className="playlist">
                    <div className="container" data-aos="fade-up">
                        <TopBar/>

                        <div className="row">

                            {/* <div className="d-flex flex-wrap" id="grid"> */}

                                <div className="col-md-8 col-12" id="player">
                                    <div style={{position: "relative"}} className="align-items-stretch"
                                        data-aos="zoom-in" data-aos-delay="100">
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

                                <div className="col-md-4 col-12" id="playlist">

                                    <div className="card align-items-stretch mt-4 mt-md-0" data-aos="zoom-in" data-aos-delay="200">

                                        <div className="card-profile position-relative"
                                            style={{backgroundImage: "url(https://cdn.pixabay.com/photo/2017/11/24/10/43/album-2974646_960_720.jpg)"}}>
                                            <h2 className="text-white text-center text-wrap position-absolute top-50 start-50 translate-middle">Name the playlist</h2>
                                        </div>


                                        <div className="overflow-auto">

                                            <ul className="list-group">
                                                <MusicList />
                                                <MusicList />
                                                <MusicList />
                                                <MusicList />
                                                <MusicList />
                                                <MusicList />
                                                <MusicList />
                                                <MusicList />
                                                <MusicList />
                                                <MusicList />
                                            </ul>

                                        </div>
                                    </div>

                                </div>

                                <div className="col-md-8 col-12" id="titulo">
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
