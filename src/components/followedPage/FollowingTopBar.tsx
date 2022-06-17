import React from 'react';
import '../../styles/style.css';
import FollowedTopBarStore from "../../stores/topBars/FollowedTopBarStore";

function FollowingTopBar(): JSX.Element {

    const setShowing = FollowedTopBarStore(state => state.setShowing)

    return (

        <div className="row" data-aos="fade-down">
            <div className="col-12">
                <div className="iconbox-blue rounded">
                    <nav aria-label="breadcrumb ">
                        <ol className="breadcrumb p-3">

                            {/* <li className="breadcrumb-item text-white" aria-current="page"><i className='bx bx-arrow-back'></i></li> */}
                            <li className="breadcrumb-item active text-white" aria-current="page">Following 👥</li>
                            <li className="text-end">
                                <select className="form-control form-select-sm " id="exampleFormControlSelect1"
                                        onChange={(e) => {
                                            setShowing(e.target.value as "Users" | "Playlists")
                                        }}
                                >
                                    <option>Users</option>
                                    <option>Playlists</option>
                                </select>
                            </li>
                        </ol>
                    </nav>
                </div>
            </div>
        </div>


    )

}

export default FollowingTopBar;
