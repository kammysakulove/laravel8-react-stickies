import { render, screen, waitFor } from '@/test/test-utils';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { RegisterForm } from '../RegisterForm';
describe('RegisterForm', () => {
  let onSuccess: () => void;
  let onCancel: () => void;

  beforeEach(() => {
    onSuccess = jest.fn();
    onCancel = jest.fn();

    render(<RegisterForm onSuccess={onSuccess} onCancel={onCancel} />);
  });

  test('登録成功', async () => {
    await userEvent.type(screen.getByLabelText('名前'), '田中花子');
    await userEvent.type(screen.getByLabelText('Email'), 'user2@test.jp');
    await userEvent.type(screen.getByLabelText('パスワード'), '0000');

    await userEvent.click(screen.getByRole('button', { name: '新規登録' }));

    await waitFor(() => expect(screen.getByRole('alertdialog')).toBeVisible());
  });

  test('バリデーションエラー', async () => {
    const inputName = screen.getByLabelText('名前');
    const inputEmail = screen.getByLabelText('Email');
    const inputPassword = screen.getByLabelText('パスワード');

    await userEvent.click(screen.getByRole('button', { name: '新規登録' }));

    await waitFor(() => {
      expect(inputName).toBeInvalid();
      expect(inputEmail).toBeInvalid();
      expect(inputPassword).toBeInvalid();
    });
    expect(inputName).toHaveAccessibleDescription('入力してください');
    expect(inputEmail).toHaveAccessibleDescription('入力してください');
    expect(inputPassword).toHaveAccessibleDescription('入力してください');
  });

  test('APIのエラーによる登録失敗', async () => {
    await userEvent.type(screen.getByLabelText('名前'), '田中花子');
    await userEvent.type(screen.getByLabelText('Email'), 'user1@test.jp');
    await userEvent.type(screen.getByLabelText('パスワード'), '0000');

    await userEvent.click(screen.getByRole('button', { name: '新規登録' }));

    await waitFor(() => expect(screen.getByText('メールアドレスは既に存在しています。')).toBeInTheDocument());
  });
});
