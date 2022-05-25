import React from "react";
import '../../../styles/style.css';
import "aos/dist/aos.css";
import PlaylistRequests from "../../../requests/backendRequests/PlaylistRequests";
import {PlaylistItemDropdownProperties} from "../../../models/components/playlistPage/PlaylistItemDropdownProperties";
import AlertStore from "../../../stores/AlertStore";
import BackendResponsesStore from "../../../stores/BackendResponsesStore";

function PlaylistItemDropdown(props: PlaylistItemDropdownProperties): JSX.Element {

    const prettyAlert = AlertStore(state => state.prettyAlert)

    const setDeleteGeneralizedResultResponse = BackendResponsesStore(state => state.setDeleteGeneralizedResultResponse)

    const setPlaylistCoverChangedResponse = BackendResponsesStore(state => state.setPlaylistCoverChangedResponse)

    return (

        <ul className="dropdown-menu dropdown-menu-dark">
            <li>
                <div className="dropdown-item clickable"
                     onClick={async () => {
                         const sessionToken = sessionStorage.getItem("sessionToken");
                         if (sessionToken) {
                             try {
                                 let response = await PlaylistRequests.setCoverItem(props.playlistId!, props.genericResult.thumbnailUrl, sessionToken)
                                 setPlaylistCoverChangedResponse(response)
                                 prettyAlert(response, true)
                             } catch (e: any) {
                                 prettyAlert(e.response.data, false)
                             }

                         } else prettyAlert("You must be logged in to delete a playlist", false)
                     }}
                >Set as cover
                </div>
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
                    setDeleteGeneralizedResultResponse(response)
                } else prettyAlert("You must be logged in to delete a result.", false)

            }}>
                <div className="dropdown-item text-danger clickable">Remove</div>
            </li>

        </ul>

    )

}

export default PlaylistItemDropdown;
