import React from "react";
import '../../styles/style.css';
import "aos/dist/aos.css";
import PlaylistRequests from "../../requests/backendRequests/PlaylistRequests";
import {PlaylistItemDropdownProperties} from "../../models/components/playlistPage/PlaylistItemDropdownProperties";
import AlertStore from "../../stores/AlertStore";

function PlaylistItemDropdown(props: PlaylistItemDropdownProperties): JSX.Element {

    const prettyAlert = AlertStore(state => state.prettyAlert)

    return (

        <ul className="dropdown-menu dropdown-menu-dark">
            <li>
                <div className="dropdown-item">Set as cover</div>
            </li>

            {/*Set as cover*/}
            <li onClick={async () => {
                const sessionToken = sessionStorage.getItem("sessionToken")
                if (sessionToken) {
                    let response: string;
                    try {
                        response = await PlaylistRequests.deleteGeneralizedResult(props.playlistId!, props.genericResult.databaseId!, sessionToken)
                        prettyAlert(response, true)
                    } catch (e: any) {
                        response = e.response.data
                        prettyAlert(e.response.data, true)
                    }
                    props.setDeleteGeneralizedResultResponse(response)
                } else prettyAlert("You must be logged in to delete a result.", false)

            }}>
                <div className="dropdown-item text-danger">Remove</div>
            </li>

        </ul>

    )

}

export default PlaylistItemDropdown;
