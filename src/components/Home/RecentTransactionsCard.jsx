import React from 'react';
import CardWrapper from '../core/CardWrapper.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

import RecentTansactionsTable from '../RecentTansactionsTable.jsx/index.jsx';
import CustomCarousel from '../ui/customs/CustomCarousel.jsx';
import BarChart from '../core/Charts/BarChart.jsx';
import PieDoughnutChart from '../core/Charts/PieDoughnutChart.jsx';

import thisMonthExpenseData from '../../data/this_month_expense.json';
import lastSixMonthData from '../../data/last_six_month_expense.json';

function RecentTransactionsCard() {
  return (
    <CardWrapper
      customClass="mt-4 w-full"
      showActionBtn
      actionBtnType="dialog"
      dialogContent={<h1>HElloo</h1>}
      customActionBtn={
        <FontAwesomeIcon title="Add Transaction" icon={faPlus} />
      }
      customActionBtnClass="px-4 text-green-100 bg-green-500 top-3 right-4 "
    >
      <div className="flex justify-between items-center">
        <p className="ml-1">Recent Transaction</p>
      </div>
      <div className="mt-3 max-w-full ">
        <CustomCarousel
          items={[
            <div
              className={'h-full px-1 py-2  bg-gray-800 border-none rounded-xl'}
            >
              <RecentTansactionsTable />
              <div className="flex justify-center mt-3 py-1 text-center text-xs ">
                <button className="px-4 py-1 rounded-full bg-white/5 hover:bg-green-500">
                  View More
                </button>
              </div>
            </div>,
            <BarChart
              data={lastSixMonthData.data}
              titleText="Last 6 Month Data"
            />,
            <PieDoughnutChart
              data={thisMonthExpenseData.expense_data}
              titleText={`This Month Expense (${thisMonthExpenseData.month})`}
              total={thisMonthExpenseData.total_expense}
            />,
          ]}
          looping={false}
        />
      </div>
    </CardWrapper>
  );
}

export default RecentTransactionsCard;
