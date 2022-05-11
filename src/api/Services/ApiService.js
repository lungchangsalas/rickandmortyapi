import axios from "axios";

import * as myConst from '../../config/router/paths';

const API = 'https://rickandmortyapi.com/api/';

export const getCharacterList = async () => {
    try {
        const response = await axios.get(API + myConst.CHARACTER);
        const data = response.data;
        return data
    } catch (error) {
        console.log('failed to fetch characters')
        throw Error(error)
    }
}

export const getLocationList = async () => {
    try {
        const response = await axios.get(API + myConst.LOCATION);
        const data = response.data;
        return data
    } catch (error) {
        console.log('failed to fetch locations')
        throw Error(error)
    }
}

export const getEpisodeList = async () => {
    try {
        const response = await axios.get(API + myConst.EPISODE);
        const data = response.data;
        return data
    } catch (error) {
        console.log('failed to fetch episodes')
        throw Error(error)
    }
}