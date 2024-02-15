import MoviesList from 'components/MoviesList/MoviesList';
import { Spinner } from 'components/Spinner';
import { STATUS } from 'utils/status';
import { useFetchMovies } from 'hooks/useFetchMovies';
import { Title } from './Home.styled';

const Home = () => {
  const { movies, status, error } = useFetchMovies();

  return (
    <>
      <Title>Trending today</Title>
      {status === STATUS.PENDING && <Spinner />}

      {status === STATUS.REJECTED && <h1>Error: {error.message}</h1>}

      {status === STATUS.RESOLVED && <MoviesList movies={movies} />}
    </>
  );
};

export default Home;
