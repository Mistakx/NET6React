import React, {useEffect} from "react";
import "aos/dist/aos.css";
import {UserItemProperties} from "../../../models/components/userPage/UserItemProperties";
import {useNavigate} from "react-router-dom";
import RecommendationRequests from "../../../requests/backendRequests/RecommendationRequests";
import CommunityRequests from "../../../requests/backendRequests/CommunityRequests";
import AlertStore from "../../../stores/AlertStore";
import BackendResponsesStore from "../../../stores/BackendResponsesStore";

function UserItem(props: UserItemProperties): JSX.Element {

    let navigate = useNavigate()

    const [followingButtonShapeClass, setFollowingButtonShapeClass] = React.useState<string>()

    const setToggledFollowResponse = BackendResponsesStore(state => state.setToggledFollowResponse)

    const prettyAlert = AlertStore(state => state.prettyAlert)

    useEffect(() => {
        if (props.basicDetails.followed) {
            setFollowingButtonShapeClass("bxs-heart")
        } else {
            setFollowingButtonShapeClass("bx-heart")
        }
    }, [])

    function toggleFollowingButton() {
        if (followingButtonShapeClass === "bxs-heart") {
            setFollowingButtonShapeClass("bx-heart")
        } else {
            setFollowingButtonShapeClass("bxs-heart")
        }
    }

    return (

        <div className="result col-lg-3 col-md-4 col-sm-6 col-6 position-relative" data-aos="fade-up">
            <div className="card scale clickable"
                 style={{
                     backgroundSize: "100% 100%",
                     backgroundImage: "url(/" + props.basicDetails.profilePhotoUrl + ")"
                 }}>
                <div className="options">
                    <button className="btn btn-lg btn-add"
                            type="button"
                            onClick={async () => {
                                try {
                                    const sessionToken = window.sessionStorage.getItem("sessionToken")
                                    if (sessionToken) {
                                        const response = await CommunityRequests.toggleUserFollow(props.basicDetails.username, sessionToken)
                                        prettyAlert(response, true)
                                        setToggledFollowResponse(response)
                                        toggleFollowingButton()
                                    } else prettyAlert("You need to be logged in to follow a user", false)
                                } catch (e: any) {
                                    prettyAlert(e.response?.data || e.toJSON().message, false)
                                }
                            }}
                    >
                        <i className={'bx ' + followingButtonShapeClass}></i>
                    </button>

                </div>
                <div className="card-img-overlay text-end"
                     onClick={() => {
                         navigate("/user/" + props.basicDetails.username)
                         RecommendationRequests.saveUserView(props.basicDetails.username, window.sessionStorage.getItem("sessionToken")!)
                     }}
                >

                    <h5 className="card-title text-uppercase text-truncate">{props.basicDetails.username}</h5>
                    <div className="card-text text-start">{props.basicDetails.name}</div>
                    <div className="card-text text-start">Weekly Views: {props.basicDetails.weeklyViewsAmount}</div>
                    <div className="card-text text-start">Total Views: {props.basicDetails.totalViewsAmount}</div>
                </div>
            </div>
        </div>

    )

}

export default UserItem;
