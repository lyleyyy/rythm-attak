import Main from "@/components/Main/Main";
import "./globals.css";
import HeadNav from "@/components/HeadNav/HeadNav";
import SidebarMain from "@/components/SidebarMain/SidebarMain";
import Sidebar from "@/components/SidebarMain/Sidebar/Sidebar";
import Player from "@/components/Player/Player";
import MainContentContainer from "@/components/SidebarMain/MainContentContainer/MainContentContainer";

export const metadata = { title: "RA" };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Main>
          <HeadNav />
          <SidebarMain>
            <Sidebar />
            <MainContentContainer>{children}</MainContentContainer>
          </SidebarMain>
          <Player />
        </Main>
      </body>
    </html>
  );
}
