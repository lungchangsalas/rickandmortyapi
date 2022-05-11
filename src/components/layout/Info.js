import React, { useEffect, useState } from "react";

function Info(props){
    const [state, setState] = useState({
        count: null,
        pages: null
    
    });
    
    useEffect(() =>{
        const count = props.info.count;
        const pages = props.info.pages;
        setState({count, pages});
    }, []);

    return (
        <div className="row">
            <div className="col">
                <div className="alert alert-success" role="alert">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col">
                                Total: <strong>{state.count}</strong>
                            </div>
                            <div className="col">
                                    Total pages: <strong>{state.pages}</strong>
                            </div>
                        </div>
                     </div>
                </div>
            </div>
        </div>
    );
}

export {Info};