import React, { useEffect, useState } from "react";
import {getLocationList} from '../../api/Services/LocationService';
import { LocationCard } from "./LocationCard";
import { Pagination } from "../layout/Pagination";

import {Info} from '../layout/Info';

function LocationList(){
    let [fetchedData, updateFetchedData] = useState([]);
    let [pageNumber, updatePageNumber] = useState(1);
    let { info, results } = fetchedData;
    let page = `?page=${pageNumber}`;

    useEffect(() => {
        const location = async () => {
            const result = await getLocationList(page);
            updateFetchedData(result);
        };
        location();
    },[page]);
    
    return(
        (info != null && results != null)?(
            <div className="row">
                <Info info={info}></Info>
                {results.map(location => (
                    <LocationCard
                        key = {location.id}
                        id = {location.id}
                        dimension = {location.dimension}
                        name = {location.name}
                        type = {location.type}
                    >
                    </LocationCard>
                ))}
                <Pagination
                    info={info}
                    pageNumber={pageNumber}
                    updatePageNumber={updatePageNumber}
                />
            </div>
        ):(
            ''
        )
    );
}

export {LocationList};