import { useSearchParams } from 'react-router-dom';
import Form from 'components/Form/Form';
import MoviesList from 'components/MoviesList/MoviesList';
import { Spinner } from 'components/Spinner/Spinner';
import { STATUS } from 'utils/status';
import { useSearchMovies } from 'hooks/useSearchMovies';

import { ListWrapper } from './Movies.styled';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');
  const { movies, status, error } = useSearchMovies(query);

  const onSubmit = event => {
    event.preventDefault();

    const query = event.target.elements.search.value.trim();
    setSearchParams({ query });
  };

  return (
    <>
      <Form onSubmit={onSubmit} />

      {status === STATUS.PENDING && <Spinner />}

      {status === STATUS.REJECTED && <h1>Error: {error.message}</h1>}

      {status === STATUS.RESOLVED && (
        <ListWrapper>
          <MoviesList movies={movies} />
        </ListWrapper>
      )}
    </>
  );
};

export default Movies;
