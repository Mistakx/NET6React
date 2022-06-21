import React, {useEffect} from 'react';
import '../../../styles/style.css';
import AOS from "aos";
import {useParams} from "react-router-dom";
import MyUserPage from "./MyUserPage";
import OtherUserPage from "./OtherUserPage";

function RefreshedUserPage(): JSX.Element {

    const usernameParameter = useParams().username!

    let userPage;
    if (usernameParameter === window.sessionStorage.getItem("username")) {
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