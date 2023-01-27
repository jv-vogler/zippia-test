import { FaSearch } from 'react-icons/fa';
import styled from 'styled-components';

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-around;
  place-items: center;
  height: 100%;
  padding: 2rem 0;
  position: sticky;
  top: 0;
  z-index: 100;
  color: #f5f5f5;
  background-color: #333;

  @media screen and (max-width: 768px){
    flex-direction: column;
    gap: 20px;
  }
`;

const Input = styled.input`
  height: 44px;
  padding: 6px 10px;
  font-size: 1rem;
  border: none;
  outline: none;
  border-top-left-radius: 3px;
  border-bottom-left-radius: 3px;
`;

const SearchBtn = styled.button`
  height: 44px;
  padding: 0px 15px;
  border: none;
  outline: none;
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;
  color: #fff;
  background-color: #ff6000;
  cursor: pointer;

  &:hover {
    background-color: #e23c00;
  }
`

const FilterBtn = styled.button`
  padding: 0.5rem 1rem;
  border: 1px solid #fff;
  color: #fff;
  background-color: #333;
  cursor: pointer;
`

const Header: React.FC = () => {
  return (
    <StyledHeader>
      <h1>Zippia Test</h1>
      <div>
        <Input type="text" placeholder="Company name" />
        <SearchBtn><FaSearch /></SearchBtn>
      </div>
      <FilterBtn>Past 7 days</FilterBtn>
    </StyledHeader>
  );
};
export default Header;
