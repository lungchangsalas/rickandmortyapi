import axios from "axios";

import * as myConst from '../../config/router/paths';

const url = `${myConst.API}${myConst.LOCATION}`;

export const getLocationList = async (path = null) => {
    try {
        const response = await axios.get(url + path);
        const data = response.data;
        return data;
    } catch (error) {
        console.log('failed to fetch location list')
        throw Error(error);
    }
    return null;
}

export const getLocation = async (id = null) => {
    try {
        const response = await axios.get(url + id);
        const data = response.data;
        return data;
    } catch (error) {
        console.log('failed to fetch location list')
        throw Error(error);
    }
    return null;
}
