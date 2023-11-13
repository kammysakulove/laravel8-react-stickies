import { useRoutes } from "react-router-dom";
import { Login } from "./Login";
import { Register } from "./Register";

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
