import React, { useEffect, useState } from 'react'
import BookCards from '../../components/BookCards';

const BestSellerBooks = () => {

    const [books, setBooks] = useState([]);
    
    useEffect(() => {

        fetch('https://book-store-server-rspc.onrender.com/books')
            .then(res => res.json())
            .then(data => setBooks(data))
            .catch(err => console.error(err));
    }, []);

    return (
        <div>
            <BookCards books={books} headline="Best Seller Books"/>
        </div>
    )
}

export default BestSellerBooks