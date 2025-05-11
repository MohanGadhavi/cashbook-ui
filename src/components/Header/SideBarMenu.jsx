import React from 'react';
import {
  Calendar,
  CrossIcon,
  Home,
  Inbox,
  Search,
  Settings,
} from 'lucide-react';

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
} from '@/components/ui/sidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPowerOff, faXmark } from '@fortawesome/free-solid-svg-icons';

// Menu items.
const items = [
  {
    title: 'Home',
    url: '#',
    icon: Home,
  },
  {
    title: 'Inbox',
    url: '#',
    icon: Inbox,
  },
  {
    title: 'Calendar',
    url: '#',
    icon: Calendar,
  },
  {
    title: 'Search',
    url: '#',
    icon: Search,
  },
  {
    title: 'Settings',
    url: '#',
    icon: Settings,
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
    <Sidebar>
      <button
        className="p-2 w-fit text-xl md:text-2xl rounded-sm absolute top-1 right-4"
        onClick={toggleSidebar}
      >
        <FontAwesomeIcon icon={faXmark} />
      </button>
      <SidebarHeader>
        <div className="flex gap-2 mt-4">
          <div className="w-16 h-16 shrink-0 bg-red-500 rounded-full"></div>
          <div className="h-full w-full py-1">
            <h2 className="text-lg font-semibold">Mohan Gadhavi</h2>
            <p className="text-sm text-gray-500">Your personal finance app</p>
          </div>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className={'p-0'}>
        <button className="px-4 py-3 mx-2 mb-2 text-md  rounded-full font-semibold flex items-center gap-2 bg-red-100 hover:bg-red-300 transition-all cursor-pointer">
          <FontAwesomeIcon icon={faPowerOff} className="text-red-500" />
          <p className="uppercase">Sign Out</p>
        </button>
      </SidebarFooter>
    </Sidebar>
  );
}

export default SideBarMenu;
