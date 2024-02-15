import { useEffect, useState } from 'react';
import { searchMovies } from '../services/api';
import { STATUS } from '../utils/status';

export const useSearchMovies = query => {
  const [movies, setMovies] = useState([]);
  const [status, setStatus] = useState(STATUS.IDLE);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchMovies() {
      if (query) {
        setStatus(STATUS.PENDING);
        try {
          const movies = await searchMovies(query);
          setMovies(movies);
          setStatus(STATUS.RESOLVED);
        } catch (error) {
          setError(error);
          setStatus(STATUS.REJECTED);
        }
      }
    }

    fetchMovies();
  }, [query]);

  return { movies, status, error };
};
