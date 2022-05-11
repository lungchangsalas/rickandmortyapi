import React from "react";
import * as myConst from '../../config/router/paths';

function Navbar(){
    return (
        <div>
            <nav className='navbar navbar-expand-md navbar-dark bg-dark fixed-top text-center'>
                <div className="container-fluid">
                    <div className="mx-auto">
                        <a href={`/${myConst.CHARACTER}`} className="navbar-brand">Characters</a>
                        <a href={`/${myConst.LOCATION}`} className="navbar-brand">Locations</a>
                        <a href={`/${myConst.EPISODE}`} className="navbar-brand">Episodes</a>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export {Navbar};