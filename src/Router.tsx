import { createBrowserRouter } from 'react-router-dom';

import { ROUTE_PATH } from '@Constant/routePath';

import App from '@Pages/App';
import Auth from '@Pages/Auth';
import SignIn from '@Pages/Auth/SignIn';
import Home from '@Pages/Home';

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
        path: ROUTE_PATH.curriculum,
        children: [
          {
            path: ROUTE_PATH.academicCalendar,
          },
          {
            path: ROUTE_PATH.timeTable,
          },
          {
            path: ROUTE_PATH.lunchMenu,
          },
        ],
      },
      {
        // 학급일지
        path: ROUTE_PATH.classJournal,
        children: [],
      },
      {
        // 학생관리
        path: ROUTE_PATH.studentManagement,
        children: [],
      },
      {
        // 도구
        path: ROUTE_PATH.tools,
        children: [],
      },
      {
        // 고객센터
        path: ROUTE_PATH.support,
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
