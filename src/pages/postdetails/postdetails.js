import React, {useEffect, useState} from 'react';
import './postdetails.scss';
import {
    fetchPosts
} from '../../services/services';

const PostDetails = (props) => {
    const [post, setPost] = useState({});
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        setLoading(true);
        const postId = props.match.params.id;
        fetchPosts(postId)
        .then((post) => {setPost({...post}); setLoading(false)})
        .catch((e) => {setError(e); setLoading(false)});
    },[]);

    return(
        loading ? 
        <h2>Loading...</h2> : 
        error ? 
        <h2 className="text-danger">{error}</h2> :
        <div className="row post-details">
            <figure className="col-md-5">
                <img src={`https://loremflickr.com/420/240?random=${post.id}`} className="img-fluid" alt="post" />
            </figure>
            <article className="col-md-7">
                {post && <h2>{post.title}</h2>}
                {post && <p>{post.body}</p>}
            </article>
        </div>
    )
}

export default PostDetails;