import React, {useEffect} from 'react';
import '../../styles/style.css';
import FollowedTopBarStore from "../../stores/topBars/FollowedTopBarStore";
import {PlaylistSortingOptions} from "../../utils/sorting/playlistSorting";
import {UsernameSortingOptions} from "../../utils/sorting/userSorting";

function FollowingTopBar(): JSX.Element {

    const showing = FollowedTopBarStore(state => state.showing)
    const setShowing = FollowedTopBarStore(state => state.setShowing)

    const userOrder = FollowedTopBarStore(state => state.userOrder)
    const setUserOrder = FollowedTopBarStore(state => state.setUserOrder)

    const playlistOrder = FollowedTopBarStore(state => state.playlistOrder)
    const setPlaylistOrder = FollowedTopBarStore(state => state.setPlaylistOrder)

    useEffect(() => {
        // @ts-ignore
        document.getElementById('TopTypeBarSelect')!.value = showing;
        if (showing == "Users") {
            // @ts-ignore
            document.getElementById('TopOrderBarSelect')!.value = userOrder;
        }
        else if (showing == "Playlists") {
            // @ts-ignore
            document.getElementById('TopOrderBarSelect')!.value = playlistOrder;
        }
    }, [showing])

    let orderSelect;
    if (showing == "Users") {
        orderSelect = <li className="text-end">
            <select className="form-control form-select-sm " id="TopOrderBarSelect"
                    onChange={(e) => {
                        setUserOrder(e.target.value as UsernameSortingOptions)
                    }}
            >
                <option>Custom Order</option>
                <option>Order By Weekly Views</option>
                <option>Order By Total Views</option>
            </select>
        </li>
    }
    else if (showing == "Playlists") {
        orderSelect = <li className="text-end">
            <select className="form-control form-select-sm " id="TopOrderBarSelect"
                    onChange={(e) => {
                        setPlaylistOrder(e.target.value as PlaylistSortingOptions)
                    }}
            >
                <option>Custom Order</option>
                <option>Order By Weekly Views</option>
                <option>Order By Total Views</option>
            </select>
        </li>
    }

    return (

        <div className="row" data-aos="fade-down">
            <div className="col-12">
                <div className="iconbox-blue rounded">
                    <nav aria-label="breadcrumb ">
                        <ol className="breadcrumb p-3">

                            {/* <li className="breadcrumb-item text-white" aria-current="page"><i className='bx bx-arrow-back'></i></li> */}
                            <li className="breadcrumb-item active text-white" aria-current="page">Following 👥</li>
                            <li className="text-end">
                                <select className="form-control form-select-sm " id="TopTypeBarSelect"
                                        onChange={(e) => {
                                            setShowing(e.target.value as "Users" | "Playlists")
                                        }}
                                >
                                    <option>Users</option>
                                    <option>Playlists</option>
                                </select>
                            </li>
                            {orderSelect}
                        </ol>
                    </nav>
                </div>
            </div>
        </div>


    )

}

export default FollowingTopBar;
