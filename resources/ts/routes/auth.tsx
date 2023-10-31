import StickiesRoutes from "@/features/stickies/routes";
import { Navigate, useLocation } from "react-router-dom";
import { ReactNode } from "react";
import { useAuthUserStore } from "@/store/authUserStore";
import { MainLayout } from "@/components/Layout/MainLayout";

const RequireAuth = ({ children }: { children: ReactNode }) => {
  const authUser = useAuthUserStore((state) => state.user);
  const location = useLocation();

  if (authUser) {
    return children;
  }

  return <Navigate to="/auth/login" state={{ from: location }} replace />;
};

export const authRoutes = [
  {
    path: "/stickies/*",
    element: (
      <RequireAuth>
        <MainLayout>
          <StickiesRoutes />
        </MainLayout>
      </RequireAuth>
    ),
  },
  {
    path: "/",
    element: <Navigate to="/stickies/home" />,
  },
];
