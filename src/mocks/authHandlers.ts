import { rest } from 'msw';

const signinResponse = {
  result: true,
  message: 'string',
  token: 'example',
};

export const authHandlers = [
  rest.post('/auth/signin', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(signinResponse), ctx.delay(1000));
  }),

  rest.post('/auth/signup', (req, res, ctx) => {
    return res(ctx.status(201), ctx.delay(1000));
  }),
];
