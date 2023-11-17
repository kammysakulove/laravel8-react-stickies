import { Box } from "@chakra-ui/react";
import { Header } from "./Header";

type MainLayoutProps = {
  children: React.ReactNode;
};
export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <>
      <Box bg="gray.50" w="100vw" h="100vh">
        <Header />
        <Box p="4">{children}</Box>
      </Box>
    </>
  );
};
