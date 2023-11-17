import { useState } from 'react';
import { SubmitHandler } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { z } from 'zod';
import { Button, Center, Alert, AlertIcon, Stack, Link } from '@chakra-ui/react';
import { useLogin, LoginCredentials } from '../api/login';
import { Form, InputField } from '@/components/Form';

const schema = z.object({
  email: z.string().min(1, '入力してください'),
  password: z.string().min(1, '入力してください'),
});

export const LoginForm = () => {
  const [authError, setAuthError] = useState<boolean>(false);
  const mutation = useLogin();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<LoginCredentials> = async (data) => {
    await mutation.mutateAsync(data, {
      onSuccess: () => {
        navigate('/stickies/home');
      },
      onError: (error) => {
        console.log('login failed...', error);
        setAuthError(true);
      },
    });
  };

  return (
    <Form<LoginCredentials, typeof schema> onSubmit={(values) => onSubmit(values)} schema={schema}>
      {({ register, formState }) => (
        <>
          <Stack spacing={10}>
            <Stack spacing={5}>
              <InputField label="Email" placeholder="user@test.jp" error={formState.errors.email} type="email" register={register('email')} />
              <InputField label="パスワード" placeholder="*******" error={formState.errors.password} type="password" register={register('password')} />
            </Stack>

            {authError && (
              <Stack>
                <Alert mb={5} status="error">
                  <AlertIcon />
                  メールアドレスまたはパスワードが間違っています
                </Alert>
              </Stack>
            )}
            <Stack spacing={5}>
              <Button w={'full'} bg={'gray.300'} _hover={{ bg: 'gray.400' }} type="submit">
                ログイン
              </Button>
              <Center>
                新規登録は
                <Link href="../auth/register" color="teal">
                  こちら
                </Link>
              </Center>
            </Stack>
          </Stack>
        </>
      )}
    </Form>
  );
};
