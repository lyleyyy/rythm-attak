"use client";
import { useAuth } from "@/contexts/AuthContext";
import PromotionFooter from "./PromotionFooter/PromotionFooter";
import Player from "./Player/Player";

function PromoPlayerContainer() {
  const { isLoggedIn } = useAuth();

  return (
    <>
      {!isLoggedIn && <PromotionFooter />}
      {isLoggedIn && <Player />}
    </>
  );
}

export default PromoPlayerContainer;
