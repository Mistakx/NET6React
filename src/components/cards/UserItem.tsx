import React, {useEffect} from "react";
import "aos/dist/aos.css";
import {UserItemProperties} from "../../models/components/pages/userPage/UserItemProperties";
import {useNavigate} from "react-router-dom";
import RecommendationRequests from "../../requests/backendRequests/RecommendationRequests";
import CommunityRequests from "../../requests/backendRequests/CommunityRequests";
import AlertStore from "../../stores/AlertStore";
import BackendResponsesStore from "../../stores/BackendResponsesStore";
import {useSortable} from "@dnd-kit/sortable";
import {CSS} from "@dnd-kit/utilities";

function UserItem(props: UserItemProperties): JSX.Element {

    let navigate = useNavigate()

    const [followingButtonShapeClass, setFollowingButtonShapeClass] = React.useState<string>()

    const setToggledFollowResponse = BackendResponsesStore(state => state.setToggledFollowResponse)

    const prettyAlert = AlertStore(state => state.prettyAlert)

    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition,
    } = useSortable({id: props.basicDetails.username});


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

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
    };

    let userDraggableButton;
    if (props.draggable) {
        userDraggableButton = <div className="options-dropdown position-absolute" style={{top: 0, right: 0}}>
            <div className="btn-group" style={{position: "absolute", top: "10px", right: "10px"}}>

                <button type="button" className="btn dropdown-toggle-split">
                    <i className='bx bx-menu'></i>
                </button>

            </div>
        </div>
    }

    return (

        <div className="result col-lg-3 col-md-4 col-sm-6 col-6 position-relative" data-aos="fade-up">

            <div ref={setNodeRef} style={style} {...attributes} {...listeners}>

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

                        <h5 className="card-title text-uppercase text-truncate text-center">{props.basicDetails.username}</h5>
                        <div className="card-text text-start">{props.basicDetails.name}</div>
                        <div className="card-text text-start">Weekly Views: {props.basicDetails.weeklyViewsAmount}</div>
                        <div className="card-text text-start">Total Views: {props.basicDetails.totalViewsAmount}</div>
                    </div>
                    {userDraggableButton}
                </div>
            </div>
        </div>
    )

}

export default UserItem;
