import React, { useEffect, useState } from "react";
import { getCharacterList} from '../../api/Services/CharacterService';
import { CharacterCard } from "./CharacterCard";
import { Pagination } from "../layout/Pagination";


import {Info} from '../layout/Info';


function CharacterList(){
    let [fetchedData, updateFetchedData] = useState([]);
    let [pageNumber, updatePageNumber] = useState(1);
    let { info, results } = fetchedData;
    let page = `/?page=${pageNumber}`;


    useEffect(() => {
        const character = async () => {
            const result = await getCharacterList(page);
            updateFetchedData(result);
        };
        character();
    },[page]);
    
  
    return(
        (info != null && results != null)?(
            <div className="row">
                <Info info={info}></Info>
                {results.map(character => (
                    <CharacterCard
                        key = {character.id}
                        gender = {character.gender}
                        image = {character.image}
                        location = {character.location}
                        name = {character.name}
                        origin = {character.origin}
                        species = {character.species}
                        status = {character.status}
                    >
                    </CharacterCard>
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

export {CharacterList};