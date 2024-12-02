import React from "react";
import { SidebarTrigger } from "./ui/sidebar";
import Link from "next/link";
import { Separator } from "./ui/separator";
import Image from "next/image";
import logo from "../public/logo.png";

const MainHeader = () => {
  return (
    <main className="main-header  shadow-[0px_4px_10px_rgba(0,0,0,0.1)] dark:shadow-[0px_4px_10px_rgba(0,150,255,0.3)]">
      <div className="flex items-center gap-2">
        <SidebarTrigger />
        <Link href="/">
          <Image src={logo} alt="Rubicon BMS" width={40} />
        </Link>
      </div>
      <div className="flex items-center pr-2">User</div>
    </main>
  );
};

export default MainHeader;
