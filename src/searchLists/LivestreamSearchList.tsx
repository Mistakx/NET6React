import {GenericLivestreamResult} from "../models/apiSearches/GenericResults";
import {PlayerCreator} from "../playerCreators/PlayerCreator";
import {SearchList} from "./SearchList";
import LivestreamBootstrapItem from "../components/searchPage/searchResults/LivestreamBootstrapItem";

export class LivestreamSearchList extends SearchList {

    private readonly items: GenericLivestreamResult[];
    private readonly playerBuilder: PlayerCreator;

    public constructor(items: GenericLivestreamResult[], playerBuilder: PlayerCreator) {
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

            let genericItemHtml = <LivestreamBootstrapItem
                item={currentGenericItem}
                playerWidth={super.getPlayerWidth()}
                playerHeight={super.getPlayerWidth()}
                playerBuilder={this.playerBuilder}
            />

            htmlItems.push(genericItemHtml);

        }

        return htmlItems

    }

}