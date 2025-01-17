import MainContentFooter from "../MainContent/MainContentFooter/MainContentFooter";

function MainContentContainer({ children }) {
  return (
    <div className="flex-1 overflow-y-auto rounded-xl bg-zinc-900">
      {children}
      <MainContentFooter />
    </div>
  );
}

export default MainContentContainer;
