import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div
            className="relative rounded-2xl overflow-hidden h-[70vh] md:h-[85vh] bg-cover bg-center flex items-center justify-center text-white"
            style={{
                backgroundImage: "url('https://i.ibb.co/pjRYNNP7/vecteezy-ai-generated-book-store-advertisment-background-with-copy-space-36594342.jpg')",
            }}
        >
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40"></div>

            {/* Content */}
            <div className="relative z-10 max-w-3xl text-center px-4">
                <motion.h1
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="text-3xl md:text-5xl font-extrabold leading-tight"
                >
                    Read Books & Gain Knowledge
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 1 }}
                    className="mt-4 text-lg md:text-xl text-gray-200"
                >
                    Dive into a universe of stories, ideas, and inspiration with Bookle. Discover your next favorite book today!
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1, duration: 0.6 }}
                    className="mt-6"
                >
                    <Link
                        to="/shop"
                        className="bg-white text-blue-900 font-semibold py-2 px-6 rounded-full hover:bg-blue-100 transition"
                    >
                        Explore Now
                    </Link>
                </motion.div>
            </div>
        </div>
    );
};

export default Banner;
