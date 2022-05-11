import React, { useEffect, useState } from "react";
import {getEpisodeList} from '../../api/Services/ApiService';

import {Info} from '../layout/Info';

function Episode(){
    const [state, setState] = useState({
        result: null
    });

    useEffect(() => {
        const episode = async () => {
            const result = await getEpisodeList();
            setState({
                result: result
            });
        };
        episode();
    },[]);
    
    return(
        (state.result != null)?(
            <div className="row">
                <Info info={state}>
                        
                </Info>
                <div className="col">
                    <h1>episode</h1>
                </div>
            </div>
        ):(
            ''
        )
    );
}

export {Episode};