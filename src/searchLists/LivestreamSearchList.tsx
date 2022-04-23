import {GenericLivestreamResult} from "../models/apiSearches/GenericResults";
import {PlayerCreator} from "../playerCreators/PlayerCreator";
import {SearchList} from "./SearchList";
import LivestreamItemComponent from "../components/searchPage/LivestreamItemComponent";

export class LivestreamSearchList extends SearchList {

    private readonly items: GenericLivestreamResult[];
    private readonly playerUrl: string;
    private readonly playerBuilder: PlayerCreator;

    public constructor(items: GenericLivestreamResult[], playerUrl: string, playerBuilder: PlayerCreator) {
        super();
        this.items = items;
        this.playerUrl = playerUrl;
        this.playerBuilder = playerBuilder;
    }

    public getPlayerBuilder() {
        return this.playerBuilder;
    }

    public getItemsHtml() {

        let htmlItems: JSX.Element[] = []

        for (let currentGenericItem of this.items) {

            let genericItemHtml = <LivestreamItemComponent
                item={currentGenericItem}
                playerUrl={this.playerUrl}
                playerWidth={super.getPlayerWidth()}
                playerHeight={super.getPlayerWidth()}
                playerBuilder={this.playerBuilder}
            />

            htmlItems.push(genericItemHtml);

        }

        return htmlItems

    }

}