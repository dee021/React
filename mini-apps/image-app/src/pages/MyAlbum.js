import React from 'react';
import Image from '../components/Image';

function MyAlbum(props) {
    var album = localStorage.getItem('photo');
        album = JSON.parse(album);
    return(
        <div style={{paddingTop:'150px', paddingRight:'20px', paddingLeft:'20px'}}>
            {album.map((val) => 
                <Image className="album" data={val}/>
            )}
        </div>
    )
};

export default MyAlbum;