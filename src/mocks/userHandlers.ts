import { rest } from 'msw';

const userResponse = {
  statusCode: 200,
  data: {
    userId: 'string',
    nickName: 'KHD',
    schoolName: 'string',
    schoolCode: 'string',
    areCode: 'string',
  },
};

export const userHandlers = [
  rest.get('/user/info', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(userResponse), ctx.delay(200));
  }),
];
