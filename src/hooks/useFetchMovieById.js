import { useEffect, useState } from 'react';
import { getMovieById } from 'services/api';
import { STATUS } from 'utils/status';

export const useFetchMovieById = id => {
  const [movie, setMovie] = useState([]);
  const [status, setStatus] = useState(STATUS.IDLE);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchMovies() {
      setStatus(STATUS.PENDING);
      try {
        const movie = await getMovieById(id);
        setMovie(movie);
        setStatus(STATUS.RESOLVED);
      } catch (error) {
        setError(error);
        setStatus(STATUS.REJECTED);
      }
    }

    fetchMovies();
  }, [id]);

  return { movie, status, error };
};
