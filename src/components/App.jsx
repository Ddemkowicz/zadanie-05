import { useState, lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import SharedLayout from './SharedLayout/SharedLayout';
import NotFound from 'pages/NotFound';

const Home = lazy(() => import('../pages/Home'));
const Movies = lazy(() => import('../pages/Movies'));
const MovieDetails = lazy(() => import('../pages/MovieDetails'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));

export const App = () => {
  const [movies, setMovies] = useState([]);

  const resetMovies = () => {
    setMovies([]);
  };

  return (
    <Routes>
      <Route path="/" element={<SharedLayout resetMovies={resetMovies} />}>
        <Route
          index
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <Home movies={movies} setMovies={setMovies} />
            </Suspense>
          }
        />
        <Route
          path="movies"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <Movies movies={movies} setMovies={setMovies} />
            </Suspense>
          }
        />

        <Route
          path="movies/:movieId"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <MovieDetails />
            </Suspense>
          }
        >
          <Route
            path="cast"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <Cast />
              </Suspense>
            }
          />
          <Route
            path="reviews"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <Reviews />
              </Suspense>
            }
          />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};
