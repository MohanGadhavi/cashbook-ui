import { faEllipsis } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

function DashboardCard({ card }) {
  return (
    <div
      className={`relative h-44 p-3 bg-white/5 border rounded-xl border-gray-500 `}
    >
      <button className="px-2 py-0 absolute top-2 right-1 rounded-full hover:bg-green-500/50">
        <FontAwesomeIcon icon={faEllipsis} />
      </button>
      <div className="w-16 h-16 text-lg rounded-full bg-white/5 overflow-hidden flex justify-center items-center">
        {card.icon}
      </div>
      <div className="mt-2">
        <p className="text-[0.8rem] uppercase text-gray-400">{card.title}</p>
        <p className="text-[1.5rem] leading-8 font-semibold">
          <span className="font-light mr-0.5">₹</span>
          {card.value}
        </p>
      </div>
      <p className="text-xs font-light mt-2 text-gray-400">
        {card.description}
      </p>
    </div>
  );
}

export default DashboardCard;
