import { Button, Flex, Alert, AlertIcon } from "@chakra-ui/react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useLogin, LoginCredentials } from "../api/login";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { InputField } from "@/components/Form/InputField";

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
            <InputField
              mb={3}
              label="Email"
              placeholder="user@test.jp"
              error={errors.email}
              type="email"
              register={register("email")}
            />
            <InputField
              mb={3}
              label="パスワード"
              placeholder="*******"
              error={errors.password}
              type="password"
              register={register("password")}
            />
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
