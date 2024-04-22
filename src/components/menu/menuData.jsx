import { IoMdHome, IoMdSettings } from "react-icons/io";
import {
  FaUser,
  FaUsers,
  FaShoppingCart,
  FaCalendar,
  FaChartBar,
} from "react-icons/fa";
import { MdFormatListNumberedRtl } from "react-icons/md";
import { FaBorderAll, FaSignsPost } from "react-icons/fa6";
import { TbLogout } from "react-icons/tb";
import { LuDatabaseBackup } from "react-icons/lu";
import { CgNotes } from "react-icons/cg";
import { IoAppsSharp } from "react-icons/io5";

export const menuData = [
  {
    sectionTitle: "Main",
    items: [
      { path: "/", icon: <IoMdHome />, title: "Home" },
      { path: "/users/1", icon: <FaUser />, title: "Profile" },
    ],
  },
  {
    sectionTitle: "Lists",
    items: [
      { path: "/users", icon: <FaUsers />, title: "Users" },
      { path: "/products", icon: <FaShoppingCart />, title: "Products" },
      { path: "/orders", icon: <FaBorderAll />, title: "Orders" },
      { path: "/posts", icon: <FaSignsPost />, title: "Posts" },
    ],
  },
  {
    sectionTitle: "General",
    items: [
      { path: "/", icon: <IoAppsSharp />, title: "Elements" },
      { path: "/", icon: <CgNotes />, title: "Notes" },
      { path: "/", icon: <MdFormatListNumberedRtl />, title: "Forms" },
      { path: "/", icon: <FaCalendar />, title: "Calendar" },
    ],
  },
  {
    sectionTitle: "Maintenance",
    items: [
      { path: "/", icon: <IoMdSettings />, title: "Settings" },
      { path: "/", icon: <LuDatabaseBackup />, title: "Backups" },
    ],
  },
  {
    sectionTitle: "Analytics",
    items: [
      { path: "/", icon: <FaChartBar />, title: "Charts" },
      { path: "/", icon: <TbLogout />, title: "Logs" },
    ],
  },
];
