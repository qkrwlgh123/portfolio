import GlobalStyles from './styles/globalStyles';
import { Route, Routes } from 'react-router-dom';
import MainPageLayout from './styles/layout/mainPageLayout/mainPageLayout';
import MainPage from './pages/mainPage';

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
    </>
  );
};

export default App;
