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
import {PlaylistTitleProperties} from "../../models/components/playlistPage/PlaylistTitleProperties";

function PlaylistPage(props: PlaylistTitleProperties): JSX.Element {

    return (

        <div className="card-profile position-relative"
            style={{backgroundImage: "url(https://cdn.pixabay.com/photo/2017/11/24/10/43/album-2974646_960_720.jpg)"}}>

            <div className="input-group">
                <input type="text" className="form-control" placeholder="Change playlist name" value={props.title}/>
                <button className="btn btn-success">OK</button>
            </div>

            <h2 className="text-white text-center text-wrap position-absolute top-50 start-50 translate-middle">
                {props.title}
            </h2>
            <i className='bx bx-trash h3 text-danger position-absolute bottom-0 end-0 clickable'></i>
        </div>


    )

}

export default PlaylistPage;
