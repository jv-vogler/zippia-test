/**
 * I decided to use react-query for the data fetching and management so I don't have to worry about
 * caching or using other hooks like useEffect and useState.
 *
 * For styling I chose styled-components as it is the tool I'm more comfortable with and I set the
 * GlobalStyle for css resets such as margin, padding and box-sizing, and also setting fonts and such.
 * 
 * Since this application is simple I felt no need to use a state manager like Redux or the ContextAPI.
 * I'm passing the 'companySearch' state to be able to dynamically filter companies that include the
 * string the user types.
 */

import { useState } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

import GlobalStyle from './styles/globals';
import Header from './components/Header';
import JobsList from './components/JobsList';

const queryClient = new QueryClient();

const App: React.FC = () => {
  const [companySearch, setCompanySearch] = useState('');

  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyle />
      <Header companySearch={companySearch} setCompanySearch={setCompanySearch} />
      <JobsList companySearch={companySearch} />
    </QueryClientProvider>
  );
};
export default App;
