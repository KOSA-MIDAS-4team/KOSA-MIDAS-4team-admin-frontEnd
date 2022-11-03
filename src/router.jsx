import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AllUser from './pages/allUser';
import Login from './pages/login';
import Main from './pages/main';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/allUser" element={<AllUser />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
