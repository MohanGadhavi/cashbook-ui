import DashboardCard from '@/components/Home/HomeCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowUpFromBracket,
  faDollarSign,
  faReceipt,
} from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import RecentTransactionsCard from '@/components/Home/RecentTransactionsCard';

const cards = [
  {
    id: 1,
    title: 'Balance',
    value: 13580,
    description: 'Total Bank Balance',
    icon: (
      <FontAwesomeIcon
        icon={faDollarSign}
        className="text-xl text-green-400 "
      />
    ),
  },
  {
    id: 2,
    title: 'Total Expenses',
    value: 6730,
    description: 'Description for Card 1',
    icon: (
      <FontAwesomeIcon icon={faReceipt} className="text-xl text-indigo-400" />
    ),
  },
  {
    id: 3,
    title: 'Money To Receive',
    value: 1780,
    description: 'Borrowed by 3 People',
    icon: (
      <FontAwesomeIcon
        icon={faArrowUpFromBracket}
        className="text-xl rotate-180 text-rose-400"
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
        className="text-xl text-orange-300"
      />
    ),
  },
];

function Home() {
  return (
    <div>
      <p className="text-heading font-medium text-white/30">Good Morning, MG</p>
      <div id="card-parent" className="mt-4 bg-gray-800 grid grid-cols-2 gap-3">
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
