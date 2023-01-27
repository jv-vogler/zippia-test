import Header from './components/Header';
import JobsList from './components/JobsList';
import GlobalStyle from './styles/globals';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <JobsList />
    </>
  );
};
export default App;
