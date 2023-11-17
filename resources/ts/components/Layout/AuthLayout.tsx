import { ReactNode } from "react";
import { Flex } from "@chakra-ui/react";

type AuthLayoutProps = {
  children: ReactNode;
};

export const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <Flex height="100vh" alignItems="center" justifyContent="center">
      <Flex
        direction="column"
        background="gray.50"
        rounded={6}
        minW={"lg"}
        p={10}
      >
        {children}
      </Flex>
    </Flex>
  );
};
