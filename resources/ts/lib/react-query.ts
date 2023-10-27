import {
  QueryClient,
  DefaultOptions,
  UseQueryOptions,
  QueryKey,
} from "@tanstack/react-query";
import { AxiosError } from "axios";

const queryConfig: DefaultOptions = {
  queries: {
    useErrorBoundary: false,
    refetchOnWindowFocus: false,
    retry: false,
  },
};

export const queryClient = new QueryClient({ defaultOptions: queryConfig });

export type AppQueryOptions<TData, TQuerykey extends QueryKey> = Omit<
  UseQueryOptions<TData, AxiosError, TData, TQuerykey>,
  "queryKey" | "queryFn"
>;
