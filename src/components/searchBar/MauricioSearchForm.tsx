import React from 'react';
import '../../styles/style.css'
import SelectedSearchStore from "../../stores/SelectedSearchStore";

function MauricioSearchForm(): JSX.Element {

    const selectedSearch = SelectedSearchStore(state => state.selectedSearch)

    return (

        <input type="text" id="search" className={"form-control form-control-lg default " + selectedSearch.getPlatform().getColorClass()}

               placeholder="I want that music..."/>

    )
}

export default MauricioSearchForm;
