// import React from 'react';
import '../../../styles/SearchPage.css';
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function SearchPage(): JSX.Element {

    console.log("%cRendered search page.", "color: cyan")
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);  
    return (

        <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false"
        aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                    <h5 className="modal-title" id="staticBackdropLabel">Playlists</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                    ...
                    </div>
                </div>
            </div>
        </div>


    )
}

export default SearchPage;
