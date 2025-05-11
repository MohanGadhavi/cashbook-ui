import { faBars, faBitcoinSign } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { SidebarTrigger, useSidebar } from '../ui/sidebar';
import SideBar from './SideBarMenu';

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
    <header className="h-14 px-4 text-2xl  py-2 flex justify-between items-center bg-gray-900 text-white ">
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
      <button type="button" className="px-2" onClick={toggleSidebar}>
        <FontAwesomeIcon icon={faBars} className="text-xl" />
      </button>
    </header>
  );
}

export default Header;
