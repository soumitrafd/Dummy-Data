import React from 'react';
import './postdetails.scss';
import { useLocation } from 'react-router-dom';

const PostDetails = () => {

   const location = useLocation();
   const {title, body, imgSrc} = location.state;


    return(
        <div className="row post-details">
            <figure className="col-md-5">
                <img src={imgSrc} className="img-fluid" alt="post" />
            </figure>
            <article className="col-md-7">
                {title && <h2>{title}</h2>}
                {body && <p>{body}</p>}
            </article>
        </div>
    )
}

export default PostDetails;