import { BiBowlRice, BiTimer } from 'react-icons/bi';
import {
  BsCalendarWeek,
  BsNewspaper,
  BsQrCodeScan,
  BsSticky,
} from 'react-icons/bs';
import { CgReorder } from 'react-icons/cg';
import { CiViewTimeline } from 'react-icons/ci';
import { GiCardRandom } from 'react-icons/gi';
import { HiOutlineAcademicCap } from 'react-icons/hi';
import { RiCalendarTodoLine } from 'react-icons/ri';
import { TbExchange } from 'react-icons/tb';
import { TfiNotepad } from 'react-icons/tfi';
import { TiWeatherWindyCloudy } from 'react-icons/ti';

import type { Categories, RoutePath } from '@Types/route';

export const MAIN_CATEGORIES = [
  { name: 'curriculum', path: 'curriculum' },
  { name: 'classJournal', path: 'class-journal' },
  { name: 'studentManagement', path: 'student-management' },
  { name: 'tools', path: 'tools' },
  { name: 'support', path: 'support' },
] as const;

export const MIDDLE_CATEGORIES = [
  // curriculum
  { name: 'academicCalendar', path: 'academic-calendar' },
  { name: 'timeTable', path: 'time-table' },
  { name: 'lunchMenu', path: 'lunch-menu' },

  // classJournal
  { name: 'notice', path: 'notice' },
  { name: 'todo', path: 'todo' },
  { name: 'dDay', path: 'd-day' },
  { name: 'stickyNote', path: 'sticky-note' },

  // studentManagement
  { name: 'studentList', path: 'student-list' },
  { name: 'attendance', path: 'attendance' },
  { name: 'roles', path: 'roles' },

  // tools
  { name: 'timer', path: 'timer' },
  { name: 'randomDrawing', path: 'random-drawing' },
  { name: 'changeSeats', path: 'change-seats' },
  { name: 'setOrder', path: 'set-order' },
  { name: 'qrCode', path: 'qr-code' },
  { name: 'news', path: 'news' },
  { name: 'weather', path: 'weather' },
] as const;

export const CATEGORIES: Categories = [
  // main category
  {
    key: 'curriculum',
    category: 'main',
    name: '교육과정',
    path: 'curriculum',
    firstChildPath: 'academic-calendar',
    children: ['academicCalendar', 'timeTable', 'lunchMenu'],
  },
  {
    key: 'classJournal',
    category: 'main',
    name: '학급일지',
    path: 'class-journal',
    firstChildPath: 'notice',
    children: ['notice', 'todo', 'dDay', 'stickyNote'],
  },
  {
    key: 'studentManagement',
    category: 'main',
    name: '학생관리',
    path: 'student-management',
    firstChildPath: 'student-list',
    children: ['studentList', 'attendance', 'roles'],
  },
  {
    key: 'tools',
    category: 'main',
    name: '도구',
    path: 'tools',
    firstChildPath: 'timer',
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
    firstChildPath: 'notice',
    children: [],
  },

  // middle category

  // curriculum
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

  // classJournal
  {
    key: 'notice',
    category: 'middle',
    name: '알림장',
    path: 'notice',
    Icon: TfiNotepad,
  },
  {
    key: 'todo',
    category: 'middle',
    name: '할일',
    path: 'todo',
    Icon: RiCalendarTodoLine,
  },
  {
    key: 'dDay',
    category: 'middle',
    name: '디데이',
    path: 'd-day',
    Icon: BsCalendarWeek,
  },
  {
    key: 'stickyNote',
    category: 'middle',
    name: '스티커 메모',
    path: 'sticky-note',
    Icon: BsSticky,
  },

  // studentManagement
  {
    key: 'studentList',
    category: 'middle',
    name: '학생명렬표',
    path: 'student-list',
    Icon: BsSticky,
  },
  {
    key: 'attendance',
    category: 'middle',
    name: '출결',
    path: 'attendance',
    Icon: BsSticky,
  },
  {
    key: 'roles',
    category: 'middle',
    name: '1인1역',
    path: 'roles',
    Icon: BsSticky,
  },

  // tools
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

export const ROUTE_PATH: RoutePath = {
  main: '',
  auth: 'auth',
  signIn: 'signin',
  signUp: 'signup',

  // main category
  curriculum: 'curriculum',
  classJournal: 'class-journal',
  studentManagement: 'student-management',
  tools: 'tools',
  support: 'support',

  // middle category

  // curriculum
  academicCalendar: 'academic-calendar',
  timeTable: 'time-table',
  lunchMenu: 'lunch-menu',

  // classJournal
  notice: 'notice',
  todo: 'todo',
  dDay: 'd-day',
  stickyNote: 'sticky-note',

  // studentManagement
  studentList: 'student-list',
  attendance: 'attendance',
  roles: 'roles',

  // tools
  timer: 'timer',
  randomDrawing: 'random-drawing',
  changeSeats: 'change-seats',
  setOrder: 'set-order',
  qrCode: 'qr-code',
  news: 'news',
  weather: 'weather',
};
