import GlobalStyles from './styles/globalStyles';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import {
//   HashRouter as Router,
//   Route,
//   Routes,
//   BrowserRouter,
// } from 'react-router-dom';
import MainPage from './pages/mainPage';
import Footer from './components/footer/footer';

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
