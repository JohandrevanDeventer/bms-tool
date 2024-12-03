import DashboardLayout from "@/app/layouts/DashboardLayout";
import TitleBox from "@/components/TitleBox";
import { getLoggedInUser } from "@/lib/actions/user.actions";
import React from "react";

const DashboardPage = async () => {
  const breadcrumbSteps: BreadCrumb[] = [
    { label: "Home", href: "/" },
    { label: "Dashboard" }, // Current page doesn't need a link
  ];

  const loggedInUser = await getLoggedInUser();

  return (
    <DashboardLayout breadcrumbSteps={breadcrumbSteps}>
      <div>
        <TitleBox
          type="greeting"
          title="Welcome"
          user={loggedInUser?.name || "Guest"}
          subtext="Utility tool for Rubicon BMS monitoring systems"
        />
      </div>
    </DashboardLayout>
  );
};

export default DashboardPage;
