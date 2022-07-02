import React, {useEffect} from 'react';
import '../../../styles/style.css';
import AOS from "aos";
import {useParams} from "react-router-dom";
import UserPage from "./UserPage";

function RefreshedUserPage(): JSX.Element {

    // This page is needed in order to refresh the user page component when jumping from one user to another

    const usernameParameter = useParams().username!

    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <div>
            <UserPage key={usernameParameter} username={usernameParameter}/>
        </div>
    )

}

export default RefreshedUserPage;