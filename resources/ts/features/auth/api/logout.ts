import { http } from "@/lib/http";

export const logout = () => {
  return http.post("/api/logout");
};
