import React from 'react';
import './Image.css';

function Image(props) {
    const image = props.data;
    const saveImg = () => {
        var photo = localStorage.getItem('photo');
        photo = JSON.parse(photo);
        var newPhoto = [{id:image.id, urls:{thumb:image.urls.thumb}, alt_description:image.alt_description}];
        if (photo)
        photo = [...photo, newPhoto];
        else photo = [newPhoto];
        localStorage.setItem('photo', JSON.stringify(photo));
        alert('내 앨범에 저장되었습니다.');
    };

    if (props.className === 'search') 
    return (
    <div className="search">
        <img key={image.id} src={image.urls.thumb} alt={image.alt_description} />
        <button onClick={saveImg}>저장</button>
    </div>
    );
    else if (props.className === 'album') 
    return (<img key={image[0].id} src={image[0].urls.thumb} 
        alt={image[0].alt_description} style={{padding:'5px', width:'300px'}}/>)
};

export default Image;