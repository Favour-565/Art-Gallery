import SearchNav from "@/components/Sidebar/SearchNav";
import Sidebar from "@/components/Sidebar/Sidebar";
import { ReactElement } from "react";
import { Modal, Success } from "../modal/modal";
import { useSelector } from "react-redux";

interface DashLayoutProps {
    children: ReactElement;
}


const DashLayout = ({children}: DashLayoutProps) => {
  const error = useSelector((state:any) => state.user.error)
  const success = useSelector((state:any) => state.user.success)
  return (
    <main className="flex">
      <Modal isOpen={error.length > 0 || success.length>0}>
        <Success isError={error.length > 0} header={'Message'} message={error.length > 0 ? error: success} />
      </Modal>
    <Sidebar />
    <section className="pl-[3%] ml-[2%] ">
        <SearchNav />
          {children}
    </section>
    </main>
  )
}

export default DashLayout