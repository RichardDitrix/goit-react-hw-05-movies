import { useParams } from 'react-router-dom';
import { useFetchCastById } from 'hooks/useFetchCastById';
import { Spinner } from 'components/Spinner/Spinner';
import { STATUS } from 'utils/status';

import { Image, List } from './Cast.styled';
import UnknowPerson from 'images/unknown-person.jpg';

const Cast = () => {
  const { movieId } = useParams();
  const { cast, status, error } = useFetchCastById(movieId);

  if (status === STATUS.PENDING) {
    return <Spinner />;
  }

  if (status === STATUS.REJECTED) {
    return <div>Error: {error.message}</div>;
  }

  if (status === STATUS.RESOLVED && cast.length === 0) {
    return <div>We don't have cast for this movie.</div>;
  }

  return (
    <List>
      {cast.map(({ name, profile_path, character, id }) => (
        <li key={id}>
          <Image
            src={
              profile_path
                ? `https://image.tmdb.org/t/p/w500${profile_path}`
                : UnknowPerson
            }
            alt={`${name}`}
          ></Image>
          <h3>{name}</h3>
          <p>Character: {character || 'unknown'}</p>
        </li>
      ))}
    </List>
  );
};


export default Cast;
