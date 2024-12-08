import api1 from '../ax/axiosSetting'

export const itemList = (param) => {
    return api1.get('/item/all', {
        params: param
    });
}

export const itemGood = async (obj) => {
    return api1.get('/item/good', {
        params: obj
    });
}