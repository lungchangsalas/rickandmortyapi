import React, { useEffect, useState } from "react";
import {Link} from 'react-router-dom';
import spinner from '../layout/ghostSpinner.gif';

function LocationCard(props){
    const [location, setLocation] = useState({
        id: '',
        dimension: '',
        name: '',
        type: ''
    });

    useEffect(() => {
        const id = props.id;
        const dimension = props.dimension;
        const name = props.name;
        const type = props.type;
        setLocation({id, dimension, name, type});
    }, []);

    return(
        <div className="col-4 mb-5">
            <div className="card h-100">
                <div className="card-body">
                    <div className="card-title">
                        <h1>{location.name}</h1>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">
                                <strong>Dimension: </strong> 
                                {(location.dimension === 'unknown')?
                                    <span className="badge rounded-pill bg-warning text-dark">{location.dimension}</span>
                                :
                                    <span className="badge rounded-pill bg-success">{location.dimension}</span> 
                                }
                            </li>
                            <li class="list-group-item">
                                <strong>Type: </strong> {location.type}
                            </li>
                           
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export {LocationCard};