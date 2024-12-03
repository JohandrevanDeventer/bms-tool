"use client";

import React from "react";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "../ui/sidebar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import {
  BadgeCheck,
  Bell,
  ChevronsUpDown,
  CreditCard,
  LogOut,
  Sparkles,
} from "lucide-react";
import { Avatar, AvatarFallback } from "../ui/avatar";
import { getLoggedInUser, signOut } from "@/lib/actions/user.actions";
import { useRouter } from "next/navigation";

const MainSidebarUser = ({ user }: SidebarProps) => {
  const { isMobile } = useSidebar();
  const router = useRouter();

  const handleLogOut = async () => {
    const loggedOut = await signOut();

    if (loggedOut) router.push("/sign-in");
  };
  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            {user ? (
              <SidebarMenuButton
                size="lg"
                className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
              >
                <div className="flex cursor-pointer items-center justify-between gap-1 py-6">
                  <Avatar className="size-8">
                    <AvatarFallback className="font-bold bg-background text-secondary-foreground">
                      {user?.firstName[0].toUpperCase()}
                      {user?.lastName[0].toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col justify-center max-xl:hidden">
                    <h1 className="text-sm truncate font-semibold max-w-[125px]">
                      {user?.firstName} {user?.lastName}
                    </h1>
                    <p className="text-xs text-secondary-foreground truncate max-w-[125px]">
                      {user?.email}
                    </p>
                  </div>
                </div>
                <ChevronsUpDown className="ml-auto size-4" />
              </SidebarMenuButton>
            ) : (
              <div></div>
            )}
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="min-w-56 rounded-lg"
            side={isMobile ? "bottom" : "right"}
            align="end"
            sideOffset={4}
          >
            <DropdownMenuLabel className="p-0 font-semibold">
              <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                <div className="flex cursor-pointer items-center justify-between gap-1">
                  <Avatar className="size-8">
                    <AvatarFallback className="font-bold bg-background text-secondary-foreground">
                      {user?.firstName[0].toUpperCase()}
                      {user?.lastName[0].toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col justify-center max-xl:hidden">
                    <h1 className="text-sm truncate font-normal">
                      {user?.firstName} {user?.lastName}
                    </h1>
                    <p className="text-xs text-secondary-foreground truncate]">
                      {user?.email}
                    </p>
                  </div>
                </div>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <Sparkles />
                Upgrade to Pro
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <BadgeCheck />
                Account
              </DropdownMenuItem>
              <DropdownMenuItem>
                <CreditCard />
                Billing
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Bell />
                Notifications
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={handleLogOut}>
              <LogOut />
              Log out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
};

export default MainSidebarUser;
