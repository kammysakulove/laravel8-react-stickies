import {
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Alert,
  AlertIcon,
} from "@chakra-ui/react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useLogin, LoginCredentials } from "../api/login";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";

const schema = z.object({
  email: z.string().min(1, "入力してください"),
  password: z.string().min(1, "入力してください"),
});

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginCredentials>({
    resolver: zodResolver(schema),
  });
  const [authError, setAuthError] = useState<boolean>(false);
  const mutation = useLogin();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<LoginCredentials> = async (data) => {
    await mutation.mutateAsync(data, {
      onSuccess: () => {
        navigate("/stickies/home");
      },
      onError: (error) => {
        console.log("login failed...", error);
        setAuthError(true);
      },
    });
  };

  return (
    <>
      <Flex height="100vh" alignItems="center" justifyContent="center">
        <Flex direction="column" background="gray.50" p={12} rounded={6}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <FormControl mb={3} isInvalid={!!errors.email}>
              <FormLabel>Email</FormLabel>
              <Input
                {...register("email")}
                placeholder="user@test.jp"
                variant="outline"
                type="email"
              />
              <FormErrorMessage>
                {errors.email && errors.email.message}
              </FormErrorMessage>
            </FormControl>
            <FormControl mb={6} isInvalid={!!errors.password}>
              <FormLabel>パスワード</FormLabel>
              <Input
                {...register("password")}
                placeholder="*******"
                variant="outline"
                type="password"
              />
              <FormErrorMessage>
                {errors.password && errors.password.message}
              </FormErrorMessage>
            </FormControl>
            {authError && (
              <Alert mb={5} status="error">
                <AlertIcon />
                メールアドレスまたはパスワードが間違っています
              </Alert>
            )}
            <Button colorScheme="teal" type="submit">
              ログイン
            </Button>
          </form>
        </Flex>
      </Flex>
    </>
  );
};

export default Login;
