import React from 'react'

export function Rating({ name, rate, content }) {
     const filledStars = '★'.repeat(rate);
    const emptyStars = '☆'.repeat(5 - rate);
  return (
      <div className = 'ratings_item'>
          <h3>{name}</h3>
          <div>{[...filledStars, ...emptyStars].map((star, index) => <span key={index}>{star}</span>)}</div>
          <p>{content}</p>
      </div>
    
      
  )
}


