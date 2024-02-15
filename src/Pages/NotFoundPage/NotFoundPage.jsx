import {
  ErrorContainer,
  ErrorTitle,
  GoToHomepage,
} from './NotFoundPage.styled';

const NotFoundPage = () => {
  return (
    <ErrorContainer>
      <ErrorTitle>Sorry. Page not found</ErrorTitle>
      <GoToHomepage to="/">Go to homepage</GoToHomepage>
    </ErrorContainer>
  );
};

export default NotFoundPage;
