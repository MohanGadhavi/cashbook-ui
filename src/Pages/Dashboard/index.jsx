import DashboardCard from '@/components/DashboardCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowUpFromBracket,
  faDollarSign,
  faReceipt,
} from '@fortawesome/free-solid-svg-icons';
import React from 'react';

const cards = [
  {
    id: 1,
    title: 'Balance',
    value: 13580,
    description: 'Total Bank Balance',
    icon: <FontAwesomeIcon icon={faDollarSign} className="text-green-400 " />,
  },
  {
    id: 2,
    title: 'Total Expenses',
    value: 6730,
    description: 'Description for Card 1',
    icon: <FontAwesomeIcon icon={faReceipt} className="text-indigo-400" />,
  },
  {
    id: 3,
    title: 'Money To Receive',
    value: 1780,
    description: 'Borrowed by 3 People',
    icon: (
      <FontAwesomeIcon
        icon={faArrowUpFromBracket}
        className="rotate-180 text-rose-400"
      />
    ),
  },
  {
    id: 4,
    title: 'Money To Pay Back',
    value: 500,
    description: 'Borrowed from 2 People',
    icon: (
      <FontAwesomeIcon
        icon={faArrowUpFromBracket}
        className="text-orange-300"
      />
    ),
  },
];

function Dashboard() {
  return (
    <div>
      <p className="text-heading font-medium text-white/30">Good Morning, MG</p>
      <div id="card-parent" className="mt-4 bg-gray-800 grid grid-cols-2 gap-3">
        {cards.map((card, i) => (
          <DashboardCard key={i} card={card} />
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
