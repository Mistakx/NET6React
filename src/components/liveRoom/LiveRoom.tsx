import React, {useEffect, useRef, useState} from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import {HubConnectionSingleton} from "utils/HubConnectionSingleton";
import AlertStore from "stores/AlertStore";
import LoginStore from "../../stores/LoginStore";
import OnlineUserItem from "./OnlineUserItem";
import {HubConnection, HubConnectionState} from "@microsoft/signalr";
import GlobalPlayerStore from "../../stores/players/GlobalPlayerStore";
import PlaylistPlayerPageStore from "../../stores/players/PlaylistPagePlayerStore";
import {LiveRoomUserDto} from "../../models/backendResponses/userRoute/LiveRoomUserDto";
import {faRepeat} from "@fortawesome/free-solid-svg-icons"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


function LiveRoom(): JSX.Element {

    const [onlineUsers, setOnlineUsers] = useState<JSX.Element[]>([]);

    const prettyAlert = AlertStore(state => state.prettyAlert)

    const isAuthenticated = LoginStore(state => state.isAuthenticated)

    const [hubConnectionState, setHubConnectionState] = useState<HubConnectionState>(HubConnectionState.Disconnected);

    const globalPlayerCurrentResult = GlobalPlayerStore(state => state.globalPlayerCurrentResult)
    const playlistPlayerCurrentResult = PlaylistPlayerPageStore(state => state.playlistPlayerCurrentResult)

    let hubConnection = useRef() as React.MutableRefObject<HubConnection>;

    useEffect(() => {
        AOS.init();
    })

    useEffect(() => {

        const sessionToken = localStorage.getItem("sessionToken");

        if (sessionToken && isAuthenticated) {
            console.log("Logged in, starting Hub.")

            hubConnection.current = HubConnectionSingleton.getInstance(sessionToken);
            HubConnectionSingleton.startHub()

            document.addEventListener('visibilitychange', () => {
                if (document.visibilityState === 'visible' && hubConnection.current.state !== HubConnectionState.Disconnected) {
                    HubConnectionSingleton.startHub();
                }
            });

            // Run every 0.5 seconds
            setInterval(() => {
                setHubConnectionState(hubConnection.current.state);
            }, 500);

            setInterval(() => {
                if (hubConnection.current.state === HubConnectionState.Connected) {
                    hubConnection.current.send("Ping", "Ping");
                }
            }, 2500);

            hubConnection.current.on("myOnlineFriends", friends => {
                console.log(friends)
                let onlineUsersListComponents: JSX.Element[] = []
                for (const currentOnlineUser of friends as LiveRoomUserDto[]) {
                    let currentUserItem = <OnlineUserItem key={currentOnlineUser.user.username}
                                                          basicUserDetails={currentOnlineUser.user}
                                                          currentlyPlaying={currentOnlineUser.currentlyPlaying}
                    />
                    onlineUsersListComponents.push(currentUserItem)
                }

                setOnlineUsers(onlineUsersListComponents)
            })

            hubConnection.current.on("ping", message => {
                console.log(message)
            })

            hubConnection.current.on("notify", message => {
                prettyAlert(message, true)
            })
        } else {
            HubConnectionSingleton.disconnectHub();
        }

    }, [isAuthenticated]);

    useEffect(() => {
        if (hubConnection.current) {
            HubConnectionSingleton.sendCurrentlyPlaying(globalPlayerCurrentResult || playlistPlayerCurrentResult)
        }
    }, [globalPlayerCurrentResult, playlistPlayerCurrentResult])

    function reconnectToHub() {
        HubConnectionSingleton.disconnectHub();
        // Wait for a bit before trying to reconnect
        setTimeout(() => {
            HubConnectionSingleton.startHub();
        }, 1000);
    }

    let onlineUsersList;
    if (onlineUsers.length) {
        onlineUsersList = onlineUsers
    } else {
        onlineUsersList = <p>No friends online.</p>
    }

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
                        <FontAwesomeIcon icon={faRepeat} className="clickable" onClick={reconnectToHub}/>
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


