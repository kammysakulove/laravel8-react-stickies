import { Navigate, useRoutes } from 'react-router-dom';
import { useGetUser } from '@/features/auth';
import { guestRoutes } from './guest';
import { authRoutes } from './auth';
import { LoadingComponent } from '@/components/Elements/Loading';

const AppRouter = () => {
  // 認証ユーザー取得
  const { user, isLoading } = useGetUser();
  console.log('app router', user, isLoading);

  const defaultRoutes = [
    {
      path: '/',
      element: <Navigate to="/auth/login" />,
    },
    {
      path: '*',
      element: <Navigate to="/" />,
    },
  ];

  const routes = user ? authRoutes : guestRoutes;
  const element = useRoutes([...routes, ...defaultRoutes]);

  if (isLoading) {
    return <LoadingComponent />;
  }

  return <>{element}</>;
};

export default AppRouter;
