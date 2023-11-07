import { http } from "@/lib/http";
import { AuthUser } from "../types";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useAuthUserStore } from "@/store/authUserStore";
import { authKeys } from "@/features/auth/api/queryKey";

export type RegisterCredentials = {
  email: string;
  name: string;
  password: string;
};
export const registerWithEmailAndPassword = (
  data: RegisterCredentials
): Promise<AuthUser> => {
  return http.post("/api/register", data);
};

export const useRegister = () => {
  const queryClient = useQueryClient();
  const loginUser = useAuthUserStore((state) => state.login);
  return useMutation({
    onSuccess: (res: AuthUser) => {
      queryClient.setQueryData(authKeys.user, res);
      loginUser(res);
    },
    mutationFn: registerWithEmailAndPassword,
  });
};
