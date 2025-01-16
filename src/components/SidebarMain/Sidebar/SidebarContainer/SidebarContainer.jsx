function SidebarContainer({ children }) {
  return (
    <div className="flex w-1/4 flex-col gap-4 rounded-xl bg-zinc-900 p-4">
      {children}
    </div>
  );
}

export default SidebarContainer;
