import React from 'react';
import '../../styles/style.css';

function PlaylistItem(): JSX.Element {

    return (

        <div className="col-md-4">
            <div className="card bg-dark rounded"
                 style={{backgroundImage: "url(https://cdn.pixabay.com/photo/2016/03/28/09/36/music-1285165_960_720.jpg)"}}>
                <div className="card-img-overlay text-end rounded">
                    <h5 className="card-title text-uppercase">Nome Música</h5>
                    <p className="card-text">Tipo album</p>
                    <p className="card-text">Artista</p>


                    <div className="options">

                        <button className="btn btn-primary"
                                type="button"
                                data-bs-toggle="modal"
                                data-bs-target="#exampleModal">
                            <i className='bx bx-play'></i>
                        </button>

                        <a href="player.html"
                           className="btn btn-primary">
                            <i className='bx bx-plus'>
                            </i>
                        </a>

                    </div>

                </div>
            </div>
        </div>

    )

}

export default PlaylistItem