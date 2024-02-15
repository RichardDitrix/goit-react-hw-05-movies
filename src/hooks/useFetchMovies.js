import { useEffect, useState } from 'react';
import { getTrendingMovies } from 'services/api';
import { STATUS } from 'utils/status';

export const useFetchMovies = () => {
  const [movies, setMovies] = useState([]);
  const [status, setStatus] = useState(STATUS.IDLE);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchMovies() {
      setStatus(STATUS.PENDING);
      try {
        const movies = await getTrendingMovies();
        setMovies(movies);
        setStatus(STATUS.RESOLVED);
      } catch (error) {
        setError(error);
        setStatus(STATUS.REJECTED);
      }
    }

    fetchMovies();
  }, []);

  return { movies, status, error };
};
