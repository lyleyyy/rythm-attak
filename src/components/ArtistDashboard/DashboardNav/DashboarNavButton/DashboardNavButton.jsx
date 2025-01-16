function DashboardNavButton({ name, isActive, onClick }) {
  return (
    <button
      className={`h-full w-1/4 border-b-4 border-transparent text-lg font-bold ${!isActive && "text-zinc-500"} ${isActive && "border-white text-white"} hover:text-white`}
      onClick={onClick}
    >
      {name}
    </button>
  );
}

export default DashboardNavButton;
