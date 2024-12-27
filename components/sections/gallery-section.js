'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const images = [
  {
    url: '/img1.jpg',
    
  },
  {
    url: '/img2.jpg',
    
  },
  {
    url: '/img3.jpg',
    
  },
  {
    url: '/img4.jpg',
    
  }
];

export function GallerySection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="gallery" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Gallery</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Glimpses of our previous events and activities
          </p>
        </motion.div>

        <div className="relative overflow-hidden rounded-lg aspect-[2/1]">
          <motion.div
            animate={{ x: `-${currentIndex * 100}%` }}
            transition={{ type: 'spring', stiffness: 50, damping: 20 }}
            className="flex"
          >
            {images.map((image, index) => (
              <div
                key={index}
                className="min-w-full relative"
              >
                <img
                  src={image.url}
                  alt={image.caption}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
                  <p className="text-white text-xl font-semibold">{image.caption}</p>
                </div>
              </div>
            ))}
          </motion.div>

          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  currentIndex === index ? 'bg-white' : 'bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}