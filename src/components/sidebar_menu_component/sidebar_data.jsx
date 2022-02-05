import * as AiIcons from "react-icons/ai";
import * as BsIcons from "react-icons/bs";
import * as IoIcons from "react-icons/io5";

export const SidebarData = [
  {
    title: "Overview",
    path: "/overview",
    icon: <AiIcons.AiFillEye />,
    className: "nav-text",
  },
  {
    title: "Parcs",
    path: "/Parcs",
    icon: <BsIcons.BsLightning />,
    className: "nav-text",
  },
  {
    title: "Analytics",
    path: "/analytics",
    icon: <IoIcons.IoStatsChartOutline />,
    className: "nav-text",
  },
  {
    title: "Clients",
    path: "/clients",
    icon: <BsIcons.BsPerson />,
    className: "nav-text",
  },
];
