import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';
//import { AuthLoader } from "@/lib/auth";
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from '@/lib/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ReactNode } from 'react';
import { AxiosProvider } from '@/providers/AxiosProvider';

type AppProviderProps = {
  children: ReactNode;
};

const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <>
      <ChakraProvider>
        <BrowserRouter basename={import.meta.env.VITE_BASENAME}>
          <QueryClientProvider client={queryClient}>
            <ReactQueryDevtools />
            <AxiosProvider>{children}</AxiosProvider>
          </QueryClientProvider>
        </BrowserRouter>
      </ChakraProvider>
    </>
  );
};

export default AppProvider;
