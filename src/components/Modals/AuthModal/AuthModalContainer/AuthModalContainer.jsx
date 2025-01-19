import ModalCloseButton from "@/ui/ModalCloseButton";

function AuthModalContainer({ children, onClick }) {
  return (
    <div className="fixed left-0 top-0 z-50 flex h-screen w-screen flex-col items-center gap-8 bg-zinc-900 pt-8">
      <ModalCloseButton onClick={onClick} />
      {children}
    </div>
  );
}

export default AuthModalContainer;
