import React from 'react';
import '../../../styles/style.css';
import UserPage from "./UserPage";

function OtherUserPage(props: {username: string}): JSX.Element {

    return (

        <UserPage username={props.username}/>

    )

}

export default OtherUserPage;