import { useRoutes } from "react-router-dom";
import Login from "./Login.tsx";
import Register from "./Register.tsx";

const AuthRoutes = () => {
  const element = useRoutes([
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
  ]);

  return <>{element}</>;
};

export default AuthRoutes;
