import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
//import { AuthLoader } from "@/lib/auth";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/lib/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

type AppProviderProps = {
  children: React.ReactNode;
};

const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <>
      <ChakraProvider>
        <BrowserRouter basename={import.meta.env.VITE_BASENAME}>
          <QueryClientProvider client={queryClient}>
            <ReactQueryDevtools />
            {children}
          </QueryClientProvider>
        </BrowserRouter>
      </ChakraProvider>
    </>
  );
};

export default AppProvider;
