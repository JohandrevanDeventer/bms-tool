"use client";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Fragment } from "react";

interface BreadCrumbProps {
  label: string;
  href?: string;
}

const CustomBreadcrumb = ({ steps }: { steps: BreadCrumbProps[] }) => {
  const pathname = usePathname(); // Get the current route

  // Generate breadcrumbs if steps are not provided
  const generateBreadcrumbs = () => {
    const segments = pathname?.split("/").filter(Boolean); // Split the path into segments (ignore empty parts)

    // If no segments (e.g., just `/`), return empty breadcrumbs
    if (!segments || segments.length === 0) return [];

    const homeBreadcrumb = { label: "Home", href: "/" };

    // Map segments to breadcrumb steps, skipping the first (empty) part of the path
    const pathBreadcrumbs = segments.map((segment, index) => {
      const href = "/" + segments.slice(0, index + 1).join("/"); // Construct href for each breadcrumb item
      return {
        label: segment.charAt(0).toUpperCase() + segment.slice(1), // Capitalize the first letter of the segment
        href,
      };
    });

    // Return "Home" first and then the path breadcrumbs
    return [homeBreadcrumb, ...pathBreadcrumbs];
  };

  // Use provided steps or generate them from the pathname
  const breadcrumbSteps = steps || generateBreadcrumbs();

  return (
    <Breadcrumb className="breadcrumbs shadow-[0px_4px_10px_rgba(0,0,0,0.1)] dark:shadow-[0px_4px_10px_rgba(0,150,255,0.3)]">
      <BreadcrumbList>
        {breadcrumbSteps.map((step, index) => (
          <Fragment key={index}>
            <BreadcrumbItem>
              {index < breadcrumbSteps.length - 1 ? (
                // For all but the last breadcrumb, use a link
                <BreadcrumbLink asChild>
                  <Link href={step.href || "#"}>{step.label}</Link>
                </BreadcrumbLink>
              ) : (
                // For the last breadcrumb, just display it without a link
                <BreadcrumbPage className="font-bold">
                  {step.label}
                </BreadcrumbPage>
              )}
            </BreadcrumbItem>
            {/* Only render the separator if it's not the last item */}
            {index < breadcrumbSteps.length - 1 && <BreadcrumbSeparator />}
          </Fragment>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default CustomBreadcrumb;
