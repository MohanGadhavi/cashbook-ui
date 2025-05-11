import { faEllipsis } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import CardWrapper from '../core/CardWrapper.jsx/index.jsx';

function DashboardCard({ card }) {
  return (
    <CardWrapper showActionBtn>
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
    </CardWrapper>
  );
}

export default DashboardCard;
