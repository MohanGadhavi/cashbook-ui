import {
  faBars,
  faBell,
  faBitcoinSign,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { SidebarTrigger, useSidebar } from "../ui/sidebar";
import SideBar from "./SideBarMenu";

function Header() {
  const {
    state,
    open,
    setOpen,
    openMobile,
    setOpenMobile,
    isMobile,
    toggleSidebar,
  } = useSidebar();
  return (
    <header className="h-14 px-4 text-xl  py-2 flex items-center gap-1 bg-gray-900 text-white ">
      <h1 className="">
        Cash
        <span className="ml-1.5 font-semibold">
          <FontAwesomeIcon
            icon={faBitcoinSign}
            className="rotate-12 text-green-400"
          />
          ook
        </span>
      </h1>
      <button
        type="button"
        title="Notifications"
        className="relative w-7 h-7 p-1 ml-auto flex items-center justify-center  bg-white/0 rounded-full "
        onClick={() => {}}
      >
        <div className="absolute w-3 h-3 rounded-full bg-green-400 border-2 border-gray-900 -top-0 right-0" />
        <FontAwesomeIcon icon={faBell} className="text-lg text-white/100" />
      </button>
      <button
        type="button"
        title="Menu"
        className="px-2"
        onClick={toggleSidebar}
      >
        <FontAwesomeIcon icon={faBars} className="text-xl" />
      </button>
    </header>
  );
}

export default Header;
