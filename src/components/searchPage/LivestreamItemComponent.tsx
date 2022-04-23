import React from 'react';
import {GenericLivestreamResult} from "../../models/apiSearches/GenericResults";
import PlayerStore from "../../stores/PlayerStore";
import {LivestreamItemComponentProperties} from "../../models/components/searchPage/LivestreamItemComponentProperties";

function LivestreamItemComponent(props: LivestreamItemComponentProperties): JSX.Element {

    const setCurrentPlayer = PlayerStore(state => state.setCurrentPlayer)

    function setCurrentPlayerToClickedItem(item: GenericLivestreamResult) {

        setCurrentPlayer(props.playerBuilder.create(item.id, props.playerWidth, props.playerHeight, props.playerUrl));

    }

    return (

        <li key={props.item.id} onClick={() => {
            setCurrentPlayerToClickedItem(props.item)
        }}>
            <div>{props.item.title}</div>
            <div>Channel title: {props.item.creator}</div>
            <div>Creation date: {props.item.createdAt}</div>
            <img alt="" height={200} width={200} src={props.item.thumbnailUrl}/>
        </li>

    )

}

export default LivestreamItemComponent;
