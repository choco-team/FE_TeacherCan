import { rest } from 'msw';

const userResponse = {
  statusCode: 200,
  data: {
    userId: 'string',
    nickName: 'KHD',
    schoolName: '서원주초등학교',
    // schoolName: undefined,
    schoolCode: 'string',
    areaCode: 'string',
  },
};

export const userHandlers = [
  rest.get('/user/info', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(userResponse), ctx.delay(0));
  }),
];
