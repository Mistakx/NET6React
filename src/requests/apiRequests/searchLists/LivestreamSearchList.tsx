import {GenericLivestreamResult} from "../../../models/apiRequests/GenericResults";
import {PlayerCreator} from "../../../playerCreators/PlayerCreator";
import {SearchList} from "./SearchList";
import React from "react";
import LivestreamSearchItem from "../../../components/searchPage/searchItems/LivestreamSearchItem";

export class LivestreamSearchList extends SearchList {

    private readonly items: GenericLivestreamResult[];
    private readonly playerCreator: PlayerCreator;

    public constructor(items: GenericLivestreamResult[], playerBuilder: PlayerCreator) {
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

            let genericItemHtml = <LivestreamSearchItem
                item={currentGenericItem}
                playerCreator={this.playerCreator}
            />

            htmlItems.push(genericItemHtml);

        }

        return htmlItems

    }

}