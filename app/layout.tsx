import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";

import Sidebar from "@/components/Sidebar";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Scuttle",
  description: "Listen to Music",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={poppins.className}>
        <Sidebar>{children}</Sidebar>
      </body>
    </html>
  );
}
