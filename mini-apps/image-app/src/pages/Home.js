import React, {useState} from 'react';
import axios from 'axios';
import Image from '../components/Image';
import './Home.css';

function Home(props){
    const [image, setImage] = useState('');
    const [res, setRes] = useState([]);

    const handleChgWord = (event) => {
        setImage(event.target.value);
    }

    const getImages = async ()=>{
        const ACCESS_KEY = 'K1wf5S3UNg4BHfTZVpN-aNZUmq_AVY3oZe9wtUbTANY';

        const{ 
            data
        } = await axios.get(`https://api.unsplash.com/search/photos?query=${image}&client_id=${ACCESS_KEY}&orientation=landscape&per_page=24`);
        setRes(data.results);
    };

        return(
            <div style={{paddingTop:'150px'}}>
                <div className="search" 
                style={{textAlign:'center'}}
                >
                <input type="search" value={image} onChange={handleChgWord}
                style={{border:'3px solid black', borderRadius:'5px',
                height:'40px'}} />&nbsp;&nbsp;
                <input type="button" value="검색" onClick={getImages} 
                style={{border:'3px solid black', 
                height:'42px',
                borderRadius:'5px'}}/>
                </div>
                <hr />
            <section className="container" style={{display:'gird', gridAutoFlow:'row dense'}}>
                    <div className="images" >
                        {res.map((val) => (
                            <div>
                            <Image className="search" data={val} key={val.id}/>
                            </div>
                        ))}
                    </div>
            </section>
            </div>
        );
}

export default Home;