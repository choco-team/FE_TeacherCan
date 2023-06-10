import { createBrowserRouter } from 'react-router-dom';

import { CATEGORIES, ROUTE_PATH } from '@Constant/routePath';

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
      {
        // 교육과정
        path: CATEGORIES.curriculum.path,
        children: [],
      },
      {
        // 학급일지
        path: CATEGORIES.classJournal.path,
        children: [],
      },
      {
        // 학생관리
        path: CATEGORIES.studentManagement.path,
        children: [],
      },
      {
        // 도구
        path: CATEGORIES.tools.path,
        children: [],
      },
      {
        // 고객센터
        path: CATEGORIES.support.path,
        children: [],
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
