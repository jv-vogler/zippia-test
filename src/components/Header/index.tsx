/**
 * Instead of making an API request to get a filtered response, I opted to dynamically filter the
 * company names based on what the user types on the input field and/or the active state of the
 * 'Past 3 days' button (the project requirements were 7 days, however I changed it to 3 days as it
 * would not display any visual differences based on the current fetched data).
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
  border: none;
  outline: none;
  font-size: 1rem;
  font-family: inherit;
  border-radius: 3px;
`;

type BtnProps = {
  active: boolean;
};

const FilterBtn = styled.button<BtnProps>`
  padding: 0.5rem 1rem;
  border: 1px solid #fff;
  color: #fff;
  background-color: ${props => (props.active ? '#3174ee' : '#333')};
  user-select: none;
  cursor: pointer;
`;

type Props = {
  companySearch: string;
  setCompanySearch: React.Dispatch<React.SetStateAction<string>>;
  toggleRecent: boolean;
  setToggleRecent: React.Dispatch<React.SetStateAction<boolean>>;
};

const Header: React.FC<Props> = ({
  companySearch,
  setCompanySearch,
  toggleRecent,
  setToggleRecent,
}) => {
  return (
    <StyledHeader>
      <h1>Zippia Test</h1>
      <div>
        <Input
          type="text"
          spellCheck={false}
          placeholder="Company name"
          value={companySearch || ''}
          onChange={e => {
            setCompanySearch(e.target.value);
          }}
        />
      </div>
      {/* 
        Instead of 7 days I changed it to 3 days just to be able to see the changes in this project.
      */}
      <FilterBtn active={toggleRecent} onClick={() => setToggleRecent(!toggleRecent)}>
        Past 3 days
      </FilterBtn>
    </StyledHeader>
  );
};
export default Header;
