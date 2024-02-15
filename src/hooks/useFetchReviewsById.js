import { useEffect, useState } from 'react';
import { getReviewsById } from '../services/api';
import { STATUS } from '../utils/status';

export const useFetchReviewsById = id => {
  const [reviews, setReviews] = useState([]);
  const [status, setStatus] = useState(STATUS.IDLE);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchReviews() {
      setStatus(STATUS.PENDING);
      try {
        const reviews = await getReviewsById(id);
        setReviews(reviews);
        setStatus(STATUS.RESOLVED);
      } catch (error) {
        setError(error);
        setStatus(STATUS.REJECTED);
      }
    }
    fetchReviews();
  }, [id]);

  return { reviews, status, error };
};
