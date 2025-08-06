import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// Import the components for our layout
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/toaster"; // Import the Toaster

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dimension - The Future of Social Networks",
  description: "Building the future of decentralized social networks. Connect freely, own your data, and build communities without boundaries.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        {children} {/* This is where page.tsx will be rendered */}
        <Footer />
        <Toaster /> {/* Add the Toaster here */}
      </body>
    </html>
  );
}