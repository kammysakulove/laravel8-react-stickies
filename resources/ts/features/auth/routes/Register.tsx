import { AuthLayout } from "@/components/Layout";
import { RegisterForm } from "@/features/auth/components/RegisterForm";

export const Register = () => {
  return (
    <AuthLayout>
      <RegisterForm />
    </AuthLayout>
  );
};
