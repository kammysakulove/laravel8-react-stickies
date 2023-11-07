import { useState } from "react";
import { SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import { Button, Flex, Alert, AlertIcon } from "@chakra-ui/react";
import { useLogin, LoginCredentials } from "../api/login";
import { Form, InputField } from "@/components/Form";

const schema = z.object({
  email: z.string().min(1, "入力してください"),
  password: z.string().min(1, "入力してください"),
});

const Login = () => {
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
          <Form<LoginCredentials, typeof schema>
            onSubmit={(values) => onSubmit(values)}
            schema={schema}
          >
            {({ register, formState }) => (
              <>
                <InputField
                  mb={3}
                  label="Email"
                  placeholder="user@test.jp"
                  error={formState.errors.email}
                  type="email"
                  register={register("email")}
                />
                <InputField
                  mb={3}
                  label="パスワード"
                  placeholder="*******"
                  error={formState.errors.password}
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
              </>
            )}
          </Form>
        </Flex>
      </Flex>
    </>
  );
};

export default Login;
