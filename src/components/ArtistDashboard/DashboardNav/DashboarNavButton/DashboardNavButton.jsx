function DashboardNavButton({ name, index, isActive, setActiveIndex }) {
  return (
    <button
      className={`h-full w-1/5 border-b-4 border-transparent text-lg font-bold ${!isActive && "text-zinc-500"} ${isActive && "border-white text-white"} hover:text-white`}
      onClick={() => setActiveIndex(index)}
    >
      {name}
    </button>
  );
}

export default DashboardNavButton;
