import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { NextSSRPlugin } from "@uploadthing/react/next-ssr-plugin";

import { ThemeProvider } from "@/providers/theme-provider";
import { extractRouterConfig } from "uploadthing/server";
import { ourFileRouter } from "./api/uploadthing/core";
import ModalProvider from "@/providers/modal-provider";
import { Toaster } from "@/components/ui/toaster";

const font = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Plura",
  description: "All in one Agency Solution",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={font.className} suppressHydrationWarning>
        <NextSSRPlugin
          /**
           * The `extractRouterConfig` will extract **only** the route configs
           * from the router to prevent additional information from being
           * leaked to the client. The data passed to the client is the same
           * as if you were to fetch `/api/uploadthing` directly.
           */
          routerConfig={extractRouterConfig(ourFileRouter)}
        />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ModalProvider>
            {children}
            <Toaster />
          </ModalProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
