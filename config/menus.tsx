import {
  FaHouse,
  FaServer,
  FaRocket,
  FaMugHot,
  FaInstalod,
  FaGetPocket,
  FaFutbol,
} from "react-icons/fa6";
export const menus = [
  {
    label: "Home",
    href: "/admin",
    icon: FaHouse,
  },
  {
    label: "Content Manager",
    href: "/admin/content",
    icon: FaServer,
  },
  {
    label: "Media Library",
    href: "/admin/media",
    icon: FaRocket,
  },
  {
    label: "Content-Type Builder",
    href: "/admin/content-type-builder",
    icon: FaMugHot,
  },
  {
    label: "Deploy",
    href: "/admin/deploy",
    icon: FaInstalod,
  },
  {
    label: "Marketplace",
    href: "/admin/marketplace",
    icon: FaGetPocket,
  },
  {
    label: "Settings",
    href: "/admin/settings",
    icon: FaFutbol,
  },
];
