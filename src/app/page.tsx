import Image from "next/image";
import Nav from "./Nav";
import SideBar from "./SideBar";

export default function Home({Cards,
  Recents} : Readonly<{
    children: React.ReactNode;
    Cards: React.ReactNode;
    Recents: React.ReactNode;
  }>) {
  return (
    <main className="w-screen h-screen overflow-hidden bg-slate-100 ">
      <Nav />
      <SideBar />
      
    </main>
  );
}
