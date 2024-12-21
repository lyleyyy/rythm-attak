import Main from "@/components/Main/Main";
import HeadNav from "@/components/HeadNav/HeadNav";
import Sidebar from "@/components/SidebarMain/Sidebar/Sidebar";
import MainContent from "@/components/SidebarMain/MainContent/MainContent";
import SidebarMain from "@/components/SidebarMain/SidebarMain";
import PromotionFooter from "@/components/PromotionFooter/PromotionFooter";
import Player from "@/components/Player/Player";

export default function Page() {
  return (
    <Main>
      <HeadNav />
      <SidebarMain>
        <Sidebar />
        <MainContent />
      </SidebarMain>
      {/* <PromotionFooter /> */}
      <Player />
    </Main>
  );
}
