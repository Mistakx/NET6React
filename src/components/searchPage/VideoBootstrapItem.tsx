import React from 'react';
import {GenericLivestreamResult} from "../../models/apiSearches/GenericResults";
import PlayerStore from "../../stores/PlayerStore";
import {VideoItemComponentProperties} from "../../models/components/searchPage/VideoItemComponentProperties";

function VideoBoostrapItem(props: VideoItemComponentProperties): JSX.Element {

    const setCurrentPlayer = PlayerStore(state => state.setCurrentPlayer)

    function setCurrentPlayerToClickedItem(item: GenericLivestreamResult) {

        setCurrentPlayer(props.playerBuilder.create(item.id, props.playerWidth, props.playerHeight, props.playerUrl));

    }

    return (

        <div className="col-md-3">
            <div className="card bg-dark"
                 style={{backgroundSize: "cover", backgroundImage: "url(" + props.item.thumbnailUrl + ")"}}>
                <div className="card-img-overlay text-end">
                    <h5 className="card-title text-uppercase">{props.item.title}</h5>
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

export default VideoBoostrapItem;
