import React from 'react';
import './About.css';

function About(props) {
    console.log(props);
    return(
        <div className='about__container'>
            <span>
                이 사이트는 카카오 API를 활용하여 도서 검색 서비스를 제공합니다.
            </span>
            
            <span>
                <a href="https://developers.kakao.com/product" target="_blank" rel="noopener noreferrer">카카오 API 더 알아보기</a>
            </span>
        </div>
    );
}

export default About;