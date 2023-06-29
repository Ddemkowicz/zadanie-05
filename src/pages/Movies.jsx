import { Container, Header } from 'components/App.styled';
import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { api } from 'service/api';

const Movies = props => {
  const { movies, setMovies } = props;
  const [query, setQuery] = useState([]);

  const handleQuery = event => {
    setQuery(event.target.value);
  };

  const onButtonClick = async () => {
    const newMovies = await api.fetchSearchMovies(query);
    setMovies(newMovies.results);
  };
  // const aaa = async () => {
  //   const bbb = await api.fetchGetMoviesReviews(455476);
  //   console.log(bbb);
  // };

  const src = `https://www.themoviedb.org/t/p/w220_and_h330_face`;
  return (
    <Container>
      <Header>
        <input type="text" value={query} onChange={handleQuery} />
        <button type="button" onClick={onButtonClick}>
          Search
        </button>
        {/* <button onClick={aaa} type="button">
          IDD
        </button> */}
      </Header>
      {Movies.length > 0 ? (
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
              {' '}
              <Link to={`${movie.id}`}>
                <img src={src + movie.poster_path} alt={movie.title} />
                <p>{movie.title ? movie.title : movie.name}</p>
              </Link>
            </li>
          ))}
        </ul>
      ) : null}
    </Container>
  );
};
export default Movies;
