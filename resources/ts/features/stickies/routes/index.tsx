import { useRoutes } from "react-router-dom";
import { Home } from "@/features/stickies/routes/Home";

const StickiesRoutes = () => {
  const element = useRoutes([
    {
      path: "/home",
      element: <Home />,
    },
  ]);

  return <>{element}</>;
};

export default StickiesRoutes;
