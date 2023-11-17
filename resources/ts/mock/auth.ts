import { rest } from 'msw';

export const authHandlers = [
  rest.post('/api/login', (req, res, ctx) => {
    // ログインリクエストのモック
    const { email, password } = req.params;

    if (email === 'user1@test.jp' && password === '0000') {
      return res(
        ctx.json({
          id: 1,
          name: '山田太郎',
          email: 'user1@test.jp',
        }),
      );
    } else {
      return res(ctx.status(401));
    }
  }),

  rest.post('/api/logout', (_, res, ctx) => {
    // ログアウトリクエストのモック
    return res(ctx.json(true));
  }),

  rest.post('/api/register', (req, res, ctx) => {
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

  rest.get('/api/me', (_, res, ctx) => {
    // 認証済みユーザー取得リクエストのモック
    const isAuthenticated = true; // 認証状態を判定するロジックをここに実装

    if (isAuthenticated) {
      return res(
        ctx.json({
          id: 1,
          name: '山田太郎',
          email: 'user1@test.jp',
        }),
      );
    } else {
      return res(ctx.status(401));
    }
  }),
];
