"use client";

import React from "react";
import { SidebarMenuButton, SidebarTrigger, useSidebar } from "./ui/sidebar";
import Link from "next/link";
import { Separator } from "./ui/separator";
import Image from "next/image";
import logo from "../public/logo.png";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { BadgeCheck, Bell, CreditCard, LogOut, Sparkles } from "lucide-react";
import { useRouter } from "next/navigation";
import { signOut } from "@/lib/actions/user.actions";

const MainHeader = ({ user }: HeaderProps) => {
  const { isMobile } = useSidebar();
  const router = useRouter();

  const handleLogOut = async () => {
    const loggedOut = await signOut();

    if (loggedOut) router.push("/sign-in");
  };
  return (
    <main className="main-header  shadow-[0px_4px_10px_rgba(0,0,0,0.1)] dark:shadow-[0px_4px_10px_rgba(0,150,255,0.3)]">
      <div className="flex items-center gap-2">
        <SidebarTrigger />
        <Link href="/">
          <Image src={logo} alt="Rubicon BMS" width={40} />
        </Link>
      </div>
      {/* <div className="flex items-center pr-2">User</div> */}
      <div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            {user ? (
              <SidebarMenuButton
                size="lg"
                className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
              >
                <div className="flex cursor-pointer items-center justify-between gap-1 py-6">
                  {/* <div className="flex flex-col justify-center max-xl:hidden">
                    <h1 className="text-sm truncate font-semibold max-w-[125px]">
                      {user?.firstName} {user?.lastName}
                    </h1>
                    <p className="text-xs text-secondary-foreground truncate max-w-[125px]">
                      {user?.email}
                    </p>
                  </div> */}
                  <Avatar className="size-8">
                    <AvatarFallback className="font-bold bg-primary text-foreground">
                      {user?.firstName[0].toUpperCase()}
                      {user?.lastName[0].toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                </div>
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
                    <AvatarFallback className="font-bold bg-primary text-foreground">
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
      </div>
    </main>
  );
};

export default MainHeader;
