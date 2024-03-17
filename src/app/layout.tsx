import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "./Nav";
import Link from "next/link";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bank Dash",
  description: "Transact Seamlessly",
};

export default function RootLayout({
  children,
  Cards,
  Recents
}: Readonly<{
  children: React.ReactNode;
  Cards: React.ReactNode;
  Recents: React.ReactNode;
}>) {
  return (
    <html lang="en">
    
      <body className="relative">
        {children}
        <div className="absolute w-400 bg-slate-100 top-24 left-60 h-200 flex column p-6">
          <div className="w-full flex">
            <div className="flex w-full h-56 gap-4 ">
              <div className="flex justify-between w-2/3 text-seondary2 text-xl flex-col gap-2 " >
                <div className="flex justify-between w-full ">
                <h4>My Cards</h4>
                <Link href="/"><p>See All</p></Link>
                </div>
                <div className="flex justify-between w-full h-full">
                  {Cards}

                </div>
              </div>
              <div className="w-1/3 bg-black justify-self-auto"></div>
            </div>
          </div>
        </div>
        {/* {Cards}
        {Recents} */}
        </body>
    </html>
  );
}
