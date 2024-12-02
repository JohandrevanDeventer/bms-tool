import DashboardLayout from "@/app/layouts/DashboardLayout";
import React from "react";

const DashboardPage = () => {
  const breadcrumbSteps: BreadCrumb[] = [
    { label: "Home", href: "/" },
    { label: "Dashboard" }, // Current page doesn't need a link
  ];

  return (
    <DashboardLayout breadcrumbSteps={breadcrumbSteps}>
      <div>
        <h1 className="text-2xl font-bold">Welcome to the Dashboard</h1>
      </div>
    </DashboardLayout>
  );
};

export default DashboardPage;
