import Image from "next/image";
import Link from "next/link";
import dashboard from "@/public/sidebar/dashboard.svg";
import auction from "@/public/sidebar/auction.svg";
import wishlist from "@/public/sidebar/wishlist.svg";
import orders from "@/public/sidebar/orders.svg";
import messages from "@/public/sidebar/messages.svg";
import settings from "@/public/sidebar/settings.svg";
import logout from "@/public/sidebar/logout.svg";
import divider from "@/public/auth/divider.svg";
import classes from "./Sidebar.module.css";
import { usePathname, useRouter } from "next/navigation";
import { Logout } from "@/pages/lib/auth";

const SideBarItems = [
  {
    key: "dashboard",
    link: "/dashboard",
    src: dashboard,
    text: "Dashboard",
  },
  {
    key: "auction",
    link: "/dashboard/auction",
    src: auction,
    text: "Auction",
  },
  {
    key: "wishlist",
    link: "/dashboard/cart",
    src: wishlist,
    text: "Wishlist",
  },
  {
    key: "orders",
    link: "/dashboard/orders",
    src: orders,
    text: "Orders",
  },
  {
    key: "messages",
    link: "/dashboard/messages",
    src: messages,
    text: "Messages",
  },
  {
    key: "settings",
    link: "/dashboard/settings",
    src: settings,
    text: "Settings",
  },
  {
    key: "logout",
    link: "/dashboard/logout",
    src: logout,
    text: "Logout",
  },
];



const Sidebar = () => {



  return (
    <aside className={`w-[20%]  h-[100vh] ${classes.sidebar}`}>
      <div className="pl-[5%] pt-[7%]">
        <h3 className="text-[#0000CD] pb-[3%] ">Artistic Elegance Gallery</h3>
        <div className="bg-[#EAEBEC] h-[1px] w-[90%]"></div>
      </div>

      <div className=" pt-[3%]">
        <h3 className="text-[#98A2B3] my-[5%] pl-[5%]">Overview</h3>
        <ul>
          {SideBarItems.slice(0, 5).map((item, index) => (
            <SideList
              key={index}
              link={item.link}
              src={item.src}
              text={item.text}
            />
          ))}
        </ul>
      </div>
      <div className="pl-[5%]">
        <h3 className="text-[#98A2B3] my-[5%]">Others</h3>
        <ul>
          {SideBarItems.slice(5).map((item,index) => (
            <SideList
              key={index}
              link={item.link}
              src={item.src}
              text={item.text}
            />
          ))}
        </ul>
      </div>
    </aside>
  );
};

interface SideListProps {
  link: string;
  src: string;
  text: string;
}

export const SideList = ({  link, src, text }: SideListProps) => {
  const pathname = usePathname();
  const router = useRouter();


  const LiLink = (
    <Link
      href={link}
      className={`flex items-center text-[0.9rem] pl-[5%] ${
        pathname === link ? "bg-[#9FC7FD]" : ""
      }`}
    >
      <Image
        src={src}
        alt={text}
        className="h-[3vh] w-[auto] my-[5%] mr-[3%]"
      />
      {text}
    </Link>
  );

  const LiLog = (
    <div
      className={`flex items-center text-[0.9rem] pl-[5%] ${
        pathname === link ? "bg-[#9FC7FD]" : ""
      }`}
      onClick={() => Logout().then(() => router.push("/", { scroll: false }))}
    >
      <Image
        src={src}
        alt={text}
        className="h-[3vh] w-[auto] my-[5%] mr-[3%]"
      />
      {text}
    </div>
  );
  return <li >{text == "Logout" ? LiLog : LiLink}</li>;
};

export default Sidebar;
