import { Routes, BrowserRouter, Route } from 'react-router-dom';

import ROUTE_PATH from '@Constant/routePath';

import Auth from '@Pages/Auth';
import SignIn from '@Pages/Auth/SignIn';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTE_PATH.auth} element={<Auth />}>
          <Route path="signin" element={<SignIn />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
