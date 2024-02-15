import { useEffect, useState } from 'react';
import { getCastById } from '../services/api';
import { STATUS } from '../utils/status';

export const useFetchCastById = id => {
  const [cast, setCast] = useState([]);
  const [status, setStatus] = useState(STATUS.IDLE);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchCast() {
      setStatus(STATUS.PENDING);
      try {
        const cast = await getCastById(id);
        setCast(cast);
        setStatus(STATUS.RESOLVED);
      } catch (error) {
        setError(error);
        setStatus(STATUS.REJECTED);
      }
    }

    fetchCast();
  }, [id]);

  return { cast, status, error };
};
