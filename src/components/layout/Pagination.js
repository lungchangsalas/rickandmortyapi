import React, { useState, useEffect } from "react";
import ReactPaginate from 'react-paginate';


function Pagination(props){
    const {pageNumber, info, updatePageNumber} = props;
    
    const handlePageClick = (data) => {
        updatePageNumber(data.selected + 1);
    };
    
    return(
        <div className="container ">
            <div className="row  justify-content-center">
                <div className="col-6 align-self-center ">
                    <ReactPaginate
                        nextLabel="next >"
                        onPageChange={handlePageClick}
                        pageRangeDisplayed={3}
                        marginPagesDisplayed={2}
                        pageCount={info?.pages}
                        previousLabel="< previous"
                        pageClassName="page-item"
                        pageLinkClassName="page-link"
                        previousClassName="page-item"
                        previousLinkClassName="page-link"
                        nextClassName="page-item"
                        nextLinkClassName="page-link"
                        breakLabel="..."
                        breakClassName="page-item"
                        breakLinkClassName="page-link"
                        containerClassName="pagination"
                        activeClassName="active"
                        renderOnZeroPageCount={null}
                    />
                </div>
            </div>
        </div>
    );
}

export {Pagination};