import React from "react";
import {Link} from 'react-router-dom';
import './Navigation.css';

function Navigation() {
    return(
        <header>
            <h1>이미지 소스 검색</h1>
        <div className="nav">
            <span><Link to="/">Home</Link></span>
            <span><Link to="/myalbum">Album</Link></span>
        </div>
        </header>
    );
}

export default Navigation;