import { useState } from 'react';
import { SubmitHandler } from 'react-hook-form';
import { z } from 'zod';
import { Button, Alert, AlertIcon, Stack, useDisclosure } from '@chakra-ui/react';
import { useRegister, RegisterCredentials } from '../api/register';
import { Form, InputField } from '@/components/Form';
import { useNavigate } from 'react-router-dom';
import { OKAlertDialog } from '@/components/Elements/OKAlertDialog';

const schema = z.object({
  name: z.string().min(1, '入力してください'),
  email: z.string().min(1, '入力してください'),
  password: z.string().min(1, '入力してください'),
});

export const RegisterForm = () => {
  const [authError, setAuthError] = useState<boolean | string | string[]>(false);
  const mutation = useRegister();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<RegisterCredentials> = async (data) => {
    await mutation.mutateAsync(data, {
      onSuccess: () => {
        onOpen();
      },
      onError: (error) => {
        setAuthError(error.response.data);
      },
    });
  };

  const onCloseAlert = () => {
    onClose();
    navigate('/stickies/home');
  };

  return (
    <>
      <Form<RegisterCredentials, typeof schema> onSubmit={(values) => onSubmit(values)} schema={schema}>
        {({ register, formState }) => (
          <>
            <Stack spacing={10}>
              <Stack spacing={5}>
                <InputField label="名前" placeholder="山田太郎" error={formState.errors.name} type="text" register={register('name')} autoComplete="new-off" />
                <InputField label="Email" placeholder="user@test.jp" error={formState.errors.email} type="email" register={register('email')} autoComplete="new-off" />
                <InputField label="パスワード" placeholder="*******" error={formState.errors.password} type="password" register={register('password')} autoComplete="new-off" />
              </Stack>

              {authError && (
                <Stack>
                  <Alert mb={5} status="error">
                    <AlertIcon />
                    {Array.isArray(authError) && authError.map((error) => error)}
                  </Alert>
                </Stack>
              )}
              <Stack spacing={5}>
                <Button w={'full'} colorScheme="teal" type="submit">
                  新規登録
                </Button>
              </Stack>
            </Stack>
          </>
        )}
      </Form>

      <OKAlertDialog isOpen={isOpen} onClose={onCloseAlert} title="" body="ユーザー登録を完了しました。" />
    </>
  );
};
