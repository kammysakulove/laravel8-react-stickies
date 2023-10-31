import { QueryClient, DefaultOptions } from "@tanstack/react-query";

const queryConfig: DefaultOptions = {
  queries: {
    refetchOnWindowFocus: false,
    retry: false,
  },
};

export const queryClient = new QueryClient({ defaultOptions: queryConfig });
//
// export type AppQueryOptions<TData> = Omit<
//   UseQueryOptions<TData, AxiosError, TData>,
//   "queryKey" | "queryFn"
// >;
//
// export type AppMutationOptions<TVariables, TData> = Omit<
//   UseMutationOptions<TData, AxiosError, TVariables>,
//   "mutationKey" | "mutationFn"
// >;
