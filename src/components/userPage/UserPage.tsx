import React, {useEffect} from 'react';
import '../../styles/style.css';
import UserPlaylistsList from "./playlistsLists/UserPlaylistsList";
import UserProfile from "./profilePanel/UserProfile";
import UserTopBar from "./UserTopBar";

function UserPage(props: { username: string }) {

    const [topBar, setTopBar] = React.useState<JSX.Element>();
    const [userProfile, setUserProfile] = React.useState<JSX.Element>();
    const [userPlaylistItems, setUserPlaylistItems] = React.useState<JSX.Element>();

    useEffect(() => {
        if (props.username === window.sessionStorage.getItem("username")) {
            setTopBar(<UserTopBar text="My Profile 🎵"/>)
        } else {
            setTopBar(<UserTopBar text={props.username + " Profile 🎵"}/>)
        }
        setUserProfile(<UserProfile username={props.username!}/>)
        setUserPlaylistItems(<UserPlaylistsList username={props.username!}/>)

    }, [props.username])

    return (

        <div>

            <main id="main">
                <section id="services" className="services">
                    <div className="container">

                        {topBar}

                        <div className="row">
                            {userProfile}
                            {userPlaylistItems}
                        </div>

                    </div>
                </section>
            </main>

        </div>

    )

}

export default UserPage;