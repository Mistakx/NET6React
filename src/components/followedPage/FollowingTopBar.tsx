import React, {useEffect} from 'react';
import '../../styles/style.css';
import FollowedTopBarStore from "../../stores/topBars/FollowedTopBarStore";

function FollowingTopBar(): JSX.Element {

    const showing = FollowedTopBarStore(state => state.showing)
    const setShowing = FollowedTopBarStore(state => state.setShowing)

    useEffect(() => {
        // @ts-ignore
        document.getElementById('TopBarSelect')!.value = showing;
    }, [])

    return (

        <div className="row" data-aos="fade-down">
            <div className="col-12">
                <div className="iconbox-blue rounded">
                    <nav aria-label="breadcrumb ">
                        <ol className="breadcrumb p-3">

                            {/* <li className="breadcrumb-item text-white" aria-current="page"><i className='bx bx-arrow-back'></i></li> */}
                            <li className="breadcrumb-item active text-white" aria-current="page">Following 👥</li>
                            <li className="text-end">
                                <select className="form-control form-select-sm " id="TopBarSelect"
                                        onChange={(e) => {
                                            setShowing(e.target.value as "Users" | "Playlists")
                                        }}
                                >
                                    <option>Users</option>
                                    <option>Playlists</option>
                                </select>
                            </li>
                            <li className="text-end">
                                <select className="form-control form-select-sm " id="TopBarSelect"
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
