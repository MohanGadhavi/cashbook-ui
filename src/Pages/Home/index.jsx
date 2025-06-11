import DashboardCard from "@/components/Home/HomeCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUpFromBracket,
  faDollarSign,
  faReceipt,
  faRepeat,
  faWallet,
} from "@fortawesome/free-solid-svg-icons";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import React from "react";
import RecentTransactionsCard from "@/components/Home/RecentTransactionsCard";

const cards = [
  {
    id: 1,
    title: "Balance",
    value: 13580,
    description: "Net Balance",
    icon: (
      <FontAwesomeIcon
        icon={faDollarSign}
        className="text-xl text-green-400 "
      />
    ),
  },
  {
    id: 2,
    title: "Total Expenses",
    value: 6730,
    description: "Last 30 Days",
    icon: (
      <FontAwesomeIcon icon={faReceipt} className="text-xl text-blue-400" />
    ),
  },
  {
    id: 3,
    title: "Money To Receive",
    value: 1780,
    description: "Borrowed by 3 People",
    icon: (
      <FontAwesomeIcon
        icon={faArrowUpFromBracket}
        className="text-xl rotate-180 text-red-400"
      />
    ),
  },
  {
    id: 4,
    title: "Money To Pay Back",
    value: 500,
    description: "Borrowed from 2 People",
    icon: (
      <FontAwesomeIcon
        icon={faArrowUpFromBracket}
        className="text-xl text-orange-300"
      />
    ),
  },
];

function Home() {
  return (
    <div className="p-4 pt-2">
      {/* <p className=" text-3xl md:text-4xl md:px-2 py-2 md:py-5 font-medium text-white/40">
        Good Morning, MG
      </p> */}
      <div className="relative h-28 my-2 bg-gradient-to-bl from-lime-500 to-emerald-500 text-black p-4 rounded-2xl flex justify-between">
        <div className="flex flex-col justify-between">
          <p className="text-xl font-bold text-green-950 ">
            <span className="mr-2 text-lg">
              <FontAwesomeIcon icon={faWallet} />
            </span>
            Cash
          </p>
          <p className="text-2xl font-bold text-white text-shadow-sm  ">
            <span>₹</span>132000
          </p>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger
            className={
              " absolute top-2 right-2 px-3 py-1 h-fit text-xs font-semibold flex gap-1.5 items-center bg-white/20 hover:bg-white/40 rounded-2xl "
            }
          >
            <FontAwesomeIcon icon={faRepeat} className="text-[10px]" />
            Switch
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Wallets</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Bank</DropdownMenuItem>
            <DropdownMenuItem>Cash</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div id="card-parent" className="mt-4 bg-gray-800 grid grid-cols-2 gap-4">
        {cards.map((card, i) => (
          <DashboardCard key={i} card={card} />
        ))}
      </div>

      {/* recent transactions */}
      <RecentTransactionsCard />
    </div>
  );
}

export default Home;
