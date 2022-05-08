import '../../styles/style.css';
import User from "./User";
import PlaylistsList from "./PlaylistsList";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import axios from "axios";
import {UserProfile} from "../../models/backendSearches/UserProfile";
import TopBar from "../TopBar";

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
        const url = "/User/userProfile" + userId;

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

            <main id="main">

                <section id="services" className="services">

                    <div className="container">

                        <TopBar text={"Profile page - " + userProfile?.id}/>

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
