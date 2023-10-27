import { Navigate, useRoutes } from "react-router-dom";
import { useGetUser } from "@/features/auth";
import { guestRoutes } from "./guest";
import { authRoutes } from "./auth";

const AppRouter = () => {
  // 認証ユーザー取得
  const { user, isLoading } = useGetUser();
  console.log(user, isLoading);

  const defaultRoutes = [
    {
      path: "/",
      element: <Navigate to="/auth/login" />,
    },
    {
      path: "*",
      element: <Navigate to="/" />,
    },
  ];

  const routes = user ? authRoutes : guestRoutes;
  const element = useRoutes([...routes, ...defaultRoutes]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return <>{element}</>;
};

export default AppRouter;
