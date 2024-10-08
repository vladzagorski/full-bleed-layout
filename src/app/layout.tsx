import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { type ReactNode } from "react";
import { Header } from "@/components/layout/header";
import { Main } from "@/components/layout/main";
import { Footer } from "@/components/layout/footer";

import "./globals.css";
import { Nav } from "@/components/layout/nav";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn("grid-container", inter.className)}>
        <Header>
          <Nav />
        </Header>
        <Main className="grid-container">{children}</Main>
        <Footer>
          <Nav />
        </Footer>
      </body>
    </html>
  );
}
