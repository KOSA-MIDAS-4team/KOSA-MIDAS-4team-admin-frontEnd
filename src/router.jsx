import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/login';
import Main from './pages/main';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
