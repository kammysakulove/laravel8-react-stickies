import { http } from '@/providers/AxiosProvider';
import { User } from '../types';
import { useQuery } from '@tanstack/react-query';
import { usersKeys } from './queryKey';

const getUser = (): Promise<User[]> => {
  return http.get('/api/users');
};

export const useUsers = (enabled: boolean = true) => {
  const { data, isLoading, refetch } = useQuery({
    queryKey: usersKeys.all,
    queryFn: getUser,
    enabled: enabled,
  });

  return { users: data ?? null, isLoading, refetch };
};
