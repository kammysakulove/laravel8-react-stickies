import { http } from '@/providers/AxiosProvider';
import { useMutation } from '@tanstack/react-query';
import { Stick } from '@/features/stickies';

export type CreateStickDTO = {
  title: string;
  body: string;
  to: string;
};

type CreateStickErrorResponse = {
  response: {
    data: string | string[];
  };
};
export const createStick = (data: CreateStickDTO): Promise<Stick> => {
  return http.post('/api/stickies', data);
};

export const useCreateStick = () => {
  return useMutation<Stick, CreateStickErrorResponse, CreateStickDTO>({
    useErrorBoundary: false,
    mutationFn: createStick,
  });
};
