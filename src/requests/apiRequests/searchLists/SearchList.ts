import {PlayerCreator} from "../../../playerCreators/PlayerCreator";
import React from "react";

export abstract class SearchList {

    public abstract getPlayerCreator(): PlayerCreator

    public abstract getSearchItems(): JSX.Element[]


}
