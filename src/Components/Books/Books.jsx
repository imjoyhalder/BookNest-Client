import React, { useEffect, useState } from 'react';
import { FaArrowRight } from "react-icons/fa6";
import { motion } from "framer-motion";
import BookCard from '../BookCard/BookCard';

const Books = () => {

    const [bookData , setBooksData] = useState([])

    useEffect(() => {
        fetch('https://book-nest-two-phi.vercel.app/books')
            .then(res => res.json())
            .then(data => {
                setBooksData(data);
            });
    }, [setBooksData]);

    console.log(bookData)

    return (
        <div className="px-4 py-8">
            <div className="md:flex justify-between items-center gap-4">
                <h1 className="text-3xl md:text-4xl font-semibold text-blue-700 mb-4 md:mb-0">
                    Featured Books
                </h1>
                <motion.button
                    whileHover={{ backgroundColor: "#1D4ED8" }} // Tailwind bg-blue-700
                    transition={{ duration: 0.3 }}
                    className="btn p-6 bg-blue-600 text-white text-xl rounded-2xl flex items-center gap-2"
                >
                    <p>Explore more</p>
                    <FaArrowRight />
                </motion.button>
            </div>
            <div className='grid  gap-4 md:grid-cols-3 lg:grid-cols-4 md:gap-4 justify-items-center'>
                {
                    bookData.map(book=> <BookCard key={book._id} book={book}></BookCard>)
                }
            </div>
        </div>
    );
};

export default Books;
