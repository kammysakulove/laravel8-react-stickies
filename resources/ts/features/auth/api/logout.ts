import { http } from '@/lib/http';
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
      queryClient.resetQueries(authKeys.login);
      logoutUser();
    },
    mutationFn: logout,
  });
};
