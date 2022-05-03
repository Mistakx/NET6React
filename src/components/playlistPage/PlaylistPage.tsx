import React from 'react';
import PlayerStore from "../../stores/PlayerStore";
import {LivestreamItemComponentProperties} from "../../models/components/searchPage/LivestreamItemComponentProperties";

function PlaylistPage(): JSX.Element {

    return (

        // <main id="main">
        //
        //     <section id="services" class="services">
        //         <div class="container" data-aos="fade-up">
        //             <div class="row">
        //                 <div class="col-12">
        //                     <div class="iconbox-blue rounded">
        //                         <nav aria-label="breadcrumb ">
        //                             <ol class="breadcrumb p-3">
        //                                 <li class="breadcrumb-item text-white" aria-current="page"><i
        //                                     class='bx bx-arrow-back'></i></li>
        //                                 <li class="breadcrumb-item active text-white" aria-current="page">Home</li>
        //                             </ol>
        //                         </nav>
        //                     </div>
        //                 </div>
        //             </div>
        //
        //
        //             <div class="row">
        //
        //                 <div class="d-flex flex-wrap" id="grid">
        //
        //                     <div class="col-md-8 col-12 player" id="player">
        //                         <div class="align-items-stretch mb-4" data-aos="zoom-in" data-aos-delay="100">
        //                             <div class="ratio ratio-16x9">
        //
        //                                 <iframe class="card col-12 h-100 d-inline-block"
        //                                         src="https://www.youtube.com/embed/5yDuXbaaJwQ" frameborder="0"
        //                                         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        //                                         allowfullscreen></iframe>
        //                             </div>
        //                             <div class="player-options rounded">
        //                                 <button class="btn btn-link text-white">
        //                                     <i class='bx bx-skip-previous h3'></i>
        //                                 </button>
        //                                 <button class="btn btn-link text-white">
        //                                     <i class='bx bx-skip-next h3'></i>
        //                                 </button>
        //                                 <button class="btn btn-link text-white d-none" id="escolhaOut">
        //                                     <i class='bx bx-zoom-out h3' id='escolha-out'></i>
        //                                 </button>
        //                                 <button class="btn btn-link text-white" id="escolhaIn">
        //                                     <i class='bx bx-zoom-in h3' id='escolha-in'></i>
        //                                 </button>
        //                             </div>
        //
        //                         </div>
        //                     </div>
        //
        //                     <div class="col-md-4 col-12 ml-3" id="playlist">
        //
        //                         <div class="card align-items-stretch mt-4 mt-md-0" data-aos="zoom-in" data-aos-delay="200">
        //                             <div class="card-profile rounded"
        //                                  style="background-image: url(https://cdn.pixabay.com/photo/2017/11/24/10/43/album-2974646_960_720.jpg);">
        //                                 <h2 class="text-white text-start">Name the playlist</h2>
        //                             </div>
        //                             <div class="overflow-auto" >
        //
        //                                 <ul class="list-group">
        //                                     <li class="list-group-item d-flex justify-content-between align-items-start active">
        //                                         <div class="ms-2 me-auto">
        //                                             <div class="fw-bold">Subheading</div>
        //                                         </div>
        //                                         <span class="badge"><i class='bx bx-menu h5' ></i></span>
        //                                     </li>
        //                                     <li class="list-group-item d-flex justify-content-between align-items-start">
        //                                         <div class="ms-2 me-auto">
        //                                             <div class="fw-bold">Subheading</div>
        //                                         </div>
        //                                         <span class="badge"><i class='bx bx-menu h5' ></i></span>
        //                                     </li>
        //                                     <li class="list-group-item d-flex justify-content-between align-items-start">
        //                                         <div class="ms-2 me-auto">
        //                                             <div class="fw-bold">Subheading</div>
        //                                         </div>
        //                                         <span class="badge"><i class='bx bx-menu h5' ></i></span>
        //                                     </li>
        //                                     <li class="list-group-item d-flex justify-content-between align-items-start">
        //                                         <div class="ms-2 me-auto">
        //                                             <div class="fw-bold">Subheading</div>
        //                                         </div>
        //                                         <span class="badge"><i class='bx bx-menu h5' ></i></span>
        //                                     </li>
        //                                     <li class="list-group-item d-flex justify-content-between align-items-start">
        //                                         <div class="ms-2 me-auto">
        //                                             <div class="fw-bold">Subheading</div>
        //                                         </div>
        //                                         <span class="badge"><i class='bx bx-menu h5' ></i></span>
        //                                     </li>
        //                                     <li class="list-group-item d-flex justify-content-between align-items-start">
        //                                         <div class="ms-2 me-auto">
        //                                             <div class="fw-bold">Subheading</div>
        //                                         </div>
        //                                         <span class="badge"><i class='bx bx-menu h5' ></i></span>
        //                                     </li>
        //                                 </li>
        //                                 <li class="list-group-item d-flex justify-content-between align-items-start">
        //                                     <div class="ms-2 me-auto">
        //                                         <div class="fw-bold">Subheading</div>
        //                                     </div>
        //                                     <span class="badge"><i class='bx bx-menu h5' ></i></span>
        //                                 </li>
        //                             </li>
        //                             <li class="list-group-item d-flex justify-content-between align-items-start">
        //                                 <div class="ms-2 me-auto">
        //                                     <div class="fw-bold">Subheading</div>
        //                                 </div>
        //                                 <span class="badge"><i class='bx bx-menu h5' ></i></span>
        //                             </li>
        //                         </ul>
        //
        //                     </div>
        //                 </div>
        //
        //             </div>
        //
        //             <div class="col-md-8 col-12" id="titulo">
        //                 <div class="social text-white rounded">
        //                     <h3 class="p-3">Nome Música</h3>
        //                 </div>
        //             </div>
        //
        //         </div>

//             </div>
//         </div>
//
// </section>
//
// </main>


        <div></div>

)

}

export default PlaylistPage;
