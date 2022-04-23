import {PlayerCreator} from "../playerCreators/PlayerCreator";

export abstract class SearchList {

    private playerWidth = 400
    private playerHeight = 400

    public  getPlayerWidth() {
        return this.playerWidth;
    }

    public getPlayerHeight() {
        return this.playerHeight;
    }

    public abstract getPlayerBuilder(): PlayerCreator

    public abstract getItemsHtml(): JSX.Element[]


}
