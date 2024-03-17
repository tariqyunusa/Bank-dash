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
        <div className="absolute w-10/12 bg-slate-100 top-24 left-60 h-200 flex column p-4">
          <div className="w-full flex">
            <div className="flex w-full h-54 gap-10 ">
              <div className="flex justify-between w-2/3 text-secondary2 text-xl flex-col gap-2 h-fit" >
                <div className="flex justify-between w-full ">
                <h4>My Cards</h4>
                <Link href="/"><p>See All</p></Link>
                </div>
                <div className="flex justify-between w-full h-full">
                  {Cards}

                </div>
              </div>
              <div className="w-150 justify-self-auto h-full">
                <div className="">
                  {Recents}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* {Cards}
        {Recents} */}
        </body>
    </html>
  );
}
