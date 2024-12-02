import CustomBreadcrumb from "@/components/CustomBreadcrumb";
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
      <div className="flex-1">{children}</div> {/* Main content */}
    </div>
  );
};

export default DashboardLayout;
