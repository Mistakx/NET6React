import React, {useEffect, useState} from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import {useNavigate} from "react-router-dom";
import {HubConnectionSingleton} from "utils/HubConnectionSingleton";
import AlertStore from "stores/AlertStore";
import {ConnectToHubDto} from "models/backendRequests/HubConnections/ConnectToHubDto";
import LoginStore from "../../stores/LoginStore";
import OnlineUserItem from "./OnlineUserItem";
import UserProfile from "../pages/userPage/profilePanel/UserProfile";
import {UserProfileDto} from "../../models/backendResponses/userRoute/UserProfileDto";


function LiveRoom(): JSX.Element {

    const hubConnection = HubConnectionSingleton.getInstance();

    const [onlineUsersList, setOnlineUsersList] = useState<JSX.Element[]>();

    const prettyAlert = AlertStore(state => state.prettyAlert)

    const isAuthenticated = LoginStore(state => state.isAuthenticated)

    const sessionToken = localStorage.getItem("sessionToken");

    useEffect(() => {

        AOS.init();

        hubConnection.on("myOnlineFriends", friends => {
            console.log(friends)
            let onlineUsersListComponents: JSX.Element[] = []
            for (const currentOnlineUser of friends as UserProfileDto[]) {
                let currentUserItem = <OnlineUserItem key={currentOnlineUser.username} basicUserDetails={currentOnlineUser}/>
                onlineUsersListComponents.push(currentUserItem)
            }

            setOnlineUsersList(onlineUsersListComponents)
        })

        hubConnection.on("notify", message => {
            prettyAlert(message, true)
        })


    }, []);

    useEffect(() => {

        (async () => {
            if (isAuthenticated) {
                if (sessionToken) {
                    await HubConnectionSingleton.connectToHub(sessionToken)
                } else prettyAlert("Session token is not set", false)
            }
        })();


    }, [isAuthenticated]);

    let liveRoom;
    if (isAuthenticated) {
        liveRoom =

            <div className="position-relative" style={{zIndex:9998}}>
                <div className="live-room">
                    <a className="intro-banner-vdo-play-btn green-sinal" type="button"
                       data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"
                       title="See online friends">
                        <i className="glyphicon glyphicon-play whiteText" aria-hidden="true"></i>
                        <span className="ripple green-sinal"></span>
                        <span className="ripple green-sinal"></span>
                        <span className="ripple green-sinal"></span>
                    </a>
                </div>

                <div className="offcanvas offcanvas-end" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                    <div className="offcanvas-header">
                        <h5 id="offcanvasRightLabel">Live Room</h5>
                        <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas"
                                aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body">
                        {onlineUsersList}
                    </div>
                </div>

            </div>

    }

    return (<>{liveRoom}</>)

}

export default LiveRoom;


