import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { api } from 'service/api';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const reviews = await api.fetchGetMoviesReviews(movieId);
        setReviews(reviews);
      } catch (error) {
        alert('Error');
      }
    })();
  }, [movieId]);

  return (
    <>
      {reviews.length > 0 ? (
        <ul>
          {reviews.map(({ id, author_details: { name, rating }, content }) => (
            <li key={id}>
              <p>
                <span>Author:</span> {name ? name : 'Unknown'}
              </p>
              <p>
                <span>Rating:</span> {rating ? `${rating}/10` : 'Unknown'}
              </p>
              <p>
                <span>Description:</span> {content ? content : 'No description'}
              </p>
            </li>
          ))}
        </ul>
      ) : (
        "We don't have any reviews for this movie."
      )}
    </>
  );
};

export default Reviews;
