import React from "react";
import './card.scss';

const Card = ({cardData:{id, title, body, imgSrc}, postHandle}) => {
    return(
        <div className="card">
            <div className="card-body">
                {id &&
                    <figure>
                        <img src={imgSrc} className="img-fluid" alt={`post${id}`} />
                    </figure>
                }
                {title && 
                    <h5 className="card-title">
                        {title}
                    </h5>
                }
                {body && 
                    <p>{body}</p>
                }
                
            </div>
            <div className="card-overlay" onClick={()=>postHandle({title, body, imgSrc})}>
                
            </div>
        </div>
    )
}
export default Card;