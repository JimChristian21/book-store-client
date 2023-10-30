import React, {
    useState,
    useEffect
} from 'react'
import BookCards from '../../components/BookCards';

const OtherBooks = () => {
    const [books, setBooks] = useState([]);
    
    useEffect(() => {

        fetch('https://book-store-server-rspc.onrender.com/books')
            .then(res => res.json())
            .then(data => setBooks(data))
            .catch(err => console.error(err));
    }, []);

    return (
        <div>
            <BookCards books={books} headline="Others Book"/>
        </div>
    )
}

export default OtherBooks;