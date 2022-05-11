import React, { useEffect, useState } from "react";
import {Link} from 'react-router-dom';
import spinner from '../layout/ghostSpinner.gif';


function CharacterCard(props){
    const [character, setCharater] = useState({
        gender: '',
        image: '', 
        location: {
            LocationName: '',
            LocationID: ''
        },
        name: '',
        origin: {
            OriginName: '',
            OriginID: ''
        },
        species: '',
        status: '',
        imageLoading: true
    });
    
    useEffect(() => {
        const LocationName = props.location.name;
        const LocationID = props.location.url.split('/')[5];

        const OriginName = props.origin.name;
        const OriginID = props.origin.url.split('/')[5];

        const {gender, image, location, name, species,status} = props;
       
        setCharater({
            gender,
            image,
            location: {
                LocationName,
                LocationID
            },
            name,
            origin: {
                OriginName,
                OriginID
            },
            species,
            status
        })
    }, []);

    return(
        <div className="col-4 mb-5">
            <div className="card">
                {character.imageLoading ? (<img src={spinner} style={{width: '5em', height: '5em'}} className="card-img-top rounded mx-auto d-block mt-2"></img> ): (<img src={character.image} classname="card-img-top" alt={character.name} ></img>)}
                <div className="list-group">
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item"><strong>Name:</strong> {character.name}</li>
                        <li className="list-group-item">
                            <strong>Status: </strong> 
                                {(character.status === 'Alive') ? <span className="badge rounded-pill bg-success">{character.status}</span> 
                                : (character.status === 'Dead') ? <span className="badge rounded-pill bg-danger">{character.status}</span> 
                                : <span className="badge rounded-pill bg-warning text-dark">{character.status}</span>}
                        </li>
                        <li className="list-group-item"><strong>Species:</strong> {character.species}</li>
                        <li className="list-group-item"><strong>Gender:</strong> {character.gender}</li>
                        <li className="list-group-item">
                            <strong>Location: </strong> 
                                <Link to={`/location/${character.location.LocationID}`}>

                                    {character.location.LocationName}
                                </Link>
                        </li>
                        <li className="list-group-item">
                            <strong>Origin: </strong> 
                                {(character.origin.OriginName != 'unknown') ? 
                                    <Link to={`/origin/${character.origin.OriginID}`}>
                                        {character.origin.OriginName}
                                    </Link>
                                : character.origin.OriginName}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export {CharacterCard};