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
  rest.get('/api/user/info', (req, res, ctx) => {
    const requestAuthToken = req.headers.get('Authorization')?.split(' ')[1];

    if (requestAuthToken !== 'token')
      return res(
        ctx.status(403),
        ctx.json({
          code: 1202,
          message: '사용자 정보가 없습니다.',
        }),
        ctx.delay(1000),
      );

    return res(
      ctx.status(200),
      ctx.json({
        result: true,
        code: 2000,
        message: '',
        data: userResponse,
      }),
      ctx.delay(1000),
    );
  }),
];
