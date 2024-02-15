import { Suspense } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { BsFillArrowLeftCircleFill } from 'react-icons/bs';
import { Spinner } from 'components/Spinner';
import NotFoundPage from 'pages/NotFoundPage';
import { STATUS } from 'utils/status';
import { useFetchMovieById } from 'hooks/useFetchMovieById';
import {
  BaseInformation,
  ButtonBack,
  Description,
  Image,
} from './MovieDetails.styled';

const MovieDetails = () => {
  const { movieId } = useParams();
  const location = useLocation();
  const prevLocation = location?.state?.from ?? '/';

  const { movie, status } = useFetchMovieById(movieId);

  const { title, poster_path, overview, genres, release_date, vote_average } =
    movie;

  return (
    <>
      <ButtonBack to={prevLocation}>
        <BsFillArrowLeftCircleFill size={24} />
        Go back
      </ButtonBack>

      {status === STATUS.PENDING && <Spinner />}

      {status === STATUS.REJECTED && <NotFoundPage />}

      {status === STATUS.RESOLVED && (
        <div>
          <BaseInformation>
            <Image
              src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
              alt={`${title}'s poster`}
            ></Image>
            <Description>
              <h1>
                {title} ({release_date.slice(0, 4)})
              </h1>
              <p>User Score: {vote_average * 10}%</p>
              <h2>Overview</h2>
              <p>{overview}</p>
              <h2>Genres</h2>
              <p>{genres.map(({ name }) => name).join(', ')}</p>
            </Description>
          </BaseInformation>

          <hr />
          <h3>Additional information</h3>
          <ul>
            <li>
              <Link to="cast" state={{ from: prevLocation }}>
                Cast
              </Link>
            </li>
            <li>
              <Link to="reviews" state={{ from: prevLocation }}>
                Reviews
              </Link>
            </li>
          </ul>

          <hr />
          <Suspense fallback={<Spinner />}>
            <Outlet />
          </Suspense>
        </div>
      )}
    </>
  );
};

export default MovieDetails;
