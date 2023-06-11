import { createBrowserRouter } from 'react-router-dom';

import { ROUTE_PATH } from '@Constant/routePath';

import App from '@Pages/App';
import Auth from '@Pages/Auth';
import SignIn from '@Pages/Auth/SignIn';
import SignUp from '@Pages/Auth/SignUp';
import Home from '@Pages/Home';

const router = createBrowserRouter([
  {
    path: ROUTE_PATH.main,
    element: <App />,
    errorElement: <div>Not Found</div>,
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
        children: [
          {
            path: ROUTE_PATH.notice,
          },
          {
            path: ROUTE_PATH.todo,
          },
          {
            path: ROUTE_PATH.dDay,
          },
          {
            path: ROUTE_PATH.stickyNote,
          },
        ],
      },
      {
        // 학생관리
        path: ROUTE_PATH.studentManagement,
        children: [
          {
            path: ROUTE_PATH.studentList,
          },
          {
            path: ROUTE_PATH.attendance,
          },
          {
            path: ROUTE_PATH.roles,
          },
        ],
      },
      {
        // 도구
        path: ROUTE_PATH.tools,
        children: [
          {
            path: ROUTE_PATH.timer,
          },
          {
            path: ROUTE_PATH.randomDrawing,
          },
          {
            path: ROUTE_PATH.changeSeats,
          },
          {
            path: ROUTE_PATH.setOrder,
          },
          {
            path: ROUTE_PATH.qrCode,
          },
          {
            path: ROUTE_PATH.news,
          },
          {
            path: ROUTE_PATH.weather,
          },
        ],
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
      {
        path: ROUTE_PATH.signUp,
        element: <SignUp />,
      },
    ],
  },
]);

export default router;
