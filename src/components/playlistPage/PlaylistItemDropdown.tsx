import React from "react";
import '../../styles/style.css';
import "aos/dist/aos.css";
import PlaylistRequests from "../../requests/backendRequests/PlaylistRequests";
import {PlaylistItemDropdownProperties} from "../../models/components/playlistPage/PlaylistItemDropdownProperties";

function PlaylistItemDropdown(props: PlaylistItemDropdownProperties): JSX.Element {

    return (

        <ul className="dropdown-menu">
            <li

            >
                <div className="dropdown-item">Set as cover</div>
            </li>

            {/*Set as cover*/}
            <li onClick={async () => {
                const sessionToken = sessionStorage.getItem("sessionToken")
                if (sessionToken) {
                    const response = await PlaylistRequests.deleteGeneralizedResult(props.playlistId!, props.genericResult.databaseId!, sessionToken)
                    props.setDeleteGeneralizedResultResponse(response)
                    alert(response)
                } else alert("You must be logged in to delete a result.")
            }}>
                <div className="dropdown-item text-danger">Remove</div>
            </li>

        </ul>

    )

}

export default PlaylistItemDropdown;
