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
      <body
        className={`${inter.className} h-screen flex bg-portfolio-darkgray pl-72 pt-32`}
      >
        <div className="h-full">
          <Navbar />
        </div>
        <div className="px-5 pr-32 w-full h-full">{children}</div>
      </body>
    </html>
  );
}
