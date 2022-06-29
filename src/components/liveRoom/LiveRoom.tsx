import React, { useEffect, useState } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import {useNavigate} from "react-router-dom";
import { HubConnectionSingleton } from "utils/HubConnectionSingleton";
import AlertStore from "stores/AlertStore";
import { ConnectToHubDto } from "models/backendRequests/HubConnections/ConnectToHubDto";
import OnlineUserItem  from "./OnlineUserItem";


function LiveRoom(): JSX.Element {

    const hubConnection = HubConnectionSingleton.getInstance();

    const prettyAlert = AlertStore(state => state.prettyAlert)

    const [onlineUsersList, setonlineUsersList] = useState<JSX.Element[]>();


    function updateOnlineFriendsList(friends : Array<any>){
        let onlineUsersListComponents: JSX.Element[] = []
        for (const currentOnlineUser of friends) {
            let currentUserItem = <OnlineUserItem basicUserDetails={currentOnlineUser} />
            onlineUsersListComponents.push(currentUserItem)
        }

        setonlineUsersList(onlineUsersListComponents)
    }


    useEffect(() => {
        hubConnection.on("myOnlineFriends",friends => {
            console.log(friends)
            updateOnlineFriendsList(friends)
        })
    }, []);


    useEffect(() => {
        hubConnection.onclose(async() =>{
            let sendParams : ConnectToHubDto = {
                sessionToken : window.sessionStorage.getItem("sessionToken"),
                hubConnectionId : hubConnection.connectionId
            }

            hubConnection.send("UserDisconnected", sendParams);
            hubConnection.stop()
        })

    }, []);


    useEffect(() => {
        hubConnection.on("notify", message => {
            prettyAlert(message, true)
        })
    }, []);

    useEffect(() => {
        hubConnection.on("mistakx", message => {
            prettyAlert(message, true)
        })
        console.log("Not assynchronous")
    }, []);


    function getOnlineFriends(){
        var sessionToken = window.sessionStorage.getItem("sessionToken")
        hubConnection.send("GetOnlineFriends", sessionToken);
    }

    useEffect(() => {
        AOS.init();
    }, []);

    const navigate = useNavigate();

    

    let liveRoom;
    if (window.sessionStorage.getItem("sessionToken")) {
        liveRoom = 
            

                <div className="offcanvas offcanvas-end" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                    <div className="offcanvas-header">
                        <h5 id="offcanvasRightLabel">Live Room</h5>
                        <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body">

                      {onlineUsersList}

                    </div>
                </div>

    }

    return (

        <div className="position-relative">
            <div className="live-room">
                <a className="intro-banner-vdo-play-btn green-sinal" type="button"
                data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight" title="See people online" onClick={getOnlineFriends}>
                    <i className="glyphicon glyphicon-play whiteText" aria-hidden="true"></i>
                    <span className="ripple green-sinal"></span>
                    <span className="ripple green-sinal"></span>
                    <span className="ripple green-sinal"></span>
                </a>
            </div>
            {liveRoom}
        </div>

    )

}

export default LiveRoom;


