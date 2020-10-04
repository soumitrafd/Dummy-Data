import React, {useState} from 'react';
import './pagination.scss';

const Pagination = ({postsPerPage, totalPost, paginate}) => {

    const pageNumber = [];

    for(let i = 1; i<= Math.ceil(totalPost / postsPerPage); i++){
        pageNumber.push(i);
    }

    const [currentPagination, setCurrentPagination] = useState(1);
    const [paginationOnce] = useState(5);

    const lastPagiIndex = currentPagination * paginationOnce;
    const firstPagiIndex = lastPagiIndex - paginationOnce;
    const currentPaginationNumber = pageNumber.slice(firstPagiIndex, lastPagiIndex);

    const prev = () => {
        let newSet = currentPagination - 1;
        setCurrentPagination(newSet);
    }

    const next = () => {
        let newSet = currentPagination + 1;
        setCurrentPagination(newSet);
    }

    return(
        <nav aria-label="Page navigation example">
            <ul className="pagination">
                <li className={"page-item" + (currentPagination == 1 && " disabled")}>
                    <a className="page-link" onClick={() => prev()} aria-label="Previous">
                        <span aria-hidden="true">&laquo;</span>
                        <span className="sr-only">Previous</span>
                    </a>
                </li>
                {currentPaginationNumber.map(number => (
                    <li className="page-item" key={number}>
                        <a onClick={() => paginate(number)} className="page-link">
                            {number}
                        </a>
                    </li>
                ))}
                <li className={"page-item" + (lastPagiIndex >= pageNumber.length && " disabled")}>
                    <a className="page-link" onClick={() => next()} aria-label="Next">
                        <span aria-hidden="true">&raquo;</span>
                        <span className="sr-only">Next</span>
                    </a>
                </li>
            </ul>
        </nav>
    )
}

export default Pagination;