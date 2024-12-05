import api from '../ax/axiosSetting'

export const itemList = (param) => {
    return api.get('/item/all', {
        params: param
    });
}

export const itemGood = async (obj) => {
    return api.get('/item/good', {
        params: obj
    });
}