import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Book from '../components/Book';
import './Home.css';

function Home(props){
    const [isLoading, setIsLoading] = useState(false);
    const [books, setBooks] = useState([]);
    const [word, setWord] = useState('');

    const handleChgWord = (event) => {
        setWord(event.target.value);
    }

    const getBooks = async (event)=>{
        setIsLoading(true);
        const KAKAO_KEY = '45b1f214d72cd568b60363c53d8e61a8';

        const{ 
            data: {documents}
        // } = await axios.get('https://dapi.kakao.com/v3/search/web.json', {
        } = await axios.get('https://dapi.kakao.com/v3/search/book.json', {
            params: {
                query: word,
                size: 20
            },
            headers: {
                'Content-Type': 'application/json',
                'Authorization' : 'KakaoAK ' + KAKAO_KEY
            }
        });
        setBooks(documents);
        setIsLoading(false);
    };

    useEffect(() => {
        console.log('change books', books);
    }, [books]);


        return(
            <div>
                <div className="search">
                <form onSubmit={getBooks}>
                <input type="search" value={word} onChange={handleChgWord} />
                <button type="submit">검색</button>
                </form>
                </div>
                <hr />
            <section className="container">
                {isLoading? (
                    <div className="loader">
                        <span className="loader_text">Loading...</span>
                    </div>
                ):(
                    <div className="books">
                        {books.map((book, index) => (
                            <Book key={index} id={index} 
                            datetime={book.datetime.substring(0,10)}
                            title={book.title} contents={book.contents}
                            thumbnail={book.thumbnail}
                            publisher={book.publisher}
                            authors={book.authors} price={book.price}/>
                        ))}
                    </div>
                )}
            </section>
            </div>
        );
}

export default Home;