import ModalCloseButton from "./ModalCloseButton";

function ModalContainer({ children, onClick }) {
  return (
    <div className="fixed left-0 top-0 z-50 flex h-screen w-screen items-center justify-center bg-black bg-opacity-50 backdrop-blur-md">
      <ModalCloseButton onClick={onClick} />
      {children}
    </div>
  );
}

export default ModalContainer;
