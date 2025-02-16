import { useState } from "react";

function useLoginPrompt() {
  const [isLoginPromptOpen, setIsLoginPromptOpen] = useState(false);

  return {
    isLoginPromptOpen,
    openLoginPrompt: () => setIsLoginPromptOpen(true),
    closeLoginPrompt: () => setIsLoginPromptOpen(false),
  };
}

export default useLoginPrompt;
