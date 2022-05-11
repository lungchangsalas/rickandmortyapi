import React, { useEffect, useState } from "react";
import {Link} from 'react-router-dom';
import spinner from '../layout/ghostSpinner.gif';

function EpisodeCard(props){
    const [episode, setEpisode] = useState({
        id: '',
        episode: '',
        name: '',
        air_date: ''
    });

    useEffect(() => {
        const id = props.id;
        const episode = props.episode;
        const name = props.name;
        const air_date = props.air_date;
        setEpisode({id, episode, name, air_date});
    }, []);

    return(
        <div className="col-4 mb-5">
            <div className="card h-100">
                <div className="card-body">
                    <div className="card-title">
                        <h1>{episode.name}</h1>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">
                                <strong>Episode: </strong> {episode.episode}
                            </li>
                            <li class="list-group-item">
                                <strong>Air date: </strong> {episode.air_date}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export {EpisodeCard};