const API_URL = "http://127.0.0.1:8000/api";

export const getPosts = () => {
    return fetch(`${API_URL}/posts?exists[publishedAt]=true`, {
        method: 'GET',
        headers: {
            'accept': 'application/ld+json'
        }
    });
};

export const getPost = (id) => {
    return fetch(`${API_URL}/posts/${id}`, {
        method: 'GET',
        headers: {
            'accept': 'application/json'
        }
    });
};