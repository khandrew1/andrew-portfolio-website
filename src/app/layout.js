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
        className={`${inter.className} h-screen w-screen flex flex-col lg:flex-row bg-portfolio-darkgray`}
      >
        <div className="lg:flex lg:w-full lg:justify-center lg:pt-32">
          <div className="w-full lg:w-fit lg:h-fit pb-3 lg:pr-3">
            <Navbar />
          </div>
          <div className="lg:w-3/4 overflow-y-scroll">{children}</div>
        </div>
      </body>
    </html>
  );
}
