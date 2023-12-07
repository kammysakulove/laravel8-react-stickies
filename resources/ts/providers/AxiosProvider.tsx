import axios from 'axios';
import { ReactNode, useEffect, useState } from 'react';
import { useToast } from '@chakra-ui/react';
import { LoadingComponent } from '@/components/Elements/Loading';

const http = axios.create({
  baseURL: 'http://localhost:8080/laravel8-react-stickies',
  withCredentials: true,
});

type AxiosProviderProps = {
  children: ReactNode;
};

export const AxiosProvider = ({ children }: AxiosProviderProps) => {
  const [isInit, setIsInit] = useState(false);
  const toast = useToast();

  useEffect(() => {
    const responseInterceptor = http.interceptors.response.use(
      (response) => {
        console.log('axios response', response.data);
        return response.data;
      },
      (error) => {
        console.error(error.message, error.response?.data?.message);

        if (error.response.status !== 401) {
          toast({
            title: 'ネットワークエラー',
            description: error.message,
            status: 'error',
            duration: 5000,
            isClosable: true,
          });
        }

        return Promise.reject(error);
      },
    );

    setIsInit(true);

    return () => {
      http.interceptors.response.eject(responseInterceptor);
    };
  }, []);

  return isInit ? children : <LoadingComponent />;
};

export { http };
