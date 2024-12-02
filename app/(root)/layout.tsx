import { cookies } from "next/headers";
import MainSidebar from "@/components/sidebar/MainSidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import MainHeader from "@/components/MainHeader";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const defaultOpen = cookieStore.get("sidebar:state")?.value === "true";

  const loggedIn = { firstName: "Johandré", lastName: "van Deventer" };
  return (
    <main className="flex h-screen w-full bg-primary font-inter">
      <SidebarProvider defaultOpen={defaultOpen}>
        <MainSidebar user={loggedIn} />
        <div className="flex-1 flex flex-col min-h-0 overflow-hidden md:mt-1 bg-background md:rounded-tl-sm">
          <MainHeader />
          {children}
        </div>
      </SidebarProvider>
    </main>
  );
}
