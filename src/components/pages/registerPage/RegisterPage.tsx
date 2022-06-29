import '../../../styles/Login.css'
import UserRequests from "../../../requests/backendRequests/UserRequests";
import React, {useEffect, useState} from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import {useNavigate} from "react-router-dom";
import AlertStore from "../../../stores/AlertStore";
import LogRocket from "logrocket";

function RegisterPage(): JSX.Element {

    const navigate = useNavigate()

    const prettyAlert = AlertStore(state => state.prettyAlert)

    const [userPhoto, setUserPhoto] = useState<File>()
    const [name, setName] = useState("")
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmationPassword, setConfirmationPassword] = useState("")
    const [sessionToken, setSessionToken] = useState<string>()
    const [sessionUsername, setSessionUsername] = useState<string>()

    useEffect(() => {
        AOS.init();
        if (localStorage.getItem("sessionToken")) {
            setSessionToken(localStorage.getItem("sessionToken")!)
            setSessionToken(localStorage.getItem("username")!)
        }
    }, []);

    useEffect(() => {

        (async () => {
            if (sessionToken) {
                localStorage.setItem("sessionToken", sessionToken)
                localStorage.setItem("username", sessionUsername!)
                try {
                    const userProfile = await UserRequests.getProfile(username, sessionToken)
                    LogRocket.identify(sessionToken, {
                        username: userProfile?.username!,
                        name: userProfile?.name!,
                        email: userProfile?.email!
                    });
                } catch (e: any) {
                    prettyAlert(e.response.data, false)
                    LogRocket.identify(sessionToken);
                }
                navigate("/home")

            }

        })()
    }, [sessionToken]);


    return (

        <section id="hero" className="d-flex flex-column justify-content-center position-relative login">
            <div className="container" data-aos="zoom-in" data-aos-delay="100">

                <div className="row">
                    <div className="col-md-4 offset-md-3">
                        <h1>Register</h1>
                        <div className="form-wrapper mt-5">

                            <form onSubmit={
                                async (e) => {
                                    e.preventDefault()
                                    if (password !== confirmationPassword) {
                                        prettyAlert("Passwords do not match.", false)
                                    } else {
                                        try {
                                            await UserRequests.register(username, name, email, password, userPhoto!)
                                            let loginResponse = await UserRequests.login(email, password)
                                            setSessionToken(loginResponse.sessionToken);
                                            setSessionUsername(loginResponse.username);
                                        } catch (e: any) {
                                            prettyAlert(e.response.data, false)
                                        }
                                    }
                                }
                            }>

                                {/*User photo*/}
                                <div className="form-group" data-aos="zoom-in" data-aos-delay="100">
                                    <input type="file" className="form-control add-photo" placeholder="Choose photo"
                                           onChange={
                                               (e) => {
                                                   if (e.target.files) {
                                                       setUserPhoto(e.target.files[0])
                                                   } else {
                                                       prettyAlert("No file selected.", false)
                                                   }
                                               }
                                           }/>
                                </div>

                                {/*Username*/}
                                <div className="form-group" data-aos="zoom-in" data-aos-delay="200">
                                    <input type="text" className="form-control form-control-lg" placeholder="User Name"
                                           onChange={
                                               (e) => {
                                                   setUsername(e.target.value)
                                               }
                                           }>
                                    </input>
                                </div>

                                {/*Name*/}
                                <div className="form-group" data-aos="zoom-in" data-aos-delay="200">
                                    <input type="text" className="form-control form-control-lg" placeholder="Name"
                                           onChange={
                                               (e) => {
                                                   setName(e.target.value)
                                               }
                                           }>
                                    </input>
                                </div>

                                {/*Email*/}
                                <div className="form-group" data-aos="zoom-in" data-aos-delay="300">
                                    <input type="text" className="form-control form-control-lg" placeholder="Email"
                                           onChange={
                                               (e) => {
                                                   setEmail(e.target.value)
                                               }
                                           }>
                                    </input>
                                </div>

                                {/*Password*/}
                                <div className="form-group" data-aos="zoom-in" data-aos-delay="400">
                                    <input type="password" className="form-control form-control-lg"
                                           placeholder="Password"
                                           onChange={
                                               (e) => {
                                                   setPassword(e.target.value)
                                               }
                                           }>
                                    </input>
                                </div>

                                {/*Confirm password*/}
                                <div className="form-group" data-aos="zoom-in" data-aos-delay="500">
                                    <input type="password" className="form-control form-control-lg"
                                           placeholder="Confirm password"
                                           onChange={
                                               (e) => {
                                                   setConfirmationPassword(e.target.value)
                                               }
                                           }>
                                    </input>
                                </div>

                                {/*Register button and login page link*/}
                                <div className="form-group d-grid" data-aos="zoom-in" data-aos-delay="700">
                                    <button className="btn btn-light">Register</button>
                                    <button className="btn btn-link"
                                            onClick={() => {
                                                navigate("/");
                                            }}
                                    >
                                        Already have an account
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

// TODO: Add validation
export default RegisterPage;
