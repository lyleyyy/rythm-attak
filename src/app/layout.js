import "./globals.css";
import Main from "@/components/Main/Main";
import HeadNav from "@/components/HeadNav/HeadNav";
import SidebarMain from "@/components/SidebarMain/SidebarMain";
import Sidebar from "@/components/SidebarMain/Sidebar/Sidebar";
import MainContentContainer from "@/components/SidebarMain/MainContentContainer/MainContentContainer";
import PromoPlayerContainer from "@/components/PromoPlayerContainer /PromoPlayerContainer";
import { AuthProvider } from "@/contexts/AuthContext";
import { CurrentAlbumProvider } from "@/contexts/CurrentAlbumContext";
import { CurrentPlayingProvider } from "@/contexts/CurrentPlayingContext";

export const metadata = { title: "RA" };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <CurrentPlayingProvider>
            <CurrentAlbumProvider>
              <Main>
                <HeadNav />
                <SidebarMain>
                  <Sidebar />
                  <MainContentContainer>{children}</MainContentContainer>
                </SidebarMain>
                <PromoPlayerContainer />
              </Main>
            </CurrentAlbumProvider>
          </CurrentPlayingProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
