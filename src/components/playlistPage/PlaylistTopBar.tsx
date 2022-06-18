import React from 'react';
import '../../styles/style.css';
import {TopBarProperties} from "../../models/components/TopBarProperties";
import UserTopBarStore from "../../stores/topBars/UserTopBarStore";
import PlaylistTopBarStore from "../../stores/topBars/PlaylistTopBarStore";

function PlaylistTopBar(): JSX.Element {

    const setOrder = PlaylistTopBarStore(state => state.setOrder)

    return (

        <div className="row" data-aos="fade-down">
            <div className="col-12">
                <div className="iconbox-blue rounded">
                    <nav aria-label="breadcrumb ">
                        <ol className="breadcrumb p-3">

                            {/* <li className="breadcrumb-item text-white" aria-current="page"><i className='bx bx-arrow-back'></i></li> */}
                            <li className="breadcrumb-item active text-white" aria-current="page">Playlist Page

                            </li>
                            <li className="text-end">
                                <select className="form-control form-select-sm " id="exampleFormControlSelect1"
                                        onChange={(e) => {
                                            setOrder(e.target.value as "Custom Order" | "Order by Title" | "Order by Creator")
                                        }}
                                >
                                    <option>Custom Order</option>
                                    <option>Order by Title</option>
                                    <option>Order by Creator</option>
                                </select>
                            </li>
                        </ol>
                    </nav>
                </div>
            </div>
        </div>


    )

}

export default PlaylistTopBar;
