import { ChakraProvider } from "@chakra-ui/react";

type AppProviderProps = {
  children: React.ReactNode;
};

const AppProvider = ({ children }: AppProviderProps) => {
  return <ChakraProvider>{children}</ChakraProvider>;
};

export default AppProvider;
