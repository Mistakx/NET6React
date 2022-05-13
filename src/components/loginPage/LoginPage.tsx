import '../../styles/Login.css'
import React, {useEffect, useState} from "react";
import "aos/dist/aos.css";
import UserRequests from "../../requests/backendRequests/UserRequests";
import AOS from "aos";
import {useNavigate} from "react-router-dom";

function LoginPage(): JSX.Element {

    const navigate = useNavigate()

    const [loginEmail, setLoginEmail] = useState("")
    const [loginPassword, setLoginPassword] = useState("")
    const [sessionToken, setSessionToken] = useState<string>()

    useEffect(() => {
        AOS.init();
        // AOS.refresh();
        if (window.sessionStorage.getItem("sessionToken")) {
            navigate("/home")
        }
    }, []);

    useEffect(() => {
        if (sessionToken) {
            window.sessionStorage.setItem("sessionToken", sessionToken)
            navigate("/home")
        }
    }, [sessionToken]);


    return (

        <section id="hero" className="d-flex flex-column justify-content-center position-relative login">
            <div className="container" data-aos="zoom-in" data-aos-delay="100">

                <div className="row">
                    <div className="col-md-4 offset-md-3">
                        <h1>Login</h1>
                        <div className="form-wrapper mt-5">

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
                                <input type="password" className="form-control form-control-lg" placeholder="Password"
                                       onChange={
                                           (e) => {
                                               setLoginPassword(e.target.value)
                                           }
                                       }>
                                </input>
                            </div>

                            <div className="form-group d-grid" data-aos="zoom-in" data-aos-delay="400">
                                <button className="btn btn-light"
                                        onClick={
                                            async (e) => {
                                                let sessionToken = await UserRequests.login(loginEmail, loginPassword)
                                                setSessionToken(sessionToken)
                                            }
                                        }
                                >
                                    Validar
                                </button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>

    )

}

export default LoginPage;
