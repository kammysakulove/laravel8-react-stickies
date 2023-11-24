import { useState } from 'react';
import { SubmitHandler } from 'react-hook-form';
import { z } from 'zod';
import { Button, Alert, AlertIcon, Stack, useDisclosure } from '@chakra-ui/react';
import { useRegister, RegisterCredentials } from '../api/register';
import { Form, InputField } from '@/components/Form';
import { OKAlertDialog } from '@/components/Elements/OKAlertDialog';

const schema = z.object({
  name: z.string().min(1, '入力してください'),
  email: z.string().min(1, '入力してください'),
  password: z.string().min(1, '入力してください'),
});

export type RegisterFormProps = {
  onSuccess: () => void;
  onCancel: () => void;
};

export const RegisterForm = ({ onSuccess, onCancel }: RegisterFormProps) => {
  const [authError, setAuthError] = useState<boolean | string | string[]>(false);
  const mutation = useRegister();
  const disclosure = useDisclosure();

  const onSubmit: SubmitHandler<RegisterCredentials> = (data) => {
    mutation.mutate(data, {
      onSuccess: () => {
        disclosure.onOpen();
      },
      onError: (error) => {
        setAuthError(error.response.data);
      },
    });
  };

  const onCloseAlert = () => {
    disclosure.onClose();
    onSuccess();
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
                <Button w={'full'} colorScheme="teal" type="submit" isDisabled={mutation.isLoading}>
                  新規登録
                </Button>
                <Button w={'full'} colorScheme="yellow" type="button" onClick={onCancel} isDisabled={mutation.isLoading}>
                  キャンセル
                </Button>
              </Stack>
            </Stack>
          </>
        )}
      </Form>

      <OKAlertDialog disclosure={disclosure} onCloseAdditional={onCloseAlert} title="" body="ユーザー登録を完了しました。" />
    </>
  );
};
