import NavBar from "@/components/nav";
import { SessionProvider } from "next-auth/react";

interface AdminLayoutProps {
  children: React.ReactNode;
}

const AdminLayout = ({ children }: AdminLayoutProps) => {
  return (
    <SessionProvider>
      <div className="flex min-h-screen bg-background">
        <NavBar />
        <div className="flex-1">{children}</div>
      </div>
    </SessionProvider>
  );
};

export default AdminLayout;
