import '../../../styles/Login.css'
import UserRequests from "../../../requests/backendRequests/UserRequests";
import React, {useEffect, useState} from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import {useNavigate} from "react-router-dom";
import AlertStore from "../../../stores/AlertStore";
import LogRocket from 'logrocket';
import { HubConnectionSingleton } from 'utils/HubConnectionSingleton';
import {ConnectToHubDto} from "../../../models/backendRequests/HubConnections/ConnectToHubDto";
import LoginStore from "../../../stores/LoginStore";

function LoginPage(): JSX.Element {

    const navigate = useNavigate()

    const [loginEmail, setLoginEmail] = useState("")
    const [loginPassword, setLoginPassword] = useState("")
    const [sessionToken, setSessionToken] = useState<string>()
    const [username, setUsername] = useState<string>()


    const prettyAlert = AlertStore(state => state.prettyAlert)

    const setIsAuthenticated = LoginStore(state => state.setIsAuthenticated)

    const hubConnection = HubConnectionSingleton.getInstance();

    function connectToHub(sessionToken: string) {
        hubConnection.start().then(function () {
            
            console.log("Connection started");
            console.log(hubConnection.connectionId)

            let sendParams : ConnectToHubDto = {
                sessionToken : sessionToken,
                hubConnectionId : hubConnection.connectionId
            }

            hubConnection.send("UserConnected", sendParams);
            
            
        }).catch(function (err) {
            return console.error(err.toString());
        });
    }

    useEffect(() => {
        AOS.init();

        const sessionToken = localStorage.getItem("sessionToken")
        if (sessionToken) {
            setSessionToken(sessionToken)
            setUsername(localStorage.getItem("username")!)
        }
    }, []);

    useEffect(() => {

        (async () => {
            if (sessionToken) {
                localStorage.setItem("sessionToken", sessionToken)
                localStorage.setItem("username", username!)
                try {
                    const userProfile = await UserRequests.getProfile(username!, sessionToken)
                    LogRocket.identify(sessionToken, {
                        username: userProfile?.username!,
                        name: userProfile?.name!,
                        email: userProfile?.email!
                    });
                } catch (e: any) {
                    prettyAlert(e.response.data, false)
                    LogRocket.identify(sessionToken);
                }
                setIsAuthenticated(true)
                connectToHub(sessionToken)
                navigate("/trending")

            }

        })()
    }, [sessionToken]);

    return (

        <section id="hero" className="d-flex flex-column justify-content-center position-relative login">
            <div className="container" data-aos="zoom-in" data-aos-delay="100">

                <div className="row">
                    <div className="col-md-4 offset-md-3 text-center">
                        <h1>Login</h1>
                        <div className="form-wrapper mt-5">

                            <form onSubmit={
                                async (e) => {
                                    e.preventDefault()
                                    try {
                                        let loginResponse = await UserRequests.login(loginEmail, loginPassword)
                                        prettyAlert("Successfully logged in.", true)
                                        setSessionToken(loginResponse.sessionToken)
                                        setUsername(loginResponse.username)
                                    } catch (e: any) {
                                        prettyAlert(e.response.data, false)
                                    }
                                }
                            }>

                                <div className="form-group" data-aos="zoom-in" data-aos-delay="100">
                                    <input type="text" className="form-control form-control-lg" placeholder="Email"
                                           onChange={
                                               (e) => {
                                                   setLoginEmail(e.target.value)
                                               }
                                           }>
                                    </input>
                                </div>

                                <div className="form-group" data-aos="zoom-in" data-aos-delay="200">
                                    <input type="password" className="form-control form-control-lg"
                                           placeholder="Password"
                                           onChange={
                                               (e) => {
                                                   setLoginPassword(e.target.value)
                                               }
                                           }>
                                    </input>
                                </div>

                                <div className="form-group d-grid" data-aos="zoom-in" data-aos-delay="400">
                                    <button className="btn btn-light">Login</button>
                                    <button className="btn btn-link"
                                            onClick={() => {
                                                navigate("/register");
                                            }}
                                    >
                                        Don't have an account
                                    </button>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )

}

export default LoginPage;
