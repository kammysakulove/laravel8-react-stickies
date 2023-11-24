import { rest } from 'msw';
import { baseUrl, testUsers } from '@/test/test-utils';

type LoginBody = {
  email: string;
  password: string;
};

export const authHandlers = [
  rest.get(baseUrl + '/sanctum/csrf-cookie', (_, res, ctx) => {
    return res(ctx.body('1'));
  }),

  rest.post<LoginBody>(baseUrl + '/api/login', async (req, res, ctx) => {
    // ログインリクエストのモック
    const { email, password } = await req.json();

    if (email === testUsers[0].email && password === testUsers[0].password) {
      return res(
        ctx.json({
          id: testUsers[0].id,
          name: testUsers[0].name,
          email: testUsers[0].email,
        }),
      );
    } else {
      return res(ctx.status(401), ctx.body(''));
    }
  }),

  rest.post(baseUrl + '/api/logout', (_, res, ctx) => {
    // ログアウトリクエストのモック
    return res(ctx.json(true));
  }),

  rest.post(baseUrl + '/api/register', (req, res, ctx) => {
    // 登録リクエストのモック
    const { name, email, password } = req.params;

    return res(
      ctx.json({
        id: 2,
        name: name,
        email: email,
        password: password,
      }),
    );
  }),

  rest.get(baseUrl + '/api/me', (_, res, ctx) => {
    // 認証済みユーザー取得リクエストのモック
    const isAuthenticated = true; // 認証状態を判定するロジックをここに実装

    if (isAuthenticated) {
      return res(
        ctx.json({
          id: testUsers[0].id,
          name: testUsers[0].name,
          email: testUsers[0].email,
        }),
      );
    } else {
      return res(ctx.status(401));
    }
  }),
];
