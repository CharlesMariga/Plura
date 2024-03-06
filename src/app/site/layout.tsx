import Navigation from "@/components/site/navigation";
import { ClerkProvider } from "@clerk/nextjs";
import React, { PropsWithChildren } from "react";
import { dark } from "@clerk/themes";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <ClerkProvider appearance={{ baseTheme: dark }}>
      <main className="h-full">
        <Navigation />
        {children}
      </main>
    </ClerkProvider>
  );
}
