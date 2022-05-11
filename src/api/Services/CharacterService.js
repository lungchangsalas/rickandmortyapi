import axios from "axios";

import * as myConst from '../../config/router/paths';

const url = `${myConst.API}/${myConst.CHARACTER}`;

export const getCharacterList = async (path = null) => {
    try {
        const response = await axios.get(url + path);
        const data = response.data;
        return data;
    } catch (error) {
        console.log('failed to fetch character list')
        throw Error(error);
    }
    return null;
}
