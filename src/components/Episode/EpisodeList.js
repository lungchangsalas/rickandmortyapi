import React, { useEffect, useState } from "react";
import {getEpisodeList} from '../../api/Services/EpisodeService';
import { EpisodeCard } from "./EpisodeCard";
import { Pagination } from "../layout/Pagination";

import {Info} from '../layout/Info';

function EpisodeList(){
    let [fetchedData, updateFetchedData] = useState([]);
    let [pageNumber, updatePageNumber] = useState(1);
    let { info, results } = fetchedData;
    let page = `?page=${pageNumber}`;

    useEffect(() => {
        const episode = async () => {
            const result = await getEpisodeList(page);
            updateFetchedData(result);
        };
        episode();
    },[page]);
    console.log(fetchedData);
    return(
        (info != null && results != null)?(
            <div className="row">
                <Info info={info}></Info>
                {results.map(episode => (
                    <EpisodeCard
                        key = {episode.id}
                        id = {episode.id}
                        episode = {episode.episode}
                        name = {episode.name}
                        air_date = {episode.air_date}
                    >
                    </EpisodeCard>
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

export {EpisodeList};