import { http } from '@/providers/AxiosProvider';
import { AuthUser } from '../types';
import { useQuery } from '@tanstack/react-query';
import { authKeys } from '@/features/auth/api/queryKey';
import { useAuthUserStore } from '@/store/authUserStore';

const getUser = (): Promise<AuthUser> => {
  return http.get('/api/me');
};

export const useGetUser = (enabled: boolean = true) => {
  const authUser = useAuthUserStore((state) => state.login);
  const { data, isSuccess, isLoading } = useQuery({
    queryKey: authKeys.auth,
    queryFn: getUser,
    enabled: enabled,
  });

  if (isSuccess) {
    authUser(data);
    console.log('get user success', data);
  }

  return { user: data ?? null, isLoading };
};
