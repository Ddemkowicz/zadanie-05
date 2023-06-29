import { Item } from 'components/App.styled';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { api } from 'service/api';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const cast = await api.fetchGetMoviesCredits(movieId);
        setCast(cast.cast);
      } catch (error) {
        alert('Error');
      }
    })();
  }, [movieId]);

  const srcCast = `https://www.themoviedb.org/t/p/w138_and_h175_face`;
  return (
    <>
      {cast.length > 0 && (
        <ul>
          {cast.map(({ id, profile_path, name, character }) => (
            <Item key={id}>
              {profile_path ? (
                <img
                  src={`${srcCast}${profile_path}`}
                  alt={`${name ? name : 'Actor'}'s`}
                  loading="lazy"
                />
              ) : (
                <p>(No photo)</p>
              )}
              <p>{name ? name : 'Unknown'}</p>
              <p>Character: {character ? character : 'Unknown'}</p>
            </Item>
          ))}
        </ul>
      )}
    </>
  );
};

export default Cast;
