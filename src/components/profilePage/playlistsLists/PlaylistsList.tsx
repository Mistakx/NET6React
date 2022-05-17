import React, {useEffect} from 'react';
import '../../../styles/style.css';
import ProfilePlaylistItem from "./ProfilePlaylistItem";
import {PlaylistBasicDetails} from "../../../models/backendRequests/PlaylistRoute/PlaylistBasicDetails";
import UserRequests from "../../../requests/backendRequests/UserRequests";

function PlaylistsList(): JSX.Element {
    const [checked, setChecked] = React.useState(false); 
    const handleChange = () => {
        setChecked(!checked);
    };
    
    const [userPlaylists, setUserPlaylists] = React.useState<PlaylistBasicDetails[]>();
    const [deletePlaylistResponse, setDeletePlaylistResponse] = React.useState("");

    useEffect(() => {
        (async () => {
            const sessionToken = window.sessionStorage.getItem("sessionToken");
            if (sessionToken) setUserPlaylists(await UserRequests.getPlaylists(sessionToken));
            else alert("No session token found.")
        })()
    }, []);

    useEffect(() => {
        if (deletePlaylistResponse) {
            (async () => {
                const sessionToken = window.sessionStorage.getItem("sessionToken");
                if (sessionToken) {
                    setUserPlaylists(await UserRequests.getPlaylists(sessionToken));
                    setDeletePlaylistResponse("");
                }
                else alert("No session token found.")
            })()
        }
    }, [deletePlaylistResponse]);

    let playlistsList: JSX.Element[] = [];
    if (userPlaylists) {
        for (let currentPlaylistBasicDetails of userPlaylists) {

            let currentPlaylistItem = <ProfilePlaylistItem
                basicDetails={currentPlaylistBasicDetails}
                setDeletePlaylistResponse={setDeletePlaylistResponse}
            />
            playlistsList.push(currentPlaylistItem);

        }
    }

    return (

        <div className="col-md-8">

            <div className="row results">

                <div className="col-md-6 col-sm-6 col-lg-4 col-6 scale"
                     data-aos="fade-down" data-bs-toggle="modal" data-bs-target="#exampleModal">

                    <div className="clickable card align-middle add-playlist">

                        <i className="bx bx-plus h1 text-center mt-5"
                           style={{fontSize: 120}}
                        ></i>

                    </div>

                </div>


                {playlistsList}

            </div>
            


            <div className="modal fade" id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">New playlist</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form action="">
                                <div className="form-group mb-3">
                                    <input type="text" className="form-control" placeholder="Playlist name"/>
                                </div>

                                <div className="form-group mb-3 d-grid">
                                    <div className="btn-group" role="group" aria-label="Basic radio toggle button group">

                                        <label className="btn btn-outline-primary">
                                            <input
                                                type="radio"
                                                name="btnradio"
                                                id="btnradio1"
                                            />
                                        Public</label>

                                        <label className="btn btn-outline-primary">
                                            <input
                                                type="radio"
                                                name="btnradio"
                                                id="btnradio2"
                                            />
                                        Private</label>
                                    
                                    </div>
                                </div>

                                <div className="form-group">
                                    <textarea name="" id="" placeholder="Description" className="form-control"></textarea>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="reset" className="btn btn-danger" data-bs-dismiss="modal">Close</button>
                            <button type="submit" className="btn btn-success">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )

}

export default PlaylistsList;
