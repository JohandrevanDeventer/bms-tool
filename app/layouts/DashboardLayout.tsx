import CustomBreadcrumb from "@/components/CustomBreadcrumb";
import DevicesRightSidebar from "@/components/DevicesRightSideDiv";
import { ReactNode } from "react";

interface DashboardLayoutProps {
  children: ReactNode;
  breadcrumbSteps?: BreadCrumb[]; // Breadcrumb steps passed as prop
}

const DashboardLayout = ({
  children,
  breadcrumbSteps = [],
}: DashboardLayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen">
      {breadcrumbSteps.length > 0 && (
        <CustomBreadcrumb steps={breadcrumbSteps} />
      )}
      <div className="flex flex-col md:flex-row w-full overflow-y-auto pr-0 h-full">
        <div className="w-full h-full">{children}</div>
        <div className="ml-auto transition-transform duration-500 ease-in-out transform scale-95 opacity-0 md:scale-100 md:opacity-100 md:flex flex-col w-[14rem] h-full mx-2 md:sticky md:top-0 pt-4">
          <DevicesRightSidebar />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
