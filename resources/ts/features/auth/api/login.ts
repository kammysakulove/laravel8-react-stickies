import { http } from "@/lib/http";
import { AuthUser } from "../types";
import { authKeys } from "@/features/auth/api/queryKey";
import {
  useMutation,
  UseMutationResult,
  useQueryClient,
} from "@tanstack/react-query";
import { AxiosError } from "axios";
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

export const useLogin = (): UseMutationResult<
  AuthUser,
  AxiosError,
  LoginCredentials,
  undefined
> => {
  const queryClient = useQueryClient();
  const authUser = useAuthUserStore((state) => state.login);
  return useMutation(loginWithEmailAndPassword, {
    onSuccess: (res) => {
      queryClient.setQueryData(authKeys.user, res);
      authUser(res);
    },
  });
};
