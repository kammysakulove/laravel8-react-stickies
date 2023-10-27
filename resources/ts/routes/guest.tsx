import AuthRoutes from "@/features/auth/routes";

export const guestRoutes = [
  {
    path: "/auth/*",
    element: <AuthRoutes />,
  },
];
