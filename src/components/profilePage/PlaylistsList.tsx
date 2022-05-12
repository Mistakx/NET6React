import React, {useEffect} from 'react';
import '../../styles/style.css';
import ProfilePlaylistItem from "./ProfilePlaylistItem";
import {PlaylistBasicDetails} from "../../models/backendRequests/PlaylistBasicDetails";
import UserRequests from "../../requests/backendRequests/UserRequests";

function PlaylistsList(): JSX.Element {

    const [userPlaylists, setUserPlaylists] = React.useState<PlaylistBasicDetails[]>();

    useEffect(() => {
        if (!userPlaylists) {
            (async () => {
                setUserPlaylists(await UserRequests.getPlaylists(process.env.REACT_APP_USER_ID as string));
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

                {playlistsList}

            </div>

        </div>


    )

}

export default PlaylistsList;
