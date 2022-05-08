import React from 'react';
import '../../styles/style.css';
import {useParams} from "react-router-dom";

function UsernamePage(): JSX.Element {

    const username = useParams().username

    return (

        <div>
            This is the user page {username}
        </div>

    )

}

export default UsernamePage;
