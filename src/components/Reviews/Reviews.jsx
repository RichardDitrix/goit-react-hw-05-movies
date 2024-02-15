import { useParams } from 'react-router-dom';
import { Spinner } from 'components/Spinner';
import { STATUS } from 'utils/status';
import { useFetchReviewsById } from 'hooks/useFetchReviewsById';

const Reviews = () => {
  const { movieId } = useParams();
  const { reviews, status, error } = useFetchReviewsById(movieId);

  if (status === STATUS.PENDING) {
    return <Spinner />;
  }

  if (status === STATUS.REJECTED) {
    return <div>Error: {error.message}</div>;
  }

  if (status === STATUS.RESOLVED && reviews.length === 0) {
    return <div>We don't have any reviews for this movie.</div>;
  }

  return (
    <ul>
      {reviews.map(({ author, content, id }) => (
        <li key={id}>
          <h3>Author: {author}</h3>
          <p>{content}</p>
        </li>
      ))}
    </ul>
  );
};

export default Reviews;
