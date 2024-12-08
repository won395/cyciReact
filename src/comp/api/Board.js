import api from '../ax/axiosSetting';

export const fetchPosts = (params) => {
    return api.get('/posts', { params });
}

export const fetchPostDetail = (id) => {
    return api.get(`/posts/${id}`);
}
export const createPost = (data) => {
    return api.post('/posts', data);
}

export const updatePost = (data) => {
    return api.put(`/posts/${data.id}`, data);
}

export const deletePost = (id) => {
    return api.delete(`/posts/${id}`);
}

export const updateRecommendation = (id) => {
    return api.post(`/posts/${id}/recommend`);
}