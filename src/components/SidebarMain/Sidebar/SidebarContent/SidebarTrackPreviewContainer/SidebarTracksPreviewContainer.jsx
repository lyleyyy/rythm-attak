function SidebarTracksPreviewContainer({ children }) {
  return (
    <div className="flex h-full flex-1 flex-col gap-2 overflow-y-auto">
      {children}
    </div>
  );
}

export default SidebarTracksPreviewContainer;
