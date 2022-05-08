import '../../styles/style.css';
import SidePanel from "../SidePanel";
import User from "./User";
import PlaylistsList from "./PlaylistsList";
import FloatingPlayer from "../searchPage/FloatingPlayer";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ProfileTopBar from "./ProfileTopBar";
import axios from "axios";
import {UserProfile} from "../../models/backendSearches/UserProfile";

function ProfilePage(): JSX.Element {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

    const [userProfile, setProfile] = React.useState<UserProfile>();

    useEffect(() => {
        (async () => {
            setProfile(await getProfile(process.env.REACT_APP_USER_ID as string));
            console.log(userProfile)
        })()
    }, [userProfile]);

    async function getProfile(userId: string) {
        const url = "/User/" + userId;

        const options = {
            method: 'GET',
            url: url,
        };

        // @ts-ignore
        let profileResponse = await axios(options);
        let profile: UserProfile = profileResponse.data;
        return profile;

    }

    return (

        <div>

            <SidePanel/>

            <main id="main">

                <section id="services" className="services">

                    <div className="container">

                        <ProfileTopBar id={userProfile?.id}/>

                        <div className="row">

                            <User
                                name={userProfile?.name}
                                username={userProfile?.name}
                                email={userProfile?.email}
                                profilePhotoPath={userProfile?.profilePhotoPath}
                            />

                            <PlaylistsList/>

                        </div>

                    </div>

                </section>

            </main>

        </div>

    )

}

export default ProfilePage;
