import { AuthLayout } from '@/components/Layout';
import { RegisterForm } from '@/features/auth/components/RegisterForm';
import { useNavigate } from 'react-router-dom';

export const Register = () => {
  const navigate = useNavigate();

  return (
    <AuthLayout>
      <RegisterForm
        onSuccess={() => {
          navigate('/stickies/home');
        }}
      />
    </AuthLayout>
  );
};
