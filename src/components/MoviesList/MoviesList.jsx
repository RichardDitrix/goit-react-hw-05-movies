import {
  MovieLink,
  MovieTitle,
  Poster,
  List,
  NoMovies,
} from './MoviesList.styles';

const MoviesList = ({ movies = [] }) => {
  if (movies.length === 0) return <NoMovies>No movies found</NoMovies>;

  return (
    <List>
      {movies.map(({ title, poster_path, name, id }) => (
        <li key={id}>
          <MovieLink to={`/movies/${id}`}>
            <Poster
              src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
              alt={`${title}'s poster`}
            />
            <MovieTitle>{title ?? name}</MovieTitle>
          </MovieLink>
        </li>
      ))}
    </List>
  );
};

export default MoviesList;
