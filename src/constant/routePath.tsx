import { BiBowlRice, BiTimer } from 'react-icons/bi';
import { BsNewspaper, BsQrCodeScan } from 'react-icons/bs';
import { CgReorder } from 'react-icons/cg';
import { CiViewTimeline } from 'react-icons/ci';
import { GiCardRandom } from 'react-icons/gi';
import { HiOutlineAcademicCap } from 'react-icons/hi';
import { TbExchange } from 'react-icons/tb';
import { TiWeatherWindyCloudy } from 'react-icons/ti';

import type { Categories } from '@Types/route';

export const MAIN_CATEGORY_NAMES = [
  'curriculum',
  'classJournal',
  'studentManagement',
  'tools',
  'support',
] as const;

export const MIDDLE_CATEGORY_NAMES = [
  // curriculum
  'academicCalendar',
  'timeTable',
  'lunchMenu',

  // tools
  'timer',
  'randomDrawing',
  'changeSeats',
  'setOrder',
  'qrCode',
  'news',
  'weather',
] as const;

export const CATEGORIES: Categories = [
  {
    key: 'curriculum',
    category: 'main',
    name: '교육과정',
    path: 'curriculum',
    children: ['academicCalendar', 'timeTable', 'lunchMenu'],
  },
  {
    key: 'classJournal',
    category: 'main',
    name: '학급일지',
    path: 'class-journal',
    children: [],
  },
  {
    key: 'studentManagement',
    category: 'main',
    name: '학생관리',
    path: 'student-management',
    children: [],
  },
  {
    key: 'tools',
    category: 'main',
    name: '도구',
    path: 'tools',
    children: [
      'timer',
      'randomDrawing',
      'changeSeats',
      'setOrder',
      'qrCode',
      'news',
      'weather',
    ],
  },
  {
    key: 'support',
    category: 'main',
    name: '고객센터',
    path: 'support',
    children: [],
  },

  {
    key: 'academicCalendar',
    category: 'middle',
    name: '학사일정',
    path: 'academic-calendar',
    Icon: HiOutlineAcademicCap,
  },
  {
    key: 'timeTable',
    category: 'middle',
    name: '시간표',
    path: 'time-table',
    Icon: CiViewTimeline,
  },
  {
    key: 'lunchMenu',
    category: 'middle',
    name: '식단표',
    path: 'lunch-menu',
    Icon: BiBowlRice,
  },
  {
    key: 'timer',
    category: 'middle',
    name: '타이머',
    path: 'timer',
    Icon: BiTimer,
  },
  {
    key: 'randomDrawing',
    category: 'middle',
    name: '랜덤뽑기',
    path: 'random-drawing',
    Icon: GiCardRandom,
  },
  {
    key: 'changeSeats',
    category: 'middle',
    name: '자리바꾸기',
    path: 'change-seats',
    Icon: TbExchange,
  },
  {
    key: 'setOrder',
    category: 'middle',
    name: '순서정하기',
    path: 'set-order',
    Icon: CgReorder,
  },
  {
    key: 'qrCode',
    category: 'middle',
    name: 'QR코드',
    path: 'qr-code',
    Icon: BsQrCodeScan,
  },
  {
    key: 'news',
    category: 'middle',
    name: '뉴스',
    path: 'news',
    Icon: BsNewspaper,
  },
  {
    key: 'weather',
    category: 'middle',
    name: '날씨',
    path: 'weather',
    Icon: TiWeatherWindyCloudy,
  },
];

export const ROUTE_PATH = {
  main: '',
  auth: 'auth',
  signIn: 'signin',
  signUp: 'signup',
  ...CATEGORIES.reduce((acc, cur) => {
    return { ...acc, [cur.key]: cur.path };
  }, {}),
} as const;
