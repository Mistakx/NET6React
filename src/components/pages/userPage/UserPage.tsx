import React, {useEffect} from 'react';
import '../../../styles/style.css';
import UserPlaylistsList from "./playlistsLists/UserPlaylistsList";
import UserProfile from "./profilePanel/UserProfile";
import UserTopBar from "./UserTopBar";
import EditOrCreatePlaylistModal from "../../modals/EditOrCreatePlaylistModal";
import FollowersModal from "../../modals/followersModal/FollowersModal";
import StatisticsModal from "../../modals/statisticsModal/StatisticsModal";
import EditUserInfoModal from "./profilePanel/EditUserInfoModal";
import EditUserPasswordModal from "./profilePanel/EditUserPasswordModal";
import EditUserPasswordModalStore from "../../../stores/modals/EditUserPasswordModalStore";
import FollowersModalStore from "../../../stores/modals/FollowersModalStore";
import EditUserInfoModalStore from "../../../stores/modals/EditUserInfoModalStore";
import StatisticsModalStore from "../../../stores/modals/StatisticsModalStore";
import EditOrCreatePlaylistModalStore from "../../../stores/modals/EditOrCreatePlaylistModalStore";

function UserPage(props: { username: string }) {

    const [topBar, setTopBar] = React.useState<JSX.Element>();
    const [userProfile, setUserProfile] = React.useState<JSX.Element>();
    const [userPlaylistItems, setUserPlaylistItems] = React.useState<JSX.Element>();

    const resetEditUserInfoModal = EditUserInfoModalStore(state => state.resetEditUserInfoModal)
    const resetEditUserPasswordModal = EditUserPasswordModalStore(state => state.resetEditUserPasswordModal)
    const resetFollowersModal = FollowersModalStore(state => state.resetFollowersModal)
    const resetStatisticsModal = StatisticsModalStore(state => state.resetStatisticsModal)
    const resetEditOrCreatePlaylistModal = EditOrCreatePlaylistModalStore(state => state.resetEditOrCreatePlaylistModal)

    useEffect(() => {
        resetEditUserInfoModal()
        resetEditUserPasswordModal()
        resetFollowersModal()
        resetStatisticsModal()
        resetEditOrCreatePlaylistModal()
    }, [])

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

            <EditUserInfoModal/>
            <EditUserPasswordModal/>
            <FollowersModal/>
            <StatisticsModal/>
            <EditOrCreatePlaylistModal/>

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