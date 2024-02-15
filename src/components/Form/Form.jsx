import { FaSearch } from 'react-icons/fa';
import { FormStyled, SearchButton, SearchInput } from './Form.styled';

const Form = ({ onSubmit }) => {
  return (
    <FormStyled onSubmit={onSubmit}>
      <SearchInput type="text" name="search" />
      <SearchButton type="submit">
        <FaSearch size={20} />
      </SearchButton>
    </FormStyled>
  );
};

export default Form;
