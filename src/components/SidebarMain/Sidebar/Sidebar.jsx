"use client";
import SidebarContent from "./SidebarContent/SidebarContent";
import SidebarFooter from "./SidebarFooter/SidebarFooter";
import SidebarHeader from "./SidebarHeader/SidebarHeader";
import SidebarContainer from "./SidebarContainer/SidebarContainer";
import { useAuth } from "@/contexts/AuthContext";
import { useCurrentAlbum } from "@/contexts/CurrentAlbumContext";

function Sidebar() {
  const { loggedInUser, isArtist } = useAuth();
  const { isOnAlbums, currentAlbum } = useCurrentAlbum();

  return (
    <SidebarContainer>
      <SidebarHeader
        loggedInUser={loggedInUser}
        isArtist={isArtist}
        isOnAlbums={isOnAlbums}
        currentAlbum={currentAlbum}
      />
      <SidebarContent
        loggedInUser={loggedInUser}
        isArtist={isArtist}
        isOnAlbums={isOnAlbums}
        currentAlbum={currentAlbum}
      />
      <SidebarFooter />
    </SidebarContainer>
  );
}

export default Sidebar;
