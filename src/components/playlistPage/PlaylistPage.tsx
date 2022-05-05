import React from 'react';
import '../../styles/Playlist.css'
import '../../styles/SearchPage.css'
import SidePanel from "../SidePanel";

function PlaylistPage(): JSX.Element {

    return (

        <div>

            <SidePanel/>

            <main id="main">

                <section id="services" className="services">
                    <div className="container" data-aos="fade-up">
                        <div className="row">
                            <div className="col-12">
                                <div className="iconbox-blue rounded">
                                    <nav aria-label="breadcrumb ">
                                        <ol className="breadcrumb p-3">
                                            <li className="breadcrumb-item active text-white" aria-current="page">My profile
                                            </li>
                                        </ol>
                                    </nav>
                                </div>
                            </div>
                        </div>


                        <div className="row">

                            <div className="d-flex flex-wrap" id="grid">

                                <div className="col-md-8 col-12 player" id="player">
                                    <div style={{position: "relative"}} className="align-items-stretch mb-4"
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
                                            <button className="btn btn-link text-white d-none" id="escolhaOut">
                                                <i className='bx bx-zoom-out h3' id='escolha-out'></i>
                                            </button>
                                            <button className="btn btn-link text-white" id="escolhaIn">
                                                <i className='bx bx-zoom-in h3' id='escolha-in'></i>
                                            </button>
                                        </div>

                                    </div>
                                </div>

                                <div className="col-md-4 col-12 ml-3" id="playlist">

                                    <div className="card align-items-stretch mt-4 mt-md-0" data-aos="zoom-in"
                                         data-aos-delay="200">
                                        <div className="card-profile rounded"
                                             style={{backgroundImage: "url(https://cdn.pixabay.com/photo/2017/11/24/10/43/album-2974646_960_720.jpg)"}}>
                                            <h2 className="text-white text-start">Name the playlist</h2>
                                        </div>
                                        <div className="overflow-auto">

                                            <ul className="list-group">
                                                <li className="list-group-item d-flex justify-content-between align-items-start active">
                                                    <div className="ms-2 me-auto">
                                                        <div className="fw-bold">Subheading</div>
                                                    </div>
                                                    <span className="badge"><i className='bx bx-menu h5'></i></span>
                                                </li>
                                                <li className="list-group-item d-flex justify-content-between align-items-start">
                                                    <div className="ms-2 me-auto">
                                                        <div className="fw-bold">Subheading</div>
                                                    </div>
                                                    <span className="badge"><i className='bx bx-menu h5'></i></span>
                                                </li>
                                                <li className="list-group-item d-flex justify-content-between align-items-start">
                                                    <div className="ms-2 me-auto">
                                                        <div className="fw-bold">Subheading</div>
                                                    </div>
                                                    <span className="badge"><i className='bx bx-menu h5'></i></span>
                                                </li>
                                                <li className="list-group-item d-flex justify-content-between align-items-start">
                                                    <div className="ms-2 me-auto">
                                                        <div className="fw-bold">Subheading</div>
                                                    </div>
                                                    <span className="badge"><i className='bx bx-menu h5'></i></span>
                                                </li>
                                                <li className="list-group-item d-flex justify-content-between align-items-start">
                                                    <div className="ms-2 me-auto">
                                                        <div className="fw-bold">Subheading</div>
                                                    </div>
                                                    <span className="badge"><i className='bx bx-menu h5'></i></span>
                                                </li>
                                                <li className="list-group-item d-flex justify-content-between align-items-start">
                                                    <div className="ms-2 me-auto">
                                                        <div className="fw-bold">Subheading</div>
                                                    </div>
                                                    <span className="badge"><i className='bx bx-menu h5'></i></span>
                                                </li>
                                                <li className="list-group-item d-flex justify-content-between align-items-start">
                                                    <div className="ms-2 me-auto">
                                                        <div className="fw-bold">Subheading</div>
                                                    </div>
                                                    <span className="badge"><i className='bx bx-menu h5'></i></span>
                                                </li>
                                                <li className="list-group-item d-flex justify-content-between align-items-start">
                                                    <div className="ms-2 me-auto">
                                                        <div className="fw-bold">Subheading</div>
                                                    </div>
                                                    <span className="badge"><i className='bx bx-menu h5'></i></span>
                                                </li>
                                            </ul>

                                        </div>
                                    </div>

                                </div>

                                <div className="col-md-8 col-12" id="titulo">
                                    <div className="social text-white rounded">
                                        <h3 className="p-3">Nome Música</h3>
                                    </div>
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
