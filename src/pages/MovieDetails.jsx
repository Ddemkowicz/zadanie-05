import React, { useEffect, useState } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import { api } from 'service/api';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const movie = await api.fetchGetMoviesDetails(movieId);
        setMovie(movie.data);
      } catch (error) {
        alert('Error');
      }
    })();
  }, [movieId]);

  const src = `https://www.themoviedb.org/t/p/w220_and_h330_face`;

  return (
    <>
      <img src={src + movie.poster_path} alt={movie.title} />
      <h3>{movie.title ? movie.title : movie.name}</h3>
      <p>Vote average: {movie.vote_average}/10</p>
      <h4>Overview</h4>
      <p>{movie.overview}</p>
      <h5>Genres</h5>
      <ul>
        {movie.genres && movie.genres.length > 0
          ? movie.genres.map(({ id, name }) => <li key={id}>{name}</li>)
          : ''}
      </ul>
      <Link to="cast">
        <p>Cast</p>
      </Link>
      <Link to="reviews">
        <p>Reviews</p>
      </Link>
      <Outlet />
    </>
  );
};

export default MovieDetails;

// release_date  *** cztery pierwsze cyfry
// title
// vote_average
// overview
// genres.name
