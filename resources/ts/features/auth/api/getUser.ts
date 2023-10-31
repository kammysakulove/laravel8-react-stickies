import { http } from "@/lib/http";
import { AuthUser } from "../types";
import { useQuery } from "@tanstack/react-query";
import { authKeys } from "@/features/auth/api/queryKey";
import { useAuthUserStore } from "@/store/authUserStore";

const getUser = (): Promise<AuthUser> => {
  return http.post("/api/me");
};

export const useGetUser = (enabled: boolean = true) => {
  const authUser = useAuthUserStore((state) => state.login);
  const { data, isSuccess, isLoading } = useQuery({
    queryKey: authKeys.user,
    queryFn: getUser,
    enabled: enabled,
  });

  if (isSuccess) {
    authUser(data);
  }

  return { user: data ?? null, isLoading };
};
