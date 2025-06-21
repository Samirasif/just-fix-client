"use client";

import { usePathname } from "next/navigation";
import DesktopHeader from "./DesktopHeader";
import MobileHeader from "./MobileHeader";

const Header = () => {
  const pathname = usePathname();
  const hideHeader =
    pathname.startsWith("/user") ||
    pathname.startsWith("/admin") ||
    pathname.startsWith("/customer");

  if (hideHeader) return null;

  return (
    <>
      <DesktopHeader />
      <MobileHeader />
    </>
  );
};

export default Header;
