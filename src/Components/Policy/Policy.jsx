import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';

const Policy = () => {
  const [policy, setPolicy] = useState([]);

  useEffect(() => {
    fetch('policyData.json')
      .then(res => res.json())
      .then(data => {
        setPolicy(data);
      });
  }, []);

  return (
    <div className="py-10 px-4 bg-base-300 rounded-3xl">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-10 text-blue-900">
          Our Policies
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {policy.map((p, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white shadow-lg rounded-xl p-6 text-center hover:shadow-2xl transition-shadow duration-300"
            >
              {p.image && (
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-16 h-16 mx-auto mb-4 object-contain"
                />
              )}
              <h2 className="text-xl font-semibold text-blue-800 mb-2">{p.title}</h2>
              <p className="text-sm text-gray-600">{p.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Policy;
