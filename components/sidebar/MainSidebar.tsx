import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
  SidebarSeparator,
} from "../ui/sidebar";
import HomeButton from "./HomeButton";
import MainNav from "./MainSidebarNav";
import { MainSidebarSettings } from "./MainSidebarSettings";
import MainSidebarUser from "./MainSidebarUser";

const MainSidebar = async ({ user, ...props }: SidebarProps) => {
  return (
    <Sidebar collapsible="icon" {...props} variant="sidebar">
      <SidebarHeader>
        <HomeButton />
      </SidebarHeader>
      <SidebarSeparator />
      <SidebarContent>
        <MainNav />
      </SidebarContent>
      <SidebarSeparator />
      <SidebarFooter>
        <MainSidebarSettings />
      </SidebarFooter>
      <SidebarSeparator />
      <SidebarFooter>
        <MainSidebarUser user={user} />
      </SidebarFooter>
      <SidebarRail className="my-20 border-primary" />
    </Sidebar>
  );
};

export default MainSidebar;
