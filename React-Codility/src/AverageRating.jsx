import React from 'react'

export function AverageRating({ rating }) {
    const totalRating = ratings.reduce((acc, { rate }) => acc + rate, 0);
    const averageRating = Math.ceil(totalRating / ratings.length);
    const filledStars = '★'.repeat(averageRating);
    const emptyStars = '☆'.repeat(5 - averageRating);
    return (
      <div className='ratings__average'>
         <div>{[...filledStars, ...emptyStars].map((star, index) => <span key={index}>{star}</span>)}</div>
      </div>
     
      
  )
}

