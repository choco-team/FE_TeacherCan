import SignIn from '@Pages/Auth/SignIn';
import SignUp from '@Pages/Auth/SignUp';
import { Routes, BrowserRouter, Route } from 'react-router-dom';

import ROUTE_PATH from '@Constant/routePath';

import Auth from '@Pages/Auth';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTE_PATH.auth} element={<Auth />}>
          <Route path="signin" element={<SignIn />} />
          <Route path="signup" element={<SignUp />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
