import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Andrew's Portfolio Website",
  description: "My portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} h-screen bg-portfolio-darkgray`}>
        <div className="flex h-full pl-72 pt-32">
          <Navbar />
          <div className="px-3 h-full">{children}</div>
        </div>
      </body>
    </html>
  );
}
