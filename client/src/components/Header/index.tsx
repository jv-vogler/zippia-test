/**
 * Instead of making an API request I opted to dynamically filter the company names based on what
 * the user types on the input field.
 */

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

  @media screen and (max-width: 768px) {
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
  border-radius: 3px;
`;

const FilterBtn = styled.button`
  padding: 0.5rem 1rem;
  border: 1px solid #fff;
  color: #fff;
  background-color: #333;
  cursor: pointer;
`;

type Props = {
  companySearch: string;
  setCompanySearch: React.Dispatch<React.SetStateAction<string>>;
};

const Header: React.FC<Props> = ({ companySearch, setCompanySearch }) => {
  return (
    <StyledHeader>
      <h1>Zippia Test</h1>
      <div>
        <Input
          type="text"
          placeholder="Company name"
          value={companySearch || ''}
          onChange={e => {
            setCompanySearch(e.target.value);
          }}
        />
      </div>
      <FilterBtn>Past 7 days</FilterBtn>
    </StyledHeader>
  );
};
export default Header;
