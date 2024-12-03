import { cookies } from "next/headers";
import MainSidebar from "@/components/sidebar/MainSidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import MainHeader from "@/components/MainHeader";
import { getLoggedInUser } from "@/lib/actions/user.actions";
import { redirect } from "next/navigation";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const defaultOpen = cookieStore.get("sidebar:state")?.value === "true";

  const loggedInUser = await getLoggedInUser();
  const loggedIn = {
    $id: "1",
    email: "johandre.vanDeventer@rubiconsa.com",
    userId: "1",
    username: "JohandrevD",
    firstName: "Johandre",
    lastName: "van Deventer",
    name: "Johandre van Deventer",
    idNumber: "1234567890",
    address1: "123 Test St",
    city: "Test City",
    province: "Test Province",
    postalCode: "1234",
    dateOfBirth: "01/01/2000",
  };

  if (!loggedInUser) redirect("/sign-in");

  return (
    <main className="flex h-screen w-full bg-primary font-inter">
      <SidebarProvider defaultOpen={defaultOpen}>
        <MainSidebar user={loggedIn} />
        <div className="flex-1 flex flex-col min-h-0 overflow-hidden md:mt-1 bg-background md:rounded-tl-sm">
          <MainHeader user={loggedIn} />
          {children}
        </div>
      </SidebarProvider>
    </main>
  );
}
