import { LoginForm } from '../components/LoginForm';
import { AuthLayout } from '@/components/Layout/';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
  const navigate = useNavigate();

  return (
    <AuthLayout>
      <LoginForm
        onSuccess={() => {
          navigate('/stickies/home');
        }}
      />
    </AuthLayout>
  );
};
