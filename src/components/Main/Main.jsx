"use client";
import { useAuth } from "@/contexts/AuthContext";
import LoadingSpinner from "@/ui/LoadingSpinner";

function Main({ children }) {
  const { authContextLoading } = useAuth();

  if (authContextLoading) return <LoadingSpinner />;

  return (
    <main className="flex h-screen w-full flex-col bg-black">{children}</main>
  );
}

export default Main;
