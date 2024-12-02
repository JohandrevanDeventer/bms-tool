import { Cpu, Info, Mail, Settings } from "lucide-react";

export const MainSidebarLinks = [
    {
      title: "Devices suite",
      url: "/devices",
      icon: "Cpu",
      isActive: false,
      roles: ["admin", "user"], // Visible to admin and regular users
      items: [
        { title: "Available Devices", url: "/available-devices" },
        { title: "Data Points", url: "/data-points" },
        { title: "Alarms", url: "/alarms" },
        { title: "My devices", url: "/my-devices" },
      ],
    },
    {
      title: "Admin",
      url: "/admin",
      icon: "Settings",
      isActive: false,
      roles: ["admin"], // Visible to admin only
      items: [
        { title: "Users", url: "/users" },
        { title: "Devices", url: "/devices" },
      ],
    },
    {
      title: "About",
      url: "/about",
      icon: "Info",
      isActive: false,
      roles: ["admin", "user"], // Visible to admin and regular users
      items: [
        { title: "Company", url: "/company" },
        { title: "Devices", url: "/devices" },
      ],
    },
    {
      title: "Contact",
      url: "/contact",
      icon: "Mail",
      isActive: false,
      roles: ["admin", "user"], // Visible to admin and regular users
      items: [
        { title: "Support", url: "/support" },
        { title: "Sales", url: "/sales" },
      ],
    }
]

export const iconMap = { Cpu, Settings, Mail, Info };

