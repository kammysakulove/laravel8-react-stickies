import { http } from '@/providers/AxiosProvider';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useAuthUserStore } from '@/store/authUserStore';
import { authKeys } from '@/features/auth/api/queryKey';

export const logout = () => {
  return http.post('/api/logout');
};

export const useLogout = () => {
  const queryClient = useQueryClient();
  const logoutUser = useAuthUserStore((state) => state.logout);
  return useMutation({
    onSuccess: () => {
      queryClient.resetQueries(authKeys.auth);
      logoutUser();
    },
    mutationFn: logout,
  });
};
