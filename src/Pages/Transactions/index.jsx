import { CustomTable } from "@/components/core/CustomTable";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { faCalendar } from "@fortawesome/free-regular-svg-icons";
import {
  faHashtag,
  faRepeat,
  faWallet,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const selectedFilters = [
  {
    title: "Wallet",
    icon: <FontAwesomeIcon icon={faWallet} />,
    value: ["Cash", "Bank"],
  },
  {
    title: "date",
    icon: <FontAwesomeIcon icon={faCalendar} />,
    value: ["This month"],
  },
  {
    title: "tags",
    icon: "",
    value: ["#food", "#travel", "#shopping", "#entertainment"],
  },
];

export const Transactions = () => {
  return (
    <div className=" md:px-4">
      <div className="bg-green-400/10 px-4 py-0  rounded-b-lg">
        {/* <p className="text-xl">Transactions</p> */}
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger className={"py-3"}>
              <div className="flex gap-2 text-[11px] overflow-auto">
                {selectedFilters.map((fltr, i) => (
                  <div
                    key={i}
                    className="shrink-0 px-2 py-0.5 rounded-md bg-green-400/40 flex items-center justify-center gap-1 "
                  >
                    {fltr.icon}
                    <span className="mt-0.5">{fltr.value.join(" + ")}</span>
                  </div>
                ))}
              </div>
            </AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      <div className="px-2 mt-4">
        {Array(10)
          .fill(0)
          .map((_, i) => (
            <div
              key={i}
              className="w-full h-full p-2 flex gap-3 border-t border-white/5 "
            >
              <div className="w-10 h-10 bg-green-400 rounded-full "></div>
              <div className="flex-1">
                <p className="text-base">Sajju</p>
                <p className="text-xs mt-0.5 opacity-50 tracking-wider">
                  08 June, 3:00 PM
                </p>
              </div>
              <div className="h-full ">
                <p className="h-full">
                  <span className="mx-1">+</span>
                  <span>₹</span>15000.00
                </p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};
