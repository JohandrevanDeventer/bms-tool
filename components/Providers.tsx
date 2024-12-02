"use client";

// import { ThemeProvider, useTheme } from "next-themes";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "./theme/ThemeProvider";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      themes={["light", "dark"]}
      disableTransitionOnChange
    >
      {children}
      <ToasterProvider />
    </ThemeProvider>
  );
}

function ToasterProvider() {
  return <Toaster />;
}
