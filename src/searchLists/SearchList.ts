import {PlayerCreator} from "../playerCreators/PlayerCreator";

export abstract class SearchList {

    public abstract getPlayerCreator(): PlayerCreator

    public abstract getItemsHtml(): JSX.Element[]


}
