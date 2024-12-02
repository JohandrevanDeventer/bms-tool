import DashboardLayout from "@/app/layouts/DashboardLayout";
import TitleBox from "@/components/TitleBox";
import React from "react";

const DashboardPage = () => {
  const breadcrumbSteps: BreadCrumb[] = [
    { label: "Home", href: "/" },
    { label: "Dashboard" }, // Current page doesn't need a link
  ];

  const loggedIn = { firstName: "Johandré", lastName: "van Deventer" };

  return (
    <DashboardLayout breadcrumbSteps={breadcrumbSteps}>
      <div>
        <TitleBox
          type="greeting"
          title="Welcome"
          user={loggedIn?.firstName || "Guest"}
          subtext="Utility tool for Rubicon BMS monitoring systems"
        />
      </div>
    </DashboardLayout>
  );
};

export default DashboardPage;
