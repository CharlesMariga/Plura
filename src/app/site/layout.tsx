import Navigation from "@/components/site/navigation";
import React, { PropsWithChildren } from "react";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <div>
      <Navigation />
      {children}
    </div>
  );
}
