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
                            
                            {/* <li className="breadcrumb-item text-white" aria-current="page"><i className='bx bx-arrow-back'></i></li> */}
                            <li className="breadcrumb-item active text-white" aria-current="page">{props.text}

                            </li>
                            <li className="text-end">
                                <select className="form-control form-select-sm " id="exampleFormControlSelect1">
                                    <option>1</option>
                                    <option>1</option>
                                    <option>1</option>
                                </select>
                            </li>
                        </ol>
                    </nav>
                </div>
            </div>
        </div>


    )

}

export default TopBar;
