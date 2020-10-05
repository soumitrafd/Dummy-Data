const URL = process.env.REACT_APP_APIURL;

const fetchPosts = async (postId = '') => {
    try {
        const response = await fetch(postId ? `${URL}posts/${postId}` : `${URL}posts`);
        const data = await response.json();
        return data;
    } catch (error) {
        return error;
    }
}


export {
    fetchPosts
};