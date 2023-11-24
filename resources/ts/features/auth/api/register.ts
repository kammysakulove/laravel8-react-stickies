import { http } from '@/lib/http';
import { AuthUser } from '../types';
import { useMutation } from '@tanstack/react-query';

export type RegisterCredentials = {
  email: string;
  name: string;
  password: string;
};

export type RegisterErrorResponse = {
  response: {
    data: string | string[];
  };
};
export const registerWithEmailAndPassword = (data: RegisterCredentials): Promise<AuthUser> => {
  return http.post('/api/register', data);
};

export const useRegister = () => {
  return useMutation<AuthUser, RegisterErrorResponse, RegisterCredentials>({
    useErrorBoundary: false,
    mutationFn: registerWithEmailAndPassword,
  });
};
