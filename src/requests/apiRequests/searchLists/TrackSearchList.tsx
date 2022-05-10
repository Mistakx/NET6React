import {GenericTrackResult} from "../../../models/apiRequests/GenericResults";
import {PlayerCreator} from "../../../playerCreators/PlayerCreator";
import {SearchList} from "./SearchList";
import TrackSearchItem from "../../../components/searchPage/searchItems/TrackSearchItem";
import React from "react";

export class TrackSearchList extends SearchList {

    private readonly items: GenericTrackResult[];
    private readonly playerCreator: PlayerCreator;

    public constructor(items: GenericTrackResult[], playerBuilder: PlayerCreator) {
        super();
        this.items = items;
        this.playerCreator = playerBuilder;
    }

    public getPlayerCreator() {
        return this.playerCreator;
    }

    public getSearchItems() {

        let htmlItems: JSX.Element[] = []

        for (let currentGenericItem of this.items) {

            let genericItemHtml = <TrackSearchItem
                item={currentGenericItem}
                playerCreator={this.playerCreator}
            />

            htmlItems.push(genericItemHtml);

        }

        return htmlItems

    }

}