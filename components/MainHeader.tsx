import React from "react";
import { SidebarTrigger } from "./ui/sidebar";
import Link from "next/link";
import { Separator } from "./ui/separator";
import Image from "next/image";
import logo from "../public/logo.png";

const MainHeader = () => {
  return (
    <main className="flex flex-col">
      <div className="main-header">
        <div className="flex items-center gap-2">
          <SidebarTrigger />
          <Link href="/">
            <Image src={logo} alt="Rubicon BMS" width={40} />
          </Link>
        </div>
        <div className="flex items-center pr-2">User</div>
      </div>
      <div className="mx-4">
        <Separator className="bg-secondary" />
      </div>
    </main>
  );
};

export default MainHeader;
