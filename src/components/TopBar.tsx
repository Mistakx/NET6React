import React from 'react';
import '../styles/style.css';
import {TopBarProperties} from "../models/components/TopBarProperties";

function TopBar(props: TopBarProperties): JSX.Element {

    return (

        <div className="row" data-aos="fade-down">
            <div className="col-12">
                <div className="iconbox-blue rounded">
                    <nav aria-label="breadcrumb ">
                        <ol className="breadcrumb p-3">
                            <li className="breadcrumb-item active text-white" aria-current="page">{props.text}
                            </li>
                        </ol>
                    </nav>
                </div>
            </div>
        </div>


    )

}

export default TopBar;
