const URL = process.env.REACT_APP_APIURL;

const fetchPosts = async () => {
    try {
        const response = await fetch(`${URL}posts`);
        const data = await response.json();
        return data;
    } catch (error) {
        return error;
    }
}

export {
    fetchPosts
};