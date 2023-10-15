import { rest } from 'msw';

const successResponse = {
  result: true,
  code: 2000,
  token: {
    token: 'token',
  },
};

const userEmail = 'teachercan@gmail.com';
const userPassword = 'teachercan123!@#';

export const authHandlers = [
  // 로그인
  rest.post('/api/auth/signin', (req, res, ctx) => {
    const { email, password } = req.body as { email: string; password: string };

    if (userEmail !== email)
      return res(
        ctx.status(404),
        ctx.json({ message: '이메일을 다시 확인해주세요.', code: 1104 }),
        ctx.delay(1000),
      );

    if (userPassword !== password)
      return res(
        ctx.status(401),
        ctx.json({ message: '비밀번호를 다시 확인해주세요.', code: 1105 }),
        ctx.delay(1000),
      );

    return res(ctx.status(200), ctx.json(successResponse), ctx.delay(1000));
  }),

  // 회원가입
  rest.post('/api/auth/signup', (req, res, ctx) => {
    const { email, password } = req.body as { email: string; password: string };

    if (email === 'teachercan@gmail.comm')
      return res(
        ctx.status(422),
        ctx.json({ message: '이메일 형식이 올바르지 않아요.', code: 1101 }),
        ctx.delay(1000),
      );

    if (password.length < 8)
      return res(
        ctx.status(422),
        ctx.json({
          message: '비밀번호는 8자 보다 적거나, 너무 일반적인 단어는 안 돼요.',
          code: 1103,
        }),
        ctx.delay(1000),
      );

    return res(ctx.status(201), ctx.delay(1000));
  }),

  // 이메일 중복검사
  rest.post('/api/auth/signup/validation', (req, res, ctx) => {
    const { email } = req.body as { email: string };

    if (email !== 'teachercan@gamil.com')
      return res(
        ctx.status(409),
        ctx.json({
          message: '이메일이 이미 존재해요.',
          code: 1102,
        }),
        ctx.delay(1000),
      );

    return res(ctx.status(200), ctx.json(successResponse), ctx.delay(1000));
  }),
];
