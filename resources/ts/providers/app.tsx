import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";

type AppProviderProps = {
  children: React.ReactNode;
};

const AppProvider = ({ children }: AppProviderProps) => {
  console.log(import.meta.env.VITE_BASENAME);

  return (
    <>
      <ChakraProvider>
        <BrowserRouter basename={import.meta.env.VITE_BASENAME}>
          {children}
        </BrowserRouter>
      </ChakraProvider>
    </>
  );
};

export default AppProvider;
