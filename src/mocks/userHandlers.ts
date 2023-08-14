import { rest } from 'msw';

import { UserInfo } from '@Types/user';

const userResponse: UserInfo = {
  email: 'teachercan@gmail.com',
  nickname: '티처캔',
  school: {
    code: 'string',
    areaCode: 'string',
    name: 'string',
  },
};

export const userHandlers = [
  rest.get('/user/info', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(userResponse), ctx.delay(1000));
  }),
];
