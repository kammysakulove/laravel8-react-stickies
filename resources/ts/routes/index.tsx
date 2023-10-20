import { Navigate, useRoutes } from "react-router-dom";
import AuthRoutes from "../features/auth/routes";
//import Register from "../features/auth/routes/Register";

const AppRouter = () => {
  const element = useRoutes([
    {
      path: "/",
      element: <Navigate to="/auth/login" />,
    },
    {
      path: "/auth/*",
      element: <AuthRoutes />,
    },
  ]);

  return <>{element}</>;
};

export default AppRouter;
