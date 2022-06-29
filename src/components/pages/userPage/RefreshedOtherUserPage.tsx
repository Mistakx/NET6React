import React, {useEffect} from 'react';
import '../../../styles/style.css';
import AOS from "aos";
import {useParams} from "react-router-dom";
import MyUserPage from "./MyUserPage";
import OtherUserPage from "./OtherUserPage";

function RefreshedUserPage(): JSX.Element {

    // This page is needed in order to refresh the animations when jumping from another user to my profile

    const usernameParameter = useParams().username!

    let userPage;
    if (usernameParameter === localStorage.getItem("username")) {
        userPage = <MyUserPage username={usernameParameter!}/>
    } else {
        userPage = <OtherUserPage username={usernameParameter!}/>
    }

    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <div>
            {userPage}
        </div>
    )

}

export default RefreshedUserPage;