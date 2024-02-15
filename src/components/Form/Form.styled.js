import styled from 'styled-components';

export const FormStyled = styled.form`
  display: flex;
  justify-content: center;
`;

export const SearchInput = styled.input`
  box-sizing: border-box;
  height: 32px;
  padding: 5px 10px;
  width: 20%;

  font-size: 16px;
`;

export const SearchButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  background-color: transparent;
  border: none;

  &:hover,
  &:focus {
    color: red;
  }
`;
