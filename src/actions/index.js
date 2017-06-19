import axios from 'axios';

const ROOT_URL = "http://reduxblog.herokuapp.com/api";
const API_KEY = "?key=foo";
const REQUEST_URL = `${ROOT_URL}/posts${API_KEY}`;

export const FETCH_POSTS = 'fetch_posts';
export const SAVE_POST = 'save_post';

export const fetchPosts = () => {
    const request = axios.get(REQUEST_URL);
    return {
        type: FETCH_POSTS,
        payload: request
    };
}

export const savePost = (values) => {    
    const request = axios.post(REQUEST_URL, values);
    return {
        type: SAVE_POST,
        payload: request
    };
}
