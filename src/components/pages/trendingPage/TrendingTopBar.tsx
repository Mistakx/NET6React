import React, {useEffect} from 'react';
import '../../../styles/style.css';
import {TopBarProperties} from "../../../models/components/TopBarProperties";
import TrendingTopBarStore from "../../../stores/topBars/TrendingTopBarStore";

function TrendingTopBar(props: TopBarProperties): JSX.Element {

    const showing = TrendingTopBarStore(state => state.showing)
    const setShowing = TrendingTopBarStore(state => state.setShowing)

    useEffect(() => {
        // @ts-ignore
        document.getElementById('TrendingSelect')!.value = showing;
    }, [showing])

    return (

        <div className="row" data-aos="fade-down">
            <div className="col-12">
                <div className="iconbox-blue rounded">
                    <nav aria-label="breadcrumb ">
                        <ol className="breadcrumb p-3 position-relative">
                            
                            {/* <li className="breadcrumb-item text-white" aria-current="page"><i className='bx bx-arrow-back'></i></li> */}
                            <li className="breadcrumb-item active text-white" aria-current="page">{props.text}

                            </li>
                            <li className="position-absolute top-50 end-0 translate-middle-y me-3">
                                <select className="form-select form-select-sm bg-dark text-white" id="TrendingSelect" onChange={
                                    (e) => {
                                        setShowing(e.target.value as "Monthly" | "Weekly" | "Daily");
                                    }
                                }>
                                    <option>Monthly</option>
                                    <option>Weekly</option>
                                    <option>Daily</option>
                                </select>
                            </li>
                        </ol>
                    </nav>
                </div>
            </div>
        </div>


    )

}

export default TrendingTopBar;
