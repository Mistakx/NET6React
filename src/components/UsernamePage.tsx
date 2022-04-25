import React from 'react';
import '../styles/style.css';
import {useParams} from "react-router-dom";
import SidePanel from "./SidePanel";

function UsernamePage(): JSX.Element {

    const username = useParams().username

    return (

        <div>
            <SidePanel />

            This is the user page {username}

        </div>



    )

}

export default UsernamePage;
