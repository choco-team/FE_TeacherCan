import { rest } from 'msw';

const userResponse = {
  email: 'teachercan@gmail.com',
  nickname: '티처캔',
  school: {
    code: 'string',
    areaCode: 'string',
    name: '서원주초등학교',
  },
};

export const userHandlers = [
  rest.get('/user/info', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(userResponse), ctx.delay(1000));
  }),
];
