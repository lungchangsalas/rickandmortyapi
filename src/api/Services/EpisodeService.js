import axios from "axios";

import * as myConst from '../../config/router/paths';

const url = `${myConst.API}${myConst.EPISODE}`;

export const getEpisodeList = async (path = null) => {
    try {
        const response = await axios.get(url + path);
        const data = response.data;
        return data;
    } catch (error) {
        console.log('failed to fetch episode list')
        throw Error(error);
    }
    return null;
}

export const geEpisode = async (id = null) => {
    try {
        const response = await axios.get(url + id);
        const data = response.data;
        return data;
    } catch (error) {
        console.log('failed to fetch episode')
        throw Error(error);
    }
    return null;
}
