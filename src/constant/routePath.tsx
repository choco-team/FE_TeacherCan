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

export const CATEGORIES: Categories = {
  curriculum: {
    category: 'main',
    name: '교육과정',
    path: 'curriculum',
    children: ['academicCalendar', 'timeTable', 'lunchMenu'],
  },
  classJournal: {
    category: 'main',
    name: '학급일지',
    path: 'class-journal',
    children: [],
  },
  studentManagement: {
    category: 'main',
    name: '학생관리',
    path: 'student-management',
    children: [],
  },
  tools: {
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
  support: {
    category: 'main',
    name: '고객센터',
    path: 'support',
    children: [],
  },

  academicCalendar: {
    category: 'middle',
    name: '학사일정',
    path: 'academic-calendar',
    Icon: HiOutlineAcademicCap,
  },
  timeTable: {
    category: 'middle',
    name: '시간표',
    path: 'time-table',
    Icon: CiViewTimeline,
  },
  lunchMenu: {
    category: 'middle',
    name: '식단표',
    path: 'lunch-menu',
    Icon: BiBowlRice,
  },
  timer: {
    category: 'middle',
    name: '타이머',
    path: 'timer',
    Icon: BiTimer,
  },
  randomDrawing: {
    category: 'middle',
    name: '랜덤뽑기',
    path: 'random-drawing',
    Icon: GiCardRandom,
  },
  changeSeats: {
    category: 'middle',
    name: '자리바꾸기',
    path: 'change-seats',
    Icon: TbExchange,
  },
  setOrder: {
    category: 'middle',
    name: '순서정하기',
    path: 'set-order',
    Icon: CgReorder,
  },
  qrCode: {
    category: 'middle',
    name: 'QR코드',
    path: 'qr-code',
    Icon: BsQrCodeScan,
  },
  news: {
    category: 'middle',
    name: '뉴스',
    path: 'news',
    Icon: BsNewspaper,
  },
  weather: {
    category: 'middle',
    name: '날씨',
    path: 'weather',
    Icon: TiWeatherWindyCloudy,
  },
};

export const ROUTE_PATH = {
  main: '',
  auth: 'auth',
  signIn: 'signin',
  signUp: 'signup',
} as const;
