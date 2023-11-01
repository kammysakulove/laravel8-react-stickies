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

const Login = () => {
  const { register, handleSubmit } = useForm<LoginCredentials>();
  const mutation = useLogin();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<LoginCredentials> = async (data) => {
    await mutation.mutateAsync(data, {
      onSuccess: () => {
        navigate("/stickies/home");
      },
    });
  };

  return (
    <>
      <Flex height="100vh" alignItems="center" justifyContent="center">
        <Flex direction="column" background="gray.50" p={12} rounded={6}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <FormControl mb={3} isInvalid={false}>
              <FormLabel>Email</FormLabel>
              <Input
                {...register("email")}
                placeholder="user@test.jp"
                variant="outline"
                type="email"
              />
              <FormErrorMessage>test</FormErrorMessage>
            </FormControl>
            <FormControl mb={6} isInvalid={false}>
              <FormLabel>パスワード</FormLabel>
              <Input
                {...register("password")}
                placeholder="*******"
                variant="outline"
                type="password"
              />
              <FormErrorMessage>test</FormErrorMessage>
            </FormControl>
            <Alert mb={5} status="error">
              <AlertIcon />
              Your Chakra experience may be degraded.
            </Alert>
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
