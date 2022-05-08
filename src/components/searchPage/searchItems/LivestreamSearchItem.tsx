import PlayerStore from "../../../stores/PlayerStore";
import {
    LivestreamSearchItemProperties
} from "../../../models/components/searchPage/LivestreamSearchItemProperties";
import SearchedListStore from "../../../stores/SearchedListStore";
import React, {useEffect} from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function LivestreamSearchItem(props: LivestreamSearchItemProperties): JSX.Element {

    const setPlayingId = PlayerStore(state => state.setPlayingId)
    const setPlayerCreator = PlayerStore(state => state.setPlayerCreator)
    const searchList = SearchedListStore(state => state.searchedList)

    function setCurrentPlayerToClickedItem() {
        setPlayingId(props.item.id)
        setPlayerCreator(searchList!.getPlayerCreator())
    }

    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

    return (

        <div className="col-md-4 col-sm-4 col-lg-3 col-6 position-relative scale" data-aos="fade-down">

            <div className="clickable card bg-dark"
                 onClick={() => {
                     setCurrentPlayerToClickedItem()
                 }}
                 style={{backgroundSize: "100% 100%", backgroundImage: "url(" + props.item.thumbnailUrl + ")"}}>
                <div className="card-img-overlay text-end">
                    <h5 className="card-title text-uppercase text-truncate">{props.item.title}</h5>
                    <p className="card-text text-truncate">{props.item.gameName}</p>
                    <p className="card-text text-truncate">{props.item.creator}</p>
                </div>
            </div>

            <div className="options">
                <button className="btn btn-add"
                        type="button"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"><i
                    className='bx bx-plus'></i></button>
            </div>

        </div>

    )

}

export default LivestreamSearchItem;
