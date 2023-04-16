import Hd from '@Pages/Hd';
import Landing from '@Pages/Landing';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/hd" element={<Hd />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
