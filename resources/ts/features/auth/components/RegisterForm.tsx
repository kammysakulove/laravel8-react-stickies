import { useState } from 'react'
import { SubmitHandler } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { z } from 'zod'
import { Button, Alert, AlertIcon, Stack } from '@chakra-ui/react'
import { useRegister, RegisterCredentials } from '../api/register'
import { Form, InputField } from '@/components/Form'

const schema = z.object({
  name: z.string().min(1, '入力してください'),
  email: z.string().min(1, '入力してください'),
  password: z.string().min(1, '入力してください'),
})

export const RegisterForm = () => {
  const [authError, setAuthError] = useState<boolean>(false)
  const mutation = useRegister()
  const navigate = useNavigate()

  const onSubmit: SubmitHandler<RegisterCredentials> = async (data) => {
    await mutation.mutateAsync(data, {
      onSuccess: () => {
        navigate('/stickies/home')
      },
      onError: (error) => {
        console.log('login failed...', error)
        setAuthError(true)
      },
    })
  }

  return (
    <Form<RegisterCredentials, typeof schema> onSubmit={(values) => onSubmit(values)} schema={schema}>
      {({ register, formState }) => (
        <>
          <Stack spacing={10}>
            <Stack spacing={5}>
              <InputField label="名前" placeholder="山田太郎" error={formState.errors.name} type="email" register={register('name')} autoComplete="new-off" />
              <InputField label="Email" placeholder="user@test.jp" error={formState.errors.email} type="email" register={register('email')} autoComplete="new-off" />
              <InputField label="パスワード" placeholder="*******" error={formState.errors.password} type="password" register={register('password')} autoComplete="new-off" />
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
              <Button w={'full'} colorScheme="teal" type="submit">
                新規登録
              </Button>
            </Stack>
          </Stack>
        </>
      )}
    </Form>
  )
}
