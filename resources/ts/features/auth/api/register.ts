import { http } from "@/lib/http";
import { AuthUserResponse } from "../types";

export type RegisterCredentials = {
  email: string;
  name: string;
  password: string;
};
export const registerWithEmailAndPassword = (
  data: RegisterCredentials
): Promise<AuthUserResponse> => {
  return http.post("/api/register", data);
};
