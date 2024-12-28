import Image from "next/image";

function AuthModalHeader({ children }) {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <Image
        src="/logo.png"
        alt="logo"
        width={100}
        height={100}
        style={{
          backgroundColor: "white",
          borderRadius: "50%",
          border: "2px solid white",
        }}
      />
      <h3 className="text-center text-xl font-semibold">{children}</h3>
    </div>
  );
}

export default AuthModalHeader;
