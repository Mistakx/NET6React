import React, {useEffect} from "react";
import "aos/dist/aos.css";
import {UserItemProperties} from "../../../models/components/userPage/UserItemProperties";
import {useNavigate} from "react-router-dom";
import RecommendationRequests from "../../../requests/backendRequests/RecommendationRequests";

function UserItem(props: UserItemProperties): JSX.Element {

    let navigate = useNavigate()

    useEffect(() => {
        (async () => {
        })()
    }, [])

    return (

        <div className="result col-lg-3 col-md-4 col-sm-6 col-6 position-relative" data-aos="fade-up">
            <div className="card scale clickable"
                 onClick={() => {
                     navigate("/user/" + props.basicDetails.username)
                     RecommendationRequests.saveUserView(props.basicDetails.username, window.sessionStorage.getItem("sessionToken")!)
                 }}
                 style={{backgroundSize: "100% 100%", backgroundImage: "url(/" + props.basicDetails.profilePhotoUrl + ")"}}>
                <div className="options">
                    <button className="btn btn-lg btn-add"
                            type="button"
                            onClick={() => {
                            }}
                    >
                        <i className='bx bx-heart'></i></button>
                </div>
                <div className="card-img-overlay text-end">
                    <h5 className="card-title text-uppercase text-truncate">{props.basicDetails.username}</h5>
                    <p className="card-text text-start">Weekly Views: {props.basicDetails.weeklyViewsAmount}</p>
                    <p className="card-text text-start">Total Views: {props.basicDetails.totalViewsAmount}</p>
                </div>
            </div>
        </div>

    )

}

export default UserItem;
