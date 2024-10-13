import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import { Provider } from "./provider";
import { Space_Grotesk } from "next/font/google";

export const metadata: Metadata = {
  title: "Pixie Clips",
  description: "Your favorite text to video generator.",
};

const grotesk = Space_Grotesk({ subsets: ["latin"] });
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={grotesk.className}>
          <Provider>{children}</Provider>
        </body>
      </html>
    </ClerkProvider>
  );
}
