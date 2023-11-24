import { render, screen, waitFor } from '@/test/test-utils';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { LoginForm } from '../LoginForm';
describe('LoginFormテスト', () => {
  let onSuccess: () => void;

  beforeEach(() => {
    onSuccess = jest.fn();

    render(<LoginForm onSuccess={onSuccess} />);
  });

  test('ログイン成功', async () => {
    await userEvent.type(screen.getByLabelText('Email'), 'user1@test.jp');
    await userEvent.type(screen.getByLabelText('パスワード'), '0000');

    await userEvent.click(screen.getByRole('button', { name: 'ログイン' }));

    await waitFor(() => expect(onSuccess).toHaveBeenCalledTimes(1));
  });

  test('バリデーションエラー', async () => {
    const inputEmail = screen.getByLabelText('Email');
    const inputPassword = screen.getByLabelText('パスワード');

    await userEvent.click(screen.getByRole('button', { name: 'ログイン' }));

    await waitFor(() => {
      expect(inputEmail).toBeInvalid();
      expect(inputPassword).toBeInvalid();
    });
    expect(inputEmail).toHaveAccessibleDescription('入力してください');
    expect(inputPassword).toHaveAccessibleDescription('入力してください');
  });

  test('ログイン失敗', async () => {
    await userEvent.type(screen.getByLabelText('Email'), 'user1@test.jp');
    await userEvent.type(screen.getByLabelText('パスワード'), '1111');

    await userEvent.click(screen.getByRole('button', { name: 'ログイン' }));

    await waitFor(() => expect(screen.getByText('メールアドレスまたはパスワードが間違っています')).toBeInTheDocument());
  });
});
