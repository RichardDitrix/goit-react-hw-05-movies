import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  height: 100%;
`;

export const ErrorTitle = styled.h1`
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const GoToHomepage = styled(Link)`
  display: inline-flex;
  align-items: center;

  color: '#4e54c8';
  font-weight: 700;

  &:hover,
  &:focus {
    color: red;
  }
`;
