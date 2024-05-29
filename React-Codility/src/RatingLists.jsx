import React from 'react';
import { Rating } from './Rating';
import { AverageRating } from './AverageRating';

function RatingLists({ratings}) { 
  return (
    <div className = 'ratings'> <AverageRating ratings={ratings} />
    {ratings.map((rating, index) => (
      <Rating
      key={index}
      name={rating.name}
      rate={rating.rate}
      content={rating.content}
    />
    ))}
      </div>
  )
}

export default RatingLists