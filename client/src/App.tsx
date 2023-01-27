/**
 * I decided to use react-query for the data fetching and management so I don't have to worry about
 * caching or using other hooks like useEffect and useState.
 * 
 * For styling I chose styled-components as it is the tool I'm more comfortable with and I set the
 * GlobalStyle for css resets such as margin, padding and box-sizing, and also setting fonts and such.
 */

import { QueryClient, QueryClientProvider } from 'react-query';

import GlobalStyle from './styles/globals';
import Header from './components/Header';
import JobsList from './components/JobsList';

const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyle />
      <Header />
      <JobsList />
    </QueryClientProvider>
  );
};
export default App;
