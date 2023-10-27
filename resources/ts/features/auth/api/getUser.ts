import { http } from "@/lib/http";
import { AuthUser } from "../types";
import { useQuery } from "@tanstack/react-query";
import { authKeys } from "@/features/auth/api/queryKey";
import { useAuthUserStore } from "@/store/authUserStore";
import { AppQueryOptions } from "@/lib/react-query";

const getUser = (): Promise<AuthUser> => {
  return http.post("/api/me");
};

export const useGetUser = (
  options?: AppQueryOptions<AuthUser, typeof authKeys.user>
) => {
  const authUser = useAuthUserStore((state) => state.login);
  const { data, isSuccess, isLoading } = useQuery({
    queryKey: authKeys.user,
    queryFn: getUser,
    ...options,
  });

  if (isSuccess) {
    authUser(data);
  }

  return { user: data ?? null, isLoading };
};
