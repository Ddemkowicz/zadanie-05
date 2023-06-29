import React from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';
import { api } from 'service/api';

const Home = props => {
  const { movies, setMovies } = props;

  useEffect(() => {
    api.fetchGetTrending().then(res => {
      setMovies(res);
    });
  }, [setMovies]);

  const src = `https://www.themoviedb.org/t/p/w220_and_h330_face`;
  return (
    <div>
      <h1>Trending Movies</h1>
      <ul
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gridTemplateRows: 'repeat(5, 1fr)',
          gridColumnGap: '20px',
          gridRowGap: '20px',
        }}
      >
        {movies.map(movie => (
          <li
            style={{
              listStyle: 'none',
              width: '220px',
              height: '400px',
              margin: '10px',
              padding: '10px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-around',
              alignItems: 'center',
              textAlign: 'center',
              border: '1px solid #ccc',
              fontSize: '20px',
            }}
            key={movie.id}
          >
            <Link to={`movies/${movie.id}`}>
              <img src={src + movie.poster_path} alt={movie.title} />
              <p>{movie.title ? movie.title : movie.name}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

Home.propTypes = {};

export default Home;
