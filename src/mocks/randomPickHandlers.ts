import { rest } from 'msw';

const randomPickResponse = {
  statusCode: 200,
  data: {
    student1: '유영',
    student2: '이강인',
    student3: '김연경',
    student4: '류현진',
  },
};

export const randomPickHandlers = [
  rest.get('/randompick/result', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(randomPickResponse), ctx.delay(200));
  }),
];
