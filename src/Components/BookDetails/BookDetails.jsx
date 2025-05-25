import React from "react";
import { FaStar } from "react-icons/fa";
import { motion } from "framer-motion";
import { useLoaderData } from "react-router-dom";

const BookDetails = () => {
    const book = useLoaderData();
    console.log(book);

    return (
        <motion.div
            className="max-w-6xl mx-auto px-6 py-10 md:flex gap-12 items-start bg-white rounded-2xl shadow-lg"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            {/* Book Image */}
            <motion.div
                className="md:w-1/2 overflow-hidden rounded-xl shadow-md"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
            >
                <img
                    src={book.coverImage}
                    alt={book.title}
                    className="w-full h-[450px] object-cover object-center rounded-xl"
                />
            </motion.div>

            {/* Book Info */}
            <div className="md:w-1/2 space-y-6">
                <h1 className="text-4xl font-bold text-gray-800">{book.title}</h1>
                <p className="text-gray-500 text-sm">
                    By <span className="font-semibold text-black">{book.author}</span> | 
                    Published by <span className="text-black">{book.publisher}</span> in {book.publishYear}
                </p>

                <div className="flex items-center gap-2">
                    {Array.from({ length: 5 }, (_, i) => (
                        <FaStar
                            key={i}
                            className={i < Math.round(book.rating) ? "text-yellow-400" : "text-gray-300"}
                        />
                    ))}
                    <span className="text-sm text-gray-600">({book.rating})</span>
                </div>

                <div>
                    <p className="text-2xl font-semibold text-orange-600">৳{book.price}</p>
                    <p className="line-through text-gray-400 text-sm mt-1">৳599</p>
                </div>

                <p className="text-sm font-medium text-blue-600 uppercase">{book.genre} Book</p>

                <p className="text-base text-gray-700 leading-relaxed">{book.description}</p>

                {/* Buttons */}
                <div className="flex gap-4 pt-4">
                    <motion.button
                        whileTap={{ scale: 0.95 }}
                        whileHover={{ scale: 1.03 }}
                        transition={{ duration: 0.2 }}
                        className="px-6 py-3 bg-blue-600 text-white rounded-full font-medium shadow hover:bg-blue-700"
                    >
                        🛒 Add to Cart
                    </motion.button>

                    <motion.button
                        whileTap={{ scale: 0.95 }}
                        whileHover={{ scale: 1.03 }}
                        transition={{ duration: 0.2 }}
                        className="px-6 py-3 bg-orange-500 text-white rounded-full font-medium shadow hover:bg-orange-600"
                    >
                        ⚡ Buy Now
                    </motion.button>
                </div>
            </div>
        </motion.div>
    );
};

export default BookDetails;
