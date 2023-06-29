import React from 'react';
import { Container, Header, Link } from 'components/App.styled';
import { Outlet } from 'react-router-dom';

const SharedLayout = props => {
  const { resetMovies, trendingMovies } = props;

  return (
    <Container>
      <Header>
        <nav>
          <Link onClick={trendingMovies} to="/">
            Home
          </Link>
          <Link onClick={resetMovies} to="/movies">
            Movies
          </Link>
        </nav>
      </Header>
      <Outlet />
    </Container>
  );
};

export default SharedLayout;
