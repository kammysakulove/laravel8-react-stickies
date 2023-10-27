import { Button, Flex, Input } from "@chakra-ui/react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useLogin, LoginCredentials } from "../api/login";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { register, handleSubmit } = useForm<LoginCredentials>();
  const mutation = useLogin();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<LoginCredentials> = async (data) => {
    await mutation.mutateAsync(data, {
      onSuccess: () => {
        console.log("mutate success");
        navigate("/stickies/home");
      },
    });
  };

  return (
    <>
      <Flex height="100vh" alignItems="center" justifyContent="center">
        <Flex direction="column" background="gray.50" p={12} rounded={6}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Input
              {...register("email")}
              placeholder="user@test.jp"
              variant="outline"
              mb={3}
              type="email"
            />
            <Input
              {...register("password")}
              placeholder="*******"
              variant="outline"
              mb={6}
              type="password"
            />
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
