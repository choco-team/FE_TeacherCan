import { createBrowserRouter } from 'react-router-dom';

import { ROUTE_PATH } from '@Constant/routePath';

import App from '@Pages/App';
import Auth from '@Pages/Auth';
import SignIn from '@Pages/Auth/SignIn';
import SignUp from '@Pages/Auth/SignUp';
import LunchMenu from '@Pages/ClassManagement/LunchMenu';
import Home from '@Pages/Home';
import QrcodePage from '@Pages/Qrcode/QrcodePage';
import StudentManagement from '@Pages/StudentManagement';
import StudentInfo from '@Pages/StudentManagement/StudentInfo';
import StudentRegister from '@Pages/StudentManagement/StudentRegister';
import RandomPick from '@Pages/Tools/RandomPick';
import Timer from '@Pages/Tools/Timer';

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
        // 로그인, 회원가입
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
      {
        // 학급운영
        path: ROUTE_PATH.classManagement,
        children: [
          {
            path: ROUTE_PATH.schedule,
            element: <div>스케쥴</div>,
          },
          {
            path: ROUTE_PATH.lunchMenu,
            element: <LunchMenu />,
          },
          {
            path: ROUTE_PATH.roles,
          },
          {
            path: ROUTE_PATH.writing,
          },
          {
            path: ROUTE_PATH.toDos,
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
        element: <StudentManagement />,
        children: [
          {
            path: ROUTE_PATH.studentInfo,
            element: <StudentInfo />,
          },
          {
            path: ROUTE_PATH.studentRegister,
            element: <StudentRegister />,
          },
        ],
      },
      {
        // 편의도구
        path: ROUTE_PATH.tools,
        children: [
          {
            path: ROUTE_PATH.timer,
            element: <Timer />,
          },
          {
            path: ROUTE_PATH.randomPick,
            element: <RandomPick />,
          },
          {
            path: ROUTE_PATH.changeSeats,
          },
          {
            path: ROUTE_PATH.setOrder,
          },
          {
            path: ROUTE_PATH.qrCode,
            element: <QrcodePage />,
          },
          {
            path: ROUTE_PATH.favorites,
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
        children: [
          {
            path: ROUTE_PATH.information,
          },
          {
            path: ROUTE_PATH.termsOfUse,
          },
          {
            path: ROUTE_PATH.inquiry,
          },
        ],
      },
    ],
  },
]);

export default router;
