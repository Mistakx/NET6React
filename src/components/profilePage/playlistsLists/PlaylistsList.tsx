import React, {useEffect} from 'react';
import '../../../styles/style.css';
import ProfilePlaylistItem from "./ProfilePlaylistItem";
import {PlaylistBasicDetails} from "../../../models/backendRequests/PlaylistBasicDetails";
import UserRequests from "../../../requests/backendRequests/UserRequests";

function PlaylistsList(): JSX.Element {

    const [userPlaylists, setUserPlaylists] = React.useState<PlaylistBasicDetails[]>();

    useEffect(() => {
        if (!userPlaylists) {
            (async () => {
                const sessionToken = window.sessionStorage.getItem("sessionToken");
                if (sessionToken) setUserPlaylists(await UserRequests.getPlaylists(sessionToken));
                else alert("No session token found.")
            })()
        }
    }, [userPlaylists]);

    let playlistsList: JSX.Element[] = [];
    if (userPlaylists) {
        for (let currentPlaylistBasicDetails of userPlaylists) {
            
            let currentPlaylistItem = <ProfilePlaylistItem basicDetails={currentPlaylistBasicDetails}/>
            playlistsList.push(currentPlaylistItem);

        }
    }
    
    return (

        <div className="col-md-8">

            <div className="row results">

                <div className="col-md-6 col-sm-6 col-lg-4 col-6 scale"
                data-aos="fade-down">
                
                    <div className="clickable card align-middle add-playlist">
                        
                        <i className="bx bx-plus h1 text-center mt-5"
                            style={{fontSize:120}}
                        ></i>
                        
                    </div>

                </div>


                {playlistsList}

            </div>

        </div>


    )

}

export default PlaylistsList;
