import { createBrowserRouter } from 'react-router-dom';

import ROUTE_PATH from '@Constant/routePath';

import Auth from '@Pages/Auth';
import SignIn from '@Pages/Auth/SignIn';
import Home from '@Pages/Home';

import App from './App';

const router = createBrowserRouter([
  {
    path: ROUTE_PATH.main,
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
  {
    path: ROUTE_PATH.auth,
    element: <Auth />,
    children: [
      {
        path: ROUTE_PATH.signIn,
        element: <SignIn />,
      },
    ],
  },
]);

export default router;
