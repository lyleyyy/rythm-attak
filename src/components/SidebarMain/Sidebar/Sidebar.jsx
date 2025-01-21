"use client";
import SidebarContent from "./SidebarContent/SidebarContent";
import SidebarFooter from "./SidebarFooter/SidebarFooter";
import SidebarHeader from "./SidebarHeader/SidebarHeader";
import SidebarContainer from "./SidebarContainer/SidebarContainer";
import { useAuth } from "@/contexts/AuthContext";
import { useCurrentAlbum } from "@/contexts/CurrentAlbumContext";

function Sidebar() {
  const { loggedInUser, isArtist } = useAuth();
  const { currentAlbum, uploadDeleteRefresh } = useCurrentAlbum();

  return (
    <SidebarContainer>
      <SidebarHeader
        loggedInUser={loggedInUser}
        isArtist={isArtist}
        currentAlbum={currentAlbum}
      />
      <SidebarContent
        loggedInUser={loggedInUser}
        isArtist={isArtist}
        currentAlbum={currentAlbum}
        uploadDeleteRefresh={uploadDeleteRefresh}
      />
      <SidebarFooter />
    </SidebarContainer>
  );
}

export default Sidebar;
