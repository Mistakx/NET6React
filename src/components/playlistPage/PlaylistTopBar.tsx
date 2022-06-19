import React, {useEffect} from 'react';
import '../../styles/style.css';
import {TopBarProperties} from "../../models/components/TopBarProperties";
import UserTopBarStore from "../../stores/topBars/UserTopBarStore";
import PlaylistTopBarStore from "../../stores/topBars/PlaylistTopBarStore";

function PlaylistTopBar(): JSX.Element {

    const setOrder = PlaylistTopBarStore(state => state.setOrder)
    const order = PlaylistTopBarStore(state => state.order)

    useEffect(() => {
        // setOrder("Custom Order")
        // @ts-ignore
        document.getElementById('TopBarSelect')!.value=order;
    }, [])

    return (

        <div className="row" data-aos="fade-down">
            <div className="col-12">
                <div className="iconbox-blue rounded">
                    <nav aria-label="breadcrumb ">
                        <ol className="breadcrumb p-3 position-relative">

                            {/* <li className="breadcrumb-item text-white" aria-current="page"><i className='bx bx-arrow-back'></i></li> */}
                            <li className="breadcrumb-item active text-white" aria-current="page">Playlist Page

                            </li>
                            <li className="position-absolute top-50 end-0 translate-middle-y me-3">
                                <select className="form-select form-select-sm bg-dark text-white" id="exampleFormControlSelect1"
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
