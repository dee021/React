import React from "react";
import PropTypes from "prop-types";
import './Book.css';
import {Link} from 'react-router-dom';

function Book({title, contents, datetime, authors, publisher, price, thumbnail}) { 
    return (
        <div className="book">
            <Link to={{
                pathname: '/book-detail',
                state:{title, contents, datetime, authors, publisher, price, thumbnail},
            }}>
                <img src={thumbnail} alt={title} title={title} /> 
                <div className="book__data"> 

                    <h3 className="book__title">{title}</h3> 
                    <h3 className="book__datetime">출판사 : {publisher}</h3>
                    <h3 className="book__datetime">출판일 : {datetime}</h3>

                    <ul className="book_authors">
                        {authors.map((author, index) => (
                            <li key={index} className="book__authors">{author}</li>
                        ))}
                    </ul>

                    <p className="book__contents">{contents.slice(0, 150)}...</p> 
                </div>
            </Link>
        </div>
    );
}

Book.propTypes={
    datetime: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    contents: PropTypes.string.isRequired,
    publisher: PropTypes.string.isRequired,
    authors: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Book;