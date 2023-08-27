import { rest } from 'msw';

import { UserInfo } from '@Types/user';

const userResponse: UserInfo = {
  email: 'teachercan@gmail.com',
  nickname: '티처캔',
  school: {
    code: '7822086',
    areaCode: 'K10',
    name: '서원주초등학교',
  },
};

export const userHandlers = [
  rest.get('/user/info', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(userResponse), ctx.delay(1000));
  }),
];
