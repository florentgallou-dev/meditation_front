import { ENTRYPOINT } from '../config/entrypoint';

export const getPosts = () => {
    return fetch(`${ENTRYPOINT}/posts?exists[publishedAt]=true`, {
        method: 'GET',
        headers: {
            'accept': 'application/ld+json'
        }
    });
};

export const getPost = (id) => {
    return fetch(`${ENTRYPOINT}/posts/${id}`, {
        method: 'GET',
        headers: {
            'accept': 'application/json'
        }
    });
};