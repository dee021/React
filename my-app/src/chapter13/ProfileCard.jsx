import React from "react";
import Card from "./Card";


function ProfileCard(props) {
    const cards = [
        {
            cl: 'red',
            title: '빨강',
            desc: '태양, 사과, 고추, 토마토',
        },
        {
            cl:'orange',
            title:'주황',
            desc:'오렌지, 자몽, 노을',
        },
        {
            cl : 'rgb(70,70,255)',
            title: '파랑',
            desc:'바다, 하늘, 사파이어',
        },
        {
            cl:'green',
            title:'초록',
            desc:'나무, 잔디, 산',
        },
        {
            cl:'white',
            title: '하양',
            desc:'눈사람, 구름',
        },
        {
            cl:'rgb(215,125,255)',
            title: '보라',
            desc:'진달래',
        },
        {
            cl:'yellow',
            title: '노랑',
            desc:'개나리, 레몬',
        },
    ];

    return (
        <div>
         {cards.map((card, index) => {
         return <Card key={index} title={card.title} backgroundColor={card.cl}>
        <p>{card.desc}</p></Card>})}
        </div>
    );
}

export default ProfileCard;