import {GenericTrackResult} from "../models/apiSearches/GenericResults";
import {PlayerCreator} from "../playerCreators/PlayerCreator";
import {SearchList} from "./SearchList";
import TrackSearchItem from "../components/searchPage/searchItems/TrackSearchItem";

export class TrackSearchList extends SearchList {

    private readonly items: GenericTrackResult[];
    private readonly playerBuilder: PlayerCreator;

    public constructor(items: GenericTrackResult[], playerBuilder: PlayerCreator) {
        super();
        this.items = items;
        this.playerBuilder = playerBuilder;
    }

    public getPlayerCreator() {
        return this.playerBuilder;
    }

    public getItemsHtml() {

        let htmlItems: JSX.Element[] = []

        for (let currentGenericItem of this.items) {

            let genericItemHtml = <TrackSearchItem
                item={currentGenericItem}
                playerBuilder={this.playerBuilder}
            />

            htmlItems.push(genericItemHtml);

        }

        return htmlItems

    }

}