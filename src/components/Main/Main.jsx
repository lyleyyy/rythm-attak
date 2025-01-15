"use client";
import { useAuth } from "@/contexts/AuthContext";
import LoadingSpinnerFullScreen from "@/ui/LoadingSpinnerFullScreen";

function Main({ children }) {
  const { authContextLoading } = useAuth();

  if (authContextLoading) return <LoadingSpinnerFullScreen />;

  return (
    <main className="flex h-screen w-full flex-col bg-black">{children}</main>
  );
}

export default Main;
