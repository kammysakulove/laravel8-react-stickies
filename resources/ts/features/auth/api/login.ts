import { http } from "@/lib/http";
import { AuthUser } from "../types";
import { authKeys } from "@/features/auth/api/queryKey";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useAuthUserStore } from "@/store/authUserStore";

export type LoginCredentials = {
  email: string;
  password: string;
};

export const loginWithEmailAndPassword = (
  credential: LoginCredentials
): Promise<AuthUser> => {
  // laravel csrf token 取得
  return http.get("/sanctum/csrf-cookie").then(() => {
    return http.post("/api/login", credential);
  });
};

export const useLogin = () => {
  const queryClient = useQueryClient();
  const loginUser = useAuthUserStore((state) => state.login);
  return useMutation({
    onSuccess: (res: AuthUser) => {
      queryClient.setQueryData(authKeys.user, res);
      loginUser(res);
    },
    mutationFn: loginWithEmailAndPassword,
  });
};
