import React from "react";
import { FaStar } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const BookCard = ({ book }) => {
    return (
        <Link to={`booksDetails/${book._id}`}>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                className=" bg-base-200 rounded-2xl shadow-2xl p-4 space-y-2"
            >
                {/* Image with smooth zoom on hover */}
                <div className="w-full aspect-[3/4] overflow-hidden rounded-xl">
                    <motion.img
                        whileHover={{ scale: 1.07 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        src={book.coverImage}
                        alt={book.title}
                        className=" object-cover"
                    />
                </div>

                <p className="text-gray-500 text-sm">{book.genre} Book</p>

                <h2 className="text-xl font-semibold text-blue-700 leading-tight">
                    {book.title}
                </h2>

                <div className="flex items-center gap-2">
                    <p className="text-orange-600 text-lg font-bold">৳{book.price}</p>
                    <p className="line-through text-gray-400">৳599</p>
                </div>

                <div className="flex items-center gap-2">
                    <img
                        src="https://i.pravatar.cc/30?img=3"
                        alt="author"
                        className="w-6 h-6 rounded-full"
                    />
                    <p className="text-sm text-gray-600">(Author) {book.author}</p>
                </div>

                <div className="flex items-center gap-1 text-orange-400">
                    {Array.from({ length: 5 }, (_, i) => (
                        <FaStar
                            key={i}
                            className={i < Math.round(book.rating) ? "text-orange-500" : "text-gray-300"}
                        />
                    ))}
                </div>

                <button className="btn bg-blue-100 text-blue-800 w-full mt-2 font-semibold rounded-full">
                    🛒 Add To Cart
                </button>
            </motion.div>
        </Link>
    );
};

export default BookCard;
