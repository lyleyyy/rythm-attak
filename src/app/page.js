import Main from "@/components/Main/Main";
import HeadNav from "@/components/HeadNav/HeadNav";
import Sidebar from "@/components/Sidebar/Sidebar";
import MainContent from "@/components/MainContent/MainContent";
import SidebarMain from "@/components/SidebarMain/SidebarMain";
import PromotionFooter from "@/components/PromotionFooter/PromotionFooter";

export default function Page() {
  return (
    <Main>
      <HeadNav />
      <SidebarMain>
        <Sidebar />
        <MainContent />
      </SidebarMain>
      <PromotionFooter />
    </Main>
  );
}
