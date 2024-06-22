import React from 'react';

const CourseCards = ({ image, title, instructor, rating, reviews, price, label }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden w-64 flex-shrink-0">
      <iframe src={image} alt={title} className="w-full h-40 object-cover" />
      <div className="p-4">
        <h2 className="text-lg font-bold mb-2">{title}</h2>
        <p className="text-gray-600 mb-2">{instructor}</p>
        <div className="flex items-center mb-2">
          <span className="text-yellow-500 mr-1">{rating} ★</span>
          <span className="text-gray-600">({reviews})</span>
        </div>
        <div className="text-lg font-bold mb-2">{price}</div>
        {label && <div className="bg-yellow-500 text-white px-2 py-1 rounded text-xs font-bold">{label}</div>}
      </div>
    </div>
  );
};

export default CourseCards;
