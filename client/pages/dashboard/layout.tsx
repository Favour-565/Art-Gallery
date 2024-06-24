import SearchNav from "@/components/Sidebar/SearchNav";
import Sidebar from "@/components/Sidebar/Sidebar";
import { ReactElement } from "react";

interface DashLayoutProps {
    children: ReactElement;
}



const Layout = ({children}: DashLayoutProps) => {
  return (
    <main className="flex">
    <Sidebar />
    <section className="pl-[3%] ml-[2%] ">
   
        <SearchNav />
          {children}
    </section>
    </main>
  )
}

export default Layout