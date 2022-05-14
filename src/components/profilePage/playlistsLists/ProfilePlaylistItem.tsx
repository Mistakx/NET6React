import React from 'react';
import '../../../styles/style.css';
import {ProfilePlaylistItemProperties} from "../../../models/components/profilePage/ProfilePlaylistItemProperties";
import {useNavigate} from "react-router-dom";

function ProfilePlaylistItem(props: ProfilePlaylistItemProperties): JSX.Element {

    let navigate = useNavigate()
    
    return (

        <div className="col-md-6 col-sm-6 col-lg-4 col-6 position-relative scale"
             data-aos="fade-down">
            
            <div className="clickable card bg-dark"
            style={{backgroundSize:"100% 100%", backgroundImage: "url(" + props.basicDetails.thumbnailUrl + ")"}}>
                <div className="card-img-overlay text-end"
                    onClick={()=>{navigate("/playlist/" + props.basicDetails.id)}}
                >
                    <h5 className="card-title text-uppercase">{props.basicDetails.title}</h5>
                    <p className="card-text">{props.basicDetails.visibility}</p>
                    <p className="card-text">{props.basicDetails.description}</p>
                </div>
                
                <div className="options-dropdown">
                    <div className="btn-group">
                        <button type="button" className="btn dropdown-toggle-split" 
                        data-bs-toggle="dropdown" aria-expanded="false">
                            <i className='bx bx-dots-horizontal-rounded'></i>
                            <span className="visually-hidden">Toggle Dropdown</span>
                        </button>
                        <ul className="dropdown-menu dropdown-menu-dark">
                            <li><div className="dropdown-item">Change name</div></li>
                            <li><div className="dropdown-item">Toggle visibility</div></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfilePlaylistItem;