import api from '../ax/axiosSetting';

export const fetchBoards = (params) => {
    return api.get('/list', { params });
};

export const fetchBoardDetail = (idx) => {
    return api.get(`/find?boardId=${idx}`);
};

export const createBoard = (data) => {
    return api.post('/regist', data);
};

export const updateBoard = (data) => {
    return api.post('/modify', data);
};

export const deleteBoard = (idx) => {
    return api.post('/remove', { boardId: idx });
};

export const updateGood = (idx) => {
    return api.post('/good', { boardId: idx });
};

// export const boardGood = async (obj) => {
//     return api.get('/item/good', {
//         params: obj
//     });
// }