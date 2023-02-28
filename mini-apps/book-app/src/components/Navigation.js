import React from "react";
import {Link} from 'react-router-dom';
import './Navigation.css';

function Navigation() {
    return(
        <header>
            <h1>도서 검색 서비스</h1>
        <div className="nav">
            <span><Link to="/">Home</Link></span>
            <span><Link to="/about">About</Link></span>
        </div>
        </header>
    );
}

export default Navigation;