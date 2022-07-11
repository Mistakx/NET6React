import '../../../styles/SearchPage.css';
import React, {useEffect} from "react";
import "aos/dist/aos.css";
import AlertStore from "../../../stores/AlertStore";
import {useNavigate} from "react-router-dom";
import {
    FollowersModalItemProperties
} from "../../../models/components/modals/followersModal/FollowersModalItemProperties";
import CommunityRequests from "../../../requests/backendRequests/CommunityRequests";
import BackendResponsesStore from "../../../stores/BackendResponsesStore";
import {UserProfileDto} from "../../../models/backendResponses/userRoute/UserProfileDto";
import toggleFollowingUserButton from "../../../utils/following/toggleFollowingUserButton";
import SearchedCommunityResultsStore from "../../../stores/searches/SearchedCommunityResultsStore";

function FollowersModalItem(props: FollowersModalItemProperties): JSX.Element {

    const navigate = useNavigate()

    const [followingButtonShapeClass, setFollowingButtonShapeClass] = React.useState<string>()

    const prettyAlert = AlertStore(state => state.prettyAlert)

    const setRemovedFollowerResponse = BackendResponsesStore(state => state.setRemovedFollowerResponse)
    let setToggledFollowResponse = BackendResponsesStore(state => state.setToggledFollowResponse)

    const searchedCommunityResults = SearchedCommunityResultsStore(state => state.searchedCommunityResults)
    const setSearchedCommunityResults = SearchedCommunityResultsStore(state => state.setSearchedCommunityResults)

    let sessionToken = localStorage.getItem("sessionToken")

    useEffect(() => {
        if (props.follower.followed) {
            setFollowingButtonShapeClass("bxs-heart")
        } else {
            setFollowingButtonShapeClass("bx-heart")
        }
    }, [])

    // Remove follower button appears if showing follower of a user who is me, or a playlist that belongs to me (doesn't have an owner)
    let removeFollowerButton;
    if (props.showingFollowerOf && "username" in props.showingFollowerOf && props.showingFollowerOf.username === localStorage.getItem("username")
        || props.showingFollowerOf && "title" in props.showingFollowerOf && props.showingFollowerOf.owner === null) {
        removeFollowerButton = <button className="btn text-danger text-center"
                                onClick={async (e) => {
                                    e.stopPropagation()
                                    if (props.showingFollowerOf) {
                                        if (sessionToken) {
                                            try {
                                                let response: string;

                                                if ("username" in props.showingFollowerOf) {
                                                    response = await CommunityRequests.removeFollowFromUser(props.follower.username, sessionToken)

                                                } else if ("title" in props.showingFollowerOf) {
                                                    response = await CommunityRequests.removeFollowFromPlaylist(props.showingFollowerOf.id, props.follower.username, sessionToken)
                                                }
                                                setRemovedFollowerResponse(response!)
                                                prettyAlert(response!, true)

                                            } catch (e: any) {
                                                prettyAlert(e.response.data, false)
                                            }
                                        } else prettyAlert("No session token found.", false)
                                    }

                                }}

        ><i className='bx vertical-center bx-trash h5'></i></button>
    }

    let followingButton
    if (props.follower.username !== localStorage.getItem("username")) {
        followingButton =
            <button className="btn text-dark text-center"
                    onClick={async (e) => {
                        e.stopPropagation()
                        if (sessionToken) {

                            try {
                                const response = await CommunityRequests.toggleUserFollow((props.follower as UserProfileDto).username, sessionToken)
                                prettyAlert(response, true)
                                toggleFollowingUserButton((props.follower as UserProfileDto), followingButtonShapeClass, setFollowingButtonShapeClass, searchedCommunityResults, setSearchedCommunityResults)
                                setToggledFollowResponse(response)
                            } catch (e: any) {
                                prettyAlert(e.response.data, false)
                            }
                        } else prettyAlert("You need to be logged in to follow a user", false)
                    }}
            >
                <i className={'bx h5 vertical-center ' + followingButtonShapeClass}></i>
            </button>
    }

    return (

        <li className="list-group-item clickable">
            <div className="row align-middle"
                onClick={() => {
                    navigate(`/user/${props.follower.username}`)
                }}
            >
                <div className="col-2 text-center">
                    <img src={"/" + props.follower.profilePhotoUrl} className="img-fluid rounded" style={{width: '43px', height: '43px'}}/>
                </div>
                <div className="col-7">
                    <h5>{props.follower.username}</h5>
                </div>
                <div className="col-1">
                    {followingButton}
                </div>
                <div className="col-1">
                    {removeFollowerButton}
                </div>
            </div>

        </li>

    )
}

export default FollowersModalItem;
