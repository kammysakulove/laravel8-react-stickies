import { Navigate, useRoutes } from 'react-router-dom';
import { Test } from '@/features/stickies/routes/Test';
import { Home } from '@/features/stickies/routes/Home';

const StickiesRoutes = () => {
  const element = useRoutes([
    {
      path: '/test',
      element: <Test />,
    },
    {
      path: '/home',
      element: <Home />,
    },
    {
      path: '*',
      element: <Navigate to="/home" />,
    },
  ]);

  return <>{element}</>;
};

export default StickiesRoutes;
