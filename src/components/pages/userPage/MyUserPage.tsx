import React, {useEffect} from 'react';
import '../../../styles/style.css';
import AOS from "aos";
import UserPage from "./UserPage";

function MyUserPage(props: {username: string}): JSX.Element {

    return (

        <UserPage username={props.username}/>

    )

}

export default MyUserPage;