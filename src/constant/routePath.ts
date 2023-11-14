import { AiOutlineUsergroupAdd } from 'react-icons/ai';
import { BiBowlRice } from 'react-icons/bi';
// import {
//   BsCalendarWeek,
//   BsNewspaper,
//   BsQrCodeScan,
//   BsSticky,
// } from 'react-icons/bs';
// import { CgReorder } from 'react-icons/cg';
// import { CiViewTimeline } from 'react-icons/ci';
// import { FaPeopleCarry } from 'react-icons/fa';
import { GiCardRandom } from 'react-icons/gi';
// import { GoReport } from 'react-icons/go';
// import { IoInformationCircleOutline } from 'react-icons/io5';
// import { MdOutlineFavoriteBorder } from 'react-icons/md';
// import { RiCalendarTodoLine } from 'react-icons/ri';
// import { TbWriting, TbExchange, TbMoodKid } from 'react-icons/tb';
import { TbMoodKid } from 'react-icons/tb';
// import { TiWeatherWindyCloudy } from 'react-icons/ti';
// import { VscSymbolProperty } from 'react-icons/vsc';

import type { Categories, RoutePath } from '@Types/route';

export const MAIN_CATEGORIES = [
  { name: 'classManagement', path: 'class-management' },
  { name: 'studentManagement', path: 'student-management' },
  { name: 'tools', path: 'tools' },
  { name: 'support', path: 'support' },
] as const;

export const MIDDLE_CATEGORIES = [
  // classManagement
  { name: 'schedule', path: 'schedule' },
  { name: 'lunchMenu', path: 'lunch-menu' },
  { name: 'roles', path: 'roles' },
  { name: 'writing', path: 'writing' },
  { name: 'toDos', path: 'to-dos' },
  { name: 'dDay', path: 'd-day' },
  { name: 'stickyNote', path: 'sticky-note' },

  // studentManagement
  { name: 'studentInfo', path: 'student-info' },
  { name: 'studentRegister', path: 'student-register' },

  // tools
  { name: 'timer', path: 'timer' },
  { name: 'randomPick', path: 'random-pick' },
  { name: 'randomResult', path: 'random-result' },
  { name: 'changeSeats', path: 'change-seats' },
  { name: 'setOrder', path: 'set-order' },
  { name: 'qrCode', path: 'qr-code' },
  { name: 'favorites', path: 'favorites' },
  { name: 'news', path: 'news' },
  { name: 'weather', path: 'weather' },

  // support
  { name: 'information', path: 'information' },
  { name: 'termsOfUse', path: 'terms-of-use' },
  { name: 'inquiry', path: 'inquiry' },
] as const;

export const CATEGORIES: Categories = [
  // main category
  {
    key: 'classManagement',
    category: 'main',
    name: '학급운영',
    path: 'class-management',
    firstChildPath: 'lunch-menu',
    children: [
      'schedule',
      'lunchMenu',
      'roles',
      'writing',
      'toDos',
      'dDay',
      'stickyNote',
    ],
  },
  {
    key: 'studentManagement',
    category: 'main',
    name: '학생관리',
    path: 'student-management',
    firstChildPath: 'student-info',
    children: ['studentInfo', 'studentRegister'],
  },
  {
    key: 'tools',
    category: 'main',
    name: '편의도구',
    path: 'tools',
    firstChildPath: 'random-pick',
    children: [
      'timer',
      'randomPick',
      'randomResult',
      'changeSeats',
      'setOrder',
      'qrCode',
      'favorites',
      'news',
      'weather',
    ],
  },
  {
    key: 'support',
    category: 'main',
    name: '고객센터',
    path: 'support',
    firstChildPath: 'information',
    children: ['information', 'termsOfUse', 'inquiry'],
  },

  // middle category

  // classManagement
  // {
  //   key: 'schedule',
  //   category: 'middle',
  //   name: '시간표',
  //   path: 'schedule',
  //   Icon: CiViewTimeline,
  // },
  {
    key: 'lunchMenu',
    category: 'middle',
    name: '식단표',
    path: 'lunch-menu',
    Icon: BiBowlRice,
  },
  // {
  //   key: 'roles',
  //   category: 'middle',
  //   name: '1인1역',
  //   path: 'roles',
  //   Icon: FaPeopleCarry,
  // },
  // {
  //   key: 'writing',
  //   category: 'middle',
  //   name: '판서',
  //   path: 'writing',
  //   Icon: TbWriting,
  // },
  // {
  //   key: 'toDos',
  //   category: 'middle',
  //   name: '할일',
  //   path: 'to-dos',
  //   Icon: RiCalendarTodoLine,
  // },
  // {
  //   key: 'dDay',
  //   category: 'middle',
  //   name: '디데이',
  //   path: 'd-day',
  //   Icon: BsCalendarWeek,
  // },
  // {
  //   key: 'stickyNote',
  //   category: 'middle',
  //   name: '스티커 메모',
  //   path: 'sticky-note',
  //   Icon: BsSticky,
  // },

  // studentManagement
  {
    key: 'studentInfo',
    category: 'middle',
    name: '학생 정보',
    path: 'student-info',
    Icon: TbMoodKid,
  },
  {
    key: 'studentRegister',
    category: 'middle',
    name: '학생 등록',
    path: 'student-register',
    Icon: AiOutlineUsergroupAdd,
  },

  // tools
  // {
  //   key: 'timer',
  //   category: 'middle',
  //   name: '타이머',
  //   path: 'timer',
  //   Icon: BiTimer,
  // },
  {
    key: 'randomPick',
    category: 'middle',
    name: '랜덤뽑기',
    path: 'random-pick',
    Icon: GiCardRandom,
  },
  // {
  //   key: 'changeSeats',
  //   category: 'middle',
  //   name: '자리바꾸기',
  //   path: 'change-seats',
  //   Icon: TbExchange,
  // },
  // {
  //   key: 'setOrder',
  //   category: 'middle',
  //   name: '순서정하기',
  //   path: 'set-order',
  //   Icon: CgReorder,
  // },
  // {
  //   key: 'qrCode',
  //   category: 'middle',
  //   name: 'QR코드',
  //   path: 'qr-code',
  //   Icon: BsQrCodeScan,
  // },
  // {
  //   key: 'favorites',
  //   category: 'middle',
  //   name: '즐겨찾기',
  //   path: 'favorites',
  //   Icon: MdOutlineFavoriteBorder,
  // },
  // {
  //   key: 'news',
  //   category: 'middle',
  //   name: '뉴스',
  //   path: 'news',
  //   Icon: BsNewspaper,
  // },
  // {
  //   key: 'weather',
  //   category: 'middle',
  //   name: '날씨',
  //   path: 'weather',
  //   Icon: TiWeatherWindyCloudy,
  // },

  // support
  // {
  //   key: 'information',
  //   category: 'middle',
  //   name: '티처캔안내',
  //   path: 'information',
  //   Icon: IoInformationCircleOutline,
  // },
  // {
  //   key: 'termsOfUse',
  //   category: 'middle',
  //   name: '이용약관',
  //   path: 'terms-of-use',
  //   Icon: GoReport,
  // },
  // {
  //   key: 'inquiry',
  //   category: 'middle',
  //   name: '문의사항',
  //   path: 'inquiry',
  //   Icon: VscSymbolProperty,
  // },
];

export const ROUTE_PATH: RoutePath = {
  main: '',
  auth: 'auth',
  signIn: 'signin',
  signUp: 'signup',

  // main category
  classManagement: 'class-management',
  studentManagement: 'student-management',
  tools: 'tools',
  support: 'support',

  // middle category

  // classManagement
  schedule: 'schedule',
  lunchMenu: 'lunch-menu',
  roles: 'roles',
  writing: 'writing',
  toDos: 'to-dos',
  dDay: 'd-day',
  stickyNote: 'sticky-note',

  // studentManagement
  studentInfo: 'student-info',
  studentRegister: 'student-register',

  // tools
  timer: 'timer',
  randomPick: 'random-pick',
  randomResult: 'random-result',
  changeSeats: 'change-seats',
  setOrder: 'set-order',
  qrCode: 'qr-code',
  favorites: 'favorites',
  news: 'news',
  weather: 'weather',

  // support
  information: 'information',
  termsOfUse: 'terms-of-use',
  inquiry: 'inquiry',
};
