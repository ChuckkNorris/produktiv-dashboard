import { AuthLayoutNavbar } from "modules/app/auth-layout/auth-layout-navbar.component";
import { Outlet } from "react-router";

export const AuthLayout = () => {
  return (
    <>
      <AuthLayoutNavbar />
      <Outlet />
    </>
  );
}