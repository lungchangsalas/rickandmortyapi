import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {getLocation} from '../../api/Services/LocationService';

import {Info} from '../layout/Info';

function Location(){
    const [location, setLocation] = useState({});

    const {id} = useParams();
    useEffect(() => {
        const location = async () => {
            const result = await getLocation(`/${id}`);
            setLocation(result);
        };
        location();
    },[]);
    
    return(
        (location != null)?(
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-4 align-self-center">
                        <h1>{location.name}</h1>
                        <div className="col align-self-center">
                            <div className="row">
                                <div className="col">
                                    <strong>Dimension: </strong> 
                                    {
                                        (location.dimension === 'unknown') ?
                                            <span className="badge rounded-pill bg-warning text-dark">{location.dimension}</span>
                                        :
                                            <span className="badge rounded-pill bg-success">{location.dimension}</span> 
                                    }
                                </div>
                                <div className="col">
                                    <strong>Type: </strong> 
                                    <span className="badge rounded-pill bg-success">{location.type}</span> 
                                </div>
                            </div>
                        </div>
                    </div>
                   
                </div>
            </div>
        ):(
            ''
        )
    );
}

export {Location};