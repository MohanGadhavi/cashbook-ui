import React from "react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMoneyBillTransfer,
  faHome,
  faPowerOff,
  faRepeat,
  faXmark,
  faSackDollar,
  faHandHoldingDollar,
  faWallet,
  faChartSimple,
  faGear,
} from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router";

// Menu items.
const items = [
  {
    title: "Home",
    url: "/home",
    icon: <FontAwesomeIcon icon={faHome} />,
  },
  {
    title: "Transactions",
    url: "/transactions",
    icon: <FontAwesomeIcon icon={faSackDollar} />,
  },
  {
    title: "Recurring Payments",
    url: "/recurring-payments",
    icon: <FontAwesomeIcon icon={faRepeat} />,
  },
  {
    title: "Borrowed / Lent",
    url: "/borrowed-lent",
    icon: <FontAwesomeIcon icon={faHandHoldingDollar} />,
  },
  {
    title: "Wallets",
    url: "/wallets",
    icon: <FontAwesomeIcon icon={faWallet} />,
  },
  {
    title: "Reports",
    url: "/reports",
    icon: <FontAwesomeIcon icon={faChartSimple} />,
  },
  {
    title: "Settings",
    url: "/settings",
    icon: <FontAwesomeIcon icon={faGear} />,
  },
];

function SideBarMenu() {
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
    <Sidebar side={isMobile ? "right" : "left"}>
      <button
        className="px-2 w-fit text-xl md:text-2xl rounded-sm absolute top-1 right-1"
        onClick={toggleSidebar}
      >
        <FontAwesomeIcon icon={faXmark} />
      </button>
      <SidebarHeader>
        <div className="flex gap-3 mt-4">
          <div className="w-16 h-16 shrink-0 bg-green-400 rounded-full"></div>
          <div className="h-full w-full py-2">
            <h2 className="text-lg font-semibold">Mohan Gadhavi</h2>
            <p className="text-sm text-gray-500">Your personal finance app</p>
          </div>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className={"gap-0"}>
              {items.map((item, i) => (
                <NavLink
                  to={item.url}
                  key={item.title}
                  onClick={() => setOpenMobile(false)}
                >
                  {({ isActive }) => (
                    <SidebarMenuItem
                      className={`${
                        i === 0 ? "border-none" : "border-t"
                      } border-white/5 py-1`}
                    >
                      <SidebarMenuButton
                        asChild
                        className={`text-sm active:bg-white/5 active:text-white rounded-sm ${
                          isActive ? " bg-sidebar-accent" : "bg-transparent"
                        }`}
                      >
                        <p>
                          <span className="text-base text-green-300">
                            {item.icon}
                          </span>
                          <span className=" ml-1">{item.title}</span>
                        </p>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  )}
                </NavLink>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className={"p-0"}>
        <button className="px-3 py-2 mx-2 mb-2 text-sm  rounded-md font-semibold flex items-center gap-2 bg-red-500/20 hover:bg-red-500/40 transition-all cursor-pointer">
          <FontAwesomeIcon
            icon={faPowerOff}
            className="text-red-500 text-base"
          />
          <p className="text-red-200 uppercase tracking-widest -mt-0.5">
            Logout
          </p>
        </button>
      </SidebarFooter>
    </Sidebar>
  );
}

export default SideBarMenu;
