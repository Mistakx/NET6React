import React, {useEffect, useState} from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import {HubConnectionSingleton} from "utils/HubConnectionSingleton";
import AlertStore from "stores/AlertStore";
import LoginStore from "../../stores/LoginStore";
import OnlineUserItem from "./OnlineUserItem";
import {UserProfileDto} from "../../models/backendResponses/userRoute/UserProfileDto";
import {HubConnection, HubConnectionState} from "@microsoft/signalr";


function LiveRoom(): JSX.Element {


    const [onlineUsersList, setOnlineUsersList] = useState<JSX.Element[]>();

    const prettyAlert = AlertStore(state => state.prettyAlert)

    const isAuthenticated = LoginStore(state => state.isAuthenticated)

    const [hubConnectionState, setHubConnectionState] = useState<HubConnectionState>(HubConnectionState.Connected);

    useEffect(() => {
        AOS.init();
    })

    useEffect(() => {

        const sessionToken = localStorage.getItem("sessionToken");

        if (sessionToken && isAuthenticated) {
            console.log("Logged in, starting Hub.")

            let hubConnection = HubConnectionSingleton.getInstance(sessionToken);
            HubConnectionSingleton.startHub()

            document.addEventListener('visibilitychange', () => {
                if (document.visibilityState === 'visible' && hubConnection.state !== HubConnectionState.Disconnected) {
                    HubConnectionSingleton.startHub();
                }
            });

            // Run every 5 seconds
            setInterval(() => {
                setHubConnectionState(hubConnection.state);
            }, 5000);

            setInterval(() => {
                if (hubConnection.state === HubConnectionState.Connected) {
                    hubConnection.send("Ping", "Ping");
                }
            }, 2500);

            hubConnection.on("myOnlineFriends", friends => {
                console.log(friends)
                let onlineUsersListComponents: JSX.Element[] = []
                for (const currentOnlineUser of friends as UserProfileDto[]) {
                    let currentUserItem = <OnlineUserItem key={currentOnlineUser.username}
                                                          basicUserDetails={currentOnlineUser}/>
                    onlineUsersListComponents.push(currentUserItem)
                }

                setOnlineUsersList(onlineUsersListComponents)
            })

            hubConnection.on("ping", message => {
                console.log(message)
            })

            hubConnection.on("notify", message => {
                prettyAlert(message, true)
            })
        } else {
            HubConnectionSingleton.disconnectHub();
        }

    }, [isAuthenticated]);

    let liveRoom;
    if (isAuthenticated) {
        liveRoom =

            <div className="position-relative" style={{zIndex: 9998}}>
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
                        <h5 id="offcanvasRightLabel">Live Room - {hubConnectionState}</h5>
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


