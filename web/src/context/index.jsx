import { Outlet } from "react-router-dom";
import { AuthProvider } from "./Auth/auth";

export default function Context() {
  return (
    <AuthProvider>
      <Outlet />
    </AuthProvider>
  );
}
