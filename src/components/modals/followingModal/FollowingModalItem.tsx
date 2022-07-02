import '../../../styles/SearchPage.css';
import React, {useEffect} from "react";
import "aos/dist/aos.css";
import AlertStore from "../../../stores/AlertStore";
import {useNavigate} from "react-router-dom";
import CommunityRequests from "../../../requests/backendRequests/CommunityRequests";
import BackendResponsesStore from "../../../stores/BackendResponsesStore";
import {
    FollowingModalItemProperties
} from "../../../models/components/modals/followingModal/FollowingModalItemProperties";
import {UserProfileDto} from "../../../models/backendResponses/userRoute/UserProfileDto";
import {PlaylistDto} from "../../../models/backendRequests/PlaylistRoute/PlaylistDto";
import toggleFollowingPlaylistButton from "../../../utils/following/toggleFollowingPlaylistButton";
import toggleFollowingUserButton from "../../../utils/following/toggleFollowingUserButton";
import SearchedCommunityResultsStore from "../../../stores/searches/SearchedCommunityResultsStore";

function FollowingModalItem(props: FollowingModalItemProperties): JSX.Element {

    const navigate = useNavigate()

    const [followingButtonShapeClass, setFollowingButtonShapeClass] = React.useState<string>()

    const searchedCommunityResults = SearchedCommunityResultsStore(state => state.searchedCommunityResults)
    const setSearchedCommunityResults = SearchedCommunityResultsStore(state => state.setSearchedCommunityResults)

    let setToggledFollowResponse = BackendResponsesStore(state => state.setToggledFollowResponse)

    const prettyAlert = AlertStore(state => state.prettyAlert)

    const sessionToken = localStorage.getItem("sessionToken")

    useEffect(() => {
        if (props.following.followed) {
            setFollowingButtonShapeClass("bxs-heart")
        } else {
            setFollowingButtonShapeClass("bx-heart")
        }
    }, [])

    let followingModalItem;
    if ("username" in props.following) {

        let followingButton
        if (props.following.username !== localStorage.getItem("username")) {
            followingButton = <button type="button" className="btn dropdown-toggle-split"
                                      onClick={async (e) => {
                                          e.stopPropagation()
                                          if (sessionToken) {
                                              try {
                                                  const response = await CommunityRequests.toggleUserFollow((props.following as UserProfileDto).username, sessionToken)
                                                  prettyAlert(response, true)
                                                  toggleFollowingUserButton((props.following as UserProfileDto), followingButtonShapeClass, setFollowingButtonShapeClass, searchedCommunityResults, setSearchedCommunityResults)
                                                  setToggledFollowResponse(response)
                                              } catch (e: any) {
                                                  prettyAlert(e.response.data, false)
                                              }
                                          } else prettyAlert("You need to be logged in to follow a user", false)
                                      }}
            >
                <i className={'bx ' + followingButtonShapeClass}></i>
            </button>
        }

        followingModalItem = <li className="list-group-item clickable"
                                 onClick={() => {
                                     navigate(`/user/${(props.following as UserProfileDto).username}`)
                                 }}
        >
            <div className="row align-middle">
                <div className="col-2">
                    <img src={"/" + (props.following as UserProfileDto).profilePhotoUrl} className="img-fluid rounded"/>
                </div>
                <div className="col-8">
                    <h5>{(props.following as UserProfileDto).username}</h5>
                </div>
                <div className="col-2">
                    {followingButton}
                </div>
            </div>


        </li>

    } else if ("title" in props.following) {
        followingModalItem = <li className="list-group-item clickable"
                                 onClick={() => {
                                     navigate(`/playlist/${(props.following as PlaylistDto).id}`)
                                 }}>
            <div className="row align-middle">
                <div className="col-2">
                    <img src={"" + (props.following as PlaylistDto).thumbnailUrl} className="img-fluid rounded"
                         onError={({currentTarget}) => {
                             currentTarget.onerror = null; // prevents looping
                             currentTarget.style.display = "none"
                         }}/>
                </div>
                <div className="col-8">
                    <h5>{(props.following as PlaylistDto).title}</h5>
                </div>
                <div className="col-2">
                    <button type="button" className="btn dropdown-toggle-split"
                            onClick={async (e) => {
                                e.stopPropagation()
                                if (sessionToken) {

                                    try {
                                        const response = await CommunityRequests.togglePlaylistFollow((props.following as PlaylistDto).id, sessionToken)
                                        prettyAlert(response, true)
                                        toggleFollowingPlaylistButton((props.following as PlaylistDto), followingButtonShapeClass, setFollowingButtonShapeClass, searchedCommunityResults, setSearchedCommunityResults)
                                        setToggledFollowResponse(response)
                                    } catch (e: any) {
                                        prettyAlert(e.response.data, false)
                                    }
                                } else prettyAlert("You need to be logged in to follow a user", false)
                            }}
                    >
                        <i className={'bx ' + followingButtonShapeClass}></i>
                    </button>
                </div>
            </div>

        </li>
    }

    return (<>{followingModalItem}</>)
}

export default FollowingModalItem;
