import React from 'react';
import PlayerStore from "../../../stores/PlayerStore";
import {TrackItemComponentProperties} from "../../../models/components/searchPage/TrackItemComponentProperties";

function TrackBoostrapItem(props: TrackItemComponentProperties): JSX.Element {

    const setCurrentPlayer = PlayerStore(state => state.setCurrentPlayer)

    function setCurrentPlayerToClickedItem() {
        setCurrentPlayer(props.playerBuilder.create(props.item.id, props.item.thumbnailUrl));
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }

    return (

        <div className="col-md-3" onClick={() => {setCurrentPlayerToClickedItem()}}>
            <div className="card bg-dark"
                 style={{cursor: "pointer", backgroundSize: "cover", backgroundImage: "url(" + props.item.thumbnailUrl + ")"}}>
                <div className="card-img-overlay text-end">
                    <h5 className="card-title text-uppercase">{props.item.title}</h5>
                    <p className="card-text">{props.item.albumName}</p>
                    <p className="card-text">{props.item.creator}</p>
                    <p className="card-text">{props.item.createdAt}</p>
                    <button className="btn btn-sm" type="button"
                            data-bs-toggle="modal" data-bs-target="#exampleModal"><i
                        className='bx bx-plus'></i></button>
                </div>
            </div>
        </div>


    )

}

export default TrackBoostrapItem;
