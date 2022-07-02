import React, {useEffect} from 'react';
import '../styles/style.css';
import LoginStore from "../stores/LoginStore";
import {useNavigate} from "react-router-dom";

function SkyPlaylistManagerAuthenticator(): JSX.Element {

    const navigate = useNavigate()

    const setIsAuthenticated = LoginStore(state => state.setIsAuthenticated)
    const isAuthenticated = LoginStore(state => state.isAuthenticated)

    useEffect(() => {

        if (localStorage.getItem("sessionToken")) setIsAuthenticated(true)
        else setIsAuthenticated(false)

        window.addEventListener("storage", (e) => {
            const sessionToken = localStorage.getItem("sessionToken")
            if (sessionToken) setIsAuthenticated(true)
            else setIsAuthenticated(false)
        });

    }, []);

    useEffect(() => {

        if (isAuthenticated) navigate("/trending")
        else navigate("/")

    }, [isAuthenticated]);

    return (<></>)

}

export default SkyPlaylistManagerAuthenticator;
