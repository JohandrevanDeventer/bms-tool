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
      <SidebarFooter>Footer</SidebarFooter>
      <SidebarRail className="my-20 border-primary" />
      {/* Add any user-related content here if needed */}
      <div>{user.firstName}</div>
    </Sidebar>
  );
};

export default MainSidebar;
