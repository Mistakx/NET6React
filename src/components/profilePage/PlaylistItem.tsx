import React from 'react';
import '../../styles/style.css';

function PlaylistItem(): JSX.Element {

    return (

        <div className="col-md-6 col-sm-6 col-lg-4 col-6 position-relative scale clickable " data-aos="fade-down"
        onClick={() => {
            window.location.href = "/playlist"
        }}>
            <div className="card bg-dark"
            style={{backgroundImage: "url(https://cdn.pixabay.com/photo/2016/03/28/09/36/music-1285165_960_720.jpg)"}}>
                <div className="card-img-overlay text-end">
                    <h5 className="card-title text-uppercase">Nome Música</h5>
                    <p className="card-text">Tipo album</p>
                    <p className="card-text">Artista</p>
                </div>
                <div className="options-dropdown">
                    <div className="btn-group">
                        <button type="button" className="btn dropdown-toggle-split" 
                        data-bs-toggle="dropdown" aria-expanded="false">
                            <i className='bx bx-dots-horizontal-rounded'></i>
                            <span className="visually-hidden">Toggle Dropdown</span>
                        </button>
                        <ul className="dropdown-menu dropdown-menu-dark">
                            <li><a className="dropdown-item" href="#">Editar</a></li>
                            <li><a className="dropdown-item" href="#">Alterar nome</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PlaylistItem