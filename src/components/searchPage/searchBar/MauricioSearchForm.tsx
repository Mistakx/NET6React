import React, {useState} from 'react';
import '../../../styles/style.css'
import SelectedSearchStore from "../../../stores/SelectedSearchStore";
import SearchedListStore from "../../../stores/SearchedListStore";
import {VideoSearchList} from "../../../searchLists/VideoSearchList";
import {TrackSearchList} from "../../../searchLists/TrackSearchList";
import {LivestreamSearchList} from "../../../searchLists/LivestreamSearchList";
import {SearchFormProperties} from "../../../models/components/searchBar/SearchFormProperties";

function MauricioSearchForm(props: SearchFormProperties): JSX.Element {

    const selectedSearch = SelectedSearchStore(state => state.selectedSearch)

    return (

            <input type="text submit" id="search"
                   className={"form-control form-control-lg default " + selectedSearch.getPlatform().getColorClass()}
                   autoFocus value={props.searchBarQuery}
                   placeholder="I want that music..."

                   onChange={(event) => {
                       props.setSearchBarQuery(event.target.value)
                   }}
            />

    )
}

export default MauricioSearchForm;
